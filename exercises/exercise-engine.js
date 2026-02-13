/* ============================================================
   Linear Algebra KA — Exercise Engine
   Shared JS for KA-style self-grading exercises
   ============================================================ */

class ExerciseEngine {
  constructor(config) {
    this.allQuestions = config.questions || [];
    this.sampleSize = config.sampleSize || null;
    this.unitTitle = config.unitTitle || 'Exercises';
    this.unitNumber = config.unitNumber || '1';
    this.modeLabel = config.modeLabel || 'Practice';
    this.backUrl = config.backUrl || '../../index.html';
    this.landingUrl = config.landingUrl || this.backUrl;
    this.currentIndex = 0;
    this.results = [];
    this.selectedAnswer = null;
    this.answered = false;
    this.hintsShown = 0;
    this.attempts = 0;

    // Sample questions if sampleSize is set
    this.questions = this._sampleQuestions();

    // Shuffle answer order per question
    this._shuffleAllAnswers();

    this.results = new Array(this.questions.length).fill(null);
    this.init();
  }

  _sampleQuestions() {
    if (this.sampleSize && this.sampleSize < this.allQuestions.length) {
      const shuffled = this._shuffle([...this.allQuestions]);
      return shuffled.slice(0, this.sampleSize);
    }
    return [...this.allQuestions];
  }

  _shuffleAllAnswers() {
    this.questions.forEach(q => {
      if (q.shuffleAnswers !== false) {
        const correctAnswer = q.answers[q.correct];
        const shuffled = this._shuffle([...q.answers]);
        q.answers = shuffled;
        q.correct = shuffled.indexOf(correctAnswer);
      }
    });
  }

  init() {
    this.renderPage();
    this.renderQuestion();
    MathJax.typesetPromise && MathJax.typesetPromise();
  }

  renderPage() {
    const app = document.getElementById('exercise-app');
    app.innerHTML = `
      <div class="exercise-page">
        <header class="exercise-header">
          <nav class="breadcrumb">
            <a href="${this.backUrl}">Home</a>
            <span class="sep">›</span>
            <a href="${this.landingUrl}">Unit ${this.unitNumber}: ${this.unitTitle}</a>
            <span class="sep">›</span>
            <span>${this.modeLabel}</span>
          </nav>
          <div class="progress-bar" id="progress-bar"></div>
        </header>
        <main class="exercise-main">
          <div class="exercise-container">
            <div class="question-section" id="question-section">
              <!-- Question rendered here -->
            </div>
            <div class="question-section summary-screen" id="summary-screen">
              <!-- Summary rendered here -->
            </div>
          </div>
        </main>
      </div>
    `;
    this.updateProgress();
  }

  updateProgress() {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;

    const dots = this.questions.map((_, i) => {
      let cls = 'progress-dot';
      if (i === this.currentIndex) cls += ' current';
      else if (this.results[i] === 'correct') cls += ' correct';
      else if (this.results[i] === 'incorrect') cls += ' incorrect';
      return `<div class="${cls}" title="Question ${i + 1}"></div>`;
    }).join('');

    const score = this.results.filter(r => r === 'correct').length;
    const answered = this.results.filter(r => r !== null).length;

    bar.innerHTML = dots + `<span class="progress-text">${answered}/${this.questions.length}</span>`;
  }

