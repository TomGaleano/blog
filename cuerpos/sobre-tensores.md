# Sobre tensores:

### Acerca de la notación:

> Normalmente enunciaré que $V$ es un $\mathbb k$-espacio vectorial. Esto hace referencia a que los escalares de $V$ provienen del campo $\mathbb k$, esta claridad se hace para que todos los espacios vectoriales que trabajemos tengan sus escalares del mismo campo, si no, puede que las transformaciones lineales no estén bien definidas (piensa en la diferencia entre $\mathcal M_{2\times 2}(\mathbb R)$ y $\mathcal M_{2\times 2}(\mathbb Q)$, no hay muchas transformaciones lineales que respeten el producto por escalares de $\mathbb R$ en $\mathbb Q$).
> 
> Además, para no sobresaturar las notas, notaré $V_1\times V_2\times\dots\times V_n$ simplemente por $\prod V_i$ y a $(x_1,x_2,\dots,x_n)$ por $(x_i)$, siempre que no cause confusión.

## Motivación:

> Al tener estructuras algebraicas, sean grupos, anillos, campos o espacios vectoriales, es una intención natural querer formar estructuras más grandes a partir de las previamente conocidas. En particular, la forma de en la que se construyen grupos a partir de anteriores $(G=G_1\times G_2)$ permite clasificar (salvo isomorfismo) a los grupos dado su cardinal. Similarmente, todos los campos finitos pueden ser caracterizados y reducidos a extensiones de campos de $\mathbb Z_p$. La idea para el producto tensorial es análoga.
> 
> La primera forma de formar nuevos espacios vectoriales es similar a la de grupos. Dados dos $\mathbb k$-espacios vectoriales $V_1,V_2$, el conjunto $V_1\times V_2$ resulta a su vez ser un $\mathbb k$-espacio vectorial. Con la propiedad de que para espacios de dimensión finita, $\dim(V_1\times V_2)=\dim (V_1)+\dim(V_2)$. Algo que cabe resaltar es que la motivación de la clasificación de $\mathbb k$-espacios vectoriales no es tan interesante, en tanto si $\dim(V)=n$, entonces $V\cong\mathbb k^n$.
> 
> Pero, ¿qué pasa si queremos un espacio de dimensión $\dim(V_1)\times\dim(V_2)$?
> 
> ### Veámoslo con un ejemplo:
> 
> Tomemos $\mathbb R^3$ y $\mathbb R^2$, con bases canónicas $\underline\alpha=\{(1,0,0),(0,1,0),(0,0,1)\}$ y $\underline\beta=\{(1,0),(0,1)\}$ respectivamente. Entonces podemos definir el isomorfismo
> 
> $$\begin{align*}
	T:\mathbb R^3\times\mathbb R^2&\to\mathbb R^5\\
	((1,0,0),(0,0))&\mapsto (1,0,0,0,0)\\
	((0,1,0),(0,0))&\mapsto (0,1,0,0,0)\\
	((0,0,1),(0,0))&\mapsto (0,0,1,0,0)\\
	((0,0,0),(1,0))&\mapsto (0,0,0,1,0)\\
	((0,0,0),(0,1))&\mapsto (0,0,0,0,1)
	\end{align*}$$
>   Que es una transformación "canónica" en el sentido que se entiende de dónde nace la idea, uniendo las bases en una sola. Ahora, supongamos que pudiéramos unir $\mathbb R^3$ y $\mathbb R^ 2$ en alguna estructura $\mathbb R^3\otimes\mathbb R^2$ buscando que sea isomorfa a $\mathbb R^6$. Esta búsqueda requiere enviar objetos $x\otimes y$ (donde $x\in\underline\alpha$ y $y\in\underline\beta$) hacia bases de $\mathbb R^6$, una que podría funcionar es:
> 
> $$\begin{align*}
	(1,0,0)\otimes(1,0)&\mapsto(1,0,0,0,0,0)\\
	(0,1,0)\otimes(1,0)&\mapsto(0,1,0,0,0,0)\\
	(0,0,1)\otimes(1,0)&\mapsto(0,0,1,0,0,0)\\
	(1,0,0)\otimes(0,1)&\mapsto(0,0,0,1,0,0)\\
	(0,1,0)\otimes(0,1)&\mapsto(0,0,0,0,1,0)\\
	(0,0,1)\otimes(0,1)&\mapsto(0,0,0,0,0,1)\\
	\end{align*}$$
