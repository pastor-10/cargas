# Roadmap de Cargas

Plan de evolución de la app. Ordenado por **valor real durante un entreno**, no
por lo divertido que sea de programar.

Estado: `⬜ pendiente` · `🟨 en curso` · `✅ hecho`

---

## Principio de diseño (léelo antes de pedir nada)

> **Registrar una serie tiene que seguir siendo un solo toque.**

Es la única virtud que no se puede perder. Cualquier función que meta un paso más
entre "he terminado la serie" y "está registrado" es una pérdida neta, por muy
buena que suene. Todo lo de este documento se añade *alrededor* de ese gesto,
nunca en medio.

Segundo principio: **la app registra y calcula; el criterio lo pongo yo.** No va
a haber una IA dentro de la app diciéndote qué hacer. Para eso me pasas el
export y lo hablamos con todo el contexto — tu sueño, tus exámenes, cómo te
encuentras — que la app no tiene.

---

## Fase 1 — Durante el entreno

Lo que usas con el móvil en la mano, sudando, entre serie y serie. **Es lo
único que cambia tu experiencia diaria.** Todo lo demás es para después.

### 1.1 ⬜ Cronómetro de descanso — *lo siguiente que construyo*

El que has pedido. Cómo lo haría:

| Detalle | Decisión |
|---|---|
| Arranque | **Automático al marcar el ✓.** Cero toques extra |
| Dónde se ve | En la barra inferior, sustituyendo a las estadísticas mientras corre |
| Descanso por defecto | Distinto según el ejercicio (ver abajo) |
| Controles | −30s · +30s · saltar |
| Al terminar | Sonido y la barra en color |

**Descansos por defecto**, porque no todos los ejercicios piden lo mismo:

| Tipo | Ejemplos | Descanso |
|---|---|---|
| Básico pesado | Haka, peso muerto rumano, dominadas, press plano | **3 min** |
| Accesorio | Prensa, jalones, remos, press militar | **2 min** |
| Aislamiento | Laterales, curls, extensiones, gemelo | **1 min** |

Ajustables desde la propia app si ves que no te encajan.

> **Límite honesto de iOS:** el contador siempre te dará la hora correcta al
> volver a la app, porque guarda el instante de fin y recalcula — nunca se
> "atrasa". Pero **si bloqueas la pantalla o te sales a otra app, el pitido no
> va a sonar.** Una web instalada no puede despertar el iPhone sin un servidor
> de notificaciones, y eso rompería el "sin servidor, sin coste". Lo mitigo con
> el punto siguiente.

### 1.2 ⬜ Mantener la pantalla encendida

Bloqueo de suspensión mientras hay una sesión abierta. Así el móvil no se apaga
entre series, el cronómetro queda a la vista y el pitido sí suena. Resuelve en
la práctica la limitación de arriba.

### 1.3 ⬜ Cronómetro para ejercicios de tiempo

La plancha del día 5 ya tiene el campo en segundos. Que el mismo cronómetro
sirva de cuenta atrás para el ejercicio, no solo para el descanso.

### 1.4 ⬜ Sugerencia de carga con doble progresión

Ahora la app te rellena con lo que hiciste la última vez. El salto siguiente es
que aplique la regla sola:

- Si la última vez **llegaste al tope del rango en todas las series** → te
  propone **+2,5 kg** (o +5 en pierna) y las reps de abajo del rango.
- Si no llegaste → mantiene el peso y te marca las reps que tienes que batir.
- Si **bajaste** respecto a la anterior → lo señala, porque dos sesiones
  seguidas cayendo es información, no mala suerte.

Es exactamente la "sobrecarga automática" por la que Symmetry cobra premium.
Aquí es una regla de treinta líneas porque tu rutina y tus rangos ya están
dentro.

### 1.5 ⬜ Botón "máquina ocupada"

