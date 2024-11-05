# Extensiones de campos

## Definición:
> Sean $\mathbb {F,E}$ campos, diremos que $\mathbb E$ es una **extensión de campo** de $\mathbb F$ (denotado $\mathbb{E/F}$) si existe un monomorfismo $f:\mathbb{F\to E}$.
> 
> Es decir, si el campo $\mathbb F$ puede ser introducido (o extendido) en $\mathbb E$ conservando su estructura algebraica.

### Ejemplos:

- $\mathbb R$ es una extensión de campo de $\mathbb Q$.
- $\mathbb C$ es una extensión de campo de $\mathbb R$.
- $\mathbb H$ **no** es una extensión de campo de $\mathbb C$ (pues $\mathbb H$ no es un campo).
- Si $\mathbb F$ es un campo, el campo de fracciones del anillo de polinomios de $\mathbb F$ (denotado por $\mathbb F(x)$) es una extensión de campo de $\mathbb F$.

### Definición:
> Sea $\mathbb F$ un campo y $\mathbb{E/F}$ una extensión, podemos ver a $\mathbb E$ como un espacio vectorial sobre $\mathbb F$. Así, diremos que el **grado de la extensión** es la dimensión del espacio vectorial y lo denotaremos por $[\mathbb {E:F}]$.

#### Ejemplo:
> Si tomamos $\mathbb {C:R}$, es claro que $\mathbb C=\langle 1,i\rangle$ luego $[\mathbb {C:R}]=2$.

## Teorema:
> Sea $\mathbb F$ un campo y sea $p(x)\in\mathbb F[x]$ un polinomio de grado mayor o igual a $2$ existe una extensión $\mathbb {E/F}$ tal que $\mathbb E$ contiene una raíz $\alpha$ de $p(x)$.
> 
> _Demostración:_
> 	
> 	> Como $\mathbb F$ es campo, $\mathbb F[x]$ es un dominio euclidiano. Así, por un lado $p(x)$ tiene una factorización en irreducibles única salvo unidades, tomemos $f(x)$ irreducible parte de la factorización de $p(x)$. Así, como $\mathbb F[x]$ es un DE $f(x)$ es también primo y $(f(x))$ es un ideal maximal de $\mathbb F[x]$ por lo que $F[x]/(f(x))$ es un campo.
> >  
> > Veamos que $\mathbb E=\mathbb F[x]/(f(x))$ es una extensión de campo de $\mathbb F$ a partir de la siguiente función:
> > 	$$\begin{align*}
			\varphi:\mathbb F&\to \mathbb E\\
			a&\mapsto \overline a=a+(f(x))
			\end{align*}$$
> > Es claro que $\varphi$ es un homomorfismo, ahora veamos que es inyectiva. Sean $a,b\in \mathbb F$ tales que $\varphi(a)=\varphi(b)$, entonces $\overline a=\overline b$ luego $a-b\in(p(x))$, esto es, $a-b=q(x)f(x)$ para algún $q(x)\in\mathbb F[x]$, como $\partial f\geq1$, necesariamente $q(x)$ es el polinomio $0$ por lo que $a-b=0$ luego $a=b$.
> > 
> > Ahora, tomemos la proyección $\overline f(X)$ de $f(x)$ por $\varphi$, es decir que si
> > $$f(x)=\sum_{i=0}^na_ix^i\implies\overline f(X)=\sum_{i=0}^n\overline{a_i}X^i$$
> > Veamos que $\alpha=\overline x$ es una raíz de $\overline f(X)$:
> > $$\begin{align*}\overline f(\alpha)&=\sum_{i=0}^n\overline{a_i}\cdot\overline x^i\\&=\sum_{i=0}^n\overline {a_i}\cdot\overline{x ^i}\\&=\sum_{i=0}^n\overline{a_ix^i}\\&=\overline{\sum_{i=0}^na_ix^i}\\&=\overline{f(x)}\\&=\overline0\end{align*}$$
> > 
> > Así, queda demostrado el teorema.

### Definición:
> Sea $\mathbb F$ un campo, $\mathbb{E/F}$ una extensión y $\alpha\in\mathbb E$. $\alpha$ se dice **algebraico** sobre $\mathbb F$ si existe un polinomio $p(x)\in\mathbb F[x]$ tal que $p(\alpha)=0$, en otro caso se dice que $\alpha$ es **trascendental**.
> 
> Además decimos que el grado de un $\alpha$ algebraico es dado por el grado del polinomio mónico minimal que tenga de raíz a $\alpha$.

#### Ejemplos:
> - $\sqrt{2}$ e $i$ son algebraicos sobre $\mathbb Q$. $p(x)=x^2-2$ y $q(x)=x^2+1$ respectivamente.
> - $\pi$ y $e$ son trascendentales sobre $\mathbb Q$, mas son algebraicos sobre $\mathbb R$ y $\mathbb C$.

