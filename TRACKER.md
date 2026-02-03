# Project Tracker

_Living document tracking progress and next steps._

---

## High-Level Progress

| Unit | Articles | Exercises | Videos | Widgets |
|------|----------|-----------|--------|---------|
| 1. Systems of Linear Equations | 3/3 ✅ | Templates ✅ | 0 | 0 |
| 2. Vectors and Linear Combinations | 0/3 | — | 0 | 0 |
| 3. Matrix-Vector Multiplication | 0/3 | — | 0 | 0 |
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

## Unit 1 Detailed Status

### Articles

| Section | Status | Placeholders Needed |
|---------|--------|---------------------|
| 1.1 Introduction to Linear Systems | ✅ Draft complete | 2 videos, 1 widget, 3 images |
| 1.2 Augmented Matrices and Row Reduction | ✅ Draft complete | 2 videos, 2 widgets, 1 flowchart |
| 1.3 Interpreting Solutions | ✅ Draft complete | 1 video, 2 widgets, 1 flowchart |

### Exercises

| Exercise ID | Skill | Status |
|-------------|-------|--------|
| 1.1.1 | Check if point is solution | Template ✅ |
| 1.1.2 | Count solutions (graphical) | Template ✅ |
| 1.1.3 | Geometric interpretation | Template ✅ |
| 1.2.1 | System → augmented matrix | Template ✅ |
| 1.2.2 | Identify row operation | Template ✅ |
| 1.2.3 | Perform row operation | Template ✅ |
| 1.2.4 | Complete row reduction | Template ✅ |
| 1.2.5 | Is this REF/RREF? | Template ✅ |
| 1.3.1 | Identify pivot/free variables | Template ✅ |
| 1.3.2 | Write parametric solution | Template ✅ |
| 1.3.3 | Consistency check | Template ✅ |
| 1.3.4 | Solution set dimension | Template ✅ |
| 1.3.5 | Homogeneous systems | Template ✅ |

---

## Visual Assets Needed

### Short Videos (< 60s each)
- [ ] Lines intersecting at a point (1.1)
- [ ] 3D planes intersection demo (1.1)
- [ ] Row reduction animation (1.2)
- [ ] Full 3×3 row reduction walkthrough (1.2)
- [ ] Parametric form as plane in 3D (1.3)

### Interactive Widgets
- [ ] Adjustable 2D system (shows lines moving, intersection updating)
- [ ] System ↔ augmented matrix converter
- [ ] Step-by-step row reduction tool
- [ ] 3D plane configuration viewer
- [ ] Homogeneous system explorer

### Static Images/Diagrams
- [ ] Three cases diagram (one/none/infinite solutions)
- [ ] Gaussian elimination flowchart
- [ ] Existence/uniqueness decision tree

---

## Open Questions

1. **Exercise format:** How close to KA's Perseus format do we need to be? Should we eventually build JSON-compatible exercise specs?

2. **Video production:** Use Manim for everything? License 3Blue1Brown clips? Record screen demos?

3. **Khan Academy outreach:** When to contact them? After how much content is built?

4. **Algorithmic generation:** Build actual Python scripts to generate exercise instances, or keep templates for now?

---

## Session Log

### 2026-02-03
- Initial project setup
- Syllabus completed (12 units)
- Style guide written
- Unit 1 articles drafted (all 3)
- Unit 1 exercise templates created
- README updated with project status

---

## Next Actions

1. **Ian reviews Unit 1 articles** — gather feedback on tone, depth, coverage
2. **Decide on first visual asset** — start with something small (static diagram?)
3. **Draft Unit 2.1** — Vectors in ℝⁿ (after Unit 1 feedback incorporated)
4. **Build one exercise generator** — proof of concept for algorithmic generation
