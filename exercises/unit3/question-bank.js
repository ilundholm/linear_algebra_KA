/* ============================================================
   Unit 3 Question Bank — Matrix-Vector & Transformations
   6 skills × 6 questions = 36 questions
   ============================================================ */

const UNIT3_BANK = {

    // ─────────────────────────────────────────────────
    // SKILL 3.1a: Matrix-Vector Products
    // ─────────────────────────────────────────────────
    '3.1a': {
        name: 'Matrix-Vector Products',
        section: '3.1',
        questions: [
            {
                question: 'Compute $\\begin{bmatrix} 1 & 3 \\\\ 2 & -1 \\end{bmatrix}\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix}$', '$\\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 5 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Row 1 dot product: $1(2) + 3(1) = 5$.', 'Row 2 dot product: $2(2) + (-1)(1) = 3$.'],
                solution: '<p>$\\begin{bmatrix} 1(2)+3(1) \\\\ 2(2)+(-1)(1) \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Compute $\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}\\begin{bmatrix} 4 \\\\ -2 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 8 \\\\ -6 \\end{bmatrix}$', '$\\begin{bmatrix} 8 \\\\ 6 \\end{bmatrix}$', '$\\begin{bmatrix} 6 \\\\ -8 \\end{bmatrix}$', '$\\begin{bmatrix} 4 \\\\ -6 \\end{bmatrix}$'],
                correct: 0,
                hints: ['A diagonal matrix scales each component independently.', '$2(4) = 8$, $3(-2) = -6$.'],
                solution: '<p>Diagonal: $\\begin{bmatrix} 2(4) \\\\ 3(-2) \\end{bmatrix} = \\begin{bmatrix} 8 \\\\ -6 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Compute $\\begin{bmatrix} 1 & 0 & 2 \\\\ 3 & 1 & -1 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 7 \\\\ 2 \\end{bmatrix}$', '$\\begin{bmatrix} 5 \\\\ 2 \\end{bmatrix}$', '$\\begin{bmatrix} 7 \\\\ 4 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Row 1: $1(1) + 0(2) + 2(3) = 7$.', 'Row 2: $3(1) + 1(2) + (-1)(3) = 2$.'],
                solution: '<p>$\\begin{bmatrix} 1+0+6 \\\\ 3+2-3 \\end{bmatrix} = \\begin{bmatrix} 7 \\\\ 2 \\end{bmatrix}$.</p>'
            },
            {
                question: 'What is $I_2\\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}$ where $I_2 = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$?',
                answers: ['$\\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}$', '$\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$', '$\\begin{bmatrix} -3 \\\\ 5 \\end{bmatrix}$', '$\\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$I$ is the identity matrix.', '$I\\mathbf{x} = \\mathbf{x}$ for every vector $\\mathbf{x}$.'],
                solution: '<p>The identity matrix doesn\'t change the vector: $I\\mathbf{x} = \\mathbf{x}$.</p>'
            },
            {
                question: 'Using the column method, $A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2$. For $A = \\begin{bmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{bmatrix}$ and $\\mathbf{x} = \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix}$:',
                answers: ['$2\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} + (-1)\\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix} = \\begin{bmatrix}-2\\\\-1\\\\0\\end{bmatrix}$', '$\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix} + \\begin{bmatrix}-4\\\\-5\\\\-6\\end{bmatrix} = \\begin{bmatrix}6\\\\9\\\\12\\end{bmatrix}$', '$2\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} + \\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix} = \\begin{bmatrix}6\\\\9\\\\12\\end{bmatrix}$', '$(-1)\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} + 2\\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix} = \\begin{bmatrix}7\\\\8\\\\9\\end{bmatrix}$'],
                correct: 0,
                hints: ['Column 1 = $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$, column 2 = $\\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix}$.', '$x_1 = 2, x_2 = -1$.', '$2\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} - \\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix} = \\begin{bmatrix}-2\\\\-1\\\\0\\end{bmatrix}$.'],
                solution: '<p>$A\\mathbf{x} = 2\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} - 1\\begin{bmatrix}4\\\\5\\\\6\\end{bmatrix} = \\begin{bmatrix}2-4\\\\4-5\\\\6-6\\end{bmatrix} = \\begin{bmatrix}-2\\\\-1\\\\0\\end{bmatrix}$.</p>'
            },
            {
                question: 'Compute $\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}\\begin{bmatrix} 3 \\\\ 5 \\end{bmatrix}$.',
                answers: ['$\\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}$', '$\\begin{bmatrix} -5 \\\\ 3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 5 \\end{bmatrix}$', '$\\begin{bmatrix} -3 \\\\ -5 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Row 1: $0(3) + 1(5) = 5$.', 'Row 2: $(-1)(3) + 0(5) = -3$.'],
                solution: '<p>$\\begin{bmatrix} 0(3)+1(5) \\\\ (-1)(3)+0(5) \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix}$. This is a $90°$ counterclockwise rotation!</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 3.1b: Dimensions & Compatibility
    // ─────────────────────────────────────────────────
    '3.1b': {
        name: 'Dimensions & Compatibility',
        section: '3.1',
        questions: [
            {
                question: 'If $A$ is $3 \\times 4$ and $\\mathbf{x} \\in \\mathbb{R}^4$, what is the size of $A\\mathbf{x}$?',
                answers: ['$3 \\times 1$ (a vector in $\\mathbb{R}^3$)', '$4 \\times 1$', '$3 \\times 4$', 'Undefined'],
                correct: 0,
                hints: ['For $A\\mathbf{x}$ to be defined, columns of $A$ must match rows of $\\mathbf{x}$.', '$A$ has 4 columns, $\\mathbf{x}$ has 4 entries ✓.', 'Result size = rows of $A$ = 3.'],
                solution: '<p>$(3 \\times 4)(4 \\times 1) = 3 \\times 1$. Inner dimensions match (4=4), result is $3 \\times 1$.</p>'
            },
            {
                question: 'Can you compute $A\\mathbf{x}$ if $A$ is $2 \\times 3$ and $\\mathbf{x} \\in \\mathbb{R}^2$?',
                answers: ['Yes, result is in $\\mathbb{R}^2$', 'Yes, result is in $\\mathbb{R}^3$', 'No, dimensions don\'t match', 'Only if $A$ is square'],
                correct: 2,
                hints: ['$A$ has 3 columns but $\\mathbf{x}$ has 2 entries.', '$3 \\neq 2$, so the product is undefined.'],
                solution: '<p>$A$ has 3 columns, $\\mathbf{x}$ has 2 rows. $3 \\neq 2$ → <strong>undefined</strong>.</p>'
            },
            {
                question: 'A linear transformation $T: \\mathbb{R}^5 \\to \\mathbb{R}^3$ has a standard matrix of what size?',
                answers: ['$3 \\times 5$', '$5 \\times 3$', '$5 \\times 5$', '$3 \\times 3$'],
                correct: 0,
                hints: ['The input is in $\\mathbb{R}^5$ (5 columns).', 'The output is in $\\mathbb{R}^3$ (3 rows).', 'Matrix size: rows × columns = $3 \\times 5$.'],
                solution: '<p>Output dimension = rows, input dimension = columns. So $3 \\times 5$.</p>'
            },
            {
                question: 'If $A$ is $n \\times n$ (square), $A\\mathbf{x}$ maps $\\mathbb{R}^n$ to:',
                answers: ['$\\mathbb{R}^n$ (same space)', '$\\mathbb{R}^{n-1}$', '$\\mathbb{R}^{n+1}$', '$\\mathbb{R}^{2n}$'],
                correct: 0,
                hints: ['An $n \\times n$ matrix has $n$ rows and $n$ columns.', 'Input: $\\mathbb{R}^n$ (matches columns). Output: $\\mathbb{R}^n$ (matches rows).'],
                solution: '<p>Square matrices map $\\mathbb{R}^n \\to \\mathbb{R}^n$.</p>'
            },
            {
                question: 'How many columns does the standard matrix of $T: \\mathbb{R}^4 \\to \\mathbb{R}^2$ have?',
                answers: ['2', '4', '6', '8'],
                correct: 1,
                hints: ['Columns = dimension of the domain.', 'Domain is $\\mathbb{R}^4$, so 4 columns.'],
                solution: '<p>Columns = input dimension = 4.</p>'
            },
            {
                question: 'The product $A\\mathbf{x}$ can be viewed as a linear combination of the ______ of $A$ with weights from $\\mathbf{x}$.',
                answers: ['Columns', 'Rows', 'Diagonals', 'Eigenvalues'],
                correct: 0,
                hints: ['$A\\mathbf{x} = x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\cdots$', 'The $\\mathbf{a}_i$ are the columns of $A$.'],
                solution: '<p>$A\\mathbf{x} = x_1\\text{(col 1)} + x_2\\text{(col 2)} + \\cdots$. It\'s a linear combination of <strong>columns</strong>.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 3.2a: Transformation Identification
    // ─────────────────────────────────────────────────
    '3.2a': {
        name: 'Transformation Identification',
        section: '3.2',
        questions: [
            {
                question: 'The matrix $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$ represents which transformation?',
                answers: ['$90°$ counterclockwise rotation', '$90°$ clockwise rotation', 'Reflection over the $x$-axis', 'Reflection over $y = x$'],
                correct: 0,
                hints: ['Check where $\\mathbf{e}_1 = \\begin{bmatrix}1\\\\0\\end{bmatrix}$ goes: column 1 = $\\begin{bmatrix}0\\\\1\\end{bmatrix}$.', 'And $\\mathbf{e}_2 \\to \\begin{bmatrix}-1\\\\0\\end{bmatrix}$.', 'Right goes up, up goes left — that\'s $90°$ counterclockwise.'],
                solution: '<p>$\\mathbf{e}_1 \\to \\begin{bmatrix}0\\\\1\\end{bmatrix}$, $\\mathbf{e}_2 \\to \\begin{bmatrix}-1\\\\0\\end{bmatrix}$. This is <strong>$90°$ CCW rotation</strong>.</p>'
            },
            {
                question: 'The matrix $\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ represents:',
                answers: ['Reflection over the $x$-axis', 'Reflection over the $y$-axis', '$180°$ rotation', 'Horizontal stretch'],
                correct: 0,
                hints: ['$\\mathbf{e}_1 \\to \\begin{bmatrix}1\\\\0\\end{bmatrix}$ (unchanged).', '$\\mathbf{e}_2 \\to \\begin{bmatrix}0\\\\-1\\end{bmatrix}$ (flipped vertically).', 'The $y$-component is negated — reflection over $x$-axis.'],
                solution: '<p>$x$ stays, $y$ is negated. That\'s <strong>reflection over the $x$-axis</strong>.</p>'
            },
            {
                question: 'Which matrix scales the $x$-direction by 3 and the $y$-direction by 2?',
                answers: ['$\\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 2 \\\\ 0 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 3 \\\\ 2 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$\\mathbf{e}_1 \\to 3\\mathbf{e}_1$ (column 1 = $\\begin{bmatrix}3\\\\0\\end{bmatrix}$).', '$\\mathbf{e}_2 \\to 2\\mathbf{e}_2$ (column 2 = $\\begin{bmatrix}0\\\\2\\end{bmatrix}$).'],
                solution: '<p>$\\begin{bmatrix} 3 & 0 \\\\ 0 & 2 \\end{bmatrix}$: column 1 = $3\\mathbf{e}_1$, column 2 = $2\\mathbf{e}_2$.</p>'
            },
            {
                question: 'The matrix $\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$ represents:',
                answers: ['A horizontal shear', 'A vertical shear', 'A rotation', 'A projection'],
                correct: 0,
                hints: ['$\\mathbf{e}_1 \\to \\begin{bmatrix}1\\\\0\\end{bmatrix}$ (unchanged).', '$\\mathbf{e}_2 \\to \\begin{bmatrix}k\\\\1\\end{bmatrix}$ (shifted horizontally by $k$).', 'This slides points horizontally proportional to their $y$-value.'],
                solution: '<p>$\\mathbf{e}_1$ fixed, $\\mathbf{e}_2$ shifted right by $k$. This is a <strong>horizontal shear</strong>.</p>'
            },
            {
                question: 'The matrix $\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$ represents:',
                answers: ['$180°$ rotation', 'Reflection over the origin', 'Reflection over $y = x$', '$90°$ rotation'],
                correct: 0,
                hints: ['$\\mathbf{e}_1 \\to \\begin{bmatrix}-1\\\\0\\end{bmatrix}$, $\\mathbf{e}_2 \\to \\begin{bmatrix}0\\\\-1\\end{bmatrix}$.', 'Every vector $\\begin{bmatrix}x\\\\y\\end{bmatrix} \\to \\begin{bmatrix}-x\\\\-y\\end{bmatrix}$.', 'This is a $180°$ rotation (or equivalently, reflection through the origin).'],
                solution: '<p>All vectors get negated: $\\mathbf{x} \\to -\\mathbf{x}$. This is a <strong>$180°$ rotation</strong>.</p>'
            },
            {
                question: 'The matrix $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$ represents:',
                answers: ['Reflection over $y = x$', 'Reflection over the $x$-axis', '$90°$ rotation', 'A shear'],
                correct: 0,
                hints: ['$\\mathbf{e}_1 \\to \\begin{bmatrix}0\\\\1\\end{bmatrix} = \\mathbf{e}_2$.', '$\\mathbf{e}_2 \\to \\begin{bmatrix}1\\\\0\\end{bmatrix} = \\mathbf{e}_1$.', 'It swaps coordinates: $(x,y) \\to (y,x)$ — that\'s reflection over $y = x$.'],
                solution: '<p>$\\begin{bmatrix}x\\\\y\\end{bmatrix} \\to \\begin{bmatrix}y\\\\x\\end{bmatrix}$: <strong>reflection over $y = x$</strong>.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 3.2b: Properties of Linear Transformations
    // ─────────────────────────────────────────────────
    '3.2b': {
        name: 'Properties of Linear Transformations',
        section: '3.2',
        questions: [
            {
                question: 'A linear transformation $T$ must satisfy $T(\\mathbf{0}) = $?',
                answers: ['$\\mathbf{0}$', '$\\mathbf{1}$', 'Depends on $T$', 'Undefined'],
                correct: 0,
                hints: ['$T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$.', 'Every linear transformation maps zero to zero.'],
                solution: '<p>$T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$. Linearity forces $T(\\mathbf{0}) = \\mathbf{0}$.</p>'
            },
            {
                question: 'If $T$ is linear and $T(\\mathbf{u}) = \\begin{bmatrix}1\\\\3\\end{bmatrix}$, $T(\\mathbf{v}) = \\begin{bmatrix}2\\\\-1\\end{bmatrix}$, find $T(2\\mathbf{u} + \\mathbf{v})$.',
                answers: ['$\\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$', '$\\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix}$', '$\\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$', '$\\begin{bmatrix} 6 \\\\ -1 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$T(2\\mathbf{u} + \\mathbf{v}) = 2T(\\mathbf{u}) + T(\\mathbf{v})$.', '$= 2\\begin{bmatrix}1\\\\3\\end{bmatrix} + \\begin{bmatrix}2\\\\-1\\end{bmatrix}$.', '$= \\begin{bmatrix}2\\\\6\\end{bmatrix} + \\begin{bmatrix}2\\\\-1\\end{bmatrix} = \\begin{bmatrix}4\\\\5\\end{bmatrix}$.'],
                solution: '<p>Linearity: $T(2\\mathbf{u}+\\mathbf{v}) = 2T(\\mathbf{u}) + T(\\mathbf{v}) = \\begin{bmatrix}2+2\\\\6-1\\end{bmatrix} = \\begin{bmatrix}4\\\\5\\end{bmatrix}$.</p>'
            },
            {
                question: 'Is $T(\\mathbf{x}) = \\mathbf{x} + \\begin{bmatrix}1\\\\0\\end{bmatrix}$ a linear transformation?',
                answers: ['Yes', 'No, because $T(\\mathbf{0}) \\neq \\mathbf{0}$'],
                correct: 1,
                hints: ['Check: $T(\\mathbf{0}) = \\mathbf{0} + \\begin{bmatrix}1\\\\0\\end{bmatrix} = \\begin{bmatrix}1\\\\0\\end{bmatrix} \\neq \\mathbf{0}$.', 'Violates the requirement $T(\\mathbf{0}) = \\mathbf{0}$.'],
                solution: '<p>$T(\\mathbf{0}) = \\begin{bmatrix}1\\\\0\\end{bmatrix} \\neq \\mathbf{0}$. Translations are <strong>not linear</strong>.</p>'
            },
            {
                question: 'If $T$ is linear, $T(c\\mathbf{u}) = $?',
                answers: ['$cT(\\mathbf{u})$', '$T(c) \\cdot T(\\mathbf{u})$', '$c + T(\\mathbf{u})$', '$T(\\mathbf{u})^c$'],
                correct: 0,
                hints: ['This is the homogeneity property of linear transformations.', '$T(c\\mathbf{u}) = cT(\\mathbf{u})$ — scalars factor out.'],
                solution: '<p>Homogeneity: $T(c\\mathbf{u}) = cT(\\mathbf{u})$. Scalars pass through linear transformations.</p>'
            },
            {
                question: 'Which of these is linear?',
                answers: ['$T(x,y) = (2x - y, \\; 3x)$', '$T(x,y) = (x^2, \\; y)$', '$T(x,y) = (x + 1, \\; y)$', '$T(x,y) = (|x|, \\; y)$'],
                correct: 0,
                hints: ['Option B has $x^2$ — not linear (fails $T(2\\mathbf{x}) = 2T(\\mathbf{x})$).', 'Option C shifts by 1 — translation, not linear.', 'Option D has absolute value — not linear.', 'Option A uses only addition and scalar multiplication of components.'],
                solution: '<p>$T(x,y) = (2x-y, 3x)$ is linear — it can be written as $\\begin{bmatrix}2 & -1 \\\\ 3 & 0\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}$.</p>'
            },
            {
                question: 'If $T$ is linear and $T(\\mathbf{u}) = T(\\mathbf{v})$, does that mean $\\mathbf{u} = \\mathbf{v}$?',
                answers: ['Always yes', 'Not necessarily — only if $T$ is one-to-one', 'Always no', 'Only if $T$ is onto'],
                correct: 1,
                hints: ['$T(\\mathbf{u}) = T(\\mathbf{v}) \\Rightarrow T(\\mathbf{u} - \\mathbf{v}) = \\mathbf{0}$.', 'If the only solution to $T(\\mathbf{x}) = \\mathbf{0}$ is $\\mathbf{x} = \\mathbf{0}$ (one-to-one), then $\\mathbf{u} = \\mathbf{v}$.', 'But if the kernel is nontrivial, $\\mathbf{u} \\neq \\mathbf{v}$ is possible.'],
                solution: '<p>$T(\\mathbf{u}) = T(\\mathbf{v})$ means $T(\\mathbf{u}-\\mathbf{v}) = \\mathbf{0}$. This forces $\\mathbf{u} = \\mathbf{v}$ only if $T$ is <strong>one-to-one</strong>.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 3.3a: Build Transformation Matrices
    // ─────────────────────────────────────────────────
    '3.3a': {
        name: 'Build Transformation Matrices',
        section: '3.3',
        questions: [
            {
                question: 'A linear transformation sends $\\mathbf{e}_1 \\to \\begin{bmatrix}3\\\\1\\end{bmatrix}$ and $\\mathbf{e}_2 \\to \\begin{bmatrix}-2\\\\4\\end{bmatrix}$. Its matrix is:',
                answers: ['$\\begin{bmatrix} 3 & -2 \\\\ 1 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} 3 & 1 \\\\ -2 & 4 \\end{bmatrix}$', '$\\begin{bmatrix} -2 & 3 \\\\ 4 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 4 \\\\ 3 & -2 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Column 1 = where $\\mathbf{e}_1$ goes = $\\begin{bmatrix}3\\\\1\\end{bmatrix}$.', 'Column 2 = where $\\mathbf{e}_2$ goes = $\\begin{bmatrix}-2\\\\4\\end{bmatrix}$.', 'Standard matrix = $[T(\\mathbf{e}_1) \\;|\\; T(\\mathbf{e}_2)]$.'],
                solution: '<p>$A = [T(\\mathbf{e}_1) \\;|\\; T(\\mathbf{e}_2)] = \\begin{bmatrix} 3 & -2 \\\\ 1 & 4 \\end{bmatrix}$.</p>'
            },
            {
                question: 'A transformation doubles $\\mathbf{e}_1$ and reverses $\\mathbf{e}_2$. Its matrix is:',
                answers: ['$\\begin{bmatrix} 2 & 0 \\\\ 0 & -1 \\end{bmatrix}$', '$\\begin{bmatrix} -1 & 0 \\\\ 0 & 2 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & -1 \\\\ 0 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 2 \\\\ -1 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Doubles $\\mathbf{e}_1$: $T(\\mathbf{e}_1) = 2\\mathbf{e}_1 = \\begin{bmatrix}2\\\\0\\end{bmatrix}$.', 'Reverses $\\mathbf{e}_2$: $T(\\mathbf{e}_2) = -\\mathbf{e}_2 = \\begin{bmatrix}0\\\\-1\\end{bmatrix}$.'],
                solution: '<p>$A = \\begin{bmatrix} 2 & 0 \\\\ 0 & -1 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Find the matrix for $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ defined by $T(x_1, x_2, x_3) = (x_1 + x_3, \\; 2x_2)$.',
                answers: ['$\\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 2 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 2 \\\\ 0 & 0 \\\\ 1 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$T(\\mathbf{e}_1) = T(1,0,0) = (1, 0) \\to$ column 1 = $\\begin{bmatrix}1\\\\0\\end{bmatrix}$.', '$T(\\mathbf{e}_2) = T(0,1,0) = (0, 2) \\to$ column 2 = $\\begin{bmatrix}0\\\\2\\end{bmatrix}$.', '$T(\\mathbf{e}_3) = T(0,0,1) = (1, 0) \\to$ column 3 = $\\begin{bmatrix}1\\\\0\\end{bmatrix}$.'],
                solution: '<p>$A = [T(\\mathbf{e}_1) | T(\\mathbf{e}_2) | T(\\mathbf{e}_3)] = \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 2 & 0 \\end{bmatrix}$.</p>'
            },
            {
                question: 'The projection onto the $x$-axis: $T(x,y) = (x, 0)$. Its matrix is:',
                answers: ['$\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$T(\\mathbf{e}_1) = (1,0) \\to$ col 1 = $\\begin{bmatrix}1\\\\0\\end{bmatrix}$.', '$T(\\mathbf{e}_2) = (0,0) \\to$ col 2 = $\\begin{bmatrix}0\\\\0\\end{bmatrix}$.'],
                solution: '<p>$\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$. The $y$-component is annihilated.</p>'
            },
            {
                question: 'If $T$ maps $\\mathbf{e}_1 \\to \\mathbf{e}_1 + \\mathbf{e}_2$ and $\\mathbf{e}_2 \\to \\mathbf{e}_2$, the matrix is:',
                answers: ['$\\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Col 1 = $T(\\mathbf{e}_1) = \\begin{bmatrix}1\\\\1\\end{bmatrix}$.', 'Col 2 = $T(\\mathbf{e}_2) = \\begin{bmatrix}0\\\\1\\end{bmatrix}$.'],
                solution: '<p>$A = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix}$. This is a vertical shear.</p>'
            },
            {
                question: 'To find the standard matrix of any linear $T: \\mathbb{R}^n \\to \\mathbb{R}^m$, you compute:',
                answers: ['$[T(\\mathbf{e}_1) \\;|\\; T(\\mathbf{e}_2) \\;|\\; \\cdots \\;|\\; T(\\mathbf{e}_n)]$', '$T$ applied to the zero vector', 'The inverse of $T$', 'The determinant of $T$'],
                correct: 0,
                hints: ['Apply $T$ to each standard basis vector.', 'The images become the columns of the matrix.'],
                solution: '<p>The standard matrix has $T(\\mathbf{e}_i)$ as its $i$-th column. Evaluate $T$ on each basis vector.</p>'
            }
        ]
    },

    // ─────────────────────────────────────────────────
    // SKILL 3.3b: Standard Matrices (Rotation, Reflection, Composition)
    // ─────────────────────────────────────────────────
    '3.3b': {
        name: 'Standard Matrices',
        section: '3.3',
        questions: [
            {
                question: 'The standard matrix for rotation by $\\theta$ counterclockwise is:',
                answers: [
                    '$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$',
                    '$\\begin{bmatrix} \\sin\\theta & \\cos\\theta \\\\ -\\cos\\theta & \\sin\\theta \\end{bmatrix}$',
                    '$\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{bmatrix}$',
                    '$\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$'
                ],
                correct: 0,
                hints: ['$\\mathbf{e}_1 = (1,0)$ rotates to $(\\cos\\theta, \\sin\\theta)$ — that\'s column 1.', '$\\mathbf{e}_2 = (0,1)$ rotates to $(-\\sin\\theta, \\cos\\theta)$ — that\'s column 2.'],
                solution: '<p>$R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$.</p>'
            },
            {
                question: 'Rotation by $180°$: $\\cos 180° = -1$, $\\sin 180° = 0$. The matrix is:',
                answers: ['$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Plug in: $\\begin{bmatrix} \\cos 180° & -\\sin 180° \\\\ \\sin 180° & \\cos 180° \\end{bmatrix}$.', '$= \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$.'],
                solution: '<p>$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix} = -I$. Every vector gets negated.</p>'
            },
            {
                question: 'If $T_1$ has matrix $A$ and $T_2$ has matrix $B$, the composition $T_2 \\circ T_1$ has matrix:',
                answers: ['$BA$', '$AB$', '$A + B$', '$A - B$'],
                correct: 0,
                hints: ['$(T_2 \\circ T_1)(\\mathbf{x}) = T_2(T_1(\\mathbf{x})) = B(A\\mathbf{x}) = (BA)\\mathbf{x}$.', 'Note the order: $T_1$ applied first, so its matrix is on the right.'],
                solution: '<p>$T_2(T_1(\\mathbf{x})) = B(A\\mathbf{x}) = (BA)\\mathbf{x}$. Composition → <strong>$BA$</strong> (right-to-left order).</p>'
            },
            {
                question: 'Reflect over the $y$-axis, then rotate $90°$ CCW. Reflection matrix: $\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$, rotation: $\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$. The combined matrix is:',
                answers: ['$\\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} -1 & -1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['Rotation applied second, so it goes on the left: $R \\cdot F$.', '$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.', 'Row 1: $[0(-1)+(-1)(0), 0(0)+(-1)(1)] = [0, -1]$. Row 2: $[1(-1)+0(0), 1(0)+0(1)] = [-1, 0]$.'],
                solution: '<p>$RF = \\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$. This is reflection over $y = -x$.</p>'
            },
            {
                question: 'Reflection over the line $y = x$ has matrix:',
                answers: ['$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$', '$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$', '$\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$', '$\\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$'],
                correct: 0,
                hints: ['$\\mathbf{e}_1 = (1,0)$ reflects to $(0,1)$ — swap $x$ and $y$.', '$\\mathbf{e}_2 = (0,1)$ reflects to $(1,0)$.'],
                solution: '<p>$(x,y) \\to (y,x)$: $\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$.</p>'
            },
            {
                question: 'Two reflections across different lines compose to give:',
                answers: ['A rotation', 'Another reflection', 'A shear', 'The identity'],
                correct: 0,
                hints: ['Each reflection has determinant $-1$.', 'The composition has determinant $(-1)(-1) = 1$.', 'A matrix with determinant $1$ that preserves lengths is a <em>rotation</em>.'],
                solution: '<p>Two reflections compose to a <strong>rotation</strong> by twice the angle between the reflection lines.</p>'
            }
        ]
    }
};

// Helper: get all questions for a section
function getSection(sectionId) {
    const questions = [];
    for (const [id, skill] of Object.entries(UNIT3_BANK)) {
        if (skill.section === sectionId) {
            questions.push(...skill.questions);
        }
    }
    return questions;
}

// Helper: get all questions for the entire unit
function getAllQuestions() {
    const questions = [];
    for (const skill of Object.values(UNIT3_BANK)) {
        questions.push(...skill.questions);
    }
    return questions;
}
