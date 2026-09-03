# Cargas

Cuaderno de entreno para el plan de volumen 2026-27. Cinco días de rutina,
registro de peso · reps · RIR por serie, y la referencia de la última vez
delante para no tener que recordarla.

Es una página estática: sin cuentas, sin servidor, sin dependencias.

## Cómo funciona

- **Los datos viven en `localStorage`**, en el móvil que la usa. No salen de ahí.
- **Exportar** genera un `.json` con todo el histórico. Es la copia de seguridad
  y es lo que se le pasa a Claude para el análisis de progresión.
- **Restaurar** vuelve a meter ese `.json` — para cambiar de móvil o recuperar
  datos tras borrar los del navegador.
- La app avisa sola cuando lleva 12 sesiones sin exportar.
- El *service worker* cachea el armazón, así que **abre sin cobertura**.
  Los datos nunca pasan por él.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La app entera: estructura, estilos y lógica |
| `manifest.json` | Nombre, iconos y modo pantalla completa |
| `sw.js` | Service worker: que abra sin conexión |
| `icon-*.png` | Iconos de la app |

## Instalar en el iPhone

Safari → Compartir → **Añadir a pantalla de inicio**.

## Cambiar la rutina

Los cinco días están en la constante `RUTINA`, al principio del `<script>` de
`index.html`. Cada ejercicio es `{ n: nombre, s: series, r: "rango de reps" }`.
Añadir `opcional: true` lo marca como prescindible y `sinCarga: true` desactiva
el campo de peso.
