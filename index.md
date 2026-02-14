---
layout: default
title: Home
---

<div class="container" style="text-align: center; padding-top: 4rem; padding-bottom: 4rem;">
  <h1 style="font-size: 3.5rem; margin-bottom: 1.5rem; color: var(--color-primary);">Linear Algebra</h1>
  <p style="font-size: 1.25rem; color: var(--color-text-muted); max-width: 700px; margin: 0 auto 3rem auto;">
    A comprehensive, visual curriculum emphasizing geometric intuition over rote memorization.
    Explore vectors, matrices, and transformations through interactive widgets and animations.
  </p>
  
  <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 4rem;">
    <a href="#unit-1" style="background: var(--color-accent); color: white; padding: 0.75rem 1.5rem; border-radius: var(--radius-sm); font-weight: 600;">Start Learning</a>
    <a href="https://github.com/ilundholm/linear_algebra_KA" style="background: #fff; border: 1px solid var(--color-border); color: var(--color-text); padding: 0.75rem 1.5rem; border-radius: var(--radius-sm); font-weight: 600;">View on GitHub</a>
  </div>
</div>

<div class="container" id="unit-1">
  <div class="unit-section">
    <h2 style="border-bottom: none; text-align: center; margin-bottom: 2rem;">Course Units</h2>
    
    <div class="unit-grid">
      
      <!-- Unit 1 -->
      <div class="unit-card">
        <h3>Unit 1: Linear Systems</h3>
        <p class="unit-desc">
          Understand systems of equations as geometric intersections of lines and planes. Master <strong>row reduction</strong> and the <strong>row picture</strong>.
        </p>
        <ul class="unit-links">
          <li><a href="{{ '/articles/unit1/1.1-introduction-to-linear-systems.html' | relative_url }}">1.1 Intro to Linear Systems</a></li>
          <li><a href="{{ '/articles/unit1/1.2-augmented-matrices-and-row-reduction.html' | relative_url }}">1.2 Row Reduction</a></li>
          <li><a href="{{ '/articles/unit1/1.3-interpreting-solutions.html' | relative_url }}">1.3 Interpreting Solutions</a></li>
          <li><a href="{{ '/articles/unit1/1.4-applications.html' | relative_url }}">1.4 Applications</a></li>
        </ul>
      </div>
      
      <!-- Unit 2 -->
      <div class="unit-card">
        <h3>Unit 2: Vectors & Linear Combinations</h3>
        <p class="unit-desc">
           Enter the world of vectors. Learn about <strong>span</strong>, <strong>linear independence</strong>, and the crucial <strong>column picture</strong> ($A\mathbf{x} = \mathbf{b}$).
        </p>
        <ul class="unit-links">
          <li><a href="{{ '/articles/unit2/2.1-vectors-in-rn.html' | relative_url }}">2.1 Vectors in ℝⁿ</a></li>
          <li><a href="{{ '/articles/unit2/2.2-linear-combinations-and-span.html' | relative_url }}">2.2 Linear Combinations</a></li>
          <li><a href="{{ '/articles/unit2/2.3-linear-independence.html' | relative_url }}">2.3 Linear Independence</a></li>
        </ul>
      </div>
      
      <!-- Unit 3 -->
      <div class="unit-card">
        <h3>Unit 3: Matrices & Transformations</h3>
        <p class="unit-desc">
          See matrices as functions that warp space. Explore linear transformations, rotations, scalings, and the <strong>transformation picture</strong>.
        </p>
         <ul class="unit-links">
          <li><a href="{{ '/articles/unit3/3.1-matrix-vector-multiplication.html' | relative_url }}">3.1 Matrix-Vector Multiplication</a></li>
          <li><a href="{{ '/articles/unit3/3.2-linear-transformations.html' | relative_url }}">3.2 Linear Transformations</a></li>
          <li><a href="{{ '/articles/unit3/3.3-matrix-of-transformation.html' | relative_url }}">3.3 Matrix of Transformation</a></li>
        </ul>
      </div>
      
    </div>
  </div>
</div>

<div class="container" style="background: #f1f5f9; border-radius: var(--radius-md); padding: 3rem; margin-top: 4rem; text-align: center;">
  <h3>Why This Approach?</h3>
  <div class="unit-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); text-align: left; margin-top: 2rem;">
    <div class="unit-card" style="border: none; background: transparent; box-shadow: none;">
      <h4 style="color: var(--color-accent); font-size: 1.1rem;">Visual First</h4>
      <p style="font-size: 0.95rem;">We introduce every concept with geometry before algebra. If you can't picture it, we haven't explained it.</p>
    </div>
    <div class="unit-card" style="border: none; background: transparent; box-shadow: none;">
      <h4 style="color: var(--color-accent); font-size: 1.1rem;">Interactive</h4>
      <p style="font-size: 0.95rem;">Don't just read—play. Use interactive widgets to build intuition for row reduction and transformations.</p>
    </div>
    <div class="unit-card" style="border: none; background: transparent; box-shadow: none;">
      <h4 style="color: var(--color-accent); font-size: 1.1rem;">Applied</h4>
      <p style="font-size: 0.95rem;">Connect the math to real-world applications like computer graphics, data science, and physics.</p>
    </div>
  </div>
</div>

<div class="container" style="margin-top: 4rem; margin-bottom: 4rem;">
  <h2 style="border-bottom: none; text-align: center; margin-bottom: 2rem; color: var(--color-text-muted);">Coming Soon</h2>
  
  <div class="unit-grid" style="opacity: 0.7;">
     <!-- Unit 4 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 4: Matrix Operations</h3>
        <p class="unit-desc">Matrix multiplication, inverses, and the Invertible Matrix Theorem.</p>
     </div>
     
     <!-- Unit 5 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 5: Determinants</h3>
        <p class="unit-desc">Geometric meaning (volume), properties, and cofactor expansion.</p>
     </div>
     
     <!-- Unit 6 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 6: Eigenvalues</h3>
        <p class="unit-desc">Invariant directions, characteristic equations, and diagonalization.</p>
     </div>

     <!-- Unit 7 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 7: Vector Spaces</h3>
        <p class="unit-desc">Subspaces, basis, dimension, and the Rank-Nullity Theorem.</p>
     </div>

     <!-- Unit 8 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 8: Orthogonality</h3>
        <p class="unit-desc">Dot products, projections, Gram-Schmidt, and QR factorization.</p>
     </div>
     
     <!-- Unit 9 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 9: Least Squares</h3>
        <p class="unit-desc">Best-fit lines, regression, and the Normal Equations.</p>
     </div>
     
     <!-- Unit 10 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 10: Symmetric Matrices</h3>
        <p class="unit-desc">Orthogonal diagonalization, Spectral Theorem, and quadratic forms.</p>
     </div>
     
     <!-- Unit 11 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 11: SVD</h3>
        <p class="unit-desc">Singular Value Decomposition and image compression.</p>
     </div>

      <!-- Unit 12 -->
     <div class="unit-card" style="background: #f8fafc; border-color: #e2e8f0;">
        <h3 style="color: #64748b;">Unit 12: Applications</h3>
        <p class="unit-desc">Principal Component Analysis (PCA) and Markov Chains.</p>
     </div>
  </div>
</div>
