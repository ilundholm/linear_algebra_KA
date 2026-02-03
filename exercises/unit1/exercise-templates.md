# Unit 1 Exercise Templates

_Templates for algorithmically generated practice problems._

Each template describes:
- The **skill** being tested
- **Parameters** that can be randomized
- **Generation logic** for creating instances
- **Distractor logic** for multiple choice (common errors)
- **Example instances**

---

## 1.1 Introduction to Linear Systems

### Exercise 1.1.1: Checking Solutions

**Skill:** Determine if a given point is a solution to a system.

**Parameters:**
- `num_equations`: 2 or 3
- `num_variables`: 2 or 3
- `coefficients`: integers in range [-5, 5]
- `test_point`: may or may not be a solution
- `failure_mode`: null (is solution), "first", "second", "both"

**Generation Logic:**
1. Generate a valid solution point
2. Build equations that pass through it (work backwards from solution)
3. Decide if we want test_point to be the solution or a distractor
4. If distractor, perturb one coordinate slightly

**Distractor Logic (for MC):**
- "Yes" (if actually no)
- "No, fails first equation" (if actually fails second)
- "No, fails second equation" (if actually fails first)
- "No, fails both" (when fails only one)

**Example Instance:**
```
System:
  x + 2y = 7
  3x - y = 5

Does (3, 2) solve this system?

(A) Yes, it satisfies both equations
(B) No, it fails the first equation  
(C) No, it fails the second equation
(D) No, it fails both equations

Answer: (A)
Explanation: 3 + 2(2) = 7 ✓ and 3(3) - 2 = 7 ≠ 5 ✗
Wait, let me recalculate: 3(3) - 2 = 9 - 2 = 7 ≠ 5. 

Actually answer is (C).
```

---

### Exercise 1.1.2: Counting Solutions (Graphical)

**Skill:** Determine number of solutions from graph or equation comparison.

**Parameters:**
- `case`: "one", "none", "infinite"
- `equation_form`: slope-intercept or standard
- `visual`: true/false (show graph vs. just equations)

**Generation Logic:**
- One solution: random non-parallel lines
- No solution: parallel lines (same slope, different intercept)
- Infinite: same line (one is multiple of other)

**Distractor Logic:**
- For parallel lines: "infinitely many" (student thinks same line)
- For same line: "no solution" (student thinks parallel)
- For intersecting: "no solution" (random error)

**Example Instance:**
```
System:
  y = 2x + 1
  y = 2x + 4

How many solutions?

(A) No solution
(B) Exactly one solution
(C) Infinitely many solutions

Answer: (A)
Explanation: Both lines have slope 2 but different y-intercepts. They're parallel and never intersect.
```

---

### Exercise 1.1.3: Geometric Interpretation

**Skill:** Connect algebraic systems to geometric objects.

**Parameters:**
- `dimension`: 2 or 3
- `num_equations`: 1, 2, or 3
- `question_type`: "what shape?" or "what intersection?"

**Example Instance:**
```
In 3D, what geometric object does a single linear equation represent?

(A) A point
(B) A line
(C) A plane
(D) All of 3D space

Answer: (C)
```

---

## 1.2 Augmented Matrices and Row Reduction

### Exercise 1.2.1: System to Augmented Matrix

**Skill:** Convert a system of equations to its augmented matrix.

**Parameters:**
- `num_equations`: 2 or 3
- `num_variables`: 2 or 3
- `include_missing_terms`: boolean (e.g., "3y = 5" has no x term)
- `coefficients`: integers in range [-9, 9]

**Distractor Logic:**
- Swap rows
- Forget the augmented column
- Put coefficients in wrong columns (misread variable order)
- Sign errors

**Example Instance:**
```
Write the augmented matrix for:
  2x - 3y = 7
  x + y = 4

(A) [2  -3  | 7]    (B) [2  -3]     (C) [2   3  | 7]    (D) [1   1  | 4]
    [1   1  | 4]        [1   1]         [1   1  | 4]        [2  -3  | 7]

Answer: (A)
```

---

### Exercise 1.2.2: Identify the Row Operation

**Skill:** Recognize which elementary row operation was performed.

**Parameters:**
- `operation_type`: "swap", "scale", "add_multiple"
- `matrix_size`: 2x3 or 3x4 (augmented)
- `scalar`: integer in [-5, 5], nonzero for scale

**Example Instance:**
```
What row operation transforms the left matrix into the right?

[1  2  | 3]          [1  2  | 3]
[4  5  | 6]    →     [0 -3  |-6]

(A) R₂ - 4R₁
(B) R₂ + 4R₁
(C) R₁ - R₂
(D) R₁ ↔ R₂

Answer: (A)
```

---

### Exercise 1.2.3: Perform Row Reduction Step

**Skill:** Execute a specified row operation correctly.

**Parameters:**
- `matrix`: 2×3 or 3×4
- `operation`: specified in notation (e.g., "R₂ - 3R₁")
- `target_entry`: which entry are we trying to create

**Free Response Variant:** Enter the resulting matrix.

**MC Variant:** Choose the correct resulting matrix.

**Distractor Logic:**
- Wrong row modified
- Sign error
- Only partially completed (some entries not updated)

---

### Exercise 1.2.4: Complete Row Reduction

**Skill:** Reduce a matrix to REF or RREF.

**Parameters:**
- `matrix_size`: 2×3 or 3×4
- `target_form`: REF or RREF
- `solution_type`: unique, infinite, or none
- `entry_range`: integers in [-5, 5]

**Note:** This is a multi-step problem. Could be:
- Free response (enter final matrix)
- Multiple choice (identify correct RREF)
- Step-by-step guided (show work at each stage)

**Example Instance:**
```
Reduce to RREF:

[1  2  | 5]
[3  5  | 13]

Answer:
[1  0  | 1]
[0  1  | 2]
```

---

### Exercise 1.2.5: Is This REF/RREF?

**Skill:** Recognize row echelon form and reduced row echelon form.

**Parameters:**
- `matrix`: 3×4 or 4×5
- `status`: "REF but not RREF", "RREF", "neither"
- `violation`: what rule is broken (if any)

**Distractor Logic:**
- Staircase pattern broken
- Pivot not equal to 1
- Nonzero entry above a pivot
- Zero row not at bottom

**Example Instance:**
```
Is this matrix in RREF?

[1  0  3  | 2]
[0  2  1  | 4]
[0  0  0  | 0]

(A) Yes, it's in RREF
(B) No, but it's in REF
(C) No, it's not even in REF

Answer: (B)
Explanation: The second pivot is 2, not 1. It has the staircase pattern (REF) but pivots must be 1 for RREF.
```

---

## 1.3 Interpreting Solutions

### Exercise 1.3.1: Identify Pivot and Free Variables

**Skill:** Read pivot positions from RREF and identify free variables.

**Parameters:**
- `num_rows`: 2-4
- `num_cols`: 3-5 (not counting augmented column)
- `num_pivots`: less than or equal to min(rows, cols)
- `pivot_columns`: randomly selected

**Example Instance:**
```
The RREF of a system is:

[1  0  2  0  | 3]
[0  1 -1  0  | 5]
[0  0  0  1  | 2]

Which variables are free?

(A) x₁ only
(B) x₃ only
(C) x₁ and x₃
(D) x₂ and x₄

Answer: (B)
Explanation: Pivots in columns 1, 2, 4. Column 3 has no pivot, so x₃ is free.
```

---

### Exercise 1.3.2: Write Parametric Solution

**Skill:** Express solution set in parametric vector form.

**Parameters:**
- `num_free_vars`: 1 or 2
- `coefficients`: integers in [-5, 5]
- `constant_terms`: integers in [-10, 10]

**Free Response:** Enter the particular solution and direction vectors.

**MC Variant:** Choose the correct parametric form.

**Example Instance:**
```
RREF:
[1  3  0  | 7]
[0  0  1  | 2]

Write the solution in parametric vector form.

Answer:
x = [7, 0, 2]ᵀ + t[-3, 1, 0]ᵀ

where t is any real number.
```

---

### Exercise 1.3.3: Consistency Check

**Skill:** Determine if a system is consistent from its RREF.

**Parameters:**
- `is_consistent`: boolean
- `if_inconsistent`: include a row [0 0 ... 0 | c] with c ≠ 0
- `if_consistent`: decide unique vs. infinite

**Example Instance:**
```
An augmented matrix reduces to:

[1  2  0  | 3]
[0  0  1  | 5]
[0  0  0  | 4]

Is the system consistent?

(A) Yes, with a unique solution
(B) Yes, with infinitely many solutions
(C) No, the system is inconsistent

Answer: (C)
Explanation: The last row says 0 = 4, which is false.
```

---

### Exercise 1.3.4: Solution Set Dimension

**Skill:** Relate free variables to geometric dimension of solution set.

**Parameters:**
- `num_free_vars`: 0, 1, 2, or 3
- `num_total_vars`: 2-5
- `is_consistent`: true (otherwise dimension question is moot)

**Example Instance:**
```
A consistent system has 5 variables and 3 pivot columns. 
The solution set is:

(A) A point
(B) A line
(C) A plane
(D) A 3-dimensional space

Answer: (C)
Explanation: 5 variables - 3 pivots = 2 free variables. 
Two free variables means the solution set is 2-dimensional (a plane in 5D space).
```

---

### Exercise 1.3.5: Homogeneous Systems

**Skill:** Understand properties of homogeneous systems.

