# Syllabus: Linear Algebra Expansion

## Unit 1: Systems of Linear Equations

### 1.1 Introduction to Linear Systems
- What is a linear equation? What makes a system?
- The row picture: equations as geometric constraints (lines, planes, hyperplanes)
- Solution types: one solution, no solution, infinitely many solutions
- Visualizing intersections in 2D and 3D

### 1.2 Augmented Matrices and Row Reduction
- Representing systems as augmented matrices
- Elementary row operations
- Row echelon form (REF) and reduced row echelon form (RREF)
- Gaussian elimination algorithm

### 1.3 Interpreting Solutions
- Pivot positions and free variables
- Parametric vector form of solutions
- Homogeneous vs. non-homogeneous systems
- Existence and uniqueness of solutions

---

## Unit 2: Vectors and Linear Combinations

### 2.1 Vectors in ℝⁿ
- Vectors as arrows vs. vectors as lists of numbers
- Vector addition and scalar multiplication (algebraically and geometrically)
- The zero vector and additive inverses

### 2.2 Linear Combinations and Span
- The column picture: Ax as a linear combination of columns
- Definition of span
- Visualizing span in 2D and 3D
- "Can we reach b?" — span as reachability

### 2.3 Linear Independence
- Definition and geometric intuition
- Testing for linear independence via row reduction
- Relationship to free variables in homogeneous systems

---

## Unit 3: Matrix-Vector Multiplication and Linear Transformations

### 3.1 Matrix-Vector Multiplication
- Definition: Ax as a linear combination of columns
- Row-column computation method
- Properties of matrix-vector multiplication

### 3.2 Linear Transformations
- The transformation picture: A as a function from ℝⁿ to ℝᵐ
- Visualizing transformations: what happens to the unit grid?
- Standard transformations: rotations, reflections, shears, projections, scaling
- Every linear transformation has a matrix (standard matrix)

### 3.3 The Matrix of a Linear Transformation
- Finding the matrix from transformation properties
- Image of basis vectors determines the transformation
- Composition preview: chaining transformations

---

## Unit 4: Matrix Operations

### 4.1 Matrix Multiplication
- Definition: composition of linear transformations
- Row-column computation
- Properties: associativity, distributivity, non-commutativity!
- Powers of matrices

### 4.2 The Inverse of a Matrix
- Definition: undoing a transformation
- Finding inverses via row reduction [A | I] → [I | A⁻¹]
- When do inverses exist? (invertible/non-singular matrices)
- Properties of inverses

### 4.3 Invertible Matrix Theorem (Preview)
- Equivalent conditions for invertibility
- Connections to solutions of Ax = b

---

## Unit 5: Determinants

### 5.1 Introduction to Determinants
- Geometric meaning: signed area/volume scaling factor
- 2×2 and 3×3 formulas
- Determinant as "expansion factor" of a transformation

### 5.2 Properties of Determinants
- Effect of row operations on determinants
- det(AB) = det(A)det(B)
- det(Aᵀ) = det(A)
- Determinant and invertibility

### 5.3 Computing Determinants
- Cofactor expansion
- Row reduction method
- Cramer's Rule (brief mention)

---

## Unit 6: Eigenvalues and Eigenvectors

### 6.1 Introduction to Eigenvalues and Eigenvectors
- Definition: vectors that only scale under transformation
- Geometric intuition: invariant directions
- Finding eigenvalues: the characteristic polynomial det(A - λI) = 0

### 6.2 Finding Eigenvectors
- Solving (A - λI)x = 0 for each eigenvalue
- Eigenspaces
- Algebraic vs. geometric multiplicity

### 6.3 Diagonalization
- When is a matrix diagonalizable?
- A = PDP⁻¹ and what it means
- Powers of matrices via diagonalization
- Complex eigenvalues (brief treatment)

---

## Unit 7: Vector Spaces and Subspaces

### 7.1 Subspaces of ℝⁿ
- Definition and examples
- Null space of a matrix
- Column space of a matrix
- Row space of a matrix

### 7.2 Basis and Dimension
- What is a basis?
- Finding bases for null space, column space, row space
- Dimension of a subspace

### 7.3 Rank and the Rank-Nullity Theorem
- Rank = dimension of column space = dimension of row space
- Nullity = dimension of null space
- Rank + Nullity = number of columns
- The Invertible Matrix Theorem (full version)

---

## Unit 8: Orthogonality

### 8.1 Dot Products and Orthogonality
- The dot product in ℝⁿ
- Length, distance, and angle
- Orthogonal vectors and orthogonal complements

### 8.2 Orthogonal Projections
- Projection onto a line
- Projection onto a subspace
- The projection matrix

### 8.3 Gram-Schmidt Orthogonalization
- Motivation: orthogonal bases are nice
- The Gram-Schmidt process
- QR factorization

---

## Unit 9: Least Squares and Applications

### 9.1 The Least Squares Problem
- When Ax = b has no solution
- Minimizing ||Ax - b||
- Geometric interpretation: projection onto column space

### 9.2 The Normal Equations
- Aᵀ Ax = Aᵀ b
- Solving least squares problems
- Least squares regression (application)

---

## Unit 10: Symmetric Matrices and Quadratic Forms

### 10.1 Similar Matrices
- Definition: A and B are similar if B = P⁻¹AP
- Similar matrices have the same eigenvalues
- Change of basis interpretation

### 10.2 Orthogonal Diagonalization
- Symmetric matrices have real eigenvalues
- Eigenvectors of symmetric matrices are orthogonal
- The Spectral Theorem: A = QDQᵀ

### 10.3 Quadratic Forms (Optional)
- Definition and matrix representation
- Positive definite, negative definite, indefinite
- Classification via eigenvalues

---

## Unit 11: The Singular Value Decomposition

### 11.1 Motivation and Definition
- Every matrix has an SVD: A = UΣVᵀ
- Geometric interpretation: rotate, stretch, rotate
- Singular values and their meaning

### 11.2 Computing the SVD
- Finding V from AᵀA
- Finding U from AAᵀ
- The relationship between singular values and eigenvalues

### 11.3 Applications of SVD
- Low-rank approximation
- Image compression
- Pseudoinverse

---

## Unit 12: Applications (Time Permitting)

### 12.1 Principal Component Analysis (PCA)
- Dimensionality reduction
- Finding principal components via eigenvalues of covariance matrix
- Connection to SVD

### 12.2 Markov Chains (Optional)
- Stochastic matrices
- Steady-state vectors as eigenvectors
- Google's PageRank as an application

---

## Appendix: The Invertible Matrix Theorem

A comprehensive list of equivalent statements for an n×n matrix A:
1. A is invertible
2. A is row equivalent to Iₙ
3. A has n pivot positions
4. Ax = 0 has only the trivial solution
5. The columns of A are linearly independent
6. The columns of A span ℝⁿ
7. There exists an n×n matrix C such that CA = I
8. There exists an n×n matrix D such that AD = I
9. Aᵀ is invertible
10. det(A) ≠ 0
11. 0 is not an eigenvalue of A
12. The column space of A is ℝⁿ
13. The null space of A is {0}
14. rank(A) = n
