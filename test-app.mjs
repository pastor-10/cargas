import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync("./index.html", "utf8");
const js = html.slice(html.lastIndexOf("<script>") + 8, html.lastIndexOf("</script>"));
const css = html.slice(html.indexOf("<style>") + 7, html.indexOf("</style>"));

let fallos = 0;
const chk = (ok, t, extra) => {
  if (!ok) { fallos++; console.log("FALLO " + t + (extra ? "  -> " + extra : "")); }
  else console.log("OK   " + t);
};

try { new vm.Script(js); chk(true, "el script parsea"); }
catch (e) { chk(false, "sintaxis", e.message); process.exit(1); }

const bloque = (decl) => {
  const i = js.indexOf(decl);
  if (i < 0) throw new Error("no encuentro " + decl);
  let d = 0, empez = false;
  for (let k = i; k < js.length; k++) {
    const c = js[k];
    if (c === "{" || c === "[") { d++; empez = true; }
    else if (c === "}" || c === "]") { d--; if (empez && d === 0) return js.slice(i, k + 1) + ";"; }
  }
};
const ctx = {}; vm.createContext(ctx);
const M = vm.runInContext([
  bloque("const RUTINA ="), bloque("const MUSC ="), bloque("const GRUPOS ="),
  "; ({RUTINA,MUSC,GRUPOS})"
].join("\n"), ctx);

console.log("\n--- rutina ---");
chk(M.RUTINA.length === 5, "5 bloques", M.RUTINA.length);
const ds = M.RUTINA.map(b => b.ds + " " + b.corto).join(" · ");
chk(ds === "LUN Pierna · JUE Empuje · VIE Tirón · MIÉ Estética · ×3 Carrera", "días etiquetados", ds);
const carrera = M.RUTINA.find(b => b.corto === "Carrera");
chk(carrera.ejercicios.every(e => e.carrera), "las 3 entradas de carrera marcadas");
const pierna = M.RUTINA[0].ejercicios.map(e => e.n);
chk(pierna[0] === "Extensión de cuádriceps" && pierna[1] === "Prensa",
    "la extensión abre el día de pierna, luego prensa", pierna.slice(0, 2).join(" / "));
chk(pierna.includes("Gemelo sentado") && pierna.includes("Equilibrio a una pierna"),
    "sóleo y propiocepción presentes");
chk(M.RUTINA[1].ejercicios.some(e => e.n === "Contractora (peck deck)"), "contractora en Empuje");

console.log("\n--- volumen contra objetivos ---");
const cuenta = {};
for (const b of M.RUTINA) for (const ej of b.ejercicios) {
  if (ej.carrera) continue;
  const gs = M.MUSC[ej.n];
  if (!gs) { chk(false, "ejercicio sin grupo: " + ej.n); continue; }
  for (const g of gs) cuenta[g] = (cuenta[g] || 0) + ej.s;
}
for (const g of M.GRUPOS) {
  const real = cuenta[g.k] || 0;
  chk(real === g.obj, g.n.padEnd(18) + String(real).padStart(2) + " / " + g.obj);
}

console.log("\n--- comportamiento ---");
chk(/if\(!ej\.carrera && valores\(\)\.reps === null\)/.test(js), "una carrera se marca sin rellenar nada");
chk(/"Km · opc\."/.test(js), "campos de carrera marcados como opcionales");
chk(/Los kilómetros y el ritmo salen de Strava/.test(js), "nota explicando el reparto con Strava");
chk(!/rirPre = anterior/.test(js), "el RIR no se precarga de la sesión anterior");
chk(/obj \? "RIR → " \+ obj : "RIR"/.test(js), "la cabecera muestra el RIR objetivo");
chk(/if\(i < ej\.s && !ej\.carrera\) arrancarDescanso/.test(js), "sin cronómetro de descanso corriendo");
chk(/corriendo\.has\(s\.ejercicio\)/.test(js), "el tonelaje no suma km por minutos");
chk(/\[hidden\]\{display:none!important\}/.test(css), "la regla de [hidden] sigue puesta");

const base = css.slice(css.indexOf(":root{"), css.indexOf("@media (prefers-color-scheme:dark)"));
const decl = new Set(base.match(/--[\w-]+(?=\s*:)/g) || []);
const usa = new Set((css.match(/var\((--[\w-]+)/g) || []).map(s => s.slice(4)));
const huerf = [...usa].filter(v => !decl.has(v));
chk(huerf.length === 0, "todos los tokens de color declarados en :root", huerf.join(","));
const abre = (css.match(/{/g) || []).length, cierra = (css.match(/}/g) || []).length;
chk(abre === cierra, "llaves CSS equilibradas", abre + " vs " + cierra);

console.log(fallos === 0 ? "\nTODAS LAS PRUEBAS PASAN" : "\n" + fallos + " FALLOS");
process.exit(fallos ? 1 : 0);
