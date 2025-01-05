# Taller 2:

### 1. Determine los $\mathbb Q$-automorfismos de 

- $\mathbb Q(\sqrt3)$.

	> Como $[\mathbb{Q}(\sqrt3):\mathbb Q]=2$ y $\mathbb Q$ es perfecto, $|\text{Gal}(\mathbb{Q}(\sqrt3)/\mathbb Q)|=2$ y $\text{Gal}(\mathbb{Q}(\sqrt3)/\mathbb Q)=\{\text{Id}_{\mathbb Q(\sqrt3)},\Psi_{\sqrt3,-\sqrt3}\}$

- $\mathbb Q(\sqrt[3]{15})$.

	> De existir un $\mathbb Q$-automorfismo $\sigma$ no trivial en $\mathbb{Q}(\sqrt[3]{15})$, tendríamos que $\sigma(\sqrt[3]{15})$ sería otra raíz de $p(x)=x^3-15$. Sin embargo las otras raíces del polinomio son complejas por lo que no pertenecen a $\mathbb Q(\sqrt[3]{15})$. Así, el único $\mathbb Q$-automorfismo es la identidad.
- $\mathbb Q(\sqrt[6]3)$.

	> De manera similar, la única otra raíz de $p(x)=x^6-3$ en $\mathbb Q(\sqrt[6]{3})$ es $-\sqrt[6]3$ por lo que los únicos $\mathbb Q$-automorfismos son $\text{Id}_{\mathbb{Q}(\sqrt[6]3)}$ y $\Psi_{\sqrt[6]3,-\sqrt[6]3}$.

### 2. Sea $\mathbb E$ algebraico sobre $\mathbb F$ y $D$ un dominio tal que $\mathbb F\subseteq D\subseteq\mathbb E$ (con $D$ subanillo de $\mathbb E$). Pruebe que $D$ es campo.

> Si $D=\mathbb F$ ya está. Si no, sea $d\in D-\mathbb F\subseteq\mathbb E$ algebraico sobre $\mathbb F$, se tiene que 
> 
> $$0=c_0+c_1d+\dots+c_nd^n$$
> 
> Para algún $n>0$ y $c_0,c_1,\dots,c_n\in\mathbb F$ con $c_0\neq0\neq c_n$, entonces 
> 
> $$-1=d\left(\frac{c_1}{c_0}+\dots+\frac{c_n}{c_0}d^{n-1}\right)$$
> 
> Como $D$ es un dominio, es cerrado con respecto a suma y producto, por lo que $\frac{c_1}{c_0}+\dots+\frac{c_n}{c_0}d^{n-1}\in D$. Así, también lo está $-(\frac{c_1}{c_0}+\dots+\frac{c_n}{c_0}d^{n-1})=d^{-1}$, por lo que concluimos que $D$ es campo.

### 3. Sea $\mathbb {K/F}$ una extensión. Pruebe que $\mathbb K$ es algebraica sobre $\mathbb F$ si y sólo si $\forall \mathbb E$, $\mathbb{K/E/F}$, cada monomorfismo $\sigma:\mathbb E\to\mathbb E$ tal que $\sigma|_{\mathbb F}=\text{Id}_{\mathbb F}$, $\sigma(\mathbb E)=\mathbb E$.

> - $(\implies):$ Sea $\beta\in\mathbb E$, veamos que existe $\alpha\in\mathbb E$ tal que $\sigma(\alpha)=\beta$. Como $\beta\in\mathbb K$ es algebraico, existe un polinomio irreducible $p(x)$ sobre $\mathbb F$ tal que $p(\beta)=0$. Tomemos
> $$R=\{\alpha\in\mathbb E:p(\alpha)=0\}$$
> Es claro que $R\neq\varnothing$ pues $\beta\in R$, además, como $p(x)\in\mathbb F[x]$ y $\sigma|_{\mathbb F}=\text{Id}_{\mathbb F}$, las raíces de $p$ viajan a raíces de $p$ por medio de $\sigma$, esto es $\sigma(R)\subseteq R$ pero además sabemos que $|R|\leq\partial p(x)<\infty$ y como $\sigma$ es inyectiva, también es sobreyectiva. Así, $\sigma(R)=R$ y por tanto existe un $\alpha\in\mathbb E$ tal que $\sigma(\alpha)=\beta$. Concluimos que $\sigma(\mathbb E)=\mathbb E$.
> 
> - $(\Longleftarrow):$ Supongamos un $\alpha\in\mathbb K$ trascendental, entonces el endomorfismo
> 	$$\begin{align*}
	\sigma:\mathbb F(\alpha)&\to\mathbb F(\alpha)\\
	\dfrac{p(\alpha)}{q(\alpha)}&\mapsto\dfrac{p(\alpha^2)}{q(\alpha ^2)}
	\end{align*}$$
