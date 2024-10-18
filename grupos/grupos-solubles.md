# Grupos solubles:

> Los grupos solubles son un tipo especial de grupos que son de interés en la teoría de Galois. Estos, al igual que los grupos nilpotentes, se pueden definir a través de series de grupos.
> 
> Aquí daremos la noción de lo que es un grupo nilpotente, un grupo soluble, caracterizaciones de ambos, propiedades de los últimos (en particular una particularización de los teoremas de Sylow para grupos solubles) y unos ejemplos.

## Grupos nilpotentes:

#### Definición:
> Sea $(G,\cdot)$ un grupo, tenemos que $C(G)\unlhd G$ donde $C(G)$ denota _el centro del grupo_, así, definamos recursivamente la sucesión $C_i(G)$ dada por
> $$\begin{align*}
		C_0(G)&:=\langle e\rangle, &C_{i+1}(G):=\varphi_{i}^{-1}[C(G/C_{i}(G))]
	\end{align*}$$
> Donde $\varphi_i$ es la proyección canónica de $G\to G/C_i(G)$.
> 
> De esta definición, tenemos inmediatamente que $C_1(G)$ coincide con $C(G)$.

#### Veamos que $C_i(G)\unlhd G$: 

_Idea general:_

> La demostración es por inducción sobre $i$.
> 
> 1. Los casos $i=0$ e $i=1$ son triviales.
> 2. Para el paso inductivo, supongamos que $C_i(G)\unlhd G$. Tenemos que $C_{i+1}(G)\neq\varnothing$ porque $\varnothing\neq C_i(G)\subseteq \varphi^{-1}_i[C(G/C_i(G))]$, tomemos $a,b\in \varphi_i^{-1}[C(G/C_i(G))]$.
> 3. Tenemos que $\varphi_i(a),\varphi_i(b)\in C(G/C_i(C))$, como $C(G/C_i(G))$ es un subgrupo, $\varphi_i(b^{-1})=\varphi_i(b)^{-1}\in C(G/C_i(G))$.
> 4. Es inmediato que $\varphi_i(ab)=\varphi_i(a)\varphi_i(b)\in C(G/C_i(G))$. Así, $C_{i+1}(G)\leq G$, además, $C_i(G)\leq C_{i+1}(G)$.
> 5. Sea $x\in G$ y $a\in C_{i+1}(G)$, tenemos que 
> 	$$\begin{align*}
			\varphi_i(xax^{-1})&=\varphi_i(x)\varphi_i(a)\varphi_i(x)^{-1}\\
		&=\varphi_i(x)\varphi_i(x)^{-1}\varphi_i(a)\\
		&=\varphi_i(a)\in C(G/C_i(G))
		\end{align*}$$
> 	Luego $xax^{-1}\in \varphi_i^{-1}[C(G/C_i(G))]=C_{i+1}(G)$, así, es un subgrupo normal de $G$.

De la prueba por inducción vemos que tenemos la siguiente cadena ascendente, conocida como **la serie ascendente central de $G$**:

$$C_0(G)\leq C_1(G)\leq C_2(G)\leq ...\leq G$$

Así, podemos presentar la definición formal de grupo nilpotente.

### Definición:
> Sea $G$ un grupo, diremos que $G$ es un **grupo nilpotente** si existe $n\in\mathbb N$ tal que $C_n(G)=G$

### Proposiciones:
1. Todo grupo abeliano es nilpotente.
2. Todo $p$-grupo es nilpotente.
3. Sea $\{G_i\}_{i\in I}$ una colección finita de grupos nilpotentes, entonces $G=\prod_{i\in I} G_i$ es un grupo nilpotente.
4. (_Lema del normalizador generalizado_) Si $H$ es un subgrupo propio de un grupo nilpotente $G$, entonces $H\lneq N_G(H)$.
5. Un grupo $G$ es nilpotente sii es la suma directa de sus subgrupos de Sylow.

_Idea general:_

