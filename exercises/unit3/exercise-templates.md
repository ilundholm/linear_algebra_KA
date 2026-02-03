# Unit 3 Exercise Templates

_Templates for algorithmically generated practice problems._

---

## 3.1 Matrix-Vector Multiplication

### Exercise 3.1.1: Compute Ax (2×2)

**Skill:** Multiply a 2×2 matrix by a 2D vector.

**Parameters:**
- `matrix_entries`: integers in [-5, 5]
- `vector_entries`: integers in [-5, 5]

**Generation Logic:**
1. Generate random matrix and vector
2. Compute product via row method or column method

**Distractor Logic:**
- Transpose the matrix first
- Do row×row instead of row×column
- Sign errors
- Off-by-one in components

**Example Instance:**
```
Compute: [1 2; 3 4] · [5; 6]

(A) [17, 39]
(B) [11, 27]
(C) [17, 27]
(D) [5, 18]

Answer: (A)
Row 1: 1(5) + 2(6) = 17
Row 2: 3(5) + 4(6) = 39
```

---

### Exercise 3.1.2: Compute Ax (3×3)

**Skill:** Multiply a 3×3 matrix by a 3D vector.

**Parameters:**
- Same as 3.1.1, but 3×3

**Example Instance:**
```
Compute: [1 0 2; 0 1 3; 0 0 1] · [1; 2; 3]

(A) [7, 11, 3]
(B) [1, 2, 3]
(C) [7, 2, 3]
(D) [1, 11, 3]

Answer: (A)
Row 1: 1 + 0 + 6 = 7
Row 2: 0 + 2 + 9 = 11
Row 3: 0 + 0 + 3 = 3
```

---

### Exercise 3.1.3: Dimension Compatibility

**Skill:** Determine if matrix-vector product is defined.

**Parameters:**
- `matrix_size`: various (2×3, 3×2, 3×4, etc.)
- `vector_size`: various

**Example Instance:**
```
A is a 3×4 matrix. Which vector can you multiply A by?

(A) A vector in ℝ³
(B) A vector in ℝ⁴
(C) A vector in ℝ⁷
(D) Any vector

Answer: (B)
```

---

### Exercise 3.1.4: Result Dimension

**Skill:** Determine the dimension of the output.

**Parameters:**
- `matrix_size`: various

**Example Instance:**
```
A is a 5×3 matrix, x is in ℝ³. The product Ax is in:

(A) ℝ³
(B) ℝ⁵
(C) ℝ⁸
(D) ℝ¹⁵

Answer: (B)
```

---

### Exercise 3.1.5: Column Method Interpretation

**Skill:** Express Ax as a linear combination of columns.

**Parameters:**
- `matrix_size`: 2×2 or 3×2
- `vector_entries`: small integers

**Example Instance:**
```
Write [1 3; 2 4] · [2; -1] as a linear combination of columns.

(A) 2[1; 2] - 1[3; 4]
(B) [1; 2] + 3[2; -1]
(C) 2[1; 3] - 1[2; 4]
(D) 2[3; 4] - 1[1; 2]

Answer: (A)
```

---

### Exercise 3.1.6: Identity Matrix

**Skill:** Recognize that Ix = x.

**Example Instance:**
```
Let I be the 3×3 identity matrix. What is I · [7; -2; 5]?

(A) [0, 0, 0]
(B) [7, -2, 5]
(C) [1, 1, 1]
(D) [7, 7, 7]

Answer: (B)
```

---

## 3.2 Linear Transformations

### Exercise 3.2.1: Standard Transformation Identification

**Skill:** Match a matrix to its geometric transformation.

**Parameters:**
- `transformation_type`: rotation, reflection, scaling, shear, projection
- `matrix`: the corresponding 2×2 matrix

**Example Instance:**
```
What transformation does [0 -1; 1 0] represent?

(A) Rotation by 90° counterclockwise
(B) Rotation by 90° clockwise
(C) Reflection across the x-axis
(D) Horizontal shear

Answer: (A)
```

---

### Exercise 3.2.2: Image of Basis Vector

**Skill:** Find where a standard basis vector lands under a transformation.

**Parameters:**
- `matrix`: 2×2 or 3×3
- `which_basis_vector`: e₁, e₂, or e₃

**Example Instance:**
```
Under the transformation with matrix [3 1; -2 4], where does [1; 0] land?

(A) [3; -2]
(B) [1; 4]
(C) [3; 1]
(D) [-2; 4]

Answer: (A) — the first column
```

---

### Exercise 3.2.3: Properties of Linear Transformations

**Skill:** Recognize linearity properties.

