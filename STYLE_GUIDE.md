# Style Guide: Writing Khan Academy-Style Articles

_A living document. Update as we learn what works._

---

## Core Philosophy

**Intuition before formalism.** The reader should *see* the math before they *write* the math. Visualization isn't a supplement — it's the primary mode of understanding.

**Respect the reader's intelligence, not their preparation.** Assume they're smart but haven't seen this before. Never talk down, but also never assume prior knowledge without building it first.

---

## Structure Principles

### 1. Start Simpler Than You Think

Before tackling the main concept, find a simpler version to build intuition.

- Before 2×2 matrix transformations → show 1×1 (scaling a number line)
- Before 3D rotations → show 2D rotations
- Before abstract vector spaces → work in ℝ² and ℝ³

**Example:** The "Visualizing Linear Transformations" article doesn't start with matrices transforming planes. It starts with multiplying numbers on a number line.

### 2. Animation/Visualization First

The first exposure to a concept should be visual, not symbolic.

- Show the transformation happening
- Let the reader watch and absorb
- *Then* ask "how do we describe what just happened?"

Static images are okay, but dynamic visualizations (videos, interactive widgets) are better when possible.

### 3. Interleave Practice Immediately

Don't save all exercises for the end. After introducing a small idea, immediately ask the reader to apply it.

- "Where does the point [-1, 0] end up?"
- "Can you predict where [3, 0] lands?"

This keeps readers active and catches misunderstandings early.

### 4. Build Incrementally

Follow this rhythm:
1. Show a specific example
2. Ask the reader to engage with it
3. Generalize slightly
4. Repeat

**Example progression:**
- Watch [1,0] land on [1,-2]
- Watch [2,0] land on [2,-4]
- "Notice that [2,0] = 2·[1,0], and it lands on 2·[1,-2]"
- "In general, [x,0] → x·[1,-2]"

### 5. Use Collapsible Deep Dives

Some readers want the "why" behind a claim. Others want to keep moving. Accommodate both.

Use expandable sections for:
- Proofs
- Tangential but interesting observations
- More rigorous definitions
- Historical context

Label them invitingly: "Curious about why these are called *linear*?"

---

## Voice & Tone

### Conversational, Not Casual

Write like you're explaining to a friend who's genuinely curious — not like a textbook, but also not like a text message.

✅ "For those of you fond of fancy terminology, these could be called linear transformations."
✅ "And so the negative numbers don't feel neglected, here's multiplication by -3."
❌ "We shall now define a linear transformation as follows..."
❌ "lol watch what happens to this vector"

### Use "You" and "We"

Address the reader directly. You're on this journey together.

✅ "You can figure out which number is being multiplied by following one."
✅ "Let's put a green arrow over the vector [1,0]."
❌ "One can determine the transformation by observing..."

### Acknowledge the Learning Process

It's okay to say things like:
- "This might seem more complicated than it really is at first..."
- "Before we dive into the general case, let's build some intuition..."
- "If this feels abstract, don't worry — it'll click once we see some examples."

---

## Mathematics Formatting

### Symbols Follow Intuition

Introduce notation *after* the concept, not before.

❌ "A linear transformation T: ℝⁿ → ℝᵐ satisfies T(u+v) = T(u) + T(v)..."
✅ "What makes a transformation *linear* is that lines stay lines and the origin stays fixed. Algebraically, this means..."

### Use Visual Notation When Possible

Column vectors as vertical arrays:
```
[1]
[0]
```

Matrices with clear structure. Show the computation, don't just state the result.

### Arrow Notation for Transformations

Use → to show where things land:
```
[1, 1] → [4, -2]
```

This reads naturally: "the vector [1,1] lands on [4,-2]."

---

## Practice Problems

### Multiple Choice With Purpose

Each wrong answer should represent a common misconception, not random noise.

**Good distractors:**
- Swapped coordinates (common error)
- Sign errors
- Applying the wrong operation

### Immediate Feedback

After checking an answer, explain *why* it's right (or wrong). Don't just say "Correct!"

### Vary the Question Types

- "Where does this point land?"
- "Which transformation does this matrix represent?"
- "Can you predict...?" (extrapolation)
- "What stays the same?" (invariants)

---

## Media & Assets

### Videos

- Short (under 60 seconds ideally for embedded clips)
- Focused on one idea per video
- 3Blue1Brown-style animations are the gold standard
- Always provide transcript access

### Images

- Clean, minimal visual noise
- Consistent color coding (e.g., green = first basis vector, red = second)
- Label key elements directly on the image

### Interactive Widgets (Aspirational)

Where possible, let readers drag points, adjust sliders, see immediate results. This is harder to create but dramatically more effective.

---

## Checklist Before Publishing

- [ ] Does it start with something visual/concrete before going abstract?
- [ ] Is there at least one practice problem in the first half?
- [ ] Would a motivated high schooler be able to follow this?
- [ ] Are there any "why" questions that deserve a collapsible deep dive?
- [ ] Is the voice warm and encouraging, not dry or intimidating?
- [ ] Do the practice problem distractors represent real misconceptions?

---

## References & Inspiration

- [Visualizing Linear Transformations](https://www.khanacademy.org/math/linear-algebra/matrix-transformations/linear-transformations/a/visualizing-linear-transformations) — exemplar article
- 3Blue1Brown's *Essence of Linear Algebra* series — visual approach
- Grant Sanderson's philosophy: "The goal is to make you *feel* like you could have discovered this yourself."

---

_This guide will evolve. When something works well, add it. When something falls flat, note what to avoid._
