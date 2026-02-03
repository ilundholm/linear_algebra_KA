# Unit 2 Exercise Templates

_Templates for algorithmically generated practice problems._

---

## 2.1 Vectors in ℝⁿ

### Exercise 2.1.1: Vector Addition

**Skill:** Add two vectors component-wise.

**Parameters:**
- `dimension`: 2, 3, or 4
- `component_range`: integers in [-10, 10]

**Generation Logic:**
1. Generate two random vectors
2. Compute the sum

**Distractor Logic:**
- Subtract instead of add
- Add magnitudes instead of components
- Mix up component order

**Example Instance:**
```
Compute: [2, -1, 3] + [4, 5, -2]

(A) [6, 4, 1]
(B) [-2, -6, 5]
(C) [6, -6, 1]
(D) [8, -5, -6]

Answer: (A)
```

---

### Exercise 2.1.2: Scalar Multiplication

**Skill:** Multiply a vector by a scalar.

**Parameters:**
- `dimension`: 2, 3, or 4
- `scalar`: integer in [-5, 5], nonzero
- `component_range`: integers in [-10, 10]

**Distractor Logic:**
- Wrong sign
- Only multiply some components
- Add scalar instead of multiply

**Example Instance:**
```
Compute: -3 · [2, -4, 1]

(A) [-6, 12, -3]
(B) [6, -12, 3]
(C) [-6, -12, -3]
(D) [-1, -7, -2]

Answer: (A)
```

---

### Exercise 2.1.3: Vector Equation

**Skill:** Combine addition and scalar multiplication.

**Parameters:**
- `num_vectors`: 2 or 3
- `scalars`: integers in [-3, 3]
- `dimension`: 2 or 3

**Example Instance:**
```
Compute: 2[1, 0] + 3[0, 1] - [1, 1]

(A) [1, 2]
(B) [3, 3]
(C) [1, 3]
(D) [2, 2]

Answer: (A)
```

---

### Exercise 2.1.4: Zero Vector Identification

**Skill:** Identify the zero vector in a given dimension.

**Parameters:**
- `dimension`: 2, 3, 4, or 5

**Example Instance:**
```
What is the zero vector in ℝ³?

(A) [0]
(B) [0, 0]
(C) [0, 0, 0]
(D) [1, 1, 1]

Answer: (C)
```

---

## 2.2 Linear Combinations and Span

### Exercise 2.2.1: Compute Linear Combination

**Skill:** Calculate a specific linear combination.

**Parameters:**
- `num_vectors`: 2 or 3
- `dimension`: 2 or 3
- `coefficients`: integers in [-4, 4]

**Example Instance:**
```
Compute: 2[1, 3] + (-1)[4, -2]

(A) [-2, 8]
(B) [6, 1]
(C) [-2, 4]
(D) [2, 8]

Answer: (A)  — wait, let me recalculate:
2[1,3] = [2, 6]
-1[4, -2] = [-4, 2]
Sum = [-2, 8] ✓
```

---

### Exercise 2.2.2: Is Vector in Span?

**Skill:** Determine if a target vector is in the span of given vectors.

**Parameters:**
- `num_vectors`: 2
- `dimension`: 2 or 3
- `in_span`: boolean

**Generation Logic:**
- If in_span: generate target as known linear combination
- If not in_span: generate target outside span (e.g., for 2 vectors in ℝ³ spanning a plane, pick a point off the plane)

**Example Instance:**
```
Is [5, 7] in the span of {[1, 2], [3, 1]}?

(A) Yes
(B) No

Answer: (A) — we can verify: a[1,2] + b[3,1] = [5,7] has solution a=2, b=1
```

---

### Exercise 2.2.3: Describe the Span

**Skill:** Identify geometric object (line, plane, etc.) that is the span.

**Parameters:**
- `num_vectors`: 1 or 2
- `dimension`: 2 or 3
- `vectors_parallel`: boolean (for 2 vectors)

**Example Instance:**
```
What is the span of {[2, 1, 0], [4, 2, 0]} in ℝ³?

(A) A point
(B) A line through the origin
(C) A plane through the origin
(D) All of ℝ³

Answer: (B) — the vectors are parallel (second is 2× first)
```

---

### Exercise 2.2.4: Column Picture of Ax=b

**Skill:** Rewrite matrix equation as a span question.

**Parameters:**
- `matrix_size`: 2×2 or 3×3
- `present_as`: equation to rewrite

**Example Instance:**
```
The system Ax = b (with A having columns a₁, a₂) has a solution if and only if:

(A) b is in the span of {a₁, a₂}
(B) a₁ and a₂ are parallel
(C) b equals a₁ + a₂
(D) det(A) = 0

Answer: (A)
```

---

## 2.3 Linear Independence

### Exercise 2.3.1: Check Parallel Vectors (2D)

**Skill:** Determine if two vectors are parallel (dependent).

**Parameters:**
- `are_parallel`: boolean
- `component_range`: integers in [-6, 6]

**Generation Logic:**
- If parallel: second vector = scalar × first
- If not parallel: random non-proportional vectors

**Example Instance:**
```
Are [3, 6] and [1, 2] linearly independent?

(A) Yes, they are independent
(B) No, they are dependent

Answer: (B) — [3, 6] = 3[1, 2]
```

---

### Exercise 2.3.2: Independence via Row Reduction

**Skill:** Use row reduction to test independence.

**Parameters:**
- `num_vectors`: 2 or 3
- `dimension`: 2 or 3
- `independent`: boolean

**Example Instance:**
```
The vectors [1, 2, 1], [2, 1, 0], [3, 3, 1] are placed as columns. After row reduction:

[1  2  3]     [1  2  3]
[2  1  3]  →  [0 -3 -3]
[1  0  1]     [0  0  0]

Are the vectors linearly independent?

(A) Yes
(B) No

Answer: (B) — column 3 has no pivot
```

---

### Exercise 2.3.3: Too Many Vectors

**Skill:** Recognize automatic dependence when more vectors than dimensions.

**Parameters:**
- `num_vectors`: greater than dimension
- `dimension`: 2, 3, or 4

**Example Instance:**
```
You have 4 vectors in ℝ³. Without any calculation, what can you conclude?

(A) They must be linearly independent
(B) They must be linearly dependent
(C) They might be independent or dependent
(D) They span all of ℝ³

Answer: (B)
```

---

### Exercise 2.3.4: Zero Vector Dependence

**Skill:** Recognize that including zero vector causes dependence.

**Example Instance:**
```
Is the set {[1, 2], [0, 0], [3, 1]} linearly independent?

(A) Yes
(B) No

Answer: (B) — any set containing the zero vector is dependent
```

---

### Exercise 2.3.5: Write Dependence Relation

**Skill:** If dependent, express one vector as combination of others.

**Parameters:**
- `num_vectors`: 3
- `dimension`: 2 or 3
- Vectors are dependent

**Example Instance:**
```
Given that [3, 3, 1] = a[1, 2, 1] + b[2, 1, 0], find a and b.

(A) a = 1, b = 1
(B) a = 2, b = 1
(C) a = 1, b = 2
(D) a = 0, b = 1

Answer: (A) — verify: 1[1,2,1] + 1[2,1,0] = [3, 3, 1] ✓
```

---

## Generation Notes

### Difficulty Progression
- Level 1: 2D vectors, small integers, clear cases
- Level 2: 3D vectors, mixed signs
- Level 3: Vectors that look parallel but aren't (or vice versa)
- Level 4: 4D vectors, conceptual questions

### Visual Variants
- 2.2.2 (span membership) benefits from graphical version
- 2.3.1 (parallel check) can show vectors on a plane
