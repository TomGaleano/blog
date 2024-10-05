# Producto de grupos


## Producto directo

Recordando que el producto cartesiano de una familia de conjuntos es generalizado como

$$
\prod_{i\in I}A_i:=\left\{f:I\to\bigcup_{i\in I}A_i\ |\ f(i)\in A_i,\forall i\in I\right\}
$$

Es decir, sucesiones de longitud $I$, donde el $i$-ésimo término ($f(i)$) es un elemento del $i$-ésimo conjunto.

A partir de una familia $G=\{(G_i,\cdot_i)\}_{i\in I}$ de grupos, podemos definir una estructura $(\prod G,\times)$ tal que la operación es dada por

$$
\begin{align*}\times:\prod G\times\prod G&\to\prod G\\ (f,g)&\mapsto f\times g=h\end{align*}
$$

Donde

$$
\begin{align*}h:I&\to\bigcup_{i\in I}A_i\\\ i&\mapsto f(i)\cdot_i g(i)\end{align*}
$$

Básicamente, es un producto componente a componente con la operación respectiva al grupo.

### Veamos que $(\prod G,\times)$ es un grupo:

- **Elemento neutro:** Definimos $e\in\prod G$ tal que $e(i)=e_i,\ \forall i\in I$. Así, para todo elemento $f\in\prod G$, $(f\times e)(i)=f(i)\cdot_ie(i)=f(i)\cdot_ie_i=f(i)$ por lo que $f\times e=f$, análogamente llegamos a que $e\times f=f$.
- **Inversos:** Sea $f\in\prod G$, podemos definir $f^ {-1}$ tal que $f^{-1}(i)=(f(i))^{-1},\forall i\in I$. Así, se tiene que $(f\times f^{-1})(i)=f(i)\cdot_i(f(i))^{-1}=e_i$, luego $f\times f^{-1}=e$ y similarmente $f^{-1}\times f=e$.
- **Asociatividad:** Sean $f,g,h\in\prod G$, $[(f\times g)\times h](i)=(f(i)\times g(i))\times h(i)$, como $G_i$ es un grupo, $(f(i)\times g(i))\times h(i)=f(i)\times(g(i)\times h(i)),\ \forall i\in I$, por lo que $(f\times g)\times h= f\times(g\times h)$.

Ahora, también podemos definir el siguiente automorfismo, denominado como **proyección canónica**:

$$
\begin{align*} \pi_j:\prod G&\to \prod G\\ f&\mapsto h \end{align*}
$$

Donde

$$
\begin{align*} h(i)=\begin{cases}e_i,\ &i\neq j\\ f(i),\ &i=j\end{cases} \end{align*}
$$

O visto de otra forma, $\pi_j(a_1,a_2,...,a_j,...,a_n)=(e_1,e_2,...,e_{j-1}, a_j,e_{j+1},...,e_n)$.

De esto, es fácil ver que $\pi_j\left[\prod G\right]\cong G_j$.

Análogamente, podemos definir $\pi'_j$ tal que si $k=\pi'_j(f)$ entonces

$$
\begin{align*} k(i)=\begin{cases}f(i),\ &i\neq j\\ e_i,\ &i=j\end{cases} \end{align*}
$$

Nuevamente, veremos que $\pi_j' \left[\prod G\right] \cong G_1\times G_2\times...\times G_{j-1}\times G_{j+1}\times...\times G_n$.

Además se tiene que $k\times h=h\times k=f$.

Por último, también se puede demostrar que $\pi_j \left[\prod G\right]$ y $\pi_j' \left[\prod G\right]$ son subgrupos normales en $\prod G$.

### Ejercicios:

- Si $a_i$ es de orden finito en $G_i$, ¿cúal es el orden de $(a_1,a_2,...,a_n)$ en $\prod_{i\in n}G_i$?
  
  #### Solución:
  
    Sea $m_i=|a_i|,\ \forall i\in I$, tomemos $m=m.c.m.(m_i)_{i\in n}$, usando que la multiplicación es componente a componente y la exponenciación es multiplicación recursiva, tenemos que $(a_1,a_2,...,a_n)^m=(a_1^m,a_2^m,...,a_n^m)$, como $m_i|m,\ \forall i\in n$, entonces $(a_1,a_2,...,a_n)^m=e$.
  
    Ahora supongamos que existe $m'<m$ tal que $(a_1,a_2,...,a_n)^{m'}=e$, con el argumento anterior sabemos que $e=(e_1,e_2,...,e_n)=(a_1^{m'},a_2^{m'},...,a_n^{m'})$, así, $a_i^{m'}=e_i$ de manera que $m_i|m',\ \forall i\in n$. Sin embargo esto contradice el hecho que $m$ sea el mínimo común múltiplo de todos los $m_i$, por tanto $|(a_1,a_2,...,a_n)|=m$.

## Suma directa externa

#### Definición. Soporte de $f$:

Sea $f\in\prod G$, definimos el **soporte de $f$** como el subconjunto de $I$ donde $f(i)$ no sea el neutro, esto es:

$$
\begin{align*}I_f:=\{i\in I:f(i)\neq e_i\}\end{align*}
$$

### Definición. Producto directo débil (externo):

Sea $G=\{G_i\}_{i\in I}$ una familia de grupos, definimos el **producto directo débil (externo)** como:

$$
\begin{align*}\prod^wG:=\{f\in\prod G:|I_f|\in\mathbb{N}\}\end{align*}
$$

Esto es, los elementos $(a_1,a_2,...)$ con un número finito de componentes no neutras. Naturalmente si $I$ es finito entonces el producto directo débil coincide con el producto directo.
Si $G_i$ es abeliano para todo $i\in I$, el producto directo debil se denomina **suma directa externa** y se denota con $\sum G$.
La operación del producto directo debil (externo) será denotado por $\circledast$ y por $\oplus$ para suma directa externa.

### Teorema:

Sea $N=\{N_i\}_{i\in I}$ una familia de subgrupos normales en $G$ tales que

1. $G=\langle\bigcup N\rangle$.
2. $N_j\cap N_k=\{e\}$ para todos $j,k\in I$ con $j\neq k$.

Entonces $G\cong\prod^w N$.

#### Demostración:

Sea $f\in\prod^w N$, sabemos que $I_f$ es finito y podemos definir $\prod_{i\in I_f}f(i)$ como un elemento de $G$, por otro lado, por la segunda condición sabemos que si $j\neq k$, $a_ka_j=a_ja_k$ para todos $a_j\in N_j,\ a_k\in N_j$. Así planteamos

$$
\begin{align*}\varphi: \prod^w N&\to G\\ f&\mapsto\prod_{i\in I_f}f(i)\end{align*}
$$

Veamos que $\varphi$ es un homomorfismo:
Sean $h,j\in\prod^wN$, $\varphi(h\circledast j)=\prod_{i\in I_0}(h\circledast j)(i)$ donde $I_0=\{i\in I:h(i)\cdot j(i)\neq e\}$ que sabemos es subconjunto de $I_h\cup I_j$, como $I_h$ e $I_j$ son finitos, $|I_0|\leq|I_h|+|I_j|$, así tenemos una productoria finita y por tanto

$$
\begin{align*}\varphi(h\circledast j)&=(h\circledast j)(i_0)\cdot(h\circledast j)(i_1)\cdot...\cdot(h\circledast j)(i_n)\\&=h(i_0)\cdot j(i_0)\cdot h(i_1)\cdot j(i_1)\cdot...\cdot h(i_n)\cdot j(i_n)\\&=h(i_0)\cdot h(i_1)\cdot...\cdot h(i_n)\cdot j(i_0)\cdot j(i_1)\cdot...\cdot j(i_n)\\&= \prod_{i\in I_0}h(i)\cdot\prod_{i\in I_0}j(i)\\&= \prod_{i\in I_h\cup I_j}h(i)\cdot\prod_{i\in I_h\cup I_j}j(i)\\&= \prod_{i\in I_h}h(i)\cdot\prod_{i\in I_j}j(i)\\&=\varphi(h)\cdot\varphi(j)\end{align*}
$$

Ahora veamos que $\varphi$ es un monomorfismo usando que $\text{ker}\varphi=\{f_e\}$ donde $f_e$ es el neutro de $\prod^wN$:
La segunda contenencia se tiene inmediata, por esto nos centramos en $\text{ker}\varphi\subseteq\{f_e\}$. Sea $k\in\text{ker}\varphi$, sabemos que  $\prod_{i\in I_k}k(i)=e$, esto es $k(i_0)\cdot k(i_1)\cdot ...\cdot k(i_m)=e$. Suponga que $k\neq f_e$, luego $k(o)\neq e$ para algún $o\in I_k$, luego $k(o)\in N_o$ y por tanto, $[k(o)]^{-1}\in \prod_{i\in I_k-\{o\}}f(i)$ sin embargo $[k(o)]^{-1}\in N_o$, lo que contradice que sean grupos disyuntos salvo la identidad. Concluimos que $k(i)=e,\ \forall i\in I_k$, luego $k=f_e$ y por tanto $\text{ker}\varphi\subseteq\{e_f\}$. Así $\varphi$ es inyectiva.

Por último, veamos que $\varphi$ es un epimorfismo:
Sea $g\in G$, por la primera condición sabemos que $g=q_1q_2...q_n$ para $q_l\in N_l$ con $l\in L\subseteq I$. Luego, definimos $x:I\to \bigcup N$ tal que

$$
\begin{align*}x(i)=\begin{cases}e,\ &i\notin L\\q_i,\ &i\in L\end{cases}\end{align*}
$$

Dado que $g$ es generado por un número finito de elementos, $I_x$ es finito y por tanto $x\in\prod^w N$ y $\varphi(x)=g$.
Concluimos de esto que $\varphi$ es sobreyectiva, que con lo mostrado anteriormente demuestra que $\varphi$ es un isomorfismo y por tanto $G\cong\prod^w N$.

Con este resultado en mente, presentamos la siguiente definición:

## Suma directa interna

Sea $N=\{N_i\}_{i\in I}$ una familia de subgrupos normales de $G$ tales que $G=\langle \bigcup_{i\in I}N_i\rangle$ y para todo $k\in I$, $N_k\cap\langle\bigcup_{i\in I-\{k\}}N_i\rangle=\{e\}$ (los subgrupos son disyuntos dos a dos exceptuando el neutro). Entonces se dice que $G$ tiene un **producto directo interno débil ($\text{PDID}$)** para la familia $N$.
Si $G$ es abeliano se dirá que tiene una **suma directa interna**.

### Teorema:

Sea $N=\{N_i\}_{i\in I}$ una familia de subgrupos normales de $G$. $G$ tiene un producto directo interno débil por $N$ si y solo si todo elemento $g\in G$ puede verse como producto único de $a_{i_0}\cdot a_{i_1}\cdot...\cdot a_{i_n}$ donde $e\neq a_{i_k}\in N_{i_k},\ \forall k\leq n$

#### Demostración:

- $(\Rightarrow):$ Sea $g\in G$, por el teorema anterior, como $\prod^wN\cong G$, entonces existe un isomorfismo $\varphi$ tal que $\varphi^{-1}(g)\in\prod^wN$, además como $\varphi$ es biyectiva sólo existe un $f$ tal que $\varphi(f)=g$, así, $g=f(0)\cdot f(1)\cdot...\cdot f(n)$ por la definicióñ de $\text{PDID}$.
- $(\Leftarrow):$ Dado que todo elemento puede expresarse como producto de elementos de los subgrupos normales, se tiene $(1.)$. Ahora veamos que para $i,j\in I$, si $i\neq j$ entonces $N_i\cap N_j=\{e\}$:
  Supongamos que $N_i\cap N_j\neq\{e\}$, luego existe $a\in N_i\cap N_j$ y como ambos son subgrupos, $a^{-1}\in N_i\cap N_j$, sea $x=b_0\cdot b_1\cdot...\cdot b_i\cdot...\cdot b_j\cdot...\cdot b_n$, se puede ver que no importa si $b_i=a$ y $b_j=a^{-1}$ o si $b_i=a^{-1}$ y $b_j=a$ pues suponemos que conmutan con el resto de los elementos de la productoria, luego contradice qeu exista una única representacióñ de los elemento de $G$. Por tanto concluimos que $N_i\cap N_j=\{e\}$ y por tanto se tiene $(2)$.
  Por el teorema anterior $G$ tiene un $\text{PDID}$ por $N$.

## Nota. Distinción entre producto interno y externo:

En general, si hablamos de $\text{PDID}$ en $\prod_{i\in I}^wN_i$ se sobreentiende que $N_i\unlhd G,\ \forall i\in I$ para algún $G$. Mientras que si hablamos de $\text{PDED}$, no necesariamente $N_i$ y $N_j$ estén relacionados directamente.

## Producto semidirecto

### Motivación:

Supongamos que tenemos dos grupos $G_1$ y $G_2$, ya vimos anteriormente que podemos definir un grupo por medio del producto directo $G_1\times G_2$, sin embargo puede que queramos una relación más estrecha entre ambos grupos, esto lo podemos lograr por medio de acciones de grupo, particularmente vamos a buscar una acción $\varphi$ 

$$
\begin{align*}\varphi:G_2&\to \text{Aut}(G_1)\\ x&\mapsto \varphi_{x}\end{align*}
$$

Donde $\varphi_x$ es un automorfismo de $G_1$, es decir, que $\varphi_x(ab)=\varphi_x(a)\varphi_x(b)$ donde $a,b\in G_1$, además, pedimos que cumpla que para todos $x,y\in G_2$ y $a,b\in G_1$, $\varphi_{e_2}(a)=a$ y  $\varphi_{xy}(a)=\varphi_x(\varphi_y(a))$. Así, a partir de una acción $\varphi$ se define al siguiente operación binaria para $G_1\times G_2$, sean $a_1, b_1\in G_1$ y $a_2,b_2\in G_2$, 

$$
(a_1,a_2)(b_1,b_2)=(a_1\varphi_{a_2}(b_1),a_2b_2)
$$

De esta forma, cuando dispongamos de una acción $\varphi$ y queramos referenciar este producto, denotaremos la estructura algebraica como $G_1\rtimes G_2$ o incluso, dado que la operación depende de la acción, se puede usar $G_1\rtimes_\varphi G_2$. 

Veamos que esta estrucutra define un grupo:

- **Asociatividad:** Sean $(a_1,a_2),(b_1,b_2),(c_1,c_2)\in G_1\rtimes G_2$,
  
  $$
  \begin{align*}[(a_1,a_2)(b_1,b_2)](c_1,c_2)&=(a_1\varphi_{a_2}(b_1),a_2b_2)(c_1,c_2)\\&=(a_1\varphi_{a_2}(b_1)\varphi_{a_2b_2}(c_1),a_2b_2c_2)\\ &=(a_1\varphi_{a_2}(b_1)\varphi_{a_2}(\varphi_{b_2}(c_1)),a_2b_2c_2) \\ &=(a_1\varphi_{a_2}(b_1\varphi_{b_2}(c_1)),a_2b_2c_2) \\ &=(a_1,a_2)[(b_1\varphi_{b_2}(c_1),b_2c_2)] \\ &=(a_1,a_2)[(b_1,b_2)(c_1,c_2)]\end{align*}
  $$

- **Elemento neutro:** Existe $(e_1,e_2)$ tal que para todo $(a,b)\in G_1\rtimes G_2$
  
  $$
  (a,b)(e_1,e_2)=(a\varphi_{b}(e_1),be_2)=(ae_1,b)=(a,b)
  $$

- **Elemento inverso:** Para todo $(a,b)\in G_1\rtimes G_2$,podemos definir $(\varphi_{b^{-1}}(a^{-1}),b^{-1})$ tal que 
  
  $$
  \begin{align*}(a,b)(\varphi_{b^{-1}}(a^{-1}),b^{-1})&=(a\varphi_b(\varphi_{b^{-1}}(a^{-1})),bb^{-1}) \\ &= (a\varphi_{bb^{-1}}(a^{-1}),e_2) \\ &=(a\varphi_{e_2}(a^{-1}),e_2) \\ &= (aa^{-1},bb^{-1}) \\ &= (e_1,e_2)\end{align*}
  $$

# Teorema Fundamental de grupos abelianos finitamente generados:

Sea $G$ un grupo abeliano, $G$ es isomorfo a 

$$
\mathbb{Z_{p_1^{k_1}}}\times\mathbb{Z_{p_2^{k_2}}}\times...\times\mathbb{Z_{p_n^{k_n}}}\times\mathbb{Z}\times...\times\mathbb{Z}
$$

Donde $p_i$ son números primos no necesariamente distintos y $k_i\in\mathbb{N}$ para todo $1\leq i\leq n$. 

Este producto es único salvo presentación. 

Esto es, 

$$
G\cong\prod_{i=1}^n\mathbb{Z_{p_i}^{k_i}}\times\mathbb{Z}^m
$$

Donde $n$ y $m$ son únicos.

## Propiedad universal del Producto:

Sean $G=\{G_i\}_{i\in I}G_i$ una familia de grupos, $\prod G$ el producto usual y $\pi=\{\pi_j:\prod G\to G_j\}_{j\in I}$ las proyecciones canónicas. Entonces,

1. Para cada grupo $H$ con homomorfismos $\{p_j:H\to G_j\}_{j\in I}$, existe un único homomorfismo $\alpha:H\to\prod G$ tal que $\pi_j\alpha=p_j$ para todo $j\in I$.
   
   > Esto nos dice que si un grupo $H$ tiene homomorfismos hacia cada grupo de la familia $G$, entonces existe un homomorfismo $\alpha$ hacia $\prod G$ caracterizado por sus $p_j$.

2. Si otro grupo $K$ que tenga $\pi'=\{\pi':K\to G_j\}_{j\in I}$ y también tenga la propiedad (1), es isomorfo a $\prod G$.
   
   > Es decir, que $K$ cumple varias de las propiedades de $\prod G$, y esas propiedades son suficientes para garantizar que $K$ y $\prod G$ son isomorfos.

#### Demostración:

1. Básicamente queremos definir un $\alpha$ tal que el siguiente diagrama sea conmutativo:
   
   <!-- https://q.uiver.app/#q=WzAsMyxbMCwyLCJIIl0sWzAsMCwiXFxwcm9kIEciXSxbMiwwLCJHX2oiXSxbMCwxLCJcXGFscGhhIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMiwicF9qIiwyXSxbMSwyLCJcXHBpX2oiXV0= -->
<div style="display: flex; justify-content: center;">
  <iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwyLCJIIl0sWzAsMCwiXFxwcm9kIEciXSxbMiwwLCJHX2oiXSxbMCwxLCJcXGFscGhhIiwwLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMiwicF9qIiwyXSxbMSwyLCJcXHBpX2oiXV0=&embed" width="240" height="240" style="border-radius: 8px; border: none;"></iframe>
</div>
   
   Así, que definimos 
   
   $$
   \begin{align*}\alpha: K&\to\prod G\\x&\mapsto y\end{align*}
   $$
   
   Donde $y(i)=p_i(x)$ para todo $i\in I$. Así, usando que el producto es componente a componente y que todos los conjuntos son grupos, tenemos que $\alpha$ es un homomorfismo. Por la construcción misma, $\pi_j\alpha=p_j$ y es fácil ver la unicidad.

