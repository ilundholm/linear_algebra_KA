document.addEventListener('DOMContentLoaded', () => {
    // Find all details elements that might be answers
    const detailsElements = document.querySelectorAll('details');

    detailsElements.forEach(details => {
        // Check if the previous element is a list of options
        const list = details.previousElementSibling;
        if (!list || list.tagName !== 'UL') return;

        // Check if list items look like "(A) ...", "(B) ..."
        const items = Array.from(list.querySelectorAll('li'));
        const isQuiz = items.every(li => /^\s*\(?[A-D]\)?/.test(li.textContent));

        if (isQuiz) {
            enhanceQuiz(list, details);
        }
    });
});

function enhanceQuiz(list, details) {
    // 1. Create the Widget Container
    const widget = document.createElement('div');
    widget.className = 'interactive-widget quiz-card';
    widget.style.background = '#fff';
    widget.style.border = '1px solid var(--color-border)';
    widget.style.borderRadius = 'var(--radius-md)';
    widget.style.padding = '1.5rem';
    widget.style.marginTop = '1.5rem';
    widget.style.boxShadow = 'var(--shadow-sm)';

    // 2. Extract Correct Answer from Details
    // Looking for pattern like "**(C)**" or "**(C) Yes**" inside the details body
    const explanationHTML = details.innerHTML;
    const match = explanationHTML.match(/\(?([A-D])\)?/);
    const correctLetter = match ? match[1] : null;

    if (!correctLetter) return; // Can't determine answer, skip enhancement

    // 3. Create Option Buttons
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = 'grid';
    optionsContainer.style.gap = '0.75rem';
    optionsContainer.style.marginBottom = '1rem';

    const items = Array.from(list.querySelectorAll('li'));
    items.forEach(item => {
        const text = item.textContent;
        const letterMatch = text.match(/^\s*\(?([A-D])\)?/);
        const letter = letterMatch ? letterMatch[1] : '?';
        const label = text.replace(/^\s*\(?[A-D]\)?\s*-?\s*/, '').trim();

        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.style.display = 'block';
        btn.style.width = '100%';
        btn.style.textAlign = 'left';
        btn.style.padding = '0.75rem 1rem';
        btn.style.background = '#f8fafc';
        btn.style.border = '1px solid var(--color-border)';
        btn.style.borderRadius = 'var(--radius-sm)';
        btn.style.cursor = 'pointer';
        btn.style.fontFamily = 'var(--font-sans)';
        btn.style.fontSize = '0.95rem';
        btn.style.transition = 'all 0.2s';
        btn.style.color = 'var(--color-text)';

        btn.innerHTML = `<strong style="color:var(--color-accent); margin-right:0.5rem;">${letter}</strong> ${label}`;

        // Click Handler
        btn.onclick = () => checkAnswer(letter, correctLetter, btn, optionsContainer, feedback, details);

        optionsContainer.appendChild(btn);
    });

    // 4. Feedback Area
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    feedback.style.marginTop = '1rem';
    feedback.style.display = 'none';
    feedback.style.padding = '1rem';
    feedback.style.borderRadius = 'var(--radius-sm)';
    feedback.style.background = '#f0fdfa';
    feedback.style.border = '1px solid #ccfbf1';

    // 5. Replace DOM Elements
    // Insert widget before the list
    list.parentNode.insertBefore(widget, list);

    // Move elements into widget
    // (We leave the original Question text above the widget)
    widget.appendChild(optionsContainer);
    widget.appendChild(feedback);

    // Hide the original list and details
    list.style.display = 'none';
    details.style.display = 'none';

    // Store explanation for later
    widget.dataset.explanation = details.innerHTML;
}

function checkAnswer(selected, correct, btn, container, feedback, originalDetails) {
    // Disable all buttons
    const allBtns = container.querySelectorAll('button');
    allBtns.forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.7';
        b.style.cursor = 'default';
    });

    const isCorrect = selected === correct;

    // Style the clicked button
    if (isCorrect) {
        btn.style.background = '#14b8a6'; // Teal
        btn.style.borderColor = '#14b8a6';
        btn.style.color = '#fff';
        btn.querySelector('strong').style.color = '#fff';

        feedback.innerHTML = `
      <h4 style="margin:0 0 0.5rem 0; color:#0f766e; display:flex; align-items:center; gap:0.5rem;">
        <span style="font-size:1.2rem">🎉</span> Correct!
      </h4>
      <div style="font-size:0.95rem; line-height:1.6; color:#0f766e;">
        ${originalDetails.innerHTML} 
      </div>
    `;
        feedback.style.background = '#f0fdfa';
        feedback.style.borderColor = '#ccfbf1';
    } else {
        btn.style.background = '#fecdd3'; // Soft Red
        btn.style.borderColor = '#f43f5e';
        btn.style.color = '#881337';

        // Highlight the correct one too
        const correctBtn = Array.from(allBtns).find(b => b.textContent.includes(correct));
        if (correctBtn) {
            correctBtn.style.background = '#f0fdfa';
            correctBtn.style.borderColor = '#14b8a6';
        }

        feedback.innerHTML = `
      <h4 style="margin:0 0 0.5rem 0; color:#881337; display:flex; align-items:center; gap:0.5rem;">
        <span style="font-size:1.2rem">❌</span> Not quite.
      </h4>
      <div style="font-size:0.95rem; line-height:1.6; color:#334155;">
        The correct answer was <strong>${correct}</strong>.
        <hr style="margin:0.5rem 0; border:0; border-top:1px solid #e2e8f0;">
        ${originalDetails.innerHTML}
      </div>
    `;
        feedback.style.background = '#fff1f2';
        feedback.style.borderColor = '#fecdd3';
    }

    // Show feedback with explanation
    feedback.style.display = 'block';

    // Clean up the explanation content (remove the summary tag if it was copied)
    const summary = feedback.querySelector('summary');
    if (summary) summary.remove();
}
