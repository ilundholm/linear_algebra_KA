/* ============================================================
   Unit 2 Question Bank — Vectors & Linear Combinations
   6 skills × 6 questions = 36 questions
   ============================================================ */

const UNIT2_BANK = {

    // ─────────────────────────────────────────────────
    // SKILL 2.1a: Vector Arithmetic
    // ─────────────────────────────────────────────────
    '2.1a': {
        name: 'Vector Arithmetic',
        section: '2.1',
        questions: [
            {
                question: 'Compute $\\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} + \\begin{bmatrix} 4 \\\\ 3 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 6 \\\\ 2 \\end{bmatrix}$', '$\\begin{bmatrix} 6 \\\\ -4 \\end{bmatrix}$', '$\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 8 \\\\ -3 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Add component-wise: top + top, bottom + bottom.', '$2 + 4 = 6$, $(-1) + 3 = 2$.'],
                solution: '<p>$\\begin{bmatrix} 2+4 \\\\ -1+3 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 2 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Compute $3\\begin{bmatrix} 1 \\\\ -2 \\\\ 4 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 3 \\\\ -6 \\\\ 12 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ -2 \\\\ 12 \\end{bmatrix}$', '$\\begin{bmatrix} 4 \\\\ 1 \\\\ 7 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 6 \\\\ 12 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Multiply each component by the scalar (3).', '$3(1) = 3$, $3(-2) = -6$, $3(4) = 12$.'],
                solution: '<p>$3\\begin{bmatrix} 1 \\\\ -2 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -6 \\\\ 12 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Compute $\\begin{bmatrix} 5 \\\\ 0 \\\\ -3 \\end{bmatrix} - \\begin{bmatrix} 2 \\\\ 1 \\\\ -3 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 3 \\\\ -1 \\\\ 0 \\end{bmatrix}$', '$\\begin{bmatrix} 7 \\\\ 1 \\\\ -6 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 1 \\\\ 0 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ -1 \\\\ -6 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Subtract component-wise.', '$5-2=3$, $0-1=-1$, $(-3)-(-3)=0$.'],
                solution: '<p>$\\begin{bmatrix} 5-2 \\\\ 0-1 \\\\ -3-(-3) \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ -1 \\\\ 0 \\end{bmatrix}$.</p>'
            },
            {
                question: 'What is the zero vector in $\\mathbb{R}^3$?',
                answers: ['$\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$', 'It doesn\'t exist in $\\mathbb{R}^3$'],
                correct: 0,
                hints: ['The zero vector has all components equal to 0.', 'In $\\mathbb{R}^3$ it must have 3 components.'],
                solution: '<p>The zero vector in $\\mathbb{R}^3$ is $\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$, the additive identity.</p>'
            },
            {
                question: 'Compute $-2\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} + \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} -2 \\\\ 8 \\end{bmatrix}$', '$\\begin{bmatrix} 2 \\\\ -8 \\end{bmatrix}$', '$\\begin{bmatrix} -2 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 10 \\\\ -8 \\end{bmatrix}$'],
                correct: 0,
                hints: ['First scale: $-2\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} -6 \\\\ 2 \\end{bmatrix}$.', 'Then add: $\\begin{bmatrix} -6+4 \\\\ 2+6 \\end{bmatrix}$.'],
                solution: '<p>$-2\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} + \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} -6 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} 4 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} -2 \\\\ 8 \\end{bmatrix}$.</p>'
            },
            {
                question: 'If $\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$, what is $\\mathbf{u} + (-\\mathbf{u})$?',
                answers: ['$\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$', '$\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} -1 \\\\ -2 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$-\\mathbf{u} = \\begin{bmatrix} -1 \\\\ -2 \\end{bmatrix}$.', '$\\mathbf{u} + (-\\mathbf{u})$ = the zero vector.'],
                solution: '<p>$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} -1 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$. A vector plus its negative is always $\\mathbf{0}$.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 2.1b: Vector Equations
    // ─────────────────────────────────────────────────
    '2.1b': {
        name: 'Vector Equations',
        section: '2.1',
        questions: [
            {
                question: 'Solve for $\\mathbf{x}$: $\\mathbf{x} + \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 2 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 4 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 10 \\\\ 1 \\end{bmatrix}$', '$\\begin{bmatrix} -4 \\\\ -3 \\end{bmatrix}$', '$\\begin{bmatrix} 4 \\\\ -3 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Subtract $\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix}$ from both sides.', '$\\mathbf{x} = \\begin{bmatrix} 7-3 \\\\ 2-(-1) \\end{bmatrix}$.'],
                solution: '<p>$\\mathbf{x} = \\begin{bmatrix} 7 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 3 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Solve for $c$: $c\\begin{bmatrix} 2 \\\\ 5 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 15 \\end{bmatrix}$.',
                answers: ['$c = 3$', '$c = 2$', '$c = 5$', 'No solution'],
                correct: 0,
                hints: ['From the first component: $2c = 6$.', '$c = 3$. Check: $3 \\cdot 5 = 15$ ✓.'],
                solution: '<p>$2c = 6 \\Rightarrow c = 3$. Check: $5(3) = 15$ ✓.</p>'
            },
            {
                question: 'The vector equation $x_1\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + x_2\\begin{bmatrix} 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$ is equivalent to which system?',
                answers: [
                    '$x_1 + 3x_2 = 5$ and $2x_1 - x_2 = 3$',
                    '$x_1 + 2x_2 = 5$ and $3x_1 - x_2 = 3$',
                    '$x_1 + 3x_2 = 3$ and $2x_1 - x_2 = 5$',
                    '$3x_1 + x_2 = 5$ and $-x_1 + 2x_2 = 3$'
                ],
                correct: 0,
                hints: ['Read off components. Top: $1 \\cdot x_1 + 3 \\cdot x_2 = 5$.', 'Bottom: $2 \\cdot x_1 + (-1) \\cdot x_2 = 3$.'],
                solution: '<p>Top components: $x_1 + 3x_2 = 5$. Bottom: $2x_1 - x_2 = 3$.</p>'
            },
            {
                question: 'Find $c$ such that $c\\begin{bmatrix} 4 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ -3 \\end{bmatrix}$.',
                answers: ['$c = \\frac{3}{2}$', '$c = 2$', '$c = \\frac{2}{3}$', 'No such $c$ exists'],
                correct: 0,
                hints: ['Component 1: $4c = 6 \\Rightarrow c = \\frac{3}{2}$.', 'Check component 2: $-2(\\frac{3}{2}) = -3$ ✓.'],
                solution: '<p>$4c = 6 \\Rightarrow c = \\frac{3}{2}$. Verify: $-2 \\cdot \\frac{3}{2} = -3$ ✓.</p>'
            },
            {
                question: 'Find $c$ such that $c\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$.',
                answers: ['$c = 3$', '$c = 2$', '$c = \\frac{3}{2}$', 'No such $c$ exists'],
                correct: 3,
                hints: ['Component 1: $c = 3$.', 'Component 2: $2c = 4 \\Rightarrow c = 2$.', '$3 \\neq 2$ — inconsistent! No single $c$ works.'],
                solution: '<p>$c = 3$ from component 1, but $c = 2$ from component 2. Contradiction — <strong>no such $c$</strong>.</p>'
            },
            {
                question: 'Solve: $2\\mathbf{u} - 3\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix}$.',
                answers: ['$\\mathbf{u} = \\begin{bmatrix} 5 \\\\ -1 \\end{bmatrix}$', '$\\mathbf{u} = \\begin{bmatrix} 2 \\\\ 2 \\end{bmatrix}$', '$\\mathbf{u} = \\begin{bmatrix} 5 \\\\ 1 \\end{bmatrix}$', '$\\mathbf{u} = \\begin{bmatrix} 4 \\\\ -2 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$2\\mathbf{u} = \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix} + 3\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 10 \\\\ -2 \\end{bmatrix}$.', '$\\mathbf{u} = \\frac{1}{2}\\begin{bmatrix} 10 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ -1 \\end{bmatrix}$.'],
                solution: '<p>$2\\mathbf{u} = \\begin{bmatrix} 7+3 \\\\ 1-3 \\end{bmatrix} = \\begin{bmatrix} 10 \\\\ -2 \\end{bmatrix}$, so $\\mathbf{u} = \\begin{bmatrix} 5 \\\\ -1 \\end{bmatrix}$.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 2.2a: Linear Combinations
    // ─────────────────────────────────────────────────
    '2.2a': {
        name: 'Linear Combinations',
        section: '2.2',
        questions: [
            {
                question: 'Compute $2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + 3\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$', '$\\begin{bmatrix} 5 \\\\ 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 \\\\ 5 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix}$ and $3\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 3 \\end{bmatrix}$.', 'Add them.'],
                solution: '<p>$\\begin{bmatrix} 2 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Express $\\begin{bmatrix} 8 \\\\ 5 \\end{bmatrix}$ as a linear combination $c_1\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} + c_2\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}$. Find $c_1$ and $c_2$.',
                answers: ['$c_1 = 6.5,\\; c_2 = 1.5$', '$c_1 = 5,\\; c_2 = 3$', '$c_1 = 8,\\; c_2 = 5$', '$c_1 = 4,\\; c_2 = 4$'],
                correct: 0,
                hints: ['System: $c_1 + c_2 = 8$ and $c_1 - c_2 = 5$.', 'Add equations: $2c_1 = 13 \\Rightarrow c_1 = 6.5$.', '$c_2 = 8 - 6.5 = 1.5$.'],
                solution: '<p>$c_1 + c_2 = 8$, $c_1 - c_2 = 5$. Adding: $2c_1 = 13$, so $c_1 = 6.5, c_2 = 1.5$.</p>'
            },
            {
                question: 'Is $\\begin{bmatrix} 3 \\\\ 7 \\end{bmatrix}$ a linear combination of $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$ and $\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$?',
                answers: ['Yes: $2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 1\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$', 'Yes: $3\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 0\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$', 'Yes: $1\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 2\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$', 'No, it is not'],
                correct: 0,
                hints: ['Solve $c_1 + c_2 = 3$ and $2c_1 + 3c_2 = 7$.', 'From Eq 1: $c_1 = 3 - c_2$. Sub into Eq 2: $2(3-c_2) + 3c_2 = 7$.', '$6 + c_2 = 7 \\Rightarrow c_2 = 1, c_1 = 2$.'],
                solution: '<p>$c_1 = 2, c_2 = 1$: $2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} + 1\\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 7 \\end{bmatrix}$ ✓.</p>'
            },
            {
                question: 'Compute $1\\begin{bmatrix} 2 \\\\ 0 \\\\ 1 \\end{bmatrix} + (-1)\\begin{bmatrix} 1 \\\\ 3 \\\\ 0 \\end{bmatrix} + 2\\begin{bmatrix} 0 \\\\ 1 \\\\ -1 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 1 \\\\ -1 \\\\ -1 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 4 \\\\ -1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 5 \\\\ 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ -1 \\\\ 1 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Scale each vector first.', '$\\begin{bmatrix} 2\\\\0\\\\1 \\end{bmatrix} + \\begin{bmatrix} -1\\\\-3\\\\0 \\end{bmatrix} + \\begin{bmatrix} 0\\\\2\\\\-2 \\end{bmatrix}$.', 'Add: $[2-1+0, 0-3+2, 1+0-2] = [1, -1, -1]$.'],
                solution: '<p>$\\begin{bmatrix} 2-1+0 \\\\ 0-3+2 \\\\ 1+0-2 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ -1 \\end{bmatrix}$.</p>'
            },
            {
                question: 'The system $A\\mathbf{x} = \\mathbf{b}$ asks: is $\\mathbf{b}$ a linear combination of the ______ of $A$?',
                answers: ['Columns', 'Rows', 'Diagonal entries', 'Eigenvalues'],
                correct: 0,
                hints: ['$A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\cdots$, where $\\mathbf{a}_i$ are columns of $A$.', 'This is a linear combination of columns.'],
                solution: '<p>$A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\cdots + x_n\\mathbf{a}_n$ — a linear combination of the <strong>columns</strong> of $A$.</p>'
            },
            {
                question: 'Can you write $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ as a linear combination of $\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$ and $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$?',
                answers: ['Yes', 'No'],
                correct: 1,
                hints: ['Both vectors are multiples of $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.', 'Any combo $c_1\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} + c_2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 2c_1+c_2 \\\\ 4c_1+2c_2 \\end{bmatrix}$.', 'The ratio of components is always 1:2, but we need ratio 1:0. Impossible.'],
                solution: '<p>Both vectors point in the same direction ($\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$). Their linear combinations form a line through the origin, which doesn\'t contain $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$. <strong>No</strong>.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 2.2b: Span
    // ─────────────────────────────────────────────────
    '2.2b': {
        name: 'Span',
        section: '2.2',
        questions: [
            {
                question: 'What is $\\text{Span}\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}\\right\\}$?',
                answers: ['All of $\\mathbb{R}^2$', 'A line through the origin', 'Just the origin', 'A plane in $\\mathbb{R}^3$'],
                correct: 0,
                hints: ['Any vector $\\begin{bmatrix} a \\\\ b \\end{bmatrix} = a\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + b\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$.', 'So every vector in $\\mathbb{R}^2$ is reachable.'],
                solution: '<p>$\\begin{bmatrix} a \\\\ b \\end{bmatrix} = a\\mathbf{e}_1 + b\\mathbf{e}_2$ for any $a, b$. The span is all of $\\mathbb{R}^2$.</p>'
            },
            {
                question: 'What is $\\text{Span}\\left\\{\\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix}\\right\\}$?',
                answers: ['A line through the origin in $\\mathbb{R}^2$', 'All of $\\mathbb{R}^2$', 'A single point', 'A plane'],
                correct: 0,
                hints: ['The span of one nonzero vector is all scalar multiples of that vector.', 'Geometrically, scalar multiples of a vector trace out a line through the origin.'],
                solution: '<p>$\\text{Span}\\{\\mathbf{v}\\}$ for a nonzero $\\mathbf{v}$ is the <strong>line</strong> through the origin in the direction of $\\mathbf{v}$.</p>'
            },
            {
                question: 'Does $\\begin{bmatrix} 4 \\\\ 8 \\end{bmatrix}$ lie in $\\text{Span}\\left\\{\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}\\right\\}$?',
                answers: ['Yes', 'No'],
                correct: 0,
                hints: ['Is $\\begin{bmatrix} 4 \\\\ 8 \\end{bmatrix}$ a scalar multiple of $\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$?', '$2 \\cdot \\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 8 \\end{bmatrix}$ ✓.'],
                solution: '<p>$\\begin{bmatrix} 4 \\\\ 8 \\end{bmatrix} = 2\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$. Yes, it\'s in the span.</p>'
            },
            {
                question: 'Two vectors in $\\mathbb{R}^3$ that are not parallel span:',
                answers: ['A line', 'A plane through the origin', 'All of $\\mathbb{R}^3$', 'Just a point'],
                correct: 1,
                hints: ['Two non-parallel vectors give two independent directions.', 'Two independent directions in $\\mathbb{R}^3$ sweep out a flat surface through the origin.', 'That surface is a plane.'],
                solution: '<p>Two non-parallel (linearly independent) vectors in $\\mathbb{R}^3$ span a <strong>plane</strong> through the origin.</p>'
            },
            {
                question: 'Is $\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$ in $\\text{Span}\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}\\right\\}$?',
                answers: ['Yes', 'No'],
                correct: 1,
                hints: ['$c_1\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix} + c_2\\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} c_1 \\\\ c_2 \\\\ 0 \\end{bmatrix}$.', 'The third component is always $0$, but we need $1$.'],
                solution: '<p>Any combination gives a vector with third component $0$. Since $\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$ has third component $1$, it\'s <strong>not</strong> in the span.</p>'
            },
            {
                question: '$\\text{Span}\\{\\mathbf{0}\\}$ equals:',
                answers: ['$\\{\\mathbf{0}\\}$ (just the zero vector)', 'All of $\\mathbb{R}^n$', 'A line', 'Undefined'],
                correct: 0,
                hints: ['$c \\cdot \\mathbf{0} = \\mathbf{0}$ for any scalar $c$.', 'Every scalar multiple of $\\mathbf{0}$ is $\\mathbf{0}$.'],
                solution: '<p>$\\text{Span}\\{\\mathbf{0}\\} = \\{\\mathbf{0}\\}$. The only scalar multiple of $\\mathbf{0}$ is itself.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 2.3a: Linear Independence
    // ─────────────────────────────────────────────────
    '2.3a': {
        name: 'Linear Independence',
        section: '2.3',
        questions: [
            {
                question: 'Are $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$ and $\\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix}$ linearly independent?',
                answers: ['Yes', 'No, because one is a scalar multiple of the other'],
                correct: 1,
                hints: ['$\\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix} = 3\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.', 'Scalar multiples are always dependent.'],
                solution: '<p>$\\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix} = 3\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$, so they\'re <strong>linearly dependent</strong>.</p>'
            },
            {
                question: 'Are $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ and $\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$ linearly independent?',
                answers: ['Yes', 'No'],
                correct: 0,
                hints: ['$c_1\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + c_2\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$ implies $c_1 = 0, c_2 = 0$.', 'Only the trivial solution → independent.'],
                solution: '<p>Only $c_1 = c_2 = 0$ satisfies $c_1\\mathbf{e}_1 + c_2\\mathbf{e}_2 = \\mathbf{0}$. <strong>Linearly independent</strong>.</p>'
            },
            {
                question: 'Any set containing the zero vector is:',
                answers: ['Always linearly independent', 'Always linearly dependent', 'Dependent only if there are other vectors', 'Independent if the other vectors are'],
                correct: 1,
                hints: ['Can you write $\\mathbf{0}$ as a nontrivial combination?', '$1 \\cdot \\mathbf{0} + 0 \\cdot \\mathbf{v}_1 + \\cdots = \\mathbf{0}$ — nontrivial (coefficient 1 ≠ 0).'],
                solution: '<p>$1 \\cdot \\mathbf{0}$ is a nontrivial combination equaling $\\mathbf{0}$. Any set containing $\\mathbf{0}$ is <strong>always dependent</strong>.</p>'
            },
            {
                question: 'In $\\mathbb{R}^2$, can three vectors be linearly independent?',
                answers: ['Yes', 'No, at most 2 can be independent in $\\mathbb{R}^2$'],
                correct: 1,
                hints: ['How many dimensions does $\\mathbb{R}^2$ have?', 'You can have at most $n$ independent vectors in $\\mathbb{R}^n$.', 'Three vectors in $\\mathbb{R}^2$ must be dependent.'],
                solution: '<p>In $\\mathbb{R}^n$, at most $n$ vectors can be independent. In $\\mathbb{R}^2$, any set of 3+ vectors is <strong>dependent</strong>.</p>'
            },
            {
                question: 'Are $\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}$, $\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$, $\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$ linearly independent?',
                answers: ['Yes', 'No'],
                correct: 0,
                hints: ['Set up $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 = \\mathbf{0}$.', 'Row 3: $c_3 = 0$. Row 2: $c_2 + c_3 = 0 \\Rightarrow c_2 = 0$.', 'Row 1: $c_1 + c_2 + c_3 = 0 \\Rightarrow c_1 = 0$. Only trivial solution!'],
                solution: '<p>The only solution to $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 = \\mathbf{0}$ is $c_1 = c_2 = c_3 = 0$. <strong>Independent</strong>.</p>'
            },
            {
                question: 'If $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is independent and $\\mathbf{v}_3 \\in \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, then $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ is:',
                answers: ['Linearly independent', 'Linearly dependent'],
                correct: 1,
                hints: ['If $\\mathbf{v}_3 = a\\mathbf{v}_1 + b\\mathbf{v}_2$, then...', '$a\\mathbf{v}_1 + b\\mathbf{v}_2 - 1 \\cdot \\mathbf{v}_3 = \\mathbf{0}$ is a nontrivial relation.'],
                solution: '<p>$\\mathbf{v}_3 = a\\mathbf{v}_1 + b\\mathbf{v}_2$ gives $a\\mathbf{v}_1 + b\\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$ (nontrivial). <strong>Dependent</strong>.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 2.3b: Dependence Relations
    // ─────────────────────────────────────────────────
    '2.3b': {
        name: 'Dependence Relations',
        section: '2.3',
        questions: [
            {
                question: 'Given $\\mathbf{v}_3 = 2\\mathbf{v}_1 - \\mathbf{v}_2$, write a dependence relation.',
                answers: ['$2\\mathbf{v}_1 - \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$', '$\\mathbf{v}_1 - 2\\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}$', '$2\\mathbf{v}_1 + \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$', '$\\mathbf{v}_1 + \\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}$'],
                correct: 0,
                hints: ['Rearrange: $2\\mathbf{v}_1 - \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$.'],
                solution: '<p>$\\mathbf{v}_3 = 2\\mathbf{v}_1 - \\mathbf{v}_2$ rearranges to $2\\mathbf{v}_1 - \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$.</p>'
            },
            {
                question: 'If $\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} = 2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + 2\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$, what is $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ in terms of the others?',
                answers: [
                    '$\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\frac{1}{2}\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$',
                    '$\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} - 2\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$',
                    '$\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = 2\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$',
                    'Cannot be expressed'
                ],
                correct: 0,
                hints: ['$\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} = 2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + 2\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$.', 'Solve for $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$: divide both sides by 2.', '$\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\frac{1}{2}\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$.'],
                solution: '<p>$2\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} - 2\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$, so $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\frac{1}{2}\\begin{bmatrix} 4 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$.</p>'
            },
            {
                question: 'The vectors $\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$, $\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$, $\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$ are dependent. Which is the "redundant" one?',
                answers: ['$\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix}$ (it equals $2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$)', '$\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$', '$\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$', 'All three are equally redundant'],
                correct: 0,
                hints: ['Look for one vector that\'s a scalar multiple or combo of others.', '$\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = 2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$.'],
                solution: '<p>$\\begin{bmatrix} 2 \\\\ 4 \\end{bmatrix} = 2\\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$. It\'s redundant — removing it leaves $\\{\\begin{bmatrix} 1\\\\2 \\end{bmatrix}, \\begin{bmatrix} 0\\\\1 \\end{bmatrix}\\}$ which is independent.</p>'
            },
            {
                question: 'If $3\\mathbf{v}_1 + 0\\mathbf{v}_2 - 2\\mathbf{v}_3 = \\mathbf{0}$, express $\\mathbf{v}_1$ in terms of $\\mathbf{v}_3$.',
                answers: ['$\\mathbf{v}_1 = \\frac{2}{3}\\mathbf{v}_3$', '$\\mathbf{v}_1 = -\\frac{2}{3}\\mathbf{v}_3$', '$\\mathbf{v}_1 = \\frac{3}{2}\\mathbf{v}_3$', '$\\mathbf{v}_1 = 2\\mathbf{v}_3$'],
                correct: 0,
                hints: ['$3\\mathbf{v}_1 = 2\\mathbf{v}_3$.', '$\\mathbf{v}_1 = \\frac{2}{3}\\mathbf{v}_3$.'],
                solution: '<p>$3\\mathbf{v}_1 - 2\\mathbf{v}_3 = \\mathbf{0} \\Rightarrow 3\\mathbf{v}_1 = 2\\mathbf{v}_3 \\Rightarrow \\mathbf{v}_1 = \\frac{2}{3}\\mathbf{v}_3$.</p>'
            },
            {
                question: 'How many vectors must a linearly dependent set in $\\mathbb{R}^4$ contain (minimum)?',
                answers: ['1 (just $\\mathbf{0}$)', '2', '5', '4'],
                correct: 0,
                hints: ['Can a single vector be dependent?', 'Yes, if it\'s $\\mathbf{0}$! $1 \\cdot \\mathbf{0} = \\mathbf{0}$ is nontrivial.'],
                solution: '<p>The set $\\{\\mathbf{0}\\}$ is dependent (1 vector). In general, the minimum for dependence is <strong>1 vector</strong> (when it\'s $\\mathbf{0}$).</p>'
            },
            {
                question: 'If $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ are dependent with relation $\\mathbf{v}_1 - 2\\mathbf{v}_2 + \\mathbf{v}_3 = \\mathbf{0}$, then $\\mathbf{v}_2 = $?',
                answers: ['$\\frac{1}{2}(\\mathbf{v}_1 + \\mathbf{v}_3)$', '$\\mathbf{v}_1 + \\mathbf{v}_3$', '$\\frac{1}{2}(\\mathbf{v}_1 - \\mathbf{v}_3)$', '$2\\mathbf{v}_1 - \\mathbf{v}_3$'],
                correct: 0,
                hints: ['$\\mathbf{v}_1 + \\mathbf{v}_3 = 2\\mathbf{v}_2$.', '$\\mathbf{v}_2 = \\frac{1}{2}(\\mathbf{v}_1 + \\mathbf{v}_3)$.'],
                solution: '<p>$-2\\mathbf{v}_2 = -\\mathbf{v}_1 - \\mathbf{v}_3 \\Rightarrow \\mathbf{v}_2 = \\frac{1}{2}(\\mathbf{v}_1 + \\mathbf{v}_3)$.</p>'
            }
        ]
    }
};

// Helper: get all questions for a section (e.g., '2.1')
function getSection(sectionId) {
    const questions = [];
    for (const [id, skill] of Object.entries(UNIT2_BANK)) {
        if (skill.section === sectionId) {
            questions.push(...skill.questions);
        }
    }
    return questions;
}

// Helper: get all questions for the entire unit
function getAllQuestions() {
    const questions = [];
    for (const skill of Object.values(UNIT2_BANK)) {
        questions.push(...skill.questions);
    }
    return questions;
}