> Para (1.), (2.) y (3.) se trabaja con la definición.
> 
> #### Para (4.) 
> 	1.  Sabemos que $C_0(G)\leq H$.
> 	2. 	Tomemos al máximo $k$ tal que $C_k(G)\leq H$. Este está garantizado pues al ser $G$ nilpotente, existe una cota superior $n$ tal que $G=C_n(G)$.
> 	3. Tomemos $x\in C_{k+1}(G)-H$. Entonces para todo $h\in H$ se tiene que en $G/C_k(G)$
> 		$$\begin{align*}\overline{xh}&=\overline x\overline h\\&=\overline h\overline x\\&=\overline {hx}\end{align*}$$
> 		Es decir que $xhx^{-1}h^{-1}\in C_k(G)$. Esto es, $xhx^{-1}h^{-1}=h'$, para algún $h'\in C_k(G)$
> 	4. Como $C_k(G)\subseteq H$, entonces $xhx^{-1}=h'h\in H$ y como $H$ es subgrupo entonces $xhx^{-1}\in H$ (es decir, $x\in N_G(H)$). Como $x\notin H$ concluimos que $H\lneq N_G(H)$.
> 
> #### Para (5.)
> 
> 	1. Una implicación se tiene directamente usando (2.) y (3.)
> 	2. Si $G$ es nilpotente, tomemos $P$ un $p$-subgrupo de Sylow. Si $P=G$ entonces por $(2.)$ ya queda demostrado. Si no, entonces por (3.), $P\lneq N_G(P)$.
> 	3. Por teoremas vistos en Sylow, $N_G(N_G(P))=N_G(P)$, nuevamente por la contrarrecíproca de (3.), concluimos que $N_G(P)=G$ y por tanto $P\unlhd G$.
> 	4. Podemos repetir esto por cada $p_j$ primo que componga el orden de $G$. 
> 	5. Así, $G$ es la suma directa de todos sus $p$-subgrupos.

De estas proposiciones tenemos un resultado más fuerte que el primer teorema de Sylow, pero para grupos nilpotentes:

### Colorario: Si $G$ es un grupo nilpotente y $m$ divide a $|G|$, entonces $G$ tiene un grupo de orden $m$.

## Definición:

> Sea $G$ un grupo, y sea $\text{Con}(G):=\{aba^{-1}b^{-1}:a,b\in G\}$ el conjunto de elementos llamados **conmutadores**, el subgrupo generado por $\text{con}(G)$ es llamado **subgrupo conmutador de $G$** y es denotado $G'$.

### Proposición: 
> Sea $G$ un grupo, entonces $G'$ es un subgrupo normal y $G/G'$ es abeliano. Además, para cualquier otro grupo normal $N$, $G/N$ es abeliano sii $G'\leq N$.
> 
> _Idea general:_
> 
> 1. Sea $f$ un automorfismo cualquiera, es claro que para todos $a,b\in G$,
> 	$$\begin{align*}
		f(aba^{-1}b^{-1})&=f(a)f(b)f(a)^{-1}f(b)^{-1}\\
		&=a'b'a'^{-1}b'^{-1}\in \text{Con}(G)
		\end{align*}$$ 