### Teorema:

> Sea $\mathbb F$ un campo, $\mathbb{E/F}$ una extensión y $\alpha,\alpha_i\in \mathbb E$,
> 
> - El conjunto $\mathbb F(\alpha):=\left\{\frac{p(\alpha)}{q(\alpha)}:p,q\in\mathbb F[x],q(\alpha)\neq0\right\}$ es un subcampo de $\mathbb E$ y una extensión de campo de $\mathbb F$.
> - El conjunto $\mathbb F(\alpha_1,\alpha_2,\dots,\alpha_n):=\left\{\frac{p(\alpha_1,\alpha_2,\dots,\alpha_n)}{q(\alpha_1,\alpha_2,\dots,\alpha_n)}:p,q\in\mathbb F[x_1,x_2,\dots,x_n]\right\}$ es la mínima extensión de campo que posee a $\alpha_i$ para $i\in\{1,2,\dots,n\}$.
> - Si $\alpha$  es algebraico de grado $n$ sobre $\mathbb F$, sea $p(x)\in\mathbb F[x]$ el polinomio mónico irreducible cuya raíz es $\alpha$, entonces una base para $F[x]/(p(x))$ visto como espacio vectorial sobre $\mathbb F$ es $\{1,\alpha,\alpha^2,\dots,\alpha^{n-1}\}$.
> 
> Los primeros dos resultados son inmediatos, ya sabemos del teorema anterior que $\mathbb F[x]/(p(x))$ es una extensión de campo de $\mathbb F$. Por notación $c$ denota $c+(p(x))$ para cada $c\in\mathbb F$ y $q(x)$ denota $q(x)+(p(x))$ donde $q(x)\in \mathbb F[x]$.
> 
> _Demostración:_
> 
>  > Primero veamos que $\{1,\alpha,\alpha^2,\dots,\alpha^{n-1}\}$ es linealmente independiente, y es que en efecto en caso contrario existirían $c_i\in\mathbb F$ algunas distintas de $0$ tales que
> > $$c_0+c_1\alpha+c_2\alpha^2+\dots+c_{n-1}\alpha^{n-1}=0$$
> > Lo que da pie a plantear el polinomio $p'(x)=c_0+c_1x+\dots+c_{n-1}x^{n-1}\in\mathbb F[x]$, un polinomio de grado menor que $p(x)$ para el que se tiene que $p'(\alpha)=0$, contradiciendo que $p(x)$ es el polinomio de grado mínimo. Así concluimos que el conjunto es linealmente independiente.
> >
> > Ahora como $\mathbb F[x]/(p(x))$ es un dominio euclidiano, todo $f(x)+(p(x))=r(x)+(p(x))$ donde $\partial r<\partial p$, esto es, $r(x)$ es un polinomio de a lo más grado $n-1$, recordando que $\alpha=x$, es observable que $r(x)$ (y por tanto $f(x)$) puede ser expresado como combinación lineal de $x$ (o $\alpha$) con coeficientes en $\mathbb F$. Así resulta ser base.
> > 
> > Por último, por notación se suele referir a $\mathbb F[x]/(p(x))$ como $\mathbb F(\alpha)$ y se puede ver que coincide con la definición que se dio más arriba, además, de este teorema también concluimos que $\mathbb{[F(\alpha):F]}=n$.

### Definición:

> Una extensión $\mathbb{E/F}$ se dice **algebraica** si todo elemento $\alpha\in\mathbb{E}$ es algebraico sobre $\mathbb F$.
> 

### Teorema:
> Si $[\mathbb{E:F}]$ es finito, entonces $\mathbb {E/F}$ es una extensión algebraica.
> 
> _Demostración:_
> 
> > Sea $n=[\mathbb {E:F}]$ y tomemos $\alpha\in \mathbb E$, es claro que al $\{1,\alpha,\alpha^2,\dots,\alpha^n\}$ tener $n+1$ elementos, es linealmente dependiente, o equivalentemente existen $c_i\in\mathbb F$ constantes tales que
> > $$c_0+c_1\alpha+c_2\alpha^2+\dots+c_n\alpha^n=0$$
> > Por lo que podemos definir el polinomio $p(x)=c_0+c_1x+\dots+c_nx^x\in\mathbb F[x]$ tal que $p(\alpha)=0$, luego todo $\alpha\in\mathbb E$ es algebraico sobre $\mathbb F$.
> >
> > Es importante tener en cuenta que el recíproco no se tiene, en tanto para $\mathbb A$, el conjunto de todos los números algebraicos sobre $\mathbb C$ se tiene que $\mathbb {A/C}$ es una extensión algebraica y sin embargo $\mathbb{[A:C]}$ no es finito.

## Teoremas: