# Media Inventory

_All placeholders across Units 1-3 articles, organized by type._

---

## Summary

| Type | Count |
|------|-------|
| Static Images/Diagrams | 12 |
| Interactive Widgets | 15 |
| Short Videos | 13 |
| **Total** | **40** |

---

## Static Images & Diagrams (12)

_Manim stills — professional geometric illustrations._

| Article | Line | Description |
|---------|------|-------------|
| 1.1 | 123 | Two lines intersecting at a point (one solution) |
| 1.1 | 143 | Two parallel lines (no solution) |
| 1.1 | 163 | Two identical/overlapping lines (infinitely many solutions) |
| 1.2 | 427 | Flowchart: RREF algorithm steps |
| 1.3 | 299 | Flowchart: Interpreting solutions from RREF |
| 1.4 | 107 | Traffic network diagram with flow variables |
| 1.4 | 317 | Diagram: Markov chain/state transitions |
| 1.4 | 357 | Better diagram with cleaner flow (Markov) |
| 2.2 | 112 | A line through the origin along direction (2,1), with scalar multiples marked |
| 2.3 | 55 | Three coplanar vectors in 3D (linearly dependent) |
| 3.2 | 92 | Grid before/after shear transformation |
| 3.3 | 41 | Basis vectors and their images under a transformation |

---

## Interactive Widgets (15)

_Candidates: GeoGebra, custom JS (D3/Three.js), or embedded Manim WebGL._

| Article | Line | Description |
|---------|------|-------------|
| 1.1 | 91 | Two sliders controlling slopes; shows intersection point updating |
| 1.1 | 233 | 3D widget: Three planes intersecting (drag to rotate) |
| 1.2 | 63 | Side-by-side: System of equations ↔ Augmented matrix (editable, synced) |
| 1.2 | 313 | Step-by-step row reduction tool (user clicks operations) |
| 1.3 | 204 | Parametric solution explorer: slider for t, shows point moving along solution line/plane |
| 1.4 | 24 | Simple circuit or network with adjustable flows |
| 1.4 | 280 | Leontief input-output model explorer |
| 2.1 | 20 | Click to place vectors, see coordinates update |
| 2.1 | 87 | Two draggable vectors; sum shown as third vector (tip-to-tail / parallelogram toggle) |
| 2.2 | 68 | Two fixed vectors (standard basis), sliders for c₁ and c₂, resulting linear combination drawn |
| 2.2 | 129 | Two vectors, adjust coefficients, tip reaches anywhere in plane |
| 2.2 | 261 | Three vectors in 2D, sliders for x₁, x₂, x₃; shows linear combination reaching target [4,7]; second mode shows "zero combination" |
| 2.3 | 261 | Vectors in 2D/3D; toggle to show dependence (one as sum of others) |
| 3.2 | 59 | Grid of points; apply matrix transformation; watch grid deform |
| 3.2 | 297 | Transformation explorer: pick from common matrices (rotation, shear, etc.), see effect |
| 3.3 | 68 | Click to define where basis vectors go; matrix updates automatically |
| 3.3 | 201 | Composition explorer: apply two transformations in sequence, see combined matrix |

---

## Short Videos (13)

_Manim animations, 30-90 seconds each._

| Article | Line | Duration | Description |
|---------|------|----------|-------------|
| 1.1 | 99 | ~30s | Animated: Two lines, one pivots, intersection point moves |
| 1.1 | 207 | ~45s | 3D animation: Three planes intersecting at a point, line, or not at all |
| 1.2 | 173 | ~60s | Row operation demonstration: Swap, scale, eliminate — matrix morphs step by step |
| 1.2 | 330 | ~90s | Full RREF walkthrough on a 3×4 matrix, highlighting pivots |
| 1.3 | 148 | ~60s | Geometric interpretation of free variables: solution set as line, plane in 3D |
| 1.4 | 67 | ~60s | Traffic flow animation: cars moving through network, conservation at nodes |
| 2.1 | 72 | ~30s | Vector as arrow: origin to point, then translate around |
| 2.1 | 129 | ~30s | Scalar multiplication: vector stretches, shrinks, reverses |
| 2.2 | 35 | ~45s | Side-by-side: Row picture (lines intersecting) vs Column picture (vectors combining) |
| 2.2 | 186 | ~60s | 3D: One vector → line, two non-parallel → plane sweeping out, three non-coplanar → all of 3D |
| 2.3 | 67 | ~45s | Dependent vectors: third vector "collapsing" onto span of first two |
| 3.1 | 49 | ~45s | Matrix-vector multiplication: columns being scaled and added |
| 3.2 | 73 | ~60s | Grid transformation: identity → shear → rotation (continuous morph) |
| 3.2 | 189 | ~45s | Basis vectors transform → entire grid follows |
| 3.3 | 113 | ~45s | "Watch the basis vectors" recipe: track e₁ and e₂, columns form the matrix |

---

## Production Notes

### Manim (Stills + Videos)
- Use ManimCE (Community Edition)
- Export stills as high-res PNG
- Export videos as MP4 or WebM
- Consistent style: dark background, bright vectors, clean labels

### Widgets — Options

| Option | Pros | Cons |
|--------|------|------|
| **GeoGebra** | Ian knows it well; embeddable; math-native | Less customizable styling; hosted externally |
| **Custom JS (D3.js / Three.js)** | Full control; no external dependency; matches site style | More dev time; I can write it but debugging is slower |
| **Manim WebGL / Manim.js** | Same aesthetic as videos; experimental | Less mature; may not support interactivity well |
| **Desmos API** | Very clean; embeddable | Limited to 2D graphing; less flexible for matrices |

### Recommendation

**Hybrid approach:**
1. **GeoGebra** for the 2D/3D geometry widgets you're comfortable building (span explorers, vector addition, transformation grids)
2. **Custom JS** for the specialized ones (row reduction stepper, matrix entry sync, Leontief model)
3. **Manim** for all stills and videos (consistent professional look)

This lets you own the GeoGebra widgets (fast iteration, you know the tool), while I handle the code-heavy custom widgets and all the Manim renders.

---

## Next Steps

1. **Prioritize:** Which 5-10 media items would add the most value first?
2. **Set up Manim:** Verify installation, test a simple render
3. **Create style template:** Colors, fonts, arrow styles for consistency
4. **Start production:** Pick a batch and go

---

_Last updated: 2026-02-06_