En cada ejercicio, despliega sus sustituciones de la sección 6.4 del plan. Sin
buscar el documento con las manos sudadas. La serie se registra igual, anotando
qué ejercicio hiciste realmente.

### 1.6 ⬜ Reordenar ejercicios sobre la marcha

Arrastrar para cambiar el orden del día cuando el gimnasio está lleno. Que el
registro refleje el orden real en que entrenaste.

### 1.7 ⬜ Nota rápida de sesión

Un campo de texto al final: "hombro molestando", "dormí 5 h", "examen mañana".
Treinta segundos para ti, y para mí es la mitad del contexto cuando analice por
qué una semana salió mal.

---

## Fase 2 — Entre sesiones

Ver si esto está funcionando. Lo miras en el sofá, no en el gimnasio.

### 2.1 ⬜ Historial por ejercicio

Tocar el nombre del ejercicio → sus últimas sesiones en una lista, y una
gráfica de la carga en el tiempo. La pregunta "¿estoy progresando en haka?"
contestada en un toque.

### 2.2 ⬜ 1RM estimado

Fórmula de Epley sobre las series pesadas de los básicos. Una métrica única de
fuerza que no depende del rango de reps de ese día. Con su curva.

### 2.3 ⬜ Volumen semanal por grupo muscular

**La más valiosa de esta fase.** Compara tus series reales con la tabla
objetivo del plan:

```
Deltoide lateral    6 / 8   ⚠
Espalda            18 / 18  ✓
Isquios             7 / 11  ⚠
```

Detecta el problema más común y más invisible: que las máquinas estén ocupadas
y lleves tres semanas haciendo dos tercios del volumen que crees.

### 2.4 ⬜ Peso corporal con media móvil

Tu peso diario es ruido. La media de 7 días es la señal. La gráfica debe
mostrar la media, el objetivo (+0,25 kg/semana) y si vas por encima o por
debajo. Con el aviso de "llevas dos semanas sin subir → +150 kcal" de la
sección 1 del plan.

### 2.5 ⬜ Semana del mesociclo

Contador de la semana actual, el **RIR objetivo** que toca (3 · 3 · 2 · 2 · 1-0)
y el aviso de descarga al llegar a la sexta. Ahora mismo eso lo tienes que
llevar en la cabeza.

### 2.6 ⬜ Adherencia

Cuántas sesiones planificadas has hecho este mes. Sin dramatizar, solo el dato.
Casi siempre el problema no es el programa, es cuántas veces fuiste.

---

## Fase 3 — Dieta

Aquí hay una trampa y quiero avisarla antes de construir nada.

> **No vamos a hacer un contador de calorías.** Pesar cada alimento y buscarlo
> en una base de datos es exactamente lo que hace que la gente abandone a las
> tres semanas. Tu plan no lo necesita: tienes un **día tipo fijo** de cinco
> comidas. La granularidad correcta es *marcar si te lo has comido*, no
> recalcular macros cada vez.

### 3.1 ⬜ Checklist del día tipo

Las cinco comidas + los 5 g de creatina, marcables. Al final del día ves si
cumpliste. Eso es el 90% del valor de una app de dieta con el 5% del esfuerzo.

### 3.2 ⬜ Contador de días cumplidos

Racha simple. En volumen, la constancia con la comida es más determinante que
la precisión.

### 3.3 ⬜ Las tres opciones de proteína en polvo

Los tres escenarios de la sección 3 del plan (día normal / batido de rescate /
cacito en la avena) como botones, cada uno ajustando el checklist del día para
que no descuadres calorías sin darte cuenta.

### 3.4 ⬜ Lista de la compra

La de Mercadona, marcable, y que se reinicie cada semana.

### 3.5 ⬜ Recetas

Las seis de batch cooking, consultables desde la cocina.

### 3.6 ⬜ Ajuste de calorías