2. Tenemos los siguientes diagramas:
   
<!-- https://q.uiver.app/#q=WzAsMTYsWzAsMywiXFxwcm9kIEciXSxbMCwxLCJcXHByb2QgRyJdLFsyLDEsIkdfaiJdLFszLDMsIksiXSxbMywxLCJcXHByb2QgRyJdLFswLDAsIigxKSJdLFszLDAsIigyKSJdLFs1LDEsIkdfaiJdLFs2LDAsIigzKSJdLFs2LDEsIksiXSxbNiwzLCJLIl0sWzgsMSwiR19qIl0sWzksMCwiKDQpIl0sWzksMywiXFxwcm9kIEciXSxbOSwxLCJLIl0sWzExLDEsIkdfaiJdLFsxLDIsIlxccGlfaiJdLFswLDIsIlxccGlfaiIsMl0sWzAsMSwiSV97XFxwcm9kIEd9Il0sWzQsNywiXFxwaV9qIl0sWzMsNywiXFxwaSdfaiIsMl0sWzMsNCwiXFxhbHBoYSJdLFsxMCw5LCJJX0siXSxbMTAsMTEsIlxccGknX2oiLDJdLFs5LDExLCJcXHBpJ19qIl0sWzEzLDE0LCJcXGJldGEiXSxbMTMsMTUsIlxccGlfaiIsMl0sWzE0LDE1LCJcXHBpJ19qIl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMTYsWzAsMywiXFxwcm9kIEciXSxbMCwxLCJcXHByb2QgRyJdLFsyLDEsIkdfaiJdLFszLDMsIksiXSxbMywxLCJcXHByb2QgRyJdLFswLDAsIigxKSJdLFszLDAsIigyKSJdLFs1LDEsIkdfaiJdLFs2LDAsIigzKSJdLFs2LDEsIksiXSxbNiwzLCJLIl0sWzgsMSwiR19qIl0sWzksMCwiKDQpIl0sWzksMywiXFxwcm9kIEciXSxbOSwxLCJLIl0sWzExLDEsIkdfaiJdLFsxLDIsIlxccGlfaiJdLFswLDIsIlxccGlfaiIsMl0sWzAsMSwiSV97XFxwcm9kIEd9Il0sWzQsNywiXFxwaV9qIl0sWzMsNywiXFxwaSdfaiIsMl0sWzMsNCwiXFxhbHBoYSJdLFsxMCw5LCJJX0siXSxbMTAsMTEsIlxccGknX2oiLDJdLFs5LDExLCJcXHBpJ19qIl0sWzEzLDE0LCJcXGJldGEiXSxbMTMsMTUsIlxccGlfaiIsMl0sWzE0LDE1LCJcXHBpJ19qIl1d&embed" width="700" height="240" style="border-radius: 8px; border: none;"></iframe>
   
   - (1) lo tenemos pues es un caso particular de la primera propiedad.
   
   - (2) se tiene así mismo pues $K$ es un grupo con homomorfismos hacia cada grupo de $G$ entonces tenemos garantizada la existencia y unicidad de $\alpha$.
   
   - (3) y (4) son análogos a (1) y (2) respectivamente.
   
   Así, sabemos que $\pi_j'\beta=\pi_j$ y $\pi_j\alpha=\pi_j'$ por lo que tenemos que 
   
   $$
   \begin{align*}\pi'_j(\beta\alpha)&=(\pi'_j\beta)\alpha\\&=\pi_j\alpha\\&=\pi'_j\end{align*}
   $$
   
   y análogamente $\pi_j(\alpha\beta)=\pi_j$. Así, $\beta\alpha$ es una función de $K$ en $K$ tal que $\pi'_j(\beta\alpha)=\pi_j'$, sin embargo por el diagrama (3) sabemos que sólo existe una única función que cumple eso y es la identidad, por tanto $\beta\alpha=I_K$ y análogamente $\alpha\beta=I_{\prod G}$, por tanto se sabe que $\alpha$ y $\beta$ son biyecciones y como también son homomorfismos concluimos que $\prod G\cong K$.
