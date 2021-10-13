# 第一章 引论
## 数学知识复习

### 指数

$$
X^AX^B=X^{A+B} \\
\frac{A^A}{A^B} = X^{A-B} \\
(A^A)^B = X^{AB} \\
X^N + X^N = 2X^N \neq X^{2N} \\
2^N + 2^N = 2^{N+1}
$$

### 对数

> 计算机科学中，除非特别声明，否则所有对数都以2为底

* 对数定义：$X^A=B$ 当且仅当 $log_{X}B = A$ 

* $$
  log_{A}B=\frac{log_{C}B}{log_{C}A}; A,B,C>0,A\neq1,C\neq1
  $$

  证明:

  令$X=log_{C}B$，$Y=log_{C}A$，$Z=log_{A}B$。由对数定义得，$C^X=B$，$C^Y=A$，$A^Z=B$，联合得到$(C^Y)^Z=C^X=B$，因此$X=YZ$，得$Z=X/Y$

* $$
  logAB=logA+logB;A,B>0
  $$

* 证明：

  如上，假设$X=logA$，$Y=logB$，$Z=logAB$。略

同理可证：
$$
logA/B = logA - logB \\
log(A^B) = BlogA \\
logX<X;X>0 \\
log1=0,log2=1,log1024=10,log1048576=20
$$


### 级数