Cuando la gráfica de peso diga que hay que subir o bajar 150 kcal, que la app
te diga **en qué alimento concreto** hacerlo ("+40 g de arroz crudo en la
comida"), no un número abstracto.

---

## Fase 4 — Los datos

### 4.1 ⬜ Exportar también en CSV

Ahora exporta JSON. Añadir CSV para que puedas abrirlo en Excel sin depender de
mí.

### 4.2 ⬜ Recordatorio de copia más insistente

El aviso a las 12 sesiones está bien, pero debería ser más difícil de ignorar
según se acumula. Tus datos viven solo en tu móvil: es el único riesgo real de
todo el montaje.

### 4.3 ⬜ Editar la rutina desde la app

Cuando cambiemos de mesociclo o toques un ejercicio, poder hacerlo sin que yo
edite el código. Con cuidado: los nombres de ejercicio son la clave del
histórico, así que renombrar tiene que arrastrar los datos.

### 4.4 ⬜ Sueño y recuperación a mano

Dos campos al día: horas de sueño y % de recuperación del Whoop. Los tecleas en
diez segundos y me dan el contexto que más falta me hace para interpretar una
semana mala.

---

## Whoop: lo que no se puede hacer

Conectar el Whoop de verdad **no es posible con este montaje**, y prefiero
decirlo claro que dejarlo en el aire:

- Su API exige OAuth 2.0 con un *client secret*, y una página estática no puede
  guardar un secreto: cualquiera que abra el código lo vería.
- Los webhooks necesitan un servidor que reciba peticiones. GitHub Pages solo
  sirve archivos.
- Habría que montar y mantener un servidor — dinero, mantenimiento y un punto
  más donde se rompa todo.

**El 80% del valor por el 0% del coste es el punto 4.4:** teclear a mano las dos
cifras que de verdad usamos. El resto de datos del Whoop no cambiarían ninguna
decisión del plan.

---

## Lo que NO se va a construir

Tan importante como la lista de arriba:

| Descartado | Por qué |
|---|---|
| Base de datos de alimentos y pesar comida | Es lo que hace abandonar. Tu plan es un día tipo fijo |
| Integración real con Whoop | Necesita servidor y secretos. Ver arriba |
| IA dentro de la app | Esa soy yo, con el export delante y todo tu contexto |
| Compartir, feed social, amigos | No es para lo que la usas |
| Varios usuarios | Es tuya |
| Rediseños | Funciona y se lee bien. El esfuerzo va a funciones |

---

## Orden de construcción

Yo iría así, y cada bloque es utilizable por sí solo:

| Orden | Qué | Por qué ahora |
|---|---|---|
| **1** | 1.1 Cronómetro + 1.2 Pantalla encendida | Lo has pedido y es lo que más cambia el día a día. Van juntos porque el segundo arregla la limitación del primero |
| **2** | 1.4 Sugerencia de carga | Convierte la regla de progresión en algo que no tienes que recordar |
| **3** | 1.5 Máquina ocupada + 1.7 Nota de sesión | Baratos y quitan fricción real |
| **4** | 2.3 Volumen semanal + 2.4 Peso con media móvil | Cuando tengas 4-6 semanas de datos y haya algo que mirar |
| **5** | 2.5 Mesociclo + 2.1 Historial por ejercicio | Ya con el hábito montado |
| **6** | Fase 3 completa | Cuando la parte de entreno esté rodada. Meter la dieta antes es dispersarse |
| **7** | 4.3 Editar rutina + 4.4 Sueño | Cuando cambiemos de bloque, hacia marzo |

**Nada de esto corre prisa.** El plan de volumen ya funciona con lo que hay hoy.
Empieza a entrenar y a registrar: dentro de tres semanas sabrás por experiencia
qué echas de menos de verdad, y casi nunca es lo que uno cree antes de empezar.

Si en ese momento algo de esta lista te sigue pareciendo importante, lo
construimos. Y si aparece algo que no está aquí, mejor señal todavía.
