# Acciones

## Definición:

Sea un grupo $(G,\cdot)$ y un conjunto $X$, diremos que una función $\varphi$

$$
\begin{align*}\varphi:G\times X&\to X\\(g,x)&\mapsto gx\end{align*}
$$

Es una *acción de $G$ sobre $X$* si se tiene que:

- $ex=x$ para todo $x\in X$.
- $(g_1\cdot g_2)x=g_1(g_2x)$

La primera condición garantiza que el neutro de $G$ actúe como neutro sobre $X$. La segunda hace una suerte de composición sobre las acciones, en donde si $g_3=g_1\cdot g_2$ entonces $g_3x=g_1(g_2x)$.

## Conjuntos asociados a acciones:

- **Grupo isotrópico de $x$:** es definido como
  
  $$
  \begin{align*}G_x:=\{g\in G: gx=x\}\end{align*}
  $$
  
  Así, dada una acción $\varphi$ de $G$ sobre $X$, $G_x$ son los elementos de $G$ que dejan fijo a $x$. Se tiene que $G_x\leq G$.

- **Órbitas de $x$:** son definidas como
  
  $$
  \begin{align*}\overline{x}:=\{y\in X:\exists g\in G,gx=y\}\end{align*}
  $$
  
  Una manera más fácil de entenderlo es viendo a $\overline{x}$ como una suerte de clase lateral $Gx$. Básicamente el conjunto de todos los $gx$ para un $x\in X$ fijo y $g\in G$ alternante.

- **Centralizadores:** Para un subgrupo $H\leq G$ que actúa sobre $G$ por conjugación, esto es  
  
  $$
  \begin{align*}\varphi:H\times G&\to G\\(h,g)&\mapsto hgh^{-1}\end{align*}
  $$
  
  Se puede definir un **centralizador de $x$ en $H$** como
  
  $$
  \begin{align*}H_x:&=\{h\in H: hxh^{-1}=x\}\\&=\{h\in H: hx=xh\}\\&=C_h(x)\end{align*}
  $$
  
  Particularmente si $H=G$, entonces $C_G(x)$ se dice **centralizador de $x$**

- **Normalizadores:** Análogo a los centralizadores, supongamos que $H\leq G$ actúa sobre $S=\{K:K\leq G\}$ por medio de la conjugación de subgrupos definido como
  
  $$
  \begin{align*}\varphi:H\times S&\to S\\ (h,K)&\mapsto hKh^{-1}\end{align*}
  $$
  
  Entonces definimos el normalizador de $K$ en $H$
  
  $$
  \begin{align*}N_H(K):=\{h\in H: hKh^{-1}=K\}\end{align*}
  $$
  
  Naturalmente, $K\unlhd N_G(K)$ y $K\unlhd G$ sii $N_g(K)=G$.

## Propiedades

> En realidad son teoremas que no quiero demostrar

- $|\overline{x}|=\left[G:G_x\right]$.
- **Cayley:** Todo grupo finito $G$ con $|G|=n$ es isomorfo a un subgrupo de $S_n$.
- $|G|=\sum_{i=1}^{n}\left[G:C_G(x_i)\right]$.
- El número de subgrupos de $G$ conjugados a $K$, es decir, el número de subgrupos de la forma $gKg^{-1}$ con $g\in G$, es igual a $[G:N_G(K)]$, el cual divide a $|G|$.
- **Lema del normalizador:** $H\lneq N_G(H)$ y el orden del grupo cociente $N_G(H)/H=p^k$ para algún $k\in\mathbb{N}$.