# Continuo ordinal:

## Construcción de los reales:

- La construcción de $\mathbb N$ es intuitiva y se puede tomar de manera axiomática, $\mathbb Z$ es simplemente la ampliación de $\mathbb N$ a un grupo con la suma y análogamente lo es $\mathbb Q$ una ampliación a un campo de $\mathbb Z$. Sin embargo la definición de $\mathbb R$ como las sucesiones de Cauchy sobre los racionales quizá no se justifica ni algebraica ni intuitivamente.
 > Consultar creación de $\mathbb R$ a partir de puntos de acumulación de $\mathbb Q$.
- La formulación cantoriana de $\mathbb R$ está grandemente relacionada con las bases de la topología real. [Hay un inciso a la topología combinatoria de Euler, la topología compleja de Riemman y la topología lógica de Gabriel Caicedo]
- Esta topología real se centra en la noción de límites y conjuntos derivados, se define un **conjunto perfecto** como aquel que es igual a su conjunto derivado.
- El conjunto de Cantor se define como
	$$C=\lim_{n\to\infty}\left[0,\left(\dfrac{2}{3}\right)^n\right]$$
 	* **nocion general, investigar más**
- Destacar perfil psicológico. Detallar la lucha de con su perspectiva del cardinal de $\mathbb R$.
	$$\mathbb{R}\cong\mathbb{Q^N}\cong\mathbb{N^N}\cong 2^\mathbb{N}\cong 2^{\aleph_0}$$.
- "_Todo orden lineal denso contable sin máximos ni mínimos es isomorfo_".

### Hipótesis del continuo: $\aleph_1=2^{\aleph_0}$

## Sobre Cantor:

- Su discípulo más importante es Zermelo.
- $\omega$ es bien ordenado, un hecho fundamental para la teoría de conjuntos. Equivalente al principio de inducción matemática. Cantor quiere que $\omega$ y su buen orden sea el corazón de la teoría de conjuntos.
- "_Un conjunto es aquel que es uno y múltiple a la vez_". Esta frase de Cantor describe totalmente los axiomas ZFC.
	- Uno y múltiple a la vez, uno en el sentido que es un conjunto, múltiple en el sentido que es una colección de múltiples a su vez conjuntos (elementos). 
	1. Dados dos conjuntos hay un único conjunto que los contiene a ambos.
	2. Similarmente de un proceso similar tenemos el axioma de la unión. Dados múltiples conjuntos y de sus elementos hay un único conjunto que contiene a sus elementos.
	3. También se puede intuir el axioma del conjunto de partes.
- Tiene un enemigo en Kronecker mientras que Hilbert lo defiende durante la gran fundamentación de las matemáticas de los años 30. Mencionar que la teoría de Categorías es una alternativa algebrista a lo analista de la teoría de Conjuntos, pero muestran ser equivalentes.
- Doble abstracción: La primera clasifica de acuerdo a órdenes (ordinales) y luego clasifica a partir de tamaño (cardinales).
- Cree que hay un $\aleph$ supremo y lo atribuye a algo religioso.


## Axioma de elección:
- Si todo conjunto puede ser bienordenado, entonces todo conjunto es orden isomorfo a algún ordinal (es un deseo de Cantor).
- Zermelo demuestra que todo conjunto puede ser bienordenado a partir del axioma de elección. Hacer equivalencia visual del axioma de elección con un pulpo.
- El axioma de elección tiene muchas equivalencias y consecuencias que resultaron polémicos, en particular hay conjuntos como $\mathbb Z$ o $\mathbb R$ que tienen órdenes totales pero es dificil ver cómo sería un buen orden.
- Equivalencia al lema de Zorn, fundamental en muchas áreas de las matemáticas. Principio de _"corte y saturación"_

### Teorema: El buen orden de $\mathbb R$ no es construible.

## Sobre ordinales.

- Muy asociado al trabajo de Riemann sobre convergencia. Recordar que el derivado de un conjunto finito es $\varnothing$.
- Construcción recursiva, desde $\varnothing$, usando el ordinal sucesor $\alpha^+=\alpha\cup\{\alpha\}$ y después tomar los ordinales límites $\alpha=\bigcup\{\delta:\delta<\alpha\}$. Así,
	$$\varnothing, \{\varnothing\},\{\varnothing,\{\varnothing\}\},\dots,\omega,\omega^+,\dots,\omega^2,\dots,\omega^\omega,\dots$$
son todos ordinales. La clase de los ordinales es un monoide no abeliano con la suma ($1+\omega=\omega\neq\omega+1$).
- Gracias al axioma de elección también hay un principio de inducción transfinita que extiende la funcionalidad de los naturales a todo el universo conjuntista cantoriano.
- Von Neumann los define como un conjunto donde la relación de pertenencia $\in$ es transitiva y define a $\alpha^+=\wp(\alpha)$.
- El axioma de reemplazo garantiza la creación de nuevos conjuntos a partir de $\omega+\omega$, para casos menores se tiene garantizadas.
- La clase de todos los ordinales no es un conjunto.

## Sobre cardinales

- Intuitivamente son acumulaciones de ordinales, para $\aleph$ vemos la operación de multiplicidad consistente para $\aleph_{\alpha+1}$ se usa la colección de todos los ordinales de tamaño igual a $\aleph_\alpha$ (de la que se demuestra su cardinal es distinto a $\aleph_\alpha$).
- Se escribe  `Alef`, no `Aleph`.
- Leer una historia de Borjes sobre infinitos a partir de cortes consistentes. 
- La toería de Von Neumann si acepta una multiplicidad inconsistente.
- El $\aleph$ global sería inconsistente.
- $2^{\aleph_0}\neq\aleph_\omega$ está demostrado. La proposición original stated incorrectemente que $2^{\aleph_0}\neq\aleph_\alpha$ para cualquier ordinal $\alpha$. Esto entristeció a Cantor y luego Zermelo corrigió el enunciado :).