**Example Instance:**
```
T is a linear transformation. If T(u) = [1; 2] and T(v) = [3; 0], what is T(u + v)?

(A) [4; 2]
(B) [3; 2]
(C) [1; 6]
(D) Cannot determine

Answer: (A) — by additivity of linear transformations
```

---

### Exercise 3.2.4: Scaling Property

**Skill:** Apply homogeneity property.

**Example Instance:**
```
T is linear. If T(v) = [6; -4], what is T(3v)?

(A) [6; -4]
(B) [9; -7]
(C) [18; -12]
(D) [2; -4/3]

Answer: (C) — T(3v) = 3T(v) = 3[6; -4] = [18; -12]
```

---

### Exercise 3.2.5: Domain and Range

**Skill:** Identify domain, codomain, and range of a matrix transformation.

**Parameters:**
- `matrix_size`: m×n

**Example Instance:**
```
A is a 4×6 matrix. The transformation T(x) = Ax maps from:

(A) ℝ⁴ to ℝ⁶
(B) ℝ⁶ to ℝ⁴
(C) ℝ⁶ to ℝ⁶
(D) ℝ⁴ to ℝ⁴

Answer: (B)
```

---

## 3.3 Matrix of a Transformation

### Exercise 3.3.1: Build Matrix from Basis Images (2D)

**Skill:** Construct the matrix given where basis vectors land.

**Parameters:**
- `image_of_e1`: 2D vector
- `image_of_e2`: 2D vector

**Example Instance:**
```
A linear transformation sends [1; 0] → [2; 5] and [0; 1] → [-1; 3].
What is its matrix?

(A) [2 -1; 5 3]
(B) [2 5; -1 3]
(C) [1 0; 0 1]
(D) [5 3; 2 -1]

Answer: (A)
```

---

### Exercise 3.3.2: Build Matrix from Basis Images (3D)

**Skill:** Same as 3.3.1 but in 3D.

**Parameters:**
- `image_of_e1`, `image_of_e2`, `image_of_e3`: 3D vectors

**Example Instance:**
```
T sends: e₁ → [1; 0; 0], e₂ → [0; 0; 1], e₃ → [0; 1; 0].
What is the matrix of T?

(A) [1 0 0; 0 0 1; 0 1 0]
(B) [1 0 0; 0 1 0; 0 0 1]
(C) [0 1 0; 0 0 1; 1 0 0]
(D) [1 0 0; 0 0 0; 0 0 1]

Answer: (A)
```

---

### Exercise 3.3.3: Rotation Matrix

**Skill:** Write the rotation matrix for a given angle.

**Parameters:**
- `angle`: 30°, 45°, 60°, 90°, 180°

**Example Instance:**
```
What is the matrix for counterclockwise rotation by 180°?

(A) [-1 0; 0 -1]
(B) [1 0; 0 1]
(C) [0 -1; 1 0]
(D) [0 1; -1 0]

Answer: (A) — cos(180°) = -1, sin(180°) = 0
```

---

### Exercise 3.3.4: Reflection Matrix

**Skill:** Identify or construct reflection matrices.

**Parameters:**
- `reflection_line`: x-axis, y-axis, y=x, y=-x

**Example Instance:**
```
What is the matrix for reflection across the y-axis?

(A) [-1 0; 0 1]
(B) [1 0; 0 -1]
(C) [0 1; 1 0]
(D) [0 -1; -1 0]

Answer: (A)
```

---

### Exercise 3.3.5: Composition of Transformations

**Skill:** Compute the matrix for two transformations applied in sequence.

**Parameters:**
- `first_transform`: 2×2 matrix
- `second_transform`: 2×2 matrix

**Example Instance:**
```
First rotate 90° counterclockwise (R), then reflect across x-axis (F).
R = [0 -1; 1 0], F = [1 0; 0 -1].

What is the matrix for the combined transformation?

(A) [0 -1; -1 0]
(B) [0 1; 1 0]
(C) [0 -1; 1 0]
(D) [1 0; 0 -1]

Answer: (A) — compute FR
```

---

### Exercise 3.3.6: Which Transformation?

**Skill:** Given a matrix, describe the transformation geometrically.

**Parameters:**
- `matrix`: 2×2 with recognizable transformation

**Example Instance:**
```
What transformation is [2 0; 0 2]?

(A) Rotation by 90°
(B) Uniform scaling by factor 2
(C) Horizontal stretch by factor 2
(D) Reflection across y = x

Answer: (B)
```

---

## Generation Notes

### Visual Variants
- 3.2.1 can show before/after grid transformations
- 3.3.1 can show basis vectors and their images
- Composition problems benefit from step-by-step animation

### Common Errors to Generate Distractors
- Confusing rows and columns
- Applying transformations in wrong order
- Mixing up sin/cos in rotation matrices
- Forgetting that composition is matrix product (not addition)