  renderQuestion() {
    const section = document.getElementById('question-section');
    const summary = document.getElementById('summary-screen');
    section.style.display = 'block';
    summary.style.display = 'none';
    summary.classList.remove('show');

    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.selectedAnswer = null;
    this.answered = false;
    this.hintsShown = 0;
    this.attempts = 0;

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    const answersHTML = q.answers.map((a, i) => `
      <li class="answer-card" data-index="${i}" onclick="engine.selectAnswer(${i})">
        <div class="answer-radio"></div>
        <span class="answer-letter">${letters[i]}</span>
        <div class="answer-content">${a}</div>
      </li>
    `).join('');

    section.innerHTML = `
      <div class="question-label">Question ${this.currentIndex + 1} of ${this.questions.length}</div>
      ${q.skill ? `<div class="question-skill">${q.skill}</div>` : ''}
      <div class="question-text">${q.question}</div>
      <ul class="answer-list" id="answer-list">
        ${answersHTML}
      </ul>
      <div class="feedback-banner" id="feedback-banner">
        <span class="feedback-icon" id="feedback-icon"></span>
        <span class="feedback-message" id="feedback-message"></span>
      </div>
      <div class="hints-container" id="hints-container"></div>
      <div class="solution-box" id="solution-box">
        <div class="solution-label">Full Solution</div>
        <div class="solution-content">${q.solution || ''}</div>
      </div>
      <div class="action-bar" id="action-bar">
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-hint" id="btn-hint" onclick="engine.showHint()">
            💡 Show a hint${q.hints && q.hints.length > 0 ? ` (${q.hints.length} available)` : ''}
          </button>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-check" id="btn-check" onclick="engine.checkAnswer()">Check</button>
        </div>
      </div>
    `;

    if (!q.hints || q.hints.length === 0) {
      document.getElementById('btn-hint').style.display = 'none';
    }

    this.updateProgress();
    if (MathJax.typesetPromise) {
      MathJax.typesetPromise([section]);
    }
  }

  selectAnswer(index) {
    if (this.answered) return;
    this.selectedAnswer = index;

    // Update card styles
    document.querySelectorAll('.answer-card').forEach((card, i) => {
      card.classList.remove('selected');
      if (i === index) card.classList.add('selected');
    });

    // Enable check button
    const checkBtn = document.getElementById('btn-check');
    checkBtn.classList.add('active');
  }

  checkAnswer() {
    if (this.selectedAnswer === null || this.answered) return;

    const q = this.questions[this.currentIndex];
    const isCorrect = this.selectedAnswer === q.correct;
    this.attempts++;

    const banner = document.getElementById('feedback-banner');
    const icon = document.getElementById('feedback-icon');
    const message = document.getElementById('feedback-message');

    if (isCorrect) {
      this.answered = true;
      if (this.results[this.currentIndex] === null) {
        this.results[this.currentIndex] = this.attempts === 1 ? 'correct' : 'incorrect';
      }

      // Mark correct card
      const cards = document.querySelectorAll('.answer-card');
      cards.forEach((card, i) => {
        card.classList.add('disabled');
        if (i === q.correct) {
          card.classList.remove('selected');
          card.classList.add('correct');
          const radio = card.querySelector('.answer-radio');
          if (radio) {
            radio.outerHTML = '<div class="answer-icon correct-icon"></div>';
          }
        }
      });

      banner.className = 'feedback-banner show correct';
      icon.textContent = '✓';
      message.innerHTML = this.attempts === 1
        ? '<strong>Excellent!</strong> You got it on the first try.'
        : '<strong>Correct!</strong> Great job working through it.';

      this._showPostAnswerButtons();
    } else {
      // Mark selected as incorrect
      const cards = document.querySelectorAll('.answer-card');
      const selectedCard = cards[this.selectedAnswer];
      selectedCard.classList.remove('selected');
      selectedCard.classList.add('incorrect', 'disabled');
      const radio = selectedCard.querySelector('.answer-radio');
      if (radio) {
        radio.outerHTML = '<div class="answer-icon incorrect-icon"></div>';
      }

      if (this.results[this.currentIndex] === null) {
        this.results[this.currentIndex] = 'incorrect';
      }

      this.selectedAnswer = null;

      // Reset check button
      const checkBtn = document.getElementById('btn-check');
      checkBtn.classList.remove('active');

      banner.className = 'feedback-banner show incorrect';
      icon.textContent = '✗';

      const remainingChoices = document.querySelectorAll('.answer-card:not(.disabled)').length;
      if (remainingChoices <= 1) {
        // Only one choice left — auto-reveal
        this.answered = true;
        const correctCard = cards[q.correct];
        correctCard.classList.add('correct', 'disabled');
        const cRadio = correctCard.querySelector('.answer-radio');
        if (cRadio) {
          cRadio.outerHTML = '<div class="answer-icon correct-icon"></div>';
        }
        message.innerHTML = `<strong>The correct answer was ${['A', 'B', 'C', 'D', 'E', 'F'][q.correct]}.</strong> Review the solution below.`;
        banner.className = 'feedback-banner show incorrect';
        this._showPostAnswerButtons();
        // Auto-show solution
        document.getElementById('solution-box').classList.add('show');
        if (MathJax.typesetPromise) {
          MathJax.typesetPromise([document.getElementById('solution-box')]);
        }
      } else {
        message.innerHTML = '<strong>Not quite.</strong> Try again, or use a hint.';
      }
    }

    this.updateProgress();
    if (MathJax.typesetPromise) {
      MathJax.typesetPromise([banner]);
    }
  }