**Parameters:**
- `num_equations`: 2-4
- `num_variables`: 2-5
- `question_type`: "trivial guaranteed?", "nontrivial guaranteed?", "what is trivial solution?"

**Example Instance:**
```
A homogeneous system has 3 equations and 5 unknowns.
Which statement is definitely true?

(A) The system has no solution
(B) The system has only the trivial solution
(C) The system has infinitely many solutions
(D) Cannot determine without more information

Answer: (C)
Explanation: Homogeneous systems always have the trivial solution. With more variables (5) than equations (3), there must be at least 2 free variables, guaranteeing infinitely many solutions.
```

---

## 1.4 Applications

### Exercise 1.4.1: Curve Fitting Setup

**Skill:** Write the system of equations for fitting a polynomial through points.

**Parameters:**
- `polynomial_degree`: 1 (linear) or 2 (quadratic)
- `points`: 2 or 3 points with small integer coordinates

**Generation Logic:**
1. Generate points (ensuring they don't all lie on a simpler curve)
2. Ask student to write one or more equations from the points

**Example Instance:**
```
You want to fit a quadratic y = ax² + bx + c through the points (1, 4), (2, 9), and (3, 16).

What equation does the point (2, 9) give you?

(A) a + b + c = 4
(B) 4a + 2b + c = 9
(C) 9a + 3b + c = 16
(D) 2a + 2b + c = 9

Answer: (B)
Explanation: Plug in x=2, y=9: a(2)² + b(2) + c = 9, so 4a + 2b + c = 9.
```

---

### Exercise 1.4.2: Curve Fitting Solve

**Skill:** Solve the system to find polynomial coefficients.

**Parameters:**
- `points`: 3 points with integer coordinates
- `solution`: integer coefficients a, b, c

**Generation Logic:**
1. Start with a nice quadratic (small integer coefficients)
2. Evaluate at x = 0, 1, 2 (or similar) to get points
3. Student solves for coefficients

**Example Instance:**
```
Fit a quadratic y = ax² + bx + c through (0, 1), (1, 2), (2, 5).

The system is:
  c = 1
  a + b + c = 2
  4a + 2b + c = 5

What is a?

(A) 0
(B) 1
(C) 2
(D) -1

Answer: (B)
Explanation: From c = 1 and a + b + 1 = 2, we get a + b = 1.
From 4a + 2b + 1 = 5, we get 4a + 2b = 4, so 2a + b = 2.
Subtracting: a = 1.
```

---

### Exercise 1.4.3: Chemical Equation - Write System

**Skill:** Translate atom conservation into linear equations.

**Parameters:**
- `reaction`: simple reaction with 3-4 substances
- `atoms`: 2-3 atom types

**Generation Logic:**
1. Choose a reaction (combustion, synthesis, etc.)
2. Ask for the equation corresponding to one atom type

**Example Instance:**
```
For the reaction: a·H₂ + b·O₂ → c·H₂O

Write the equation for hydrogen (H) conservation.

(A) 2a = 2c
(B) a = c
(C) 2a = c
(D) a = 2c

Answer: (A)
Explanation: Left side has 2a hydrogens (each H₂ has 2). Right side has 2c hydrogens (each H₂O has 2).
```

---

### Exercise 1.4.4: Chemical Equation - Solve

**Skill:** Balance a chemical equation using linear algebra.

**Parameters:**
- `reaction`: simple reaction
- `ask_for`: one of the coefficients

**Example Instance:**
```
Balance: a·CH₄ + b·O₂ → c·CO₂ + d·H₂O

The system (setting a = 1):
  Carbon: 1 = c
  Hydrogen: 4 = 2d
  Oxygen: 2b = 2c + d

What is b?

(A) 1
(B) 2
(C) 3
(D) 4

Answer: (B)
Explanation: c = 1, d = 2. Then 2b = 2(1) + 2 = 4, so b = 2.
The balanced equation is CH₄ + 2O₂ → CO₂ + 2H₂O.
```

---

### Exercise 1.4.5: Chemical Equation - Why Homogeneous?

**Skill:** Understand why balancing gives a homogeneous system.

**Example Instance:**
```
When setting up equations to balance a chemical reaction, the right-hand side is always zero. Why?

(A) Because atoms are created in the reaction
(B) Because atoms are destroyed in the reaction
(C) Because atoms are neither created nor destroyed — only rearranged
(D) Because we set one coefficient to 1

Answer: (C)
Explanation: Conservation of atoms means (atoms on left) - (atoms on right) = 0 for each atom type.
```

---

### Exercise 1.4.6: Traffic Flow - Write Equation

**Skill:** Write a conservation equation for a network node.

**Parameters:**
- `node_diagram`: simple intersection with labeled flows
- `known_flows`: some external flows given
- `unknown_flows`: internal flows as variables

**Example Instance:**
```
At intersection B:
- 300 cars/hour enter from the north
- x₁ cars/hour arrive from intersection A
- x₂ cars/hour leave toward intersection C

Write the flow conservation equation for intersection B.

(A) 300 + x₁ = x₂
(B) 300 = x₁ + x₂
(C) x₁ = 300 + x₂
(D) 300 - x₁ - x₂ = 0

Answer: (A)
Explanation: Flow in = flow out. The flows in are 300 and x₁. The flow out is x₂.
```

---

### Exercise 1.4.7: Traffic Flow - Interpret Solution

**Skill:** Interpret the meaning of free variables in a network flow problem.

**Parameters:**
- `num_free_vars`: 1 or 2
- `context`: what the free variable represents

**Example Instance:**
```
A traffic network system has RREF:
[1  0  -1  | 200]
[0  1   1  | 500]

With x₃ as a free variable, what does this mean for the network?

(A) There's no valid traffic flow
(B) There's exactly one valid traffic flow
(C) There are infinitely many valid traffic flows
(D) The network has an error

Answer: (C)
Explanation: The free variable means we can choose x₃ (within non-negativity constraints), and x₁, x₂ adjust accordingly. There's flexibility in how traffic distributes.
```

---

### Exercise 1.4.8: Traffic Flow - Detect Inconsistency

**Skill:** Recognize when flow data is inconsistent.

**Example Instance:**
```
A network has: 400 cars/hour entering, 300 cars/hour exiting.
After setting up the system, you get a row [0 0 0 | 100] in RREF.

What does this mean?

(A) The system has infinitely many solutions
(B) The flow data is inconsistent — more cars enter than exit
(C) x₃ = 100
(D) The network is valid

Answer: (B)
Explanation: The row says 0 = 100, which is impossible. This means the given flow numbers are inconsistent — there's a 100 car/hour imbalance.
```

---

### Exercise 1.4.9: Application Identification

**Skill:** Recognize which application fits a given scenario.

**Example Instance:**
```
You have three data points and want to find a parabola passing through all of them. This requires solving:

(A) A homogeneous system
(B) A 3×3 system with 3 unknowns
(C) A system with free variables
(D) An inconsistent system

Answer: (B)
Explanation: A quadratic has 3 coefficients (a, b, c). Each point gives one equation. Three points give a 3×3 system with a unique solution (assuming the points aren't collinear).
```

---

### Exercise 1.4.10: Mixed Application

**Skill:** Set up a system from a word problem context.

**Parameters:**
- `context`: curve fitting, chemistry, or network
- `complexity`: 2 or 3 equations

**Example Instance:**
```
A company ships products through two warehouses. 
- Warehouse A receives 500 units and ships x₁ units to Store 1 and x₂ units to Store 2.
- Store 1 needs 300 units total. Store 2 needs 200 units total.

Which system represents this situation?

(A) x₁ + x₂ = 500 and x₁ = 300 and x₂ = 200
(B) x₁ = 300, x₂ = 200
(C) x₁ + x₂ = 500, x₁ + x₂ = 500
(D) 500 = x₁ = x₂

Answer: (A)
Explanation: All units from A are shipped (x₁ + x₂ = 500), and each store's demand must be met.
```

---

## Generation Notes

### For Future Implementation

1. **Coefficient generation:** Keep numbers small (-9 to 9) for manual calculation. Avoid fractions in problem setup (fractions may appear during reduction).

2. **Solution generation:** Often easier to start with a solution and generate equations that produce it, rather than generate random equations and solve.

3. **Difficulty levels:**
   - Level 1: 2×2 systems, integer solutions, no missing terms
   - Level 2: 3×3 systems, integer solutions
   - Level 3: Missing terms, zero coefficients, parameter solutions
   - Level 4: Inconsistent systems, larger matrices

4. **Visual variants:** Many exercises can have graphical versions (especially 1.1 and 1.3).

5. **Step-by-step mode:** For row reduction, offer "next step" guidance rather than just final answer.

---

## Skill Mapping to Khan Academy Format

| Our Exercise | KA Skill Type | Notes |
|--------------|---------------|-------|
| 1.1.1 | Plug-and-check | Simple verification |
| 1.1.2 | Conceptual MC | Graphical intuition |
| 1.1.3 | Conceptual MC | Vocabulary/geometry |
| 1.2.1 | Translation | Procedural |
| 1.2.2 | Pattern recognition | Identify operation |
| 1.2.3 | Computation | Single step |
| 1.2.4 | Multi-step computation | Full algorithm |
| 1.2.5 | Classification | Check properties |
| 1.3.1 | Reading/interpretation | Identify from matrix |
| 1.3.2 | Synthesis | Build parametric form |
| 1.3.3 | Classification | Consistent/inconsistent |
| 1.3.4 | Conceptual | Geometry connection |
| 1.3.5 | Reasoning | Existence/uniqueness |
