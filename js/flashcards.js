/**
 * Flashcard app component for study-site-builder.
 * Fetches flashcards.json and renders an interactive flashcard study tool
 * with 3D flip animation and master deck support.
 * Mounts inside an element with id="flashcard-app".
 * Uses CSS variables from the active theme for all styling.
 */
(function () {
  'use strict';

  const FLASHCARDS_PATH = 'data/flashcards.json';
  const CONTAINER_ID = 'flashcard-app';

  // ---------------------------------------------------------------------------
  // Styles
  // ---------------------------------------------------------------------------

  const STYLES = `
    .sb-fc {
      max-width: 720px;
      margin: 0 auto;
      font-family: inherit;
    }

    /* Deck selector */
    .sb-fc-decks {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .sb-fc-deck-btn {
      padding: 9px 18px;
      font-size: 13px;
      font-weight: 600;
      background: var(--bg-card, #243556);
      border: 1px solid var(--border, rgba(120,160,220,0.15));
      border-radius: 8px;
      color: var(--text-mute, #8fa8cc);
      cursor: pointer;
      transition: all 0.15s;
      font-family: inherit;
    }

    .sb-fc-deck-btn:hover {
      border-color: var(--border-hi, rgba(120,160,220,0.3));
      color: var(--text, #dde6f5);
    }

    .sb-fc-deck-btn.active {
      background: var(--accent, #6a9fd8);
      border-color: var(--accent, #6a9fd8);
      color: white;
    }

    .sb-fc-deck-btn.master {
      border-style: dashed;
    }

    /* Progress bar */
    .sb-fc-progress-wrap {
      margin-bottom: 1rem;
    }

    .sb-fc-progress-bar {
      height: 6px;
      background: var(--border, rgba(120,160,220,0.15));
      border-radius: 3px;
      overflow: hidden;
    }

    .sb-fc-progress-fill {
      height: 100%;
      background: var(--accent, #6a9fd8);
      border-radius: 3px;
      transition: width 0.3s ease;
      width: 0%;
    }

    .sb-fc-counter {
      display: block;
      text-align: right;
      font-size: 0.8rem;
      color: var(--text-mute, #8fa8cc);
      margin-top: 0.35rem;
    }

    /* Card area — 3D flip */
    .sb-fc-card-wrap {
      width: 100%;
      max-width: 580px;
      height: 240px;
      perspective: 900px;
      margin: 0 auto 1.25rem;
    }

    .sb-fc-card {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.45s ease;
      cursor: pointer;
      position: relative;
    }

    .sb-fc-card.flipped {
      transform: rotateY(180deg);
    }

    .sb-fc-front, .sb-fc-back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 28px 32px;
      text-align: center;
    }

    .sb-fc-front {
      background: var(--bg-card, #243556);
      border: 1px solid var(--border-hi, rgba(120,160,220,0.3));
    }

    .sb-fc-back {
      background: var(--bg-sub, #1a2840);
      border: 1px solid var(--border-hi, rgba(120,160,220,0.3));
      transform: rotateY(180deg);
    }

    .sb-fc-front .sb-fc-term {
      font-size: 22px;
      font-weight: 700;
      color: var(--white, #f0f4fb);
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .sb-fc-front .sb-fc-hint {
      font-size: 12px;
      color: var(--text-dim, #5c7a9e);
    }

    .sb-fc-back .sb-fc-class-tag {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--accent, #6a9fd8);
      margin-bottom: 10px;
    }

    .sb-fc-back .sb-fc-definition {
      font-size: 15px;
      color: var(--text, #dde6f5);
      line-height: 1.6;
    }

    .sb-fc-back .sb-fc-related {
      margin-top: 10px;
      font-size: 12px;
      color: var(--text-dim, #5c7a9e);
    }

    /* Controls */
    .sb-fc-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .sb-fc-btn {
      padding: 10px 24px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      border: 1px solid var(--border-hi, rgba(120,160,220,0.3));
      cursor: pointer;
      transition: all 0.15s;
      background: var(--bg-card, #243556);
      color: var(--text, #dde6f5);
      font-family: inherit;
    }

    .sb-fc-btn:hover:not(:disabled) {
      background: var(--bg-deep, #142036);
    }

    .sb-fc-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .sb-fc-btn.primary {
      background: var(--accent, #6a9fd8);
      border-color: var(--accent, #6a9fd8);
      color: white;
    }

    .sb-fc-btn.primary:hover:not(:disabled) {
      filter: brightness(1.1);
    }

    /* Done screen */
    .sb-fc-done {
      display: none;
      text-align: center;
      padding: 3rem 1.5rem;
    }

    .sb-fc-done.visible {
      display: block;
    }

    .sb-fc-done h3 {
      font-size: 1.5rem;
      color: var(--white, #f0f4fb);
      margin: 0 0 0.5rem;
    }

    .sb-fc-done p {
      color: var(--text-mute, #8fa8cc);
      margin: 0 0 1.25rem;
    }

    /* Error */
    .sb-fc-error {
      padding: 1.5rem;
      background: var(--bg-sub, #1a2840);
      color: var(--incorrect, #ef5350);
      border-radius: 8px;
      text-align: center;
      font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .sb-fc-card-wrap {
        height: auto;
        min-height: 200px;
      }

      .sb-fc-front .sb-fc-term {
        font-size: 18px;
      }

      .sb-fc-back .sb-fc-definition {
        font-size: 13px;
      }

      .sb-fc-decks {
        gap: 0.35rem;
      }

      .sb-fc-deck-btn {
        padding: 7px 12px;
        font-size: 12px;
      }
    }

    @media (pointer: coarse) {
      .sb-fc-deck-btn { min-height: 44px; }
      .sb-fc-btn { min-height: 44px; }
    }
  `;

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------

  let allDecks = [];
  let currentDeck = [];
  let currentIndex = 0;
  let isFlipped = false;
  let container = null;

  // DOM element references (built once, updated via DOM manipulation)
  let els = {};

  // ---------------------------------------------------------------------------
  // Shuffle (Fisher-Yates)
  // ---------------------------------------------------------------------------

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------------------------------------------------------------------------
  // Build Master Deck
  // ---------------------------------------------------------------------------

  function buildMasterDeck() {
    const all = [];
    allDecks.forEach(deck => {
      if (deck.cards) all.push(...deck.cards);
    });
    return shuffle(all);
  }

  // ---------------------------------------------------------------------------
  // Build DOM (called once per deck selection)
  // ---------------------------------------------------------------------------

  function buildUI() {
    container.innerHTML = '';
    const root = document.createElement('div');
    root.className = 'sb-fc';

    // Deck selector
    const deckSelector = document.createElement('div');
    deckSelector.className = 'sb-fc-decks';

    allDecks.forEach((deck, i) => {
      const btn = document.createElement('button');
      btn.className = 'sb-fc-deck-btn';
      btn.textContent = deck.title + ' (' + deck.cards.length + ')';
      btn.addEventListener('click', () => selectDeck(i));
      deckSelector.appendChild(btn);
    });

    // Master deck button
    const totalCards = allDecks.reduce((n, d) => n + d.cards.length, 0);
    const masterBtn = document.createElement('button');
    masterBtn.className = 'sb-fc-deck-btn master';
    masterBtn.textContent = '\uD83D\uDD00 Master Deck (' + totalCards + ')';
    masterBtn.addEventListener('click', () => selectMasterDeck());
    deckSelector.appendChild(masterBtn);

    root.appendChild(deckSelector);
    els.deckSelector = deckSelector;

    // Progress
    const progressWrap = document.createElement('div');
    progressWrap.className = 'sb-fc-progress-wrap';
    const progressBar = document.createElement('div');
    progressBar.className = 'sb-fc-progress-bar';
    const progressFill = document.createElement('div');
    progressFill.className = 'sb-fc-progress-fill';
    progressBar.appendChild(progressFill);
    progressWrap.appendChild(progressBar);
    const counter = document.createElement('span');
    counter.className = 'sb-fc-counter';
    counter.textContent = 'Select a deck to begin';
    progressWrap.appendChild(counter);
    root.appendChild(progressWrap);
    els.progressFill = progressFill;
    els.counter = counter;
    els.progressWrap = progressWrap;

    // Card wrap (3D flip container)
    const cardWrap = document.createElement('div');
    cardWrap.className = 'sb-fc-card-wrap';
    const card = document.createElement('div');
    card.className = 'sb-fc-card';
    card.addEventListener('click', flipCard);

    // Front
    const front = document.createElement('div');
    front.className = 'sb-fc-front';
    const term = document.createElement('div');
    term.className = 'sb-fc-term';
    term.textContent = 'Select a deck to begin';
    const hint = document.createElement('div');
    hint.className = 'sb-fc-hint';
    hint.textContent = 'Click to reveal definition';
    front.appendChild(term);
    front.appendChild(hint);

    // Back
    const back = document.createElement('div');
    back.className = 'sb-fc-back';
    const classTag = document.createElement('div');
    classTag.className = 'sb-fc-class-tag';
    const definition = document.createElement('div');
    definition.className = 'sb-fc-definition';
    const related = document.createElement('div');
    related.className = 'sb-fc-related';
    back.appendChild(classTag);
    back.appendChild(definition);
    back.appendChild(related);

    card.appendChild(front);
    card.appendChild(back);
    cardWrap.appendChild(card);
    root.appendChild(cardWrap);

    els.cardWrap = cardWrap;
    els.card = card;
    els.term = term;
    els.hint = hint;
    els.classTag = classTag;
    els.definition = definition;
    els.related = related;

    // Controls
    const controls = document.createElement('div');
    controls.className = 'sb-fc-controls';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'sb-fc-btn';
    prevBtn.textContent = '\u2190 Prev';
    prevBtn.disabled = true;
    prevBtn.addEventListener('click', prevCard);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'sb-fc-btn primary';
    nextBtn.textContent = 'Next \u2192';
    nextBtn.addEventListener('click', nextCard);

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    root.appendChild(controls);

    els.controls = controls;
    els.prevBtn = prevBtn;
    els.nextBtn = nextBtn;

    // Done screen
    const done = document.createElement('div');
    done.className = 'sb-fc-done';
    const doneTitle = document.createElement('h3');
    doneTitle.textContent = '\uD83C\uDF89 Deck Complete!';
    const doneMsg = document.createElement('p');
    const shuffleBtn = document.createElement('button');
    shuffleBtn.className = 'sb-fc-btn primary';
    shuffleBtn.textContent = '\uD83D\uDD00 Shuffle & Go Again';
    shuffleBtn.addEventListener('click', shuffleAndRestart);
    done.appendChild(doneTitle);
    done.appendChild(doneMsg);
    done.appendChild(shuffleBtn);
    root.appendChild(done);

    els.done = done;
    els.doneMsg = doneMsg;

    container.appendChild(root);
  }

  // ---------------------------------------------------------------------------
  // Show Card (DOM manipulation only — no innerHTML rebuild)
  // ---------------------------------------------------------------------------

  function showCard() {
    if (currentDeck.length === 0) return;

    const card = currentDeck[currentIndex];
    const total = currentDeck.length;

    // Reset flip
    isFlipped = false;
    els.card.classList.remove('flipped');

    // Populate front
    els.term.textContent = card.term;
    els.hint.textContent = 'Click to reveal definition';

    // Populate back
    els.classTag.textContent = card.sourceLecture || '';
    els.definition.textContent = card.definition;
    if (card.relatedTerms && card.relatedTerms.length > 0) {
      els.related.textContent = 'Related: ' + card.relatedTerms.join(', ');
      els.related.style.display = '';
    } else {
      els.related.style.display = 'none';
    }

    // Progress
    const pct = Math.round(((currentIndex + 1) / total) * 100);
    els.progressFill.style.width = pct + '%';
    els.counter.textContent = 'Card ' + (currentIndex + 1) + ' of ' + total;

    // Buttons
    els.prevBtn.disabled = (currentIndex === 0);
    if (currentIndex === total - 1) {
      els.nextBtn.textContent = 'Finish \u2713';
    } else {
      els.nextBtn.textContent = 'Next \u2192';
    }
  }

  // ---------------------------------------------------------------------------
  // Actions
  // ---------------------------------------------------------------------------

  function flipCard() {
    if (currentDeck.length === 0) return;
    isFlipped = !isFlipped;
    els.card.classList.toggle('flipped');
  }

  function nextCard() {
    if (currentDeck.length === 0) return;
    if (currentIndex < currentDeck.length - 1) {
      currentIndex++;
      showCard();
    } else {
      showDoneScreen();
    }
  }

  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      showCard();
    }
  }

  function showDoneScreen() {
    els.done.classList.add('visible');
    els.doneMsg.textContent = 'You reviewed all ' + currentDeck.length + ' cards. Great work!';
    els.cardWrap.style.display = 'none';
    els.controls.style.display = 'none';
    els.progressWrap.style.display = 'none';
  }

  function hideDoneScreen() {
    els.done.classList.remove('visible');
    els.cardWrap.style.display = '';
    els.controls.style.display = '';
    els.progressWrap.style.display = '';
  }

  function shuffleAndRestart() {
    currentDeck = shuffle(currentDeck);
    currentIndex = 0;
    hideDoneScreen();
    showCard();
  }

  function selectDeck(index) {
    if (index < 0 || index >= allDecks.length) return;
    currentDeck = [...allDecks[index].cards];
    currentIndex = 0;
    hideDoneScreen();

    // Update active button
    const btns = els.deckSelector.querySelectorAll('.sb-fc-deck-btn');
    btns.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    showCard();
  }

  function selectMasterDeck() {
    currentDeck = buildMasterDeck();
    currentIndex = 0;
    hideDoneScreen();

    // Update active button — master is last
    const btns = els.deckSelector.querySelectorAll('.sb-fc-deck-btn');
    btns.forEach((btn, i) => {
      btn.classList.toggle('active', i === btns.length - 1);
    });

    showCard();
  }

  // ---------------------------------------------------------------------------
  // Keyboard support
  // ---------------------------------------------------------------------------

  function handleKeydown(e) {
    const active = document.activeElement;
    if (active && /^(INPUT|TEXTAREA|SELECT)$/i.test(active.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        nextCard();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevCard();
        break;
      case ' ':
        e.preventDefault();
        flipCard();
        break;
    }
  }

  // ---------------------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------------------

  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return str.replace(/[&<>"']/g, (c) => map[c]);
  }

  function injectStyles(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', async () => {
    container = document.getElementById(CONTAINER_ID);
    if (!container) {
      console.warn('[flashcards.js] No element with id="' + CONTAINER_ID + '" found.');
      return;
    }

    try {
      const response = await fetch(FLASHCARDS_PATH);
      if (!response.ok) {
        throw new Error('HTTP ' + response.status + ': Could not load ' + FLASHCARDS_PATH);
      }

      const data = await response.json();

      if (!data.decks || !Array.isArray(data.decks) || data.decks.length === 0) {
        throw new Error('Invalid flashcards.json: "decks" must be a non-empty array');
      }

      allDecks = data.decks;
      injectStyles(STYLES);

      // Build DOM once
      buildUI();

      // Keyboard support
      document.addEventListener('keydown', handleKeydown);
    } catch (err) {
      console.error('[flashcards.js]', err.message);
      if (container) {
        container.innerHTML = '<div class="sb-fc-error">Flashcards failed to load: ' + escapeHtml(err.message) + '</div>';
      }
    }
  });
})();
