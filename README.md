# Linear Algebra: A Modern Perspective (Khan Academy Expansion)

This repository contains development work for expanding and modernizing the Linear Algebra course on Khan Academy.

## Mission

To provide a comprehensive, intuition-first curriculum for Linear Algebra, leveraging algorithmic exercises, interactive articles, and high-quality visualizations.

## Project Status

🚧 **Active Development** — Unit 1 in progress

### Completed
- [x] Full syllabus (12 units mapped out)
- [x] Style guide for KA-compatible articles
- [x] Unit 1 articles (3 of 3)
- [x] Unit 1 exercise templates

### In Progress
- [ ] Unit 1 visual assets (placeholders marked in articles)
- [ ] Exercise generation scripts

### Planned
- [ ] Unit 2 articles
- [ ] Interactive widgets
- [ ] Manim video scripts

## Repository Structure

```
├── articles/
│   └── unit1/
│       ├── 1.1-introduction-to-linear-systems.md
│       ├── 1.2-augmented-matrices-and-row-reduction.md
│       └── 1.3-interpreting-solutions.md
├── exercises/
│   └── unit1/
│       └── exercise-templates.md
├── SYLLABUS.md          # Full 12-unit course outline
├── STYLE_GUIDE.md       # Writing principles for KA-style content
└── README.md            # This file
```

## The Three Perspectives

Our approach emphasizes three complementary views of the equation $Ax = b$:

1. **The Row Picture:** Each equation is a geometric constraint (line, plane, hyperplane). Solutions are intersections.

2. **The Column Picture:** $Ax$ is a linear combination of the columns of $A$. "Can we reach $b$?"

3. **The Transformation Picture:** $A$ is a function that warps space. "What input $x$ maps to output $b$?"

## Content Philosophy

See [STYLE_GUIDE.md](STYLE_GUIDE.md) for full details. Key principles:

- **Intuition before formalism** — visualize first, symbolize second
- **Interleaved practice** — don't save exercises for the end
- **Conversational tone** — like explaining to a curious friend
- **Build incrementally** — specific example → pattern → generalization

## Contributors

- **Ian** — Lead architect, pedagogy, quality control
- **Phillip** — Content generation, project support

## Current Focus

**Unit 1: Systems of Linear Equations**
- 1.1 Introduction to Linear Systems ✅
- 1.2 Augmented Matrices and Row Reduction ✅
- 1.3 Interpreting Solutions ✅

Next up: Unit 2 (Vectors and Linear Combinations)

---

*This is an independent project. Not affiliated with Khan Academy.*