> 
> 	Es claramente un monomorfismo que fija a $\mathbb F$ y sin embargo $\sigma(\mathbb F(\alpha))\subsetneq\mathbb F(\alpha)$. Esto contradice la hipótesis y demuestra que no hay elementos trascendentales sobre $\mathbb F$ en $\mathbb K$.

### 4. Sea $|\mathbb K|=q$ y $n$ tal que $(q,n)=1$ y sea $\mathbb F$ el cuerpo de ruptura de $x^n-1\in\mathbb K[x]$ sobre $\mathbb K$. Pruebe que $[\mathbb{F:K}]$ es el menor entero $k$ que suple $n|(q^k-1)$.

> Como $\mathbb K$ es finito, usando que $(q,n)=1$ que por Bézout implica la existencia de $a,b\in\mathbb Z$ tales que $$aq+bn=1$$para el polinomio $f(x)=x^n-1$ con $f'(x)=nx^{n-1}$ se tiene que $$bf'(x)-1f(x)\equiv 1\mod q$$
> Por lo que concluimos que $(f(x),f'(x))=1$ y por tanto $f(x)$ no tiene raíces repetidas en $\mathbb F$.
> 
> Sea $\omega\in\mathbb F$ una raíz primitiva de $x^n-1$, las raíces de este polinomio son $\omega,\omega^2,\dots,\omega^{n-1},1$ por lo que $\langle\omega\rangle$ es un subgrupo de $(\mathbb F^*,\cdot)$ y por el Teorema de Lagrange es obvio que $\langle \omega\rangle=n|(q^k-1)=|\mathbb F|-1$.
> 
> En efecto $k$ es minimal, si $n|(q^{k'-1})$ para algún otro $k'$, es claro que existe algún cuerpo $\mathbb F'$ con cardinalidad $q^{k'-1}$ donde además como $(\mathbb F'^*,\cdot)$ es abeliano, contiene un subgrupo (que como es finito y de un campo, también es cíclico) de orden $n$ de la forma $H=\langle \omega'\rangle$, pero entonces los elementos de $H$ son precisamente las raíces de $x^n-1$ y como $\mathbb F$ es el campo de ruptura de este polinomio, necesariamente $\mathbb F'$ es una extensión de $\mathbb F$ y por tanto $k'\geq k$.

### 5. Sea $f(x)\in\mathbb F[x]$ y $\mathbb E$ su campo de ruptura. Suponga que todas sus raíces (en $\mathbb E$) son distintas. Sea $N=\{\alpha\in\mathbb E:f(\alpha)=0\}$. Pruebe que si para todos $\alpha,\alpha'\in N$, existe $\sigma\in\text{Gal}(\mathbb{E/F})$ tal que $\sigma(\alpha)=\alpha'$, entonces $f(x)$ es irreducible.

> Por contrarrecíproca, supongamos que $f(x)$ es reducible, i.e., $f(x)=p(x)q(x)$ para $p(x),q(x)\in\mathbb F[x]$ con $\partial p,\partial q>0$ y $(p(x),q(x))=1$, entonces $N=N_1\cup N_2$ donde $N_1$ son las raíces de $p(x)$ y $N_2$ las de $q(x)$.
> Así, para cualesquiera $\alpha_1\in N_1$ y $\alpha_2\in N_2$ (obviamente $\alpha_1,\alpha_2\in N$) no existe ningún automorfismo $\sigma$ en $\text{Gal}(\mathbb{E/F})$ tal que $\sigma(\alpha_1)=\alpha_2$. En efecto, de existir tal $\sigma$, ¡tendríamos que $\alpha_2=\sigma(\alpha_1)$ sería una raíz de $p(x)$! Esto no es posible porque tomamos $p(x)$ y $q(x)$ primos relativos.

### 6. Sea $\mathbb K$ una extensión normal finita de $\mathbb F$. Para $\alpha\in\mathbb K$ defina $$N(\alpha)=\prod_{\sigma\in\text{Gal}(\mathbb{K/F})}\sigma(\alpha)$$Pruebe que $N(\alpha)\in\mathbb F$.

> Como $\mathbb K$ es normal, $\mathbb K$ es un campo de despliegue particularmente para $f(x)=\text{irr}(\alpha,\mathbb F)$, esto es, 
> 
> $$f(x)=a_0+a_1x+\dots+a_{n-1}x^{n-1}=(x-\alpha_1)(x-\alpha_2)\dots(x-\alpha_n)$$
> Donde $a_i\in\mathbb F$ y $\alpha_j\in\mathbb K$ son todas las raíces de $f$. Por el ejercicio anterior además tenemos que todo $\alpha_j$ es un $\sigma(\alpha)$ para algún $\sigma\in\text{Gal}(\mathbb{K/F})$. De aquí es inmediato entonces que como $c_0=f(0)=(-1)^nN(\alpha)\in\mathbb F$, también $N(\alpha)\in\mathbb F$.

### 7. Considere el polinomio $x^4-12x^2+25\in\mathbb Q[x]$. Este polinomio es irreducible sobre $\mathbb Q$. Sus raíces son $\alpha=\sqrt{6+\sqrt{11}}$ y $\beta=\sqrt{6-\sqrt{11}}$, $-\alpha$ y $-\beta$.

- Pruebe que $\beta\in\mathbb Q(\alpha)$.

> Tenemos que
> 
> $$\alpha^{-1}=\dfrac{1}{\sqrt{6+\sqrt{11}}}=\dfrac{1}{\sqrt{6+\sqrt{11}}}\cdot\dfrac{\sqrt{6-\sqrt{11}}}{\sqrt{6-\sqrt{11}}}=\dfrac{\sqrt{6-\sqrt{11}}}{5}=\dfrac{\beta}5$$
> 
> De aquí inmediatamente $\beta\in\mathbb Q(\alpha)$.

- Pruebe que $\mathbb Q(\alpha)$ es extensión normal de $\mathbb Q$ de grado 4.

> Como $\mathbb Q$ es perfecto y $[\mathbb Q(\alpha):\mathbb Q]=4$, inmediatamente $\mathbb Q(\alpha)/\mathbb Q$ es separable, además, como $\alpha,\beta,-\alpha,-\beta\in\mathbb Q(\alpha)$, este es el campo de despliegue de $x^4-12x^2+25$.
> 
 
- Describa $\text{Gal}(\mathbb Q(\alpha)/\mathbb Q)$.

> Como $\beta=5\alpha^{-1}$, todos los automorfismos en $\text{Gal}(\mathbb Q(\alpha)/\mathbb Q)$ están completamente determinados por su imagen en $\alpha$, así, los únicos posibles son $\text{Id}_{\mathbb Q(\alpha)},\Psi_{\alpha,-\alpha},\Psi_{\alpha,\beta}$ y $\Psi_{\alpha,-\beta}$.

- Exhiba y determine los cuerpos intermedios entre $\mathbb Q$ y $\mathbb Q(\alpha)$ y su estructura reticular.

> Como $[\mathbb Q(\alpha):\mathbb Q]=4$, cualquier campo intermedio no trivial $\mathbb E$ debe ser tal que $[\mathbb{E:Q}]=2$. Esto es, $\mathbb {E=Q}(\gamma)$ donde $\gamma^2\in\mathbb Q$, además debe darse que $\alpha^2\in\mathbb Q(\gamma)$. Así, el único $\gamma$ posible es $\gamma=\sqrt{11}$ y la estructura reticular es 
> 
> <!-- https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXG1hdGhiYiBRKFxcYWxwaGEpIl0sWzAsMiwiXFxtYXRoYmIgUShcXGdhbW1hKSJdLFswLDQsIlxcbWF0aGJiIFEiXSxbMCwxLCIyIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFsxLDIsIjIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXG1hdGhiYiBRKFxcYWxwaGEpIl0sWzAsMiwiXFxtYXRoYmIgUShcXGdhbW1hKSJdLFswLDQsIlxcbWF0aGJiIFEiXSxbMCwxLCIyIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFsxLDIsIjIiLDAseyJzdHlsZSI6eyJoZWFkIjp7Im5hbWUiOiJub25lIn19fV1d&embed" width="181" height="688" style="border-radius: 8px; border: none;"></iframe>

### 8. Pruebe que si $\mathbb F$ es perfecto y $\mathbb{E/F}$ es una extensión algebraica de $\mathbb F$, entonces $\mathbb E$ es perfecto.

> Si $\text{char}(\mathbb F)=0$, entonces $\text{char}(\mathbb E)=0$ y así, $\mathbb E$ es también perfecto.
> 
> Si $\text{char}(\mathbb F)=p>0$, vamos a hacer uso del siguiente resultado:
> 
> #### Lema: Si $\text{char}(\mathbb F)=p\neq0$. $\mathbb F$ es perfecto si y sólo si todo $\alpha\in\mathbb F$ tiene una $p$-ésima raíz en $\mathbb F$, i.e., existe $\beta\in\mathbb F$ tal que $\beta^p=\alpha$.
> 
> > _Demostración:_
> > 
> > - ($\Longrightarrow$): Por contrarrecíproca, supongamos $\alpha\in\mathbb F-\mathbb F^p$, vamos a mostrar que $p(x)=x^p-\alpha$ es irreducible e inseparable sobre $\mathbb F$. La inseparabilidad es obvia, pues va a tener una raíz de multiplicidad $m>1$. Para la irreducibilidad supongamos que $p(x)$ es reducible, entonces tiene un factor de la forma $(x-\beta)^m$ con $1\leq m<p$, esto es, $m\cdot1\neq0$ y por el lema 51.11 de [**Fraleigh**], $\beta\in\mathbb F$, de forma que existe $\beta$ tal que $\beta^p=\alpha$. Luego necesariamente $p(x)$ es irreducible y su campo de despliegue (finito, obvio) es inseparable. Concluimos que $\mathbb F$ no es perfecto.
> > - ($\Longleftarrow$): Nuevamente por contrarrecíproca, supongamos que $\mathbb F$ no es perfecto, por lo que podemos suponer un polinomio irreducible $p(x)\in\mathbb F$ tal que su campo de despliegue es inseparable. Esto, por el ejercicio 51.19 de [**Fraleigh**] implica que 
> > $$p(x)=\sum_{i=0}^na_ix^{pi}$$
> > Así, si $\mathbb {F=F}^p$, entonces $a_i=b_i^p$ para cada $0\leq i\leq n$, pero entonces
> > $$p(x)=\left(\sum_{i=0}^nb_ix^i\right)^p$$
> > Lo que contradice que $p(x)$ fuera irreducible ($q(x)=\sum b_ix^i\in\mathbb F[x]$). Así, concluimos que necesariamente $\mathbb{F}\neq\mathbb{F}^p$.
> 
> Entonces, sea $\mathbb E$ una extensión algebraica de un campo $\mathbb F$ con característica prima $p$, es claro que cualquier extensión finita $\mathbb K$ sobre $\mathbb E$ es una extensión algebraica también sobre $\mathbb F$ por lo que basta ver que cualquier $\alpha\in\mathbb K$ es separable sobre $\mathbb F$.
> 
> Sea $f(x)=\text{irr}(\alpha,\mathbb F)$, similar a la demostración de 51.14 en [**Fraleigh**], sabemos que 
> 
> $$f(x)=\prod_{i=1}^n(x^{p^t}-\alpha_i^{p^t})$$
> Donde $\alpha_i\in\overline{\mathbb F}$ son las raíces de $f(x)$ y $t\in\mathbb Z^+$. Considerando el polinomio $g(x)\in\mathbb F[x]$ tal que $f(x)=g(x^{p^t})$ sabemos que $\mathbb F(\alpha^{p^t})$ es separable (todas las raíces en $g(x)$ tienen multiplicidad uno) pero además, como $\mathbb F$ es perfecto, tenemos que todas las raíces $p$-ésimas de $\mathbb F(\alpha^{p^t})$ están en $\mathbb F(\alpha^{p^t})$ por lo que en particular las raíces $p^t$-ésimas también y así, $\alpha\in \mathbb F(\alpha^{p^t})$ y por tanto $\mathbb F(\alpha)=\mathbb F(\alpha
^{p^t})$ es separable sobre $\mathbb F$. Naturalmente también debe serlo sobre $\mathbb E$ y por tanto $\mathbb K$ es separable sobre $\mathbb E$.

### 9. Pruebe que si $[\mathbb{E:F}]=2$ entonces $\mathbb E$ es una extensión normal de $\mathbb F$.

> En efecto, sea $\alpha\in\mathbb{E-F}$, necesariamente $\mathbb{E=F}(\alpha)$ y $\partial\text{ irr}(\alpha,\mathbb F)=2$. Así,
> 
> $$\text{irr}(\alpha,\mathbb F)=x^2+bx+c$$
> 
> Llamando a este polinomio $p(x)$, tenemos que la traslación $\hat p(x)=p(x-\frac b2)=x^2+d$ para algún $d\in\mathbb F$. La utilidad de esto viene a que si $\hat\alpha$ es una raíz de $\hat p(x)$, $\mathbb F(\alpha)=\mathbb F(\hat\alpha)=\mathbb E$. 
> 
> Así, basta con ver que la otra raíz de $\hat p(x)$ está en $\mathbb E$. Esto es evidente pues la otra raíz es $-\hat\alpha$, luego la conjugada de $\alpha$ (llamémosla $\alpha'$) también está en $\mathbb E$ y por tanto $\Psi_{\alpha,\alpha'}\in\text{Gal}(\mathbb{E/F})$ y por tanto $\{\mathbb{E:F}\}=[\mathbb{E:F}]=2$ y $\mathbb E$ es el campo de despliegue de $p(x)$.

### 10. Suponga que $\mathbb{E/F}$. Pruebe que $\alpha\in\mathbb E$ es separable sobre $\mathbb F$ si y sólo si $\alpha$ es raíz de un polinomio que carece de raíces múltiples.

> - ($\Longrightarrow$): Como $\{\mathbb F(\alpha):\mathbb F\}=[\mathbb F(\alpha):\mathbb F]=\partial \text{irr}(\alpha,\mathbb F)$, existen tantas conjugadas de $\alpha$ como grado tiene el irreducible de $\alpha$, así, no pueden haber raíces múltiples.
> ($\Longleftarrow$): Es análogo al anterior.

### 11. Suponga que $\text{char}(\mathbb F)=p\neq0$ y $\mathbb{E/F}$. Pruebe que $$\mathbb K=\{\alpha\in\mathbb E:\exists n\in\mathbb Z,\alpha^{p^n}\in\mathbb F\}$$ es un subcuerpo de $\mathbb E$.

> Sean $\alpha,\beta\in\mathbb K$, donde asumimos que $n,m\in\mathbb Z^+$ tales que $\alpha^{p^n},\beta^{p^m}\in\mathbb F$, entonces 
> 
> - $(\alpha+\beta)^{p^{\text{máx}\{m,n\}}}=\alpha^{p^{\text{máx}\{m,n\}}}+\beta^{p^{\text{máx}\{m,n\}}}\in\mathbb F$.
> - $(-\alpha)^{p^n}=-(1)^{p^{n}}\alpha^{p^{n}}\in\mathbb F$. (análogamente para $\beta$).
> - $0^1\in\mathbb F$ y $1\in\mathbb F$.
> - $(\alpha\beta)^{p^{\text{máx}\{m,n\}}}=\alpha^{p^{\text{máx}\{m,n\}}}\beta^{p^{\text{máx}\{m,n\}}}\in\mathbb F$.

### 12. Pruebe que $\mathbb Q(i,\sqrt 3)$ es extensión separable de $\mathbb Q$. Halle $\gamma$ tal que $\mathbb Q(\gamma)=\mathbb Q(i,\sqrt 3)$

> Es claro que $i,-i,\sqrt3,-\sqrt3\in\mathbb Q(i,\sqrt3)$ por lo que $\{\mathbb Q(i,\sqrt 3):\mathbb Q\}=[\mathbb Q(i,\sqrt 3):\mathbb Q]=4$. 
> 
> Además, propongamos $\gamma=i+\sqrt 3$, es inmediato que $\mathbb Q(\gamma)\subseteq \mathbb Q(i,\sqrt3)$. Falta ver que $i,\sqrt3\in\mathbb Q(\gamma)$, esto lo podemos deducir usando que
> 
> $$-4\gamma^{-1}=-4\dfrac{1}{i+\sqrt3}\cdot\dfrac{i-\sqrt3}{i-\sqrt 3}=i-\sqrt3\in\mathbb Q(\gamma)$$
> 
> Y como $\mathbb Q(\gamma)$ es cerrado bajo suma y producto, directamente tenemos que $i,\sqrt3\in\mathbb Q(\gamma)$ y por tanto la igualdad.

### 13. Sean $\alpha,\beta\in\overline{\mathbb F}$ separables sobre $\mathbb F$. Pruebe que también lo son $\alpha+\beta,\alpha\beta,\beta^{-1}$.

> Veamos que $\mathbb F(\alpha,\beta)$ es separable sobre $\mathbb F$. Por definición tenemos que $\mathbb F(\alpha,\beta)=\mathbb F(\alpha)(\beta)$, así, además tenememos que en $\mathbb F(\alpha)[x]$, $\text{irr}(\beta,\mathbb F(\alpha))|\text{irr}(\beta,\mathbb F)$ y como $\beta$ es separable sobre $\mathbb F$, $\text{irr}(\beta,\mathbb F)$ no tiene raíces con multiplicidad múltiple, por lo que $\text{irr}(\beta,\mathbb F(\alpha))$ tampoco tiene. De esto tenemos que $\beta$ es separable sobre $\mathbb F(\alpha)$, luego $\{\mathbb F(\alpha,\beta):\mathbb F(\alpha)\}=[\mathbb F(\alpha,\beta):\mathbb F(\alpha)]$ y usando que $\alpha$ es separable sobre $\mathbb F$, tenemos que
> 
> $$\{\mathbb F(\alpha,\beta):\mathbb F\}=\{\mathbb F(\alpha,\beta):\mathbb F(\alpha)\}\{\mathbb F(\alpha):\mathbb F\}=[\mathbb F(\alpha,\beta):\mathbb F]$$
> 
> Así, como $\alpha+\beta,\alpha\beta,\beta^{-1}\in\mathbb F(\alpha,\beta)$, concluimos que también son separables.

### 14. ¿Es el mismo que el punto 8?

### 15. Sea $\alpha$ raíz de $x^3-x+1\in\mathbb Q[x]$ y $j$ raíz cúbica primitiva de unidad. Determine un elemento primitivo de $\mathbb Q(\alpha,j)$.

> Sabemos que $p(x)=\text{irr}(\alpha,\mathbb Q)=x^3-x+1$ y $q(x)=\text{irr}(j,\mathbb Q)=x^2+x+1$. Por tanto $[\mathbb{Q}(\alpha):\mathbb Q]=3$ y $[\mathbb Q(j)L\mathbb Q]=2$ de modo que $[\mathbb Q(\alpha,j):\mathbb Q]=6$, así necesitamos encontrar un elemento $\gamma$ tal que $\partial\text{irr}(\gamma,\mathbb Q)=6$.
> 
> Proponemos $\gamma=\alpha+j$. Es inmediato que $\mathbb Q(\gamma)\subseteq\mathbb(\alpha,j)$ por lo que
> 
> $$[\mathbb Q(\gamma):\mathbb Q]|6$$
> 
> Esto es, $[\mathbb Q(\gamma):\mathbb Q]\in\{1,2,3,6\}$. Sin embargo dado que $\mathbb Q(j)\subsetneq\mathbb Q(\gamma)$ y $\mathbb Q(\alpha)\subsetneq\mathbb Q(\gamma)$ descartamos los casos $1,2,3$ por lo que necesariamente $[\mathbb Q(\gamma):\mathbb Q]=6$. Así, concluimos que $\mathbb Q(\gamma)=\mathbb Q(\alpha,j)$.

### 16. Sea $\mathbb K\leq\mathbb C$ y $f(x)\in\mathbb K[x]$ con $\partial f=n$. Sea $\mathbb L$ el cuerpo de ruptura de $f(x)$ ($\mathbb{C/L/K}$). Pruebe que $[\mathbb {L:K}]|n!$

> Como $\text{char}(\mathbb K)=\text{char}(\mathbb C)=0$, $\mathbb K$ es perfecto. Así y usando que $\mathbb L$ es campo de despliegue, $[\mathbb{L:K}]=\{\mathbb{L:K}\}=|\text{Gal}(\mathbb{L/K})|$.
> 
> Así, es fácil ver que si $R_f$ es el conjunto de todas las raíces de $f(x)$, $\text{Gal}(\mathbb{L/K})\leq S_{R_f}\cong S_n$. Luego por el teorema de Lagrange, $[\mathbb{L:K}]$ divide $|S_n|=n!$.

### 17. Determine el cuerpo de ruptura de $x^4+2$ sobre $\mathbb Q$. ¿Es dicho cuerpo una extensión normal de $\mathbb Q$?

> Las raíces de $x^4+2$ son $\{\sqrt[4]{2}\varepsilon^k\}_{1\leq k\leq 4}$ donde $\varepsilon$ es una raíz de $x^4+1$. Sabemos que $\varepsilon$ es de la forma $\pm\sqrt2\pm\sqrt2i$ y por inspección, es fácil ver que $\mathbb Q(\varepsilon)=\mathbb Q(\sqrt2,i)$. Así, el campo de despliegue del polinomio es $\mathbb E=\mathbb Q(\sqrt[4]{2},\varepsilon)=\mathbb Q(\sqrt[4]{2},\sqrt2,i)=\mathbb Q(\sqrt[4]{2},i)$. Como $\mathbb Q$ es perfecto y $\mathbb E$ es un campo de despliegue, naturalmente también es una extensión normal.


### 18. Suponga que $\mathbb{[E:F]}<\infty$. Pruebe que si $\mathbb E$ es una extensión normal de $\mathbb F$, entonces $\mathbb E_{\text{Gal}(\mathbb{E/F})}=\mathbb F$, esto es, $\mathbb E$ es _Galois_ sobre $\mathbb F$.

> Primero probaremos un resultado más importante:
> 
> #### Lema: Sea $H\leq\text{Gal}(\mathbb{E/F})$. Entonces
>	-  $\mathbb{E/E}_{H}$ es una extensión normal.
> 	- $\text{Gal}(\mathbb{E/E}_{H})=H$
> 
> >_Demostración:_
> > 
> > Sea $\mathbb {K=E}_H$, tenemos que $\mathbb{E/K/F}$ por lo que $[\mathbb{E/K}]<\infty$ y además como $\mathbb E$ era campo de despliegue sobre $\mathbb F$, también lo es sobre $\mathbb K$.
> > 
> > Por otro lado, dado que $H\leq\text{Gal}(\mathbb{E/K})$ tenemos que
> >  
> > $$|H|\leq|\text{Gal}(\mathbb{E/K})|\leq[\mathbb{E:K}]\leq|H|$$
> > 
> > Por lo que $|\text{Gal}(\mathbb{E/K})|=[\mathbb{E:K}]$ y $|H|=|\text{Gal}(\mathbb{E/K})|$ por lo que $\mathbb{E/K}$ es normal y $H=\text{Gal}(\mathbb{E/K})$
> 
> Así, sea $G=\text{Gal}(\mathbb{E/F})$ y $\mathbb F'=\mathbb E_G$, tenemos que $\mathbb{E/F'/F}$ y por el lema de las torres
> 
> $$\mathbb{[E:F]=[E:F'][F':F]}$$
> 
> Pero por el lema anterior $[\mathbb{E:F'}]=|G|=\mathbb{[E:F]}$, luego $[\mathbb{F':F}]=1$ y $\mathbb{F=F'=E}_{G}$.

### 19. Determine $\text{Gal}(x^4-5/\mathbb Q)$ y $\text{Gal}(x^4-5/\mathbb{Q}(i\sqrt5))$.

> Las raíces de $x^4-5$ son de la forma $\sqrt[4]5\omega$ donde $\omega$ es raíz cuarta de unidad, estas son $\pm\sqrt[4]5$ y $\pm i\sqrt[4]5$. De aquí es inmediato que el cuerpo de despliegue de $x^4-5$ es $\mathbb Q(\sqrt[4]5,i)$ y así, $[\mathbb Q(\sqrt[4]5,i):\mathbb Q]=|\text{Gal}(\mathbb Q(\sqrt[4]5,i)/\mathbb Q)|=8$ y $[\mathbb Q(\sqrt[4]5,i)/\mathbb Q(i\sqrt5)]=4$. De aquí llamemos $\tau=\Psi_{i,-i}$ y $\sigma=\Psi_{\sqrt[4]5,i\sqrt[4]5}$, notemos que en términos de las raíces de $x^4-5$, $\tau=\Psi_{i\sqrt[4]5,-i\sqrt[4]5}$. Luego
> 
> - $\text{Gal}(\mathbb Q(\sqrt[4]5,i)/\mathbb Q)=\langle\tau,\sigma\rangle\cong D_4$.
> - $\text{Gal}(\mathbb Q(\sqrt[4]5,i)/\mathbb Q(i\sqrt5))=\langle\tau\sigma,\sigma^2\rangle\cong V$.

### 20. Sea $\mathbb L$ extension normal finita de $\mathbb F$ y sea $f(x)\in\mathbb F[x]$ irreducible con $\alpha\in\mathbb L$ tal que $f(\alpha)=0$. Pruebe o refute: $f(\beta)=0\implies\beta\in\mathbb L$.

> Por definición, si $\mathbb L$ es normal, entonces es el campo de despliegue de un conjunto finito de polinomios. Como $\alpha\in\mathbb L$ y $\text{irr}(\alpha,\mathbb K)=f(x)$, todas las raíces de $f$ están en $\mathbb L$.

### 21. Sea $\sigma\in\text{Gal}(\mathbb Q(\pi)/\mathbb Q)$ tal que $\sigma(\pi)=-\pi$.

- Describa el cuerpo fijo de $\sigma$.

> Tiene cara de ser $\mathbb Q(\pi^2)$ por demostración por Ramanujan queda listo.

- Describa los isomorfismos que extienden $\sigma$ a un isomorfismo de $\mathbb Q(\sqrt\pi)$ a un subcuerpo de $\overline{\mathbb Q(\sqrt\pi)}$

> Nuevamente por Ramanujan, se me ocurrió el siguiente diagrama
> 
> <!-- https://q.uiver.app/#q=WzAsNCxbMCwyLCJcXG1hdGhiYiBRKFxccGkpIl0sWzIsMiwiXFxtYXRoYmIgUShcXHBpKSJdLFswLDAsIlxcbWF0aGJiIFEoXFxzcXJ0XFxwaSkiXSxbMiwwLCJcXG1hdGhiYiBRKGlcXHNxcnRcXHBpKSJdLFswLDEsIlxcc2lnbWEiXSxbMCwyLCIiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMSwzLCIiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMiwzLCJcXHRhdSIsMl1d -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsNCxbMCwyLCJcXG1hdGhiYiBRKFxccGkpIl0sWzIsMiwiXFxtYXRoYmIgUShcXHBpKSJdLFswLDAsIlxcbWF0aGJiIFEoXFxzcXJ0XFxwaSkiXSxbMiwwLCJcXG1hdGhiYiBRKGlcXHNxcnRcXHBpKSJdLFswLDEsIlxcc2lnbWEiXSxbMCwyLCIiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMSwzLCIiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMiwzLCJcXHRhdSIsMl1d&embed" width="503" height="432" style="border-radius: 8px; border: none;"></iframe>

### 22. Sea $\mathbb {C/K}$ y sean $a,b\in\mathbb C$. Pruebe que si $c=\sqrt a+\sqrt b\neq0$ entonces $c$ es un elemento primitivo de $\mathbb K(\sqrt a,\sqrt b)$.

> En efecto, es claro que $\mathbb K(c)\subseteq\mathbb K(\sqrt a,\sqrt b)$. Veamos que $\sqrt a,\sqrt b\in\mathbb K(c)$.
> 
> Como $c\neq 0$, $c^{-1}\in\mathbb K(c)$ y además,
> 
> $c^{-1}=\dfrac{1}{\sqrt a+\sqrt b}=\dfrac{1}{\sqrt a+\sqrt b}\cdot\dfrac{\sqrt a-\sqrt b}{\sqrt a-\sqrt b}=\dfrac{\sqrt a-\sqrt b}{a-b}$
> 
> No sé como llegar a que $a-b\in\mathbb K(c)$, puede que sean trascendentales.

## Algunas referencias:

- [Field Theory de Pete L. Clark](http://alpha.math.uga.edu/%7Epete/FieldTheory.pdf).
- [Perfect Dielfs de Keith Conrad](https://kconrad.math.uconn.edu/blurbs/galoistheory/perfect.pdf).
- [MSE: "$F(a,b)$ separable if $F(a)$ and $F(b)$ are separable"](https://math.stackexchange.com/questions/4021676/fa-b-separable-if-fa-and-fb-are-separable).
- [MSE: "Minimal polynomial of product, sum, etc., of two algebraic numbers"](https://math.stackexchange.com/questions/1438163/minimal-polynomial-of-product-sum-etc-of-two-algebraic-numbers).
- [MSE: "Is there an efficient algorithm to compute a minimal polynomial for the root of a polynomial with algebraic coefficients?"](https://math.stackexchange.com/questions/161707/is-there-an-efficient-algorithm-to-compute-a-minimal-polynomial-for-the-root-of?rq=1).
- [Resultant and Discriminant of Polynomials de Svante Janson](https://www2.math.uu.se/~svantejs/papers/sjN5.pdf).
- [MATH200C, LECTURE 1 de Golsefidy](https://mathweb.ucsd.edu/~asalehig/math200c-19-s-lecture01.pdf).
- [MSE: "Galois group of $x^4-5$"](https://math.stackexchange.com/questions/629460/galois-group-of-x4-5).
- [MSE: "For what $c\in\mathbb Q$ is $\sqrt2+c\sqrt3$ a primitive elemento of $\mathbb Q(\sqrt2,\sqrt3)$?"](https://math.stackexchange.com/questions/4645805/for-what-c-in-mathbbq-is-sqrt2c-sqrt3-a-primitive-element-of-mat).