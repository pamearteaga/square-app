
Replicar la app de Square POS
-----------------------------------------

Square POS es una de las mejores apps para punto de venta, sin embargo, no tiene aún soporte para latinoamérica. El reto consiste en crear una app parecida, pero adaptada a las necesidades de Chile en términos de flujos, monedas e impuestos. <br>
- ¿Qué funcionalidades debes priorizar? <br>
     - Catálogo de productos con precios y stocks. <br>
     - Cobros en efectivo y tarjeta de crédito (intenta usar un API). <br>
     - Cuadre de caja al final del día. <br>

<img src="img/app2.png" alt="">


Desarrollado para
------------------
Laboratoria

Participantes:
--------------------------
Equipo UX : Alexandra y Agustina. <br>
Equipo de front end : Lexis, Leticia y Pamela.

Reunión Kick off: (planning)
----------------------------
Presentacion de cada integrante del equipo. <br>
Conocernos y contarnos en que trabajamos mejor. <br>
Division del trabajo, priorizando tareas fundamentales a realizar en base al tiempo de entrega del producto. <br>

El proceso de diseño:
-----------------------
<img src="img/uxdesign.png" alt="">

DESCUBRIMIENTO E INVESTIGACIÓN
-------------------------------
Conversaciones entre el equipo para poder analizar cuáles serían las metodologías a usar para el reto asignado.

### Definicion de nuestra audiencia:

Emprendedores de pequeña y mediana empresa (PYME) con un maximo de 300 clientes. 

### Investigacion:

- Script de entrevista para hacer un test de guerrilla a usuarios en comercios cercanos.
 
- Encuesta Online. 

- Benchmark 

- Analisis en terminos de Politica de inversion, flujos, monedas e impuestos en Chile.

- Reclamos en linea de los usuarios de la app.

SINTESIS Y DEFINICIÓN
----------------------------

Con todos los datos reunidos de las distintas etapas de la investigación, realizamos una síntesis de los descubrimientos.

<img src="img/sintesis.png" alt="">

- Creacion de tres User persona para definir tipo de usuarios que comparten una serie de características comunes. Deben recopilar información de:

### Ejemplo:

<img src="img/user3.png" alt="">


Ideación
----------------------

Considerando los principales funciones requeridas en el reto, y que uno de los problemas más comunes mencionado en la etapa de investigación fue el manejo del inventario, se decidió darle prioridad a la creación de la funcionalidad del inventario de la aplicación, considerando los siguientes elementos en cada producto del inventario:

- Imagen. <br>
- Nombre. <br>
- Valor. <br>
- Stock. <br>
- Opción de eliminar el producto del inventario. <br>
- Descontar el producto del stock una vez que se venda. <br>
- Agregar nuevos productos al inventario. <br>


TESTEO
------------------

Script de testeo square POS
-------------------------------

### Objetivos

- Detectar problemas en la navegación (si es fácil de usar e intuitiva). <br>
- Probar rapidez y facilidad en la creación de un inventario. <br>
- Detectar problemas en la navegación de una compra. <br>
- Detectar problemas o facilidad en el cierre de caja. <br>
- Averiguar si las traducciones de las palabras corresponden al vocabulario usado en Chile. <br>

### Tareas 

Usando la app square POS en su versión en español. <br>
Leyenda: <br>	L: Logrado /	ML: medianamente logrado /	NL: No logrado

<img src="img/cuadrotest.png" alt="">

### Conclusiones

- A los usuarios les resultó fácil crear categorías, pero les costó un poco entender que los artículos se creaban dentro de las categorías. <br>
- No completaron todos los datos de los artículos en la creación. Después de un rato de uso e intentar vender se dieron cuenta de que se podía completar el valor del artículo, la cantidad de éstos, además del nombre y la imagen. <br>
- Ambos usuarios manifestaron dudas con la pantalla de inicio, y cómo volver a ella. Ésto les generó gran conflicto. <br>
- Además se sintieron muy inseguros con respecto a la forma de realizar una venta, e incluso uno de los usuarios no logró vender, no entendió las opciones del menú y que la aplicación le permitía hacer ventas. <br>
- Ambos creen que el recibo de venta no es necesario, ya que es para ellas, no para el comprador. <br> 
- Ambos usuarios gustan del informe de ventas, aunque creen que es un poco extenso y que hay cosas que no usarían, como los descuentos por ejemplo. <br>
- Les interesa ver cuánto vendieron, qué es lo que más vendieron, e incluso los horarios de más ventas. <br>
- Les resultaría útil personalizar el informe de ventas según sus necesidades. <br>
- Ambos presentaron gran confusión con las palabras del menú Proceso de pago y Transacciones. <br>
- En el inventario, la aplicación no descontó el artículo vendido. <br>
- No encontraron la forma de cerrar la caja desde el celular, al parecer la aplicación no lo permite desde ese tipo de dispositivos. <br>
- Cerrar sesión no les resultó difícil, pero preferirían que vaya dentro del menú, no dentro de los ajustes. <br>

### Con ésta retroalimentación, se decidió: 

- Hacer menos vistas, ya que los usuarios pedían que fuera lo más breve y sencillo posible, mientras menos clicks, mejor. <br>
- Eliminar el menú de hamburguesa, y dar acceso rápido a las principales secciones, que son inventario, teclado (para agregar los precios) y caja. <br>
- Usar palabras con las que el usuario chileno esté familiarizado, para facilitar el uso de la aplicación, ya que eso fue una de las principales razones de conflicto. <br>

Script de testeo vistas aplicación propia
-------------------------------------

### Objetivos

- Detectar problemas en la navegación (si es fácil de usar e intuitiva). <br>
- Probar rapidez y facilidad en la creación de un inventario. <br>
- Detectar problemas en la navegación de una compra. <br>
- Averiguar si las palabras reemplazadas corresponden al vocabulario usado en Chile. <br>


### Tareas

Usando las vistas del maquetado de nuestra aplicación. <br>
Leyenda: <br>	L: Logrado / ML: medianamente logrado /	NL: No logrado

<img src="img/cuadro2.png" alt="">

###  Conclusiones

- A los usuarios les resultó fácil ingresar a la aplicación y cerrar sesión. <br>
- Para regresar al inicio, o a la primera vista, extrañaron la flecha atrás. Pensaron que el logo también podría llevar al inicio y que el botón inventario era el que llevaba a la primera vista. <br>
- Ambos usuarios manifestaron dudas con respecto al botón cobrar. Uno por inseguridad de qué haría, y otro porque consideró innecesario que estuviera en todas las vistas. <br>
- El botón agregar artículo tuvo un poco de ambigüedad en lo que se entendió por su función. Se entendía que era para agregar un producto al inventario, pero también se pensó que era para agregar un producto a la compra. <br>
- El botón eliminar de los productos del inventario les generó una duda, si era para eliminar el producto o para quitar uno del stock del producto. <br>

###  Con ésta retroalimentación, se decidió:

- Cambiar algunos textos de los botones, para darle una ayuda al usuario y que sepa qué es lo que está haciendo. <br>
- Dado el tiempo limitado que poseemos para presentar el proyecto, hacer un sketch de lo que sería la versión 3.0 de la aplicación. <br>
- Revisar algunas palabras de los llamados a acción. <br>
- Uniformar los colores. <br>
- Inventario, teclado y caja tengan otra forma, como pestaña en vez de botón. <br>








### Conoce todos los detalles de cada etapa en Google Drive :
https://drive.google.com/drive/u/1/folders/1XLsnbcw4tOGEaTZCnJS0Saa8pzJTAcOb 

Conclusión y Recomendaciones:
---------------------------------

Dentro de los países de Latino América, Chile destacó por ser el país más atractivo en cuanto a potencial de mercado y plataformas tanto tecnológica como bancaria, convirtiéndose en candidato a ser sede de la expansión de Square hacia la región.

Se encontró que en el mercado de medios de pago Chileno, actualmente existe un monopolio liderado por Transbank y los bancos (principales accionistas), lo cual genera tal barreras de entradas que hacen que no sea posible ingresar.
A veces existen ocasiones donde los problemas se pueden convertir en grandes oportunidades, y quizás la actual condición existente en el mercado Chileno sea una de ellas. Actualmente existe una demanda generada por la Fiscalía Nacional Económica con respecto a la posición monopolista de Transbank, por lo que existe la posibilidad de que el mercado se abra a nuevos competidores generando grandes oportunidades.