> 
> #### ¿Por qué funciona esto?
> 
> Si lo pensamos, cuando hacemos $V_1\times V_2$, cada base  de $V_1\times V_2$ corresponde a una de $V_1$ o a una de $V_2$, mientras que lo que querríamos en $V_1\otimes V_2$ es que cada base corresponda a una combinación de una base de $V_1$ y una de $V_2$. Así, logramos que $\dim(V_1\otimes V_2)=\dim(V_1)\times\dim(V_2)$ (¡hay tantas bases como combinaciones podamos hacer con las bases de los espacios más pequeños!).
> 
> ### Unas consecuencias interesantes:
> 
> Supongamos que queremos crear la preimagen para un elemento de $\mathbb R^6$, empezando con uno sencillo: $(x,0,0,0,0,0)$. Es claro que $(x,0,0,0,0,0)=x(1,0,0,0,0,0)=x[(1,0,0)\otimes(1,0)]$. Aquí tenemos una situación interesante, ¿dónde debería entrar el $x$ a multiplicar? ¿en $(1,0,0)$ o en $(0,1)$? Tenemos dos posibles preimágenes en la forma de $(x,0,0)\otimes(1,0)$ y $(1,0,0)\otimes(x,0)$. Pero queremos que $\mathbb R^3\otimes\mathbb R^2$ sea isomorfo a $\mathbb R^6$, por lo que debería hacer una sóla preimagen, así, tenemos que aceptar que
> $$x[(1,0,0)\otimes(1,0)]=(x,0,0)\otimes(1,0)=(1,0,0)\otimes(x,0)$$
> Similarmente, para la preimagen de $(x+x',0,0,0,0,0)$, usando lo que acabamos de ver, tenemos que
> 
> $$\begin{align*}(x+x',0,0)\otimes(1,0)&=(x,0,0)\otimes(1,0)+(x',0,0)\otimes(1,0)\\&=(1,0,0)\otimes(x,0)+(1,0,0)\otimes(x',0)\\&=(1,0,0)\otimes(x+x',0)\end{align*}$$
> 
> Uniendo estas dos propiedades vamos a tener algo muy interesante:
> 
> $$(x_1+\lambda x_1',x_2,x_3)\otimes(y_1,y_2)=(x_1,x_2,x_3)\oplus(y_1,y_2)+\lambda[(x_1',x_2,x_3)\otimes(y_1,y_2)]$$
> Esta es la idea fundamental del **producto tensorial**. Ahora veamos cómo construirlo en abstracto.

## Inciso: Transformaciones lineales y multilineales.

> Las transformaciones lineales son la forma de movernos entre espacios vectoriales. Por definición, dados dos $\mathbb k$-espacios vectoriales $V_1$, $V_2$, decimos que una función $T:V_1\to V_2$ es una **transformación lineal** si
> $$\begin{align*}T(x+\lambda y)&=T(x)+\lambda T(y)\end{align*}$$
> Para todos los vectores $x,y\in V_1$ y todo escalar $\lambda\in\mathbb k$.
> 
> Por otro lado, si tenemos una serie de $\mathbb k$-espacios vectoriales $V_1,V_2,\dots, V_n$ y $W_1,W_2,\dots,W_m$, diremos que $M:V_1\times V_2\times\dots\times V_n\to W_1\times W_2\times W_m$ es una **transformación multilineal** si
> 
> $$M((v_1,v_2,\dots,v_i+\lambda v_i',\dots,v_n))=M((v_1,v_2,\dots,v_i,\dots,v_n))+\lambda M((v_1,v_2,\dots,v_i',\dots,v_n))$$
> 
> Aunque parecen muy parecidas a simple vista, casi nunca coinciden, por ejemplo, si $T$ y $M$ se definen de $V_1\times V_2\times\dots\times V_n$ a $W_1\times W_2\times W_m$, como mencionamos anteriormente, 
> $$M((v_1,v_2,\dots,v_i+\lambda v_i',\dots,v_n))=M((v_1,v_2,\dots,v_i,\dots,v_n))+\lambda M((v_1,v_2,\dots,v_i',\dots,v_n))$$
> Mientras que
> $$T((v_1,v_2,\dots,v_i+\lambda v_i',\dots,v_n))=T((v_1,v_2,\dots,v_i,\dots,v_n))+\lambda T((0,0,\dots,v_i',\dots,0))$$
> Es decir, cuando $n>1$, una transformación lineal y una transformación multilineal sólo coinciden si mandan a todo elemento de $V_1\times V_2\times\dots\times V_n$ a $(0,0,\dots,0)$.
> 
> Así, realmente resulta mucho más fácil trabajar con transformaciones lineales que multilineales, hay muchísimos más resultados en transformaciones lineales que nos permiten descubrir más cosas sobre los espacios vectoriales. Por lo que sería de interés lograr "transformar" transformaciones multilineales en lineales. 