  _showPostAnswerButtons() {
    const actionBar = document.getElementById('action-bar');
    const q = this.questions[this.currentIndex];
    const isLast = this.currentIndex >= this.questions.length - 1;

    actionBar.innerHTML = `
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        ${q.solution ? `<button class="btn btn-solution" onclick="engine.showSolution()">📖 Full solution</button>` : ''}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn btn-next" onclick="engine.nextQuestion()">
          ${isLast ? 'See results →' : 'Next question →'}
        </button>
      </div>
    `;
  }

  showHint() {
    const q = this.questions[this.currentIndex];
    if (!q.hints || this.hintsShown >= q.hints.length) return;

    const container = document.getElementById('hints-container');
    const hintDiv = document.createElement('div');
    hintDiv.className = 'hint-box';
    hintDiv.innerHTML = `
      <div class="hint-label">Hint ${this.hintsShown + 1}</div>
      <div>${q.hints[this.hintsShown]}</div>
    `;
    container.appendChild(hintDiv);
    this.hintsShown++;

    // Update hint button
    const btn = document.getElementById('btn-hint');
    const remaining = q.hints.length - this.hintsShown;
    if (remaining > 0) {
      btn.innerHTML = `💡 Next hint (${remaining} left)`;
    } else {
      btn.innerHTML = '💡 No more hints';
      btn.disabled = true;
    }

    if (MathJax.typesetPromise) {
      MathJax.typesetPromise([hintDiv]);
    }
  }

  showSolution() {
    const box = document.getElementById('solution-box');
    box.classList.add('show');
    if (MathJax.typesetPromise) {
      MathJax.typesetPromise([box]);
    }
    // Remove the solution button
    const solutionBtns = document.querySelectorAll('.btn-solution');
    solutionBtns.forEach(b => b.style.display = 'none');
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
    } else {
      this.renderQuestion();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderSummary() {
    const section = document.getElementById('question-section');
    const summary = document.getElementById('summary-screen');
    section.style.display = 'none';
    summary.style.display = 'block';
    summary.classList.add('show');

    const correct = this.results.filter(r => r === 'correct').length;
    const incorrect = this.results.filter(r => r === 'incorrect').length;
    const total = this.questions.length;
    const pct = Math.round((correct / total) * 100);

    let msg = '';
    if (pct === 100) msg = '🎉 Perfect score! Outstanding work!';
    else if (pct >= 80) msg = '🌟 Great job! You\'ve got a strong understanding.';
    else if (pct >= 60) msg = '👍 Good effort! Review the topics you missed.';
    else msg = '📚 Keep practicing! Consider re-reading the articles.';

    summary.innerHTML = `
      <div class="summary-score">${pct}%</div>
      <div class="summary-label">Score</div>
      <div class="summary-message">${msg}</div>
      <div class="summary-breakdown">
        <div class="summary-stat stat-correct">
          <div class="stat-number">${correct}</div>
          <div class="stat-label">Correct</div>
        </div>
        <div class="summary-stat stat-incorrect">
          <div class="stat-number">${incorrect}</div>
          <div class="stat-label">Incorrect</div>
        </div>
        <div class="summary-stat">
          <div class="stat-number">${total}</div>
          <div class="stat-label">Total</div>
        </div>
      </div>
      <button class="btn btn-restart" onclick="engine.restart()">Try again</button>
      <br>
      <a class="btn-back-link" href="${this.landingUrl}">← Back to unit</a>
    `;

    this.updateProgress();
  }

  restart() {
    this.currentIndex = 0;
    // Re-sample and re-shuffle for fresh attempt
    this.questions = this._sampleQuestions();
    this._shuffleAllAnswers();
    this.results = new Array(this.questions.length).fill(null);
    this.renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