> 	Por lo que para cualquier automorfismo $f(\text{Con}(G))\subseteq \text{Con}(G)$, por esto $f(G')\leq G'$.
> 	2. Particularmente para el automorfismo de conjugación por $x$, $xG'x^{-1}\subseteq G'$ para todo $x$, luego $G'$ es normal.
> 	3. Además, para todos $\overline a,\overline b\in G/G'$, se tiene que $\overline {ab}\cdot\overline{a^{-1}b^{-1}}=\overline {aba^{-1}b^{-1}}=\overline e$, por lo que $\overline {ab}=\overline {ba}$. Concluimos que $G/G'$ es abeliano.
> 	4. Si $G/N$ es abeliano, $\overline {ab}=\overline {ba}$ para todos $a,b\in G$, pero entonces $\overline {aba^{-1}b^{-1}}=N$ por lo que $N$ contiene a todos los conmutadores luego $G'\subseteq N$.
> 5. Si $G'\leq N$, por el tercer teorema de isomorfismo tenemos que 
> $$(G/G')/(N/G')\cong(G/N)$$
> 	Como $G/G'$ es abeliano, necesariamente $G/N$ también lo es.

### Definición:
> Sea $G$ un grupo, definamos recursivamente la siguiente sucesión:
> $$\begin{align*}G^{(1)}:=&G', &G^{(i+1)}:=(G^{(i)})'\end{align*}$$
> Esto da lugar a la siguiente serie de **subgrupos derivados**,
>  $$G\geq G^{(1)}\geq G^{(2)}\geq...\geq\langle e\rangle$$

## Definición:
> Sea $G$ un grupo, decimos que $G$ es **soluble** si existe $n\in\mathbb N$ para el cual $G^{(n)}=\langle e\rangle$.

### Proposiciones:
1. Todo grupo nilpotente es soluble.
2. Todo subgrupo e imagen homomorfa de un grupo soluble es también soluble.
3. Si $N\unlhd G$ y $G/N$ son ambos solubles, entonces $G$ también lo es.
4. $S_n$ no es soluble para $n\geq 5$ **(¡importante!)**.

_Idea general:_

> Solo mostraremos (1.) y (4.)
> 
> #### Para (1.)
> 1. Como $G$ es nilpotente, existe $n$ tal que $C_n(G)=G$.
> 2. Por otro lado, tenemos que $C_{i-1}(G)\unlhd C_i(G)$ para todo $i\geq1$, pero además, $C_i(G)/C_{i-1}(G)$ es abeliano, por la proposición anterior entonces $(C_i(G))'\leq C_{i-1}(G)$.
> 3. Así, $G'\leq C_{n-1}(G)$, $G^{(2)}\leq C_{n-2}(G)$ y sucesivamente hasta $G^{(n)}\leq C_{n-n}(G)=C_0(G)=\langle e\rangle$. Por lo que concluimos $G$ es soluble.
> 
> #### Para (4.)
> 1. Si $S_n$ fuera soluble, por (2.), cualquier subgrupo también lo sería, en particular, $A_n\leq S_n$.
> 2. Como $A_n$ no es abeliano, $A_n'\neq \langle e\rangle$.
> 3. También tenemos que $A_n$ es simple para $n\geq 5$, y dado que $A_n'\unlhd A_n$, necesariamente $A_n'=A_n$.
>  4. Así, $A_n^{(i)}=(A_n^{(i-1)})'=A_n'=A_n$ para todo $i\in\mathbb N$, por lo que $A_n$ no es soluble. Luego $S_n$ tampoco lo es.

### Definiciones:
> 
> Un subgrupo $H$ de un grupo $G$ se dice **característico** si para todo automorfismo $f:G\to G$, $f(H)=H$. Análogamente, $H$ se dice **totalmente invariante** si para todo endomorfismo no trivial $g:G\to G$, $g(H)=H$.
> 
> Por otro lado, $H$ es un **subgrupo normal minimal** si cumple que si $\langle e\rangle \lneq N\unlhd G$ y $N\leq H$ implica que $N=H$.

Tras estas definiciones, veremos 3 lemas que ayudan a probar la generalización de los teoremas de Sylow para grupos solubles finitos.

#### Lemas:
Sean $N\unlhd G$ y $H\leq G$ subgrupos de un grupo finito $G$,

1. Si $H$ es un subgrupo característico de $N$, $H$ es normal en $G$.
2. Todo $p$-subgrupo de Sylow de $G$ es totalmente invariante.
3. Si $G$ es soluble y $N$ es un subgrupo normal minimal, entonces $N$ es un $p$-subgrupo abeliano para algún primo $p$.

### Teoremas:
Sea $G$ un grupo soluble de orden $mn$ con $m,n$ primos relativos, entonces

1. $G$ tiene un subgrupo de orden $m$.
2. Cualesquiera subgrupos de orden $m$ son conjugados.
3. Cualquier subgrupo de orden $k$, con $k|m$ está contenido en algún subgrupo de orden $m$. 


