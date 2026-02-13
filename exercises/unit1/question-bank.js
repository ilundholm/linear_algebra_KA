/* ============================================================
   Unit 1 Question Bank — Systems of Linear Equations
   8 skills × 6 questions = 48 questions
   ============================================================ */

const UNIT1_BANK = {

    // ─────────────────────────────────────────────────
    // SKILL 1.1a: Verify Solutions
    // ─────────────────────────────────────────────────
    '1.1a': {
        name: 'Verify Solutions',
        section: '1.1',
        questions: [
            {
                question: 'Does the point $(1, 3)$ solve this system?<div class="math-block">$$\\begin{aligned} x + 2y &= 7 \\\\ 3x - y &= 5 \\end{aligned}$$</div>',
                answers: ['Yes, it satisfies both equations', 'No, it fails the first equation only', 'No, it fails the second equation only', 'No, it fails both equations'],
                correct: 2, shuffleAnswers: false,
                hints: ['Plug $(1,3)$ into each equation separately.', 'Eq 1: $1 + 2(3) = 7$ ✓. Now check Eq 2.', 'Eq 2: $3(1) - 3 = 0 \\neq 5$ ✗.'],
                solution: '<p>Eq 1: $1 + 2(3) = 7$ ✓</p><p>Eq 2: $3(1) - 3 = 0 \\neq 5$ ✗</p><p>Fails the second equation only.</p>'
            },
            {
                question: 'Does $(3, 2)$ solve this system?<div class="math-block">$$\\begin{aligned} x + 2y &= 7 \\\\ 3x - y &= 7 \\end{aligned}$$</div>',
                answers: ['Yes, it satisfies both equations', 'No, it fails the first equation only', 'No, it fails the second equation only', 'No, it fails both equations'],
                correct: 0, shuffleAnswers: false,
                hints: ['Check Eq 1: $3 + 2(2) = ?$', '$3 + 4 = 7$ ✓. Check Eq 2: $3(3) - 2 = ?$', '$9 - 2 = 7$ ✓. Both pass!'],
                solution: '<p>Eq 1: $3 + 2(2) = 7$ ✓</p><p>Eq 2: $3(3) - 2 = 7$ ✓</p><p>Both equations are satisfied, so $(3,2)$ is a solution.</p>'
            },
            {
                question: 'Does $(2, -1)$ solve this system?<div class="math-block">$$\\begin{aligned} 2x + y &= 3 \\\\ x - 3y &= 5 \\end{aligned}$$</div>',
                answers: ['Yes, it satisfies both equations', 'No, it fails the first equation only', 'No, it fails the second equation only', 'No, it fails both equations'],
                correct: 0, shuffleAnswers: false,
                hints: ['Eq 1: $2(2) + (-1) = ?$', '$4 - 1 = 3$ ✓. Eq 2: $2 - 3(-1) = ?$', '$2 + 3 = 5$ ✓. Both pass!'],
                solution: '<p>Eq 1: $2(2) + (-1) = 3$ ✓</p><p>Eq 2: $2 - 3(-1) = 5$ ✓</p><p>$(2, -1)$ satisfies both equations.</p>'
            },
            {
                question: 'Does $(0, 4)$ solve this system?<div class="math-block">$$\\begin{aligned} 3x - y &= -4 \\\\ x + 2y &= 7 \\end{aligned}$$</div>',
                answers: ['Yes, it satisfies both equations', 'No, it fails the first equation only', 'No, it fails the second equation only', 'No, it fails both equations'],
                correct: 2, shuffleAnswers: false,
                hints: ['Eq 1: $3(0) - 4 = ?$', '$-4 = -4$ ✓. Eq 2: $0 + 2(4) = ?$', '$8 \\neq 7$ ✗. Fails the second equation.'],
                solution: '<p>Eq 1: $3(0) - 4 = -4$ ✓</p><p>Eq 2: $0 + 8 = 8 \\neq 7$ ✗</p><p>Fails the second equation only.</p>'
            },
            {
                question: 'Does $(1, 1, 2)$ solve this system?<div class="math-block">$$\\begin{aligned} x + y + z &= 4 \\\\ 2x - y + z &= 3 \\end{aligned}$$</div>',
                answers: ['Yes, it satisfies both equations', 'No, it fails the first equation only', 'No, it fails the second equation only', 'No, it fails both equations'],
                correct: 0, shuffleAnswers: false,
                hints: ['Eq 1: $1 + 1 + 2 = ?$', '$4 = 4$ ✓. Eq 2: $2(1) - 1 + 2 = ?$', '$3 = 3$ ✓.'],
                solution: '<p>Eq 1: $1 + 1 + 2 = 4$ ✓</p><p>Eq 2: $2 - 1 + 2 = 3$ ✓</p><p>Both pass!</p>'
            },
            {
                question: 'Does $(-1, 2)$ solve this system?<div class="math-block">$$\\begin{aligned} 4x + y &= -2 \\\\ 2x + 3y &= 5 \\end{aligned}$$</div>',
                answers: ['Yes, it satisfies both equations', 'No, it fails the first equation only', 'No, it fails the second equation only', 'No, it fails both equations'],
                correct: 3, shuffleAnswers: false,
                hints: ['Eq 1: $4(-1) + 2 = ?$', '$-4 + 2 = -2$ ✓. Eq 2: $2(-1) + 3(2) = ?$', '$-2 + 6 = 4 \\neq 5$ ✗. Wait—recheck Eq 1... Actually $-2 = -2$ ✓ but Eq 2 fails.'],
                solution: '<p>Eq 1: $4(-1) + 2 = -2$ ✓</p><p>Eq 2: $2(-1) + 3(2) = 4 \\neq 5$ ✗</p><p>Fails the second equation only.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.1b: Classify Systems
    // ─────────────────────────────────────────────────
    '1.1b': {
        name: 'Classify Systems',
        section: '1.1',
        questions: [
            {
                question: 'How many solutions does this system have?<div class="math-block">$$\\begin{aligned} y &= 3x + 2 \\\\ y &= 3x - 1 \\end{aligned}$$</div>',
                answers: ['No solution', 'Exactly one solution', 'Infinitely many solutions'],
                correct: 0, shuffleAnswers: false,
                hints: ['Compare slopes and intercepts.', 'Both have slope $3$ but different intercepts ($2$ vs $-1$).', 'Parallel lines never intersect.'],
                solution: '<p>Same slope ($3$), different intercepts ($2$ and $-1$). Parallel lines → <strong>no solution</strong>.</p>'
            },
            {
                question: 'How many solutions does this system have?<div class="math-block">$$\\begin{aligned} y &= 2x + 3 \\\\ y &= -x + 6 \\end{aligned}$$</div>',
                answers: ['No solution', 'Exactly one solution', 'Infinitely many solutions'],
                correct: 1, shuffleAnswers: false,
                hints: ['Compare the slopes.', 'Slopes are $2$ and $-1$ — different!', 'Lines with different slopes always intersect exactly once.'],
                solution: '<p>Different slopes ($2$ vs $-1$) means the lines intersect at exactly one point. <strong>One solution</strong>.</p>'
            },
            {
                question: 'How many solutions does this system have?<div class="math-block">$$\\begin{aligned} 2x + 4y &= 10 \\\\ x + 2y &= 5 \\end{aligned}$$</div>',
                answers: ['No solution', 'Exactly one solution', 'Infinitely many solutions'],
                correct: 2, shuffleAnswers: false,
                hints: ['Is one equation a multiple of the other?', 'Multiply Eq 2 by 2: $2x + 4y = 10$. That\'s identical to Eq 1!', 'Same line → infinitely many solutions.'],
                solution: '<p>Eq 1 = 2 × Eq 2. They represent the <strong>same line</strong>, so every point on it is a solution — <strong>infinitely many</strong>.</p>'
            },
            {
                question: 'A single linear equation in three variables represents what geometric object in 3D?',
                answers: ['A point', 'A line', 'A plane', 'All of 3D space'],
                correct: 2,
                hints: ['In 2D, one equation gives a line (1D object).', 'In $n$ dimensions, one equation carves out an $(n-1)$-dimensional object.', 'In 3D: $n-1 = 2$ → a plane.'],
                solution: '<p>One linear equation in $n$ variables defines a hyperplane of dimension $n-1$. In 3D, that\'s a <strong>plane</strong>.</p>'
            },
            {
                question: 'How many solutions?<div class="math-block">$$\\begin{aligned} x - y &= 3 \\\\ 2x - 2y &= 7 \\end{aligned}$$</div>',
                answers: ['No solution', 'Exactly one solution', 'Infinitely many solutions'],
                correct: 0, shuffleAnswers: false,
                hints: ['Multiply Eq 1 by 2: $2x - 2y = 6$. Compare with Eq 2.', '$6 \\neq 7$. Same left side, different right side.', 'This is a contradiction — parallel lines.'],
                solution: '<p>Eq 1 × 2: $2x - 2y = 6$, but Eq 2 says $2x - 2y = 7$. Contradiction → <strong>no solution</strong>.</p>'
            },
            {
                question: 'Two planes in 3D can intersect in:',
                answers: ['Only a point', 'Only a line', 'A line, a plane, or not at all', 'Only a plane'],
                correct: 2,
                hints: ['Think of two flat sheets of paper in space.', 'If parallel (not same): no intersection. If same plane: entire plane. Otherwise?', 'Two non-parallel, non-identical planes meet in a line.'],
                solution: '<p>Two planes in 3D: <strong>parallel</strong> (no intersection), <strong>identical</strong> (whole plane), or <strong>intersecting in a line</strong>. All three are possible.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.2a: Augmented Matrices
    // ─────────────────────────────────────────────────
    '1.2a': {
        name: 'Augmented Matrices',
        section: '1.2',
        questions: [
            {
                question: 'Write the augmented matrix for:<div class="math-block">$$\\begin{aligned} 2x - 3y &= 7 \\\\ x + y &= 4 \\end{aligned}$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rr|r} 2 & -3 & 7 \\\\ 1 & 1 & 4 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr} 2 & -3 \\\\ 1 & 1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 2 & 3 & 7 \\\\ 1 & 1 & 4 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 1 & 1 & 4 \\\\ 2 & -3 & 7 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['The augmented matrix includes coefficients and constants separated by a vertical bar.', 'Eq 1: coefficients $2, -3$, constant $7$. Don\'t drop the negative!'],
                solution: '<p>Each row is one equation. Coefficients left of bar, constant right.</p><p>$\\left[\\begin{array}{rr|r} 2 & -3 & 7 \\\\ 1 & 1 & 4 \\end{array}\\right]$</p>'
            },
            {
                question: 'Write the augmented matrix for:<div class="math-block">$$\\begin{aligned} x + y - z &= 2 \\\\ 2x - y &= 5 \\\\ 3y + z &= 1 \\end{aligned}$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rrr|r} 1 & 1 & -1 & 2 \\\\ 2 & -1 & 0 & 5 \\\\ 0 & 3 & 1 & 1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rrr|r} 1 & 1 & -1 & 2 \\\\ 2 & -1 & -1 & 5 \\\\ 3 & 3 & 1 & 1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rrr|r} 1 & 1 & 1 & 2 \\\\ 2 & -1 & 0 & 5 \\\\ 0 & 3 & 1 & 1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rrr|r} 1 & 1 & -1 & 2 \\\\ 2 & -1 & 0 & 5 \\\\ 0 & 3 & -1 & 1 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['Missing variables get coefficient $0$.', 'Eq 2 has no $z$: coefficient is $0$. Eq 3 has no $x$: coefficient is $0$.'],
                solution: '<p>Missing variables get $0$. Eq 2: $2x - y + 0z = 5$. Eq 3: $0x + 3y + z = 1$.</p>'
            },
            {
                question: 'What system does this augmented matrix represent?<div class="math-block">$$\\left[\\begin{array}{rr|r} 3 & -1 & 5 \\\\ 0 & 2 & 4 \\end{array}\\right]$$</div>',
                answers: [
                    '$3x - y = 5$ and $2y = 4$',
                    '$3x - y = 5$ and $2x = 4$',
                    '$3x + y = 5$ and $2y = 4$',
                    '$-x + 3y = 5$ and $2y = 4$'
                ],
                correct: 0,
                hints: ['Read each row as an equation: coefficients × variables = constant.', 'Row 2: $0x + 2y = 4$, which simplifies to $2y = 4$.'],
                solution: '<p>Row 1: $3x - y = 5$. Row 2: $0x + 2y = 4 \\Rightarrow 2y = 4$.</p>'
            },
            {
                question: 'Write the augmented matrix for:<div class="math-block">$$\\begin{aligned} 5x &= 10 \\\\ -x + 4y &= 3 \\end{aligned}$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rr|r} 5 & 0 & 10 \\\\ -1 & 4 & 3 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 5 & 10 & 0 \\\\ -1 & 4 & 3 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 5 & 0 & 10 \\\\ 1 & 4 & 3 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{r|r} 5 & 10 \\\\ -1 & 3 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['Eq 1 has no $y$, so its coefficient is $0$.', 'Don\'t forget the negative sign on $x$ in Eq 2.'],
                solution: '<p>$5x + 0y = 10$ → row $[5, 0 \\;|\\; 10]$. $-x + 4y = 3$ → row $[-1, 4 \\;|\\; 3]$.</p>'
            },
            {
                question: 'How many rows and columns does the augmented matrix of a system with 3 equations and 4 unknowns have?',
                answers: ['$3 \\times 5$', '$3 \\times 4$', '$4 \\times 3$', '$4 \\times 5$'],
                correct: 0,
                hints: ['Rows = number of equations.', 'Columns = variables + 1 (for the augmented column).', '3 equations × (4 unknowns + 1 constant) = $3 \\times 5$.'],
                solution: '<p>The augmented matrix has one row per equation (3) and one column per variable plus one for the constants ($4 + 1 = 5$). Size: $3 \\times 5$.</p>'
            },
            {
                question: 'Write the augmented matrix for:<div class="math-block">$$\\begin{aligned} y &= 2x - 1 \\\\ y &= -x + 5 \\end{aligned}$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rr|r} -2 & 1 & -1 \\\\ 1 & 1 & 5 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 2 & 1 & -1 \\\\ -1 & 1 & 5 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 2 & -1 & -1 \\\\ 1 & -1 & 5 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} -2 & 1 & -1 \\\\ 1 & -1 & 5 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['First rewrite in standard form: move all variables to the left.', 'Eq 1: $y = 2x - 1 \\Rightarrow -2x + y = -1$.', 'Eq 2: $y = -x + 5 \\Rightarrow x + y = 5$.'],
                solution: '<p>Rewrite in standard form first:</p><p>$-2x + y = -1$ and $x + y = 5$</p><p>$\\left[\\begin{array}{rr|r} -2 & 1 & -1 \\\\ 1 & 1 & 5 \\end{array}\\right]$</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.2b: Row Operations
    // ─────────────────────────────────────────────────
    '1.2b': {
        name: 'Row Operations',
        section: '1.2',
        questions: [
            {
                question: 'What row operation transforms the left matrix into the right?<div class="math-block">$$\\left[\\begin{array}{rr|r} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{rr|r} 1 & 2 & 3 \\\\ 0 & -3 & -6 \\end{array}\\right]$$</div>',
                answers: ['$R_2 \\leftarrow R_2 - 4R_1$', '$R_2 \\leftarrow R_2 + 4R_1$', '$R_1 \\leftarrow R_1 - R_2$', '$R_1 \\leftrightarrow R_2$'],
                correct: 0, shuffleAnswers: false,
                hints: ['Row 1 didn\'t change — only Row 2 was modified.', 'To zero out $4$: $4 - 4(1) = 0$.', '$R_2 - 4R_1$: $[4-4, 5-8, 6-12] = [0, -3, -6]$ ✓'],
                solution: '<p>$R_2 \\leftarrow R_2 - 4R_1$: $[4,5,6] - 4[1,2,3] = [0,-3,-6]$.</p>'
            },
            {
                question: 'Apply $R_1 \\leftrightarrow R_2$ (swap rows):<div class="math-block">$$\\left[\\begin{array}{rr|r} 0 & 3 & 6 \\\\ 1 & 2 & 5 \\end{array}\\right]$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & 3 & 6 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 0 & 3 & 6 \\\\ 1 & 2 & 5 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 1 & 5 & 2 \\\\ 0 & 6 & 3 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 3 & 0 & 6 \\\\ 2 & 1 & 5 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['A row swap simply exchanges the two rows.', 'Row 1 becomes old Row 2, and vice versa.'],
                solution: '<p>Swap rows: $\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & 3 & 6 \\end{array}\\right]$. Now there\'s a leading 1 in position (1,1).</p>'
            },
            {
                question: 'Apply $R_2 \\leftarrow \\frac{1}{3}R_2$:<div class="math-block">$$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & 3 & 6 \\end{array}\\right]$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & 1 & 2 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} \\frac{1}{3} & \\frac{2}{3} & \\frac{5}{3} \\\\ 0 & 3 & 6 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & 3 & 2 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & \\frac{1}{3} & \\frac{1}{6} \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['Multiply every entry in Row 2 by $\\frac{1}{3}$.', '$\\frac{1}{3}(0) = 0$, $\\frac{1}{3}(3) = 1$, $\\frac{1}{3}(6) = 2$.'],
                solution: '<p>Scale Row 2: $\\frac{1}{3}[0, 3, 6] = [0, 1, 2]$.</p>'
            },
            {
                question: 'What row operation transforms the left matrix into the right?<div class="math-block">$$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 0 & 1 & 2 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{rr|r} 1 & 0 & 1 \\\\ 0 & 1 & 2 \\end{array}\\right]$$</div>',
                answers: ['$R_1 \\leftarrow R_1 - 2R_2$', '$R_1 \\leftarrow R_1 + 2R_2$', '$R_2 \\leftarrow R_2 - 2R_1$', '$R_1 \\leftarrow R_1 - R_2$'],
                correct: 0, shuffleAnswers: false,
                hints: ['Row 2 didn\'t change. The $2$ in position $(1,2)$ became $0$.', 'To eliminate a $2$ above a pivot of $1$: subtract $2 \\times$ that row.', '$R_1 - 2R_2$: $[1-0, 2-2, 5-4] = [1, 0, 1]$ ✓'],
                solution: '<p>$R_1 \\leftarrow R_1 - 2R_2$: $[1,2,5] - 2[0,1,2] = [1,0,1]$.</p>'
            },
            {
                question: 'Which of the following is NOT a valid elementary row operation?',
                answers: ['Replace $R_2$ with $R_2 + 3R_1$', 'Swap $R_1$ and $R_3$', 'Multiply $R_1$ by $0$', 'Multiply $R_2$ by $-5$'],
                correct: 2,
                hints: ['The three types: swap, scale (by nonzero), replace.', 'Scaling by $0$ would destroy information — the row becomes all zeros.', 'Row scaling must use a <em>nonzero</em> scalar.'],
                solution: '<p>Row scaling requires a <strong>nonzero</strong> scalar. Multiplying by $0$ is not reversible and is not a valid elementary row operation.</p>'
            },
            {
                question: 'Apply $R_3 \\leftarrow R_3 - 2R_1$:<div class="math-block">$$\\left[\\begin{array}{rrr|r} 1 & 0 & 1 & 3 \\\\ 0 & 1 & -1 & 2 \\\\ 2 & 1 & 3 & 10 \\end{array}\\right]$$</div>',
                answers: [
                    '$\\left[\\begin{array}{rrr|r} 1 & 0 & 1 & 3 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & 1 & 1 & 4 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rrr|r} 1 & 0 & 1 & 3 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & -1 & 1 & 4 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rrr|r} 1 & 0 & 1 & 3 \\\\ 0 & 1 & -1 & 2 \\\\ 2 & 1 & 1 & 4 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rrr|r} -1 & 0 & 1 & 3 \\\\ 0 & 1 & -1 & 2 \\\\ 2 & 1 & 3 & 10 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['Only Row 3 changes.', '$[2,1,3,10] - 2[1,0,1,3] = [2-2, 1-0, 3-2, 10-6]$.', '$= [0, 1, 1, 4]$.'],
                solution: '<p>$R_3 - 2R_1$: $[2,1,3,10] - 2[1,0,1,3] = [0,1,1,4]$.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.2c: REF and RREF
    // ─────────────────────────────────────────────────
    '1.2c': {
        name: 'REF and RREF',
        section: '1.2',
        questions: [
            {
                question: 'Is this matrix in RREF?<div class="math-block">$$\\left[\\begin{array}{rrr|r} 1 & 0 & 3 & 2 \\\\ 0 & 2 & 1 & 4 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]$$</div>',
                answers: ['Yes, it is in RREF', 'No, but it is in REF', 'No, it is not in REF either'],
                correct: 1, shuffleAnswers: false,
                hints: ['Check the staircase: pivots in columns 1, 2.', 'For RREF, every pivot must be $1$. Is the Row 2 pivot equal to $1$?', 'The pivot in Row 2 is $2$, not $1$. REF but not RREF.'],
                solution: '<p>Valid staircase (REF), but the pivot in Row 2 is $2 \\neq 1$. It\'s <strong>REF but not RREF</strong>.</p>'
            },
            {
                question: 'Is this matrix in RREF?<div class="math-block">$$\\left[\\begin{array}{rrr|r} 1 & 0 & 0 & 5 \\\\ 0 & 1 & 0 & -2 \\\\ 0 & 0 & 1 & 3 \\end{array}\\right]$$</div>',
                answers: ['Yes, it is in RREF', 'No, but it is in REF', 'No, it is not in REF either'],
                correct: 0, shuffleAnswers: false,
                hints: ['Check: staircase? All pivots $= 1$? Each pivot the only nonzero in its column?', 'Pivots in columns 1, 2, 3 — all are $1$ — each column has only that $1$.', 'All RREF conditions satisfied!'],
                solution: '<p>✓ Staircase ✓ All pivots are $1$ ✓ Pivots are the only nonzero entries in their columns. This is <strong>RREF</strong>.</p>'
            },
            {
                question: 'Reduce this matrix to RREF and read off the solution:<div class="math-block">$$\\left[\\begin{array}{rr|r} 1 & 2 & 5 \\\\ 3 & 5 & 13 \\end{array}\\right]$$</div>',
                answers: ['$x = 1, \\; y = 2$', '$x = 3, \\; y = 1$', '$x = -1, \\; y = 3$', '$x = 5, \\; y = 0$'],
                correct: 0,
                hints: ['$R_2 \\leftarrow R_2 - 3R_1$: $[0, -1, -2]$.', 'Scale: $R_2 \\leftarrow -R_2$: $[0, 1, 2]$.', 'Back-sub: $R_1 \\leftarrow R_1 - 2R_2$: $[1, 0, 1]$. So $x=1, y=2$.'],
                solution: '<p>$R_2 - 3R_1 \\to [0,-1,-2]$, then $-R_2 \\to [0,1,2]$, then $R_1 - 2R_2 \\to [1,0,1]$. Answer: $x=1, y=2$.</p>'
            },
            {
                question: 'Is this matrix in row echelon form?<div class="math-block">$$\\left[\\begin{array}{rrr|r} 1 & 3 & 2 & 4 \\\\ 0 & 0 & 1 & 5 \\\\ 0 & 1 & 0 & 2 \\end{array}\\right]$$</div>',
                answers: ['Yes, it is in RREF', 'Yes, it is in REF (but not RREF)', 'No, it is not in REF'],
                correct: 2, shuffleAnswers: false,
                hints: ['For REF, the leading entry in each row must be strictly to the right of the one above.', 'Row 2\'s leading entry is in column 3. Row 3\'s leading entry is in column 2.', 'Column 2 is to the LEFT of column 3 — the staircase goes backwards! Not REF.'],
                solution: '<p>Row 2 leads in column 3, but Row 3 leads in column 2. The staircase doesn\'t step right → <strong>not REF</strong>. Rows 2 and 3 need swapping.</p>'
            },
            {
                question: 'Which matrix is in RREF?',
                answers: [
                    '$\\left[\\begin{array}{rr|r} 1 & 0 & 4 \\\\ 0 & 1 & -1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 1 & 2 & 4 \\\\ 0 & 1 & -1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 2 & 0 & 4 \\\\ 0 & 1 & -1 \\end{array}\\right]$',
                    '$\\left[\\begin{array}{rr|r} 0 & 1 & -1 \\\\ 1 & 0 & 4 \\end{array}\\right]$'
                ],
                correct: 0,
                hints: ['RREF needs: staircase, all pivots = 1, pivots are the only nonzero entry in each column.', 'Option B fails: there\'s a $2$ above the second pivot.', 'Option C fails: first pivot is $2$, not $1$. Option D fails: staircase goes backwards.'],
                solution: '<p>Only option A satisfies all three RREF conditions: staircase ✓, pivots = 1 ✓, pivots alone in columns ✓.</p>'
            },
            {
                question: 'Reduce to RREF:<div class="math-block">$$\\left[\\begin{array}{rr|r} 2 & 4 & 10 \\\\ 1 & 3 & 7 \\end{array}\\right]$$</div>What is the solution?',
                answers: ['$x = 1, \\; y = 2$', '$x = 2, \\; y = 1$', '$x = 3, \\; y = 1$', '$x = -1, \\; y = 3$'],
                correct: 0,
                hints: ['Swap rows to get a $1$ in position (1,1), or scale $R_1$ by $\\frac{1}{2}$.', 'After $R_1 \\leftarrow \\frac{1}{2}R_1$: $[1, 2, 5]$. Then $R_2 \\leftarrow R_2 - R_1$: $[0, 1, 2]$.', '$R_1 \\leftarrow R_1 - 2R_2$: $[1, 0, 1]$. So $x=1, y=2$.'],
                solution: '<p>$\\frac{1}{2}R_1 \\to [1,2,5]$, then $R_2 - R_1 \\to [0,1,2]$, then $R_1 - 2R_2 \\to [1,0,1]$. Answer: $x=1, y=2$.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.3a: Pivot & Free Variables
    // ─────────────────────────────────────────────────
    '1.3a': {
        name: 'Pivot & Free Variables',
        section: '1.3',
        questions: [
            {
                question: 'The RREF is:<div class="math-block">$$\\left[\\begin{array}{rrrr|r} 1 & 0 & 2 & 0 & 3 \\\\ 0 & 1 & -1 & 0 & 5 \\\\ 0 & 0 & 0 & 1 & 2 \\end{array}\\right]$$</div>Which variables are free?',
                answers: ['$x_3$ only', '$x_1$ only', '$x_1$ and $x_3$', '$x_2$ and $x_4$'],
                correct: 0,
                hints: ['Pivot columns are the ones with leading 1s.', 'Pivots in columns 1, 2, 4. Column 3 has no pivot.', '$x_3$ is the only free variable.'],
                solution: '<p>Pivots in columns 1, 2, 4 → $x_1, x_2, x_4$ are pivot variables. Column 3 has no pivot → $x_3$ is <strong>free</strong>.</p>'
            },
            {
                question: 'A system with 5 variables has this RREF:<div class="math-block">$$\\left[\\begin{array}{rrrrr|r} 1 & 3 & 0 & 0 & 2 & 4 \\\\ 0 & 0 & 1 & 0 & -1 & 7 \\\\ 0 & 0 & 0 & 1 & 0 & 1 \\end{array}\\right]$$</div>How many free variables are there?',
                answers: ['1', '2', '3', '0'],
                correct: 1,
                hints: ['Count pivot columns: columns 1, 3, 4.', 'Non-pivot columns: 2 and 5.', '2 free variables ($x_2$ and $x_5$).'],
                solution: '<p>Pivots in columns 1, 3, 4 (3 pivots). Variables: 5. Free = $5 - 3 = 2$ ($x_2$ and $x_5$).</p>'
            },
            {
                question: 'A consistent system has 5 variables and 3 pivot columns. The solution set is:',
                answers: ['A point (0-dimensional)', 'A line (1-dimensional)', 'A plane (2-dimensional)', '3-dimensional'],
                correct: 2,
                hints: ['Dimension of solution = number of free variables.', 'Free = $5 - 3 = 2$.', '2 free variables → 2-dimensional (a plane).'],
                solution: '<p>Free variables $= 5 - 3 = 2$. Two degrees of freedom creates a <strong>2-dimensional</strong> solution set (a plane).</p>'
            },
            {
                question: 'If a $4 \\times 6$ augmented matrix (5 unknowns) has 3 pivots after reduction, how many free variables are there?',
                answers: ['1', '2', '3', '5'],
                correct: 1,
                hints: ['The matrix is $4 \\times 6$, meaning 5 variable columns + 1 augmented column.', 'Free = unknowns − pivots = $5 - 3$.', '$= 2$ free variables.'],
                solution: '<p>5 unknowns − 3 pivots = <strong>2 free variables</strong>.</p>'
            },
            {
                question: 'When a system has no free variables, the solution (if it exists) is:',
                answers: ['Unique (exactly one solution)', 'Infinitely many solutions', 'No solution', 'Depends on the constants'],
                correct: 0,
                hints: ['Free variables create degrees of freedom in the solution.', 'No free variables = no degrees of freedom.', 'Every variable is determined by a pivot → unique solution.'],
                solution: '<p>No free variables means every variable is a pivot variable — each is uniquely determined. The solution is <strong>unique</strong> (assuming consistency).</p>'
            },
            {
                question: 'The RREF has pivot columns 1, 2, and 5 out of 6 variable columns. Write the general solution for $x_1$.',
                answers: [
                    '$x_1 = c_1 - 2x_3 - x_4$ (depends on free variables)',
                    '$x_1 = 5$ (a fixed number)',
                    '$x_1$ is a free variable',
                    'Cannot determine without the full RREF'
                ],
                correct: 3,
                hints: ['We know $x_1$ is a pivot variable (column 1 has a pivot).', 'Pivot variables are expressed in terms of free variables.', 'But we\'d need the actual RREF entries to write the specific formula.'],
                solution: '<p>$x_1$ is a pivot variable, so it can be expressed in terms of the free variables ($x_3, x_4, x_6$). But the exact expression requires the full RREF entries.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.3b: Consistency
    // ─────────────────────────────────────────────────
    '1.3b': {
        name: 'Consistency',
        section: '1.3',
        questions: [
            {
                question: 'An augmented matrix reduces to:<div class="math-block">$$\\left[\\begin{array}{rrr|r} 1 & 2 & 0 & 3 \\\\ 0 & 0 & 1 & 5 \\\\ 0 & 0 & 0 & 4 \\end{array}\\right]$$</div>Is the system consistent?',
                answers: ['Yes, with a unique solution', 'Yes, with infinitely many solutions', 'No, the system is inconsistent'],
                correct: 2, shuffleAnswers: false,
                hints: ['Look at the last row.', '$[0, 0, 0 \\;|\\; 4]$ means $0 = 4$.', 'That\'s a contradiction — no solution.'],
                solution: '<p>Last row: $0 = 4$. Contradiction → <strong>inconsistent</strong>.</p>'
            },
            {
                question: 'An augmented matrix reduces to:<div class="math-block">$$\\left[\\begin{array}{rr|r} 1 & 0 & 3 \\\\ 0 & 1 & -2 \\\\ 0 & 0 & 0 \\end{array}\\right]$$</div>Is the system consistent?',
                answers: ['Yes, with a unique solution', 'Yes, with infinitely many solutions', 'No, the system is inconsistent'],
                correct: 0, shuffleAnswers: false,
                hints: ['Last row: $[0, 0 \\;|\\; 0]$ means $0 = 0$ — always true (no contradiction).', 'How many variables? 2. How many pivots? 2.', 'All variables are pivot variables → unique solution: $x_1 = 3, x_2 = -2$.'],
                solution: '<p>$0 = 0$ is fine (no contradiction). 2 pivots, 2 variables → <strong>unique solution</strong>: $x_1 = 3, x_2 = -2$.</p>'
            },
            {
                question: 'A homogeneous system ($A\\mathbf{x} = \\mathbf{0}$) with 3 equations and 5 unknowns must have:',
                answers: ['No solution', 'Only the trivial solution', 'Infinitely many solutions', 'Cannot determine'],
                correct: 2, shuffleAnswers: false,
                hints: ['Homogeneous systems always have $\\mathbf{x} = \\mathbf{0}$ as a solution.', 'With 5 unknowns and only 3 equations, at most 3 pivots.', 'At least $5 - 3 = 2$ free variables → infinitely many solutions.'],
                solution: '<p>Always consistent (trivial solution). More unknowns (5) than equations (3) → at least 2 free variables → <strong>infinitely many solutions</strong>.</p>'
            },
            {
                question: 'The augmented matrix has a pivot in the last column. What does this mean?',
                answers: ['The system has a unique solution', 'The system has infinitely many solutions', 'The system is inconsistent', 'The system has a free variable'],
                correct: 2,
                hints: ['A pivot in the augmented column creates a row like $[0, 0, \\ldots, 0 \\;|\\; c]$ with $c \\neq 0$.', 'That row says $0 = c$ where $c \\neq 0$.', 'Contradiction → inconsistent.'],
                solution: '<p>A pivot in the augmented (last) column means some row reads $0 = c$ with $c \\neq 0$. That\'s a <strong>contradiction</strong> — the system is inconsistent.</p>'
            },
            {
                question: 'Can a homogeneous system ($A\\mathbf{x} = \\mathbf{0}$) ever be inconsistent?',
                answers: ['Yes, if there are more equations than unknowns', 'Yes, if the matrix has no pivots', 'No, homogeneous systems are always consistent', 'Only if the matrix is singular'],
                correct: 2,
                hints: ['What is one obvious solution to $A\\mathbf{x} = \\mathbf{0}$?', '$\\mathbf{x} = \\mathbf{0}$ always works: $A\\mathbf{0} = \\mathbf{0}$.', 'Since there\'s always at least one solution, it\'s always consistent.'],
                solution: '<p>$\\mathbf{x} = \\mathbf{0}$ (the trivial solution) always satisfies $A\\mathbf{x} = \\mathbf{0}$. A homogeneous system is <strong>always consistent</strong>.</p>'
            },
            {
                question: 'A system reduces to:<div class="math-block">$$\\left[\\begin{array}{rrr|r} 1 & 0 & -1 & 2 \\\\ 0 & 1 & 3 & -1 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right]$$</div>How many solutions?',
                answers: ['No solution', 'Exactly one', 'Infinitely many'],
                correct: 2, shuffleAnswers: false,
                hints: ['Last row $0 = 0$: no contradiction.', 'Pivot columns: 1, 2. Variable $x_3$ has no pivot → free.', 'One free variable → infinitely many solutions (parameterized by $x_3$).'],
                solution: '<p>Consistent (no contradiction). $x_3$ is free → <strong>infinitely many solutions</strong>: $x_1 = 2 + x_3$, $x_2 = -1 - 3x_3$.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 1.4a: Applications
    // ─────────────────────────────────────────────────
    '1.4a': {
        name: 'Applications',
        section: '1.4',
        questions: [
            {
                question: 'You want to fit $y = ax^2 + bx + c$ through $(2, 9)$. What equation does this give?',
                answers: ['$4a + 2b + c = 9$', '$2a + 2b + c = 9$', '$a + b + c = 9$', '$9a + 3b + c = 2$'],
                correct: 0,
                hints: ['Substitute $x = 2, y = 9$ into $y = ax^2 + bx + c$.', '$9 = a(4) + b(2) + c$.', '$4a + 2b + c = 9$.'],
                solution: '<p>$9 = a(2)^2 + b(2) + c = 4a + 2b + c$.</p>'
            },
            {
                question: 'At a road intersection, 300 cars/hr enter from the north, $x_1$ from the west, and $x_2$ leave east. The flow equation is:',
                answers: ['$300 + x_1 = x_2$', '$300 = x_1 + x_2$', '$x_1 = 300 + x_2$', '$300 - x_1 - x_2 = 0$'],
                correct: 0,
                hints: ['Flow conservation: flow in = flow out.', 'In: $300 + x_1$. Out: $x_2$.'],
                solution: '<p>Flow in ($300 + x_1$) = flow out ($x_2$). Answer: $300 + x_1 = x_2$.</p>'
            },
            {
                question: 'A quadratic through $(0, 1)$, $(1, 4)$, $(2, 11)$. The point $(0, 1)$ gives which equation?',
                answers: ['$c = 1$', '$a + b + c = 1$', '$4a + 2b + c = 1$', '$a = 1$'],
                correct: 0,
                hints: ['Plug in $x = 0$: $y = a(0)^2 + b(0) + c = c$.', 'So $c = 1$.', 'The point where $x = 0$ always directly gives you $c$.'],
                solution: '<p>$1 = a(0) + b(0) + c = c$. So $c = 1$ directly.</p>'
            },
            {
                question: 'A nutrition problem: you need exactly 10g protein and 6g fat from foods A and B. Food A has 2g protein and 1g fat per serving. Food B has 3g protein and 2g fat per serving. The system is:',
                answers: [
                    '$2a + 3b = 10$ and $a + 2b = 6$',
                    '$2a + b = 10$ and $3a + 2b = 6$',
                    '$a + b = 10$ and $a + b = 6$',
                    '$2a + 3b = 6$ and $a + 2b = 10$'
                ],
                correct: 0,
                hints: ['Protein: $2a + 3b = 10$ (2g from A per serving, 3g from B).', 'Fat: $1a + 2b = 6$.'],
                solution: '<p>Protein constraint: $2a + 3b = 10$. Fat constraint: $a + 2b = 6$.</p>'
            },
            {
                question: 'A chemical equation $a\\text{H}_2 + b\\text{O}_2 \\to c\\text{H}_2\\text{O}$ needs balancing. The hydrogen balance gives:',
                answers: ['$2a = 2c$', '$a = c$', '$2a = c$', '$a = 2c$'],
                correct: 0,
                hints: ['Count H atoms: left side has $2a$ hydrogen atoms, right side has $2c$.', 'Balance: $2a = 2c$.'],
                solution: '<p>Left: $2a$ H atoms. Right: $2c$ H atoms. Balance: $2a = 2c$ (or equivalently $a = c$).</p>'
            },
            {
                question: 'Fitting a line $y = mx + b$ through $(1, 3)$ and $(4, 9)$ gives which system?',
                answers: [
                    '$m + b = 3$ and $4m + b = 9$',
                    '$m + b = 3$ and $m + 4b = 9$',
                    '$3m + b = 1$ and $9m + b = 4$',
                    '$m + b = 9$ and $4m + b = 3$'
                ],
                correct: 0,
                hints: ['Point $(1,3)$: $3 = m(1) + b \\Rightarrow m + b = 3$.', 'Point $(4,9)$: $9 = m(4) + b \\Rightarrow 4m + b = 9$.'],
                solution: '<p>$(1,3)$: $m + b = 3$. $(4,9)$: $4m + b = 9$. Solving: $3m = 6 \\Rightarrow m = 2, b = 1$.</p>'
            }
        ]
    }
};

// Helper: get all questions for a section (e.g., '1.1')
function getSection(sectionId) {
    const questions = [];
    for (const [id, skill] of Object.entries(UNIT1_BANK)) {
        if (skill.section === sectionId) {
            questions.push(...skill.questions);
        }
    }
    return questions;
}

// Helper: get all questions for the entire unit
function getAllQuestions() {
    const questions = [];
    for (const skill of Object.values(UNIT1_BANK)) {
        questions.push(...skill.questions);
    }
    return questions;
}
