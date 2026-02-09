# Media Inventory

_All placeholders across Units 1-3 articles, organized by type._

---

## Summary

| Type | Count | Completed |
|------|-------|-----------|
| Static Images/Diagrams | 12 | 0 |
| Interactive Widgets | 17 | 15 |
| Short Videos | 13 | 0 |
| **Total** | **42** | **15** |

---

## Interactive Widgets (17)

_Built with MathBox.js for consistent aesthetic with Manim videos._

| Article | Line | Description | Status |
|---------|------|-------------|--------|
| 1.1 | ~91 | Two sliders controlling slopes; shows intersection point updating | ✅ `line-intersection.html` |
| 1.1 | ~232 | 3D widget: Three planes intersecting (drag to rotate) | ✅ `three-planes.html` |
| 1.2 | ~63 | Side-by-side: System of equations ↔ Augmented matrix (editable, synced) | ✅ `matrix-equation-sync.html` |
| 1.2 | ~311 | Step-by-step row reduction tool (user clicks operations) | ✅ `row-reduction-steps.html` |
| 1.3 | ~204 | Parametric solution explorer: slider for t, shows point moving along solution line | ✅ `parametric-explorer.html` |
| 1.4 | ~24 | Network flow with adjustable flows and conservation check | ✅ `network-flow.html` |
| 1.4 | ~279 | Chemical equation balancer / Leontief model | ❌ Not started |
| 2.1 | ~20 | Click to place vectors, see coordinates update | ✅ `vector-coordinates.html` |
| 2.1 | ~87 | Vector addition with parallelogram visualization | ✅ `vector-addition.html` |
| 2.2 | ~68 | Two fixed vectors (standard basis), sliders for c₁ and c₂ | ✅ `linear-combination-basis.html` |
| 2.2 | ~128 | Two vectors, adjust coefficients, tip reaches anywhere in plane | ✅ `span-explorer.html` |
| 2.2 | ~258 | Three vectors in 2D, sliders for x₁, x₂, x₃; target [4,7] | ✅ `linear-combination-target.html` |
| 2.3 | ~261 | Vectors in 2D; toggle to show dependence | ✅ `linear-dependence.html` |
| 3.2 | ~59 | Grid of points; apply matrix transformation; watch grid deform | ✅ `transformation-grid.html` |
| 3.2 | ~296 | 3D cube transformation explorer | ❌ Not started |
| 3.3 | ~68 | Define where basis vectors go; matrix updates automatically | ✅ `matrix-from-basis.html` |
| 3.3 | ~198 | Composition explorer: two transformations in sequence | ✅ `matrix-composition.html` |

**Widgets completed: 15/17**

---

## Static Images & Diagrams (12)

_Manim stills — professional geometric illustrations._

| Article | Line | Description | Status |
|---------|------|-------------|--------|
| 1.1 | ~123 | Two lines intersecting at a point (one solution) | ❌ |
| 1.1 | ~143 | Two parallel lines (no solution) | ❌ |
| 1.1 | ~163 | Two identical/overlapping lines (infinitely many solutions) | ❌ |
| 1.2 | ~427 | Flowchart: RREF algorithm steps | ❌ |
| 1.3 | ~299 | Flowchart: Interpreting solutions from RREF | ❌ |
| 1.4 | ~107 | Traffic network diagram with flow variables | ❌ |
| 1.4 | ~317 | Diagram: Markov chain/state transitions | ❌ |
| 1.4 | ~357 | Better diagram with cleaner flow (Markov) | ❌ |
| 2.2 | ~112 | A line through the origin along direction (2,1) | ❌ |
| 2.3 | ~55 | Three coplanar vectors in 3D (linearly dependent) | ❌ |
| 3.2 | ~92 | Grid before/after shear transformation | ❌ |
| 3.3 | ~41 | Basis vectors and their images under a transformation | ❌ |

**Images completed: 0/12**

---

## Short Videos (13)

_Manim animations, 30-90 seconds each._

| Article | Line | Duration | Description | Status |
|---------|------|----------|-------------|--------|
| 1.1 | ~99 | ~30s | Animated: Two lines, intersection point moves | ❌ |
| 1.1 | ~207 | ~45s | 3D: Three planes intersecting | ❌ |
| 1.2 | ~173 | ~60s | Row operation demonstration | ❌ |
| 1.2 | ~330 | ~90s | Full RREF walkthrough | ❌ |
| 1.3 | ~148 | ~60s | Geometric interpretation of free variables | ❌ |
| 1.4 | ~67 | ~60s | Traffic flow animation | ❌ |
| 2.1 | ~72 | ~30s | Vector as arrow: origin to point | ❌ |
| 2.1 | ~129 | ~30s | Scalar multiplication | ❌ |
| 2.2 | ~35 | ~45s | Row picture vs Column picture | ❌ |
| 2.2 | ~186 | ~60s | 3D span visualization | ❌ |
| 2.3 | ~67 | ~45s | Dependent vectors collapsing | ❌ |
| 3.1 | ~49 | ~45s | Matrix-vector multiplication | ❌ |
| 3.2 | ~73 | ~60s | Grid transformation morph | ❌ |

**Videos completed: 0/13**

---

## Widget Files Created

All widgets are in `widgets/` directory:

1. `vector-addition.html` - Parallelogram rule for vector addition
2. `vector-addition-demo.html` - Alternate demo version
3. `linear-combination-basis.html` - Standard basis with coefficient sliders
4. `span-explorer.html` - Two adjustable vectors, coefficient sliders
5. `linear-combination-target.html` - Three vectors hitting target [4,7]
6. `linear-dependence.html` - Three vectors showing dependence
7. `line-intersection.html` - Two lines with slope/intercept controls
8. `three-planes.html` - 3D plane intersection presets
9. `matrix-equation-sync.html` - System ↔ augmented matrix
10. `row-reduction-steps.html` - Step-by-step RREF
11. `parametric-explorer.html` - Parameter slider for solution line
12. `vector-coordinates.html` - Single vector with coordinate display
13. `transformation-grid.html` - 2D grid transformation with matrix input
14. `matrix-from-basis.html` - Build matrix from basis vector destinations
15. `matrix-composition.html` - Compose two transformations
16. `network-flow.html` - Network flow conservation

---

## Next Steps

1. **Remaining widgets (2):**
   - 1.4 chemical equation balancer
   - 3.2 3D cube transformer

2. **Static images (12):** Create with Manim

3. **Videos (13):** Create with Manim

---

_Last updated: 2026-02-09_
