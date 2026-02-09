# Project Tracker

_Living document tracking progress and next steps._

---

## High-Level Progress

| Unit | Articles | Exercises | Videos | Widgets |
|------|----------|-----------|--------|---------|
| 1. Systems of Linear Equations | 4/4 ✅ | Templates ✅ | 0/6 | 6/7 |
| 2. Vectors and Linear Combinations | 3/3 ✅ | Templates ✅ | 0/4 | 5/5 ✅ |
| 3. Matrix-Vector Multiplication & Transformations | 3/3 ✅ | Templates ✅ | 0/3 | 4/5 |
| 4. Matrix Operations | 0/3 | — | 0 | 0 |
| 5. Determinants | 0/3 | — | 0 | 0 |
| 6. Eigenvalues and Eigenvectors | 0/3 | — | 0 | 0 |
| 7. Vector Spaces and Subspaces | 0/3 | — | 0 | 0 |
| 8. Orthogonality | 0/3 | — | 0 | 0 |
| 9. Least Squares | 0/2 | — | 0 | 0 |
| 10. Symmetric Matrices | 0/3 | — | 0 | 0 |
| 11. SVD | 0/3 | — | 0 | 0 |
| 12. Applications | 0/2 | — | 0 | 0 |

---

## Phase 1: Content Complete (Units 1-3) ✅

- [x] Unit 1 articles (4 articles)
- [x] Unit 2 articles (3 articles)
- [x] Unit 3 articles (3 articles)
- [x] Exercise templates for Units 1-3

**Total: 10 articles, 40 exercise types templated**

---

## Phase 2: Make It Interactive ✅ (In Progress)

- [x] Set up GitHub Pages with MathJax
- [x] Basic navigation/index page
- [x] Article navigation links (prev/next)
- [x] **Interactive widgets: 15/17 complete**
- [ ] Static diagrams for key concepts (0/12)
- [ ] Short videos (0/13)

### Widgets Completed (15)

| Widget | Article | Description |
|--------|---------|-------------|
| `vector-addition.html` | 2.1 | Parallelogram rule for vector addition |
| `vector-coordinates.html` | 2.1 | Single vector with coordinate display |
| `linear-combination-basis.html` | 2.2 | Standard basis with coefficient sliders |
| `span-explorer.html` | 2.2 | Two adjustable vectors, coefficient sliders |
| `linear-combination-target.html` | 2.2 | Three vectors hitting target [4,7] |
| `linear-dependence.html` | 2.3 | Three vectors showing dependence |
| `line-intersection.html` | 1.1 | Two lines with slope/intercept controls |
| `three-planes.html` | 1.1 | 3D plane intersection presets |
| `matrix-equation-sync.html` | 1.2 | System ↔ augmented matrix |
| `row-reduction-steps.html` | 1.2 | Step-by-step RREF |
| `parametric-explorer.html` | 1.3 | Parameter slider for solution line |
| `network-flow.html` | 1.4 | Network flow conservation |
| `transformation-grid.html` | 3.2 | 2D grid transformation with matrix input |
| `matrix-from-basis.html` | 3.3 | Build matrix from basis vector destinations |
| `matrix-composition.html` | 3.3 | Compose two transformations |

### Widgets Remaining (2)

| Widget | Article | Description |
|--------|---------|-------------|
| Chemical balancer | 1.4 | Balance chemical equations via linear system |
| 3D cube transformer | 3.2 | 3D cube with 3×3 matrix transformation |

---

## Phase 3: Perseus Exercises (Next)

- [ ] Research Perseus exercise format (KA's system)
- [ ] Build or adapt exercise grading system
- [ ] Convert exercise templates to Perseus JSON

---

## Phase 4: Video Production

- [ ] Test Manim installation
- [ ] Create short clips (~30-60s) for article placeholders
- [ ] Static diagram renders (12 total)

---

## Exercise Templates Created

| Unit | Exercise Count | Skills Covered |
|------|---------------|----------------|
| Unit 1 | 13 | Solution checking, RREF, parametric form, consistency |
| Unit 2 | 13 | Vector operations, linear combinations, span, independence |
| Unit 3 | 14 | Matrix-vector products, transformations, matrices from geometry |

**Total: 40 exercise types**

---

## Decisions Made

1. **Exercise platform:** Aim for Perseus-compatible JSON (full KA format)
2. **Video scope:** Supplementary video moments for articles (tractable)
3. **Hosting:** GitHub Pages
4. **Widget library:** MathBox.js (consistent aesthetic with Manim videos)
5. **Widget layout:** 280px sidebar + MathBox canvas, dark theme (#1a1a2e)

---

## Session Log

### 2026-02-03
- Initial project setup
- Syllabus completed (12 units)
- Style guide written
- All 10 articles for Units 1-3 drafted
- Exercise templates for Units 1-3 created
- **Phase 1 complete!**

### 2026-02-06
- GitHub Pages setup with MathJax
- Navigation links added to all articles
- Created WIDGET_STYLE_GUIDE.md
- **Built 15 interactive widgets with MathBox.js**
- Embedded widgets in articles
- Created MEDIA_INVENTORY.md

### 2026-02-09
- Updated MEDIA_INVENTORY.md with widget status
- Updated TRACKER.md

---

## Live Site

**URL:** https://ilundholm.github.io/linear_algebra_KA/

---

## Next Actions

1. **Push latest changes to GitHub** (widgets + embeddings)
2. **Build remaining 2 widgets** (chemical balancer, 3D cube)
3. **Create static diagrams with Manim** (12 images)
4. **Create short videos with Manim** (13 videos)
5. **Research Perseus format** for exercise conversion