## La construcción del producto tensorial (es bien abstracta):

> Realmente la motivación matemática del producto tensorial es algo diferente a la que presenté arriba, la idea gira en torno a la siguiente pregunta:
> 
> #### Dados unos espacios $V_1,V_2,\dots,V_n$, un espacio $W$ y una transformación multilineal $M:V_1\times\dots\times V_n\to W$. ¿Existirá alguna forma intuitiva de volver esa transformación multilineal en una lineal? Más específicamente, ¿puedo conseguir un espacio asociado a $V_1,\dots,V_n$ tal que la función desde allí hasta $W$ sea lineal?
> 
> Como imaginarás, la respuesta es que si y viene en forma de $V_1\otimes V_2\otimes\dots\otimes V_n$. Pero ¿cómo lo construimos?
> 
> #### ¿Espacios libres?
> 
> Este es un concepto prestado de la teoría de categorías, nos dice que para todo conjunto no vacío $X$, podemos definir un $\mathbb k$-espacio vectorial $V$ del que $X$ sea una especie de base. En particular, definimos $V$ como
> 
> $$V=\prod_{x\in X}\mathbb k$$
> 
> Es decir, vamos a tener tantas copias del campo $\mathbb k$ como elementos haya en $X$. Por ejemplo si nuestro conjunto $X=\{1,2,3\}$ entonces el $\mathbb R$-espacio asociado (también llamado $\mathbb R$-espacio vectorial libre en $X$) va a ser $R^3$. Es fácil ver como $X$ es una "base", podemos enviar a cada elemento de $X$ a una base de $\mathbb R^3$, por ejemplo al $1$ lo mandamos a $(1,0,0)$, a $2$ a $(0,1,0)$ y a $3$ a $(0,0,1)$.
> 
> Así, vamos a tomar al $\mathbb k$-espacio vectorial $\mathcal U$ libre en $V_1\times V_2\times \dots\times V_n$, esto es,
> 
> $$\mathcal U=\prod_{(x_i)\in \prod V_i}\mathbb k$$
> 
> Cómo podrás notar, este es un espacio absurdamente gigante, por lo que la idea es dar dos reglas de igualdad dentro de $\mathcal U$ para reducir el tamaño. Pero antes, dado que $\mathcal U$ es libre en $V_1\times V_2\times\dots\times V_n$, cada elemento $(x_1,x_2,\dots,x_n)$ corresponde con un elemento de una base de $\mathcal U$, así, si bien $(x_1,x_2,\dots,x_n)\notin\mathcal U$, para los propósitos de definir las reglas de igualdad, nos basta darlas para estos elementos.
> 
> **Relaciones de equivalencia:**
> 
> Vamos a decir que todas las $n$-uplas cumplen esa relación, son iguales:
> 
> - $$(x_1,x_2,\dots,x_i+x_i',\dots,x_n)\equiv(x_1,x_2,\dots,x_i,\dots,x_n)+(x_1,x_2,\dots,x_i',\dots,x_n)$$
> - $$(x_1,x_2,\dots,\lambda x_i,\dots,x_n)\equiv\lambda(x_1,x_2,\dots,x_i,\dots,x_n)$$
> 
> Si te fijas, estamos estableciendo las mismas reglas que tenía nuestra idea de producto tensorial que definimos al inicio.
> 
> 	> **Nota:** La construcción más formal requiere hacer el subespacio vectorial $\mathcal U_0\leq\mathcal U$ generado por los elementos que describimos en esas relaciones y luego hallar el espacio cociente $\mathcal{U/U}_0$. Pero en términos prácticos realmente sólo estamos queriendo reducir el tamaño de $\mathcal U$ estableciendo estas relaciones de equivalencia.
> 
> Así, al aplicar las relaciones de equivalencia, vamos a llegar a un espacio vectorial mucho más pequeño, este espacio va a ser llamado el **producto tensorial** de $V_1\times V_2\times\dots \times V_n$, y sus elementos van a ser llamados **tensores**.