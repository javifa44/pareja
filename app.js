/* ===== El Dado del Amor ===== */

(function () {
  "use strict";

  /* ---------- contenido de las cartas ---------- */

  const CONTENT = {
    desafio: {
      icon: "💋",
      name: "Desafío",
      accent: "desafio",
      pts: 10,
      items: [
        "Hacé el clásico: llevá a tu pareja en caballito por 30 segundos.",
        "Canta tu canción favorita mirándola a los ojos. Sin reírte.",
        "Imitá a un animal hasta que tu pareja adivine cuál es.",
        "Hablá en robot durante las próximas 3 rondas.",
        "Desfilá por la casa como una modelo de pasarela. Con estilo.",
        "Bailá un vals o un reggaetón sin música. Ella elige el ritmo.",
        "Mandale un audio de WhatsApp cantando una canción de amor.",
        "Hacé 10 sentadillas diciendo «te amo» en cada una.",
        "Convencé a tu pareja de que sos un mimo transitando una pared.",
        "Hacé reír a tu pareja sin tocarla durante 30 segundos al hilo.",
        "Repetí «miau, guau, pío» cada vez que digas una palabra con 'a' por 1 minuto.",
        "Escribí un mini-poema de 4 versos sobre tu pareja y leelo en voz alta.",
        "Hacé de espejo: tu pareja hace gestos lentos y vos los imitás exactos.",
        "Date un baile de a dos por 30 segundos usando una escoba como micrófono.",
        "Hablá con acento de otro país el resto de esta ronda.",
        "Hacé 3 vueltas sobre vos mismo y saludá como si fueras famoso."
      ]
    },
    masaje: {
      icon: "💆",
      name: "Masaje",
      accent: "masaje",
      pts: 10,
      items: [
        "Masaje de hombros por 2 minutos mientras preguntás «¿así?» esperando un sí.",
        "Masaje de manos y terminá con un beso en la muñeca.",
        "Masaje de cuello y nuca contando un secreto al oído.",
        "Masaje de pies con crema. Hidratación de lujo.",
        "Masaje de cabeza y cuero cabelludo por 2 minutos. Hasta que ronronee.",
        "Masaje de espalda en silencio, dejando que la música hable.",
        "Masaje de hombros con aceite de coco o cualquier aroma que elijas.",
        "Masaje de espalda sentados del lado de atrás, sin apoyo.",
        "Masaje de gemelos y pantorrillas, con agua caliente antes.",
        "Masaje de manos mientras ven una serie. Nada de prisa.",
        "Masaje de hombros con el pulgar en los puntos tensos, con presión suave.",
        "Masaje de pies con movimientos circulares, y al final un talón-beso.",
        "Masaje de espalda con las palmas bien calientes. Vení, sin frío.",
        "Masaje de cuello cuello-cabeza hasta que tu pareja se relaje del todo.",
        "Masaje de una hora con pico: no podés pedir nada durante 60 segundos.",
        "Masaje facial suave con crema (hidratante cuenta) por 2 minutos."
      ]
    },
    confesion: {
      icon: "🫣",
      name: "Confesión",
      accent: "confesion",
      pts: 10,
      items: [
        "Confesá cuál fue el momento exacto en que te enamoraste.",
        "Decí qué fue lo primero que notaste físicamente de tu pareja.",
        "Contá la mayor «estupidez» que hiciste por amor.",
        "¿Qué canción te recuerda a tu pareja y por qué?",
        "Confesá algo que hiciste a escondidas por tu pareja.",
        "Contale una fantasía de viaje que nunca le contaste.",
        "Decile un piropo que nunca tuviste el valor de decirle.",
        "Contalo un sueño raro que lo haya involucrado.",
        "¿Cuál fue tu primer pensamiento al verlo hoy?",
        "Confesá una manía tuya que él/ella aún no conozca.",
        "Decile cuál fue tu cita ideal y qué harían.",
        "Confesá tres cosas que cocinarías solo para él/ella.",
        "Contale algo que hayas aprendido de él/ella en la relación.",
        "Decile cuál es su cualidad que más te atrae y cuál te sorprendió.",
        "Confesá una vez que tuviste celos (y por qué).",
        "Contale cuál es tu plan de la próxima cita perfecta."
      ]
    },
    favor: {
      icon: "🎁",
      name: "Favor",
      accent: "favor",
      pts: 10,
      items: [
        "Preparale hoy algo de comer o beber sin que lo pida.",
        "Dejale una nota linda escondida donde lo vaya a encontrar mañana.",
        "Elegí una serie o película que le encante y miren juntos.",
        "Dale un masaje de 5 minutos hoy (clase exprés).",
        "Planificá una mini-cita sorpresa para esta semana.",
        "Ayudalo con algo pendiente de su agenda.",
        "Compra su snack favorito.",
        "Llevale el desayuno a la cama este fin de semana.",
        "Hacele una lista escrita de 5 cosas que amás de él/ella.",
        "Elegí hoy, por una vez, lo que él/ella quiere (film, música, comida).",
        "Cargale el teléfono y dejale la pantalla de inicio con un fondo lindo.",
        "Ordeñá la cama y dejalá su lado impecable. Detalles.",
        "Preparale una merienda sorpresa con su sabor favorito.",
        "Borrá sus responsabilidades de hoy: encargate de una tarea de él/ella.",
        "Comprale o regalale una plantita o flor simple «porque sí».",
        "Escribile un mensaje largo antes de dormir contándole tu día."
      ]
    },
    picante: {
      icon: "🔥",
      name: "Picante",
      accent: "picante",
      pts: 15,
      items: [
        "Beso apasionado de al menos 30 segundos.",
        "Beso en el cuello mientras miran una película. Avisá con un susurro.",
        "Bailen pegaditos y que ella decida cuándo termina.",
        "Susurro al oído: decile qué te gustaría hacerle esta noche (con calma).",
        "Dale un beso en el hombro y bajá despacio hasta... la muñeca. Suspenso.",
        "Mandale un mensaje sugestivo al oído y que él/ella lo lea.",
        "Abrázala por detrás por 30 segundos sin soltarla. Nada más.",
        "Te tirás a sobarse la espalda y jugá a adivinar dónde está el «punto débil».",
        "Mirada intensa sin reírse: gana el que primero conecta un beso.",
        "Murmuro de cuello y nuca, pero solo guiños, sin manos.",
        "Beso en el lóbulo de la oreja (que dure un suspiro).",
        "Elegí el siguiente capítulo de la serie PERO tenés que verlo medio día acurrucados.",
        "Juego de miradas picantes hasta que alguien se ríe.",
        "Dale el control a tu pareja en el próximo baile... y bailen lento."
      ]
    }
  };

  const COMODIN_ORDER = ["desafio", "masaje", "confesion", "favor", "picante"];

  /* mapeo dado -> categoría por cara del cubo */
  const FACE_TO_CAT = { 1: "desafio", 2: "masaje", 3: "confesion", 4: "favor", 5: "picante", 6: "comodin" };

  /* ---------- estado ---------- */

  const STORAGE_KEY = "dadoDelAmor_v1";

  const state = {
    points: { 1: 0, 2: 0 },
    turn: 1,
    names: { 1: "Vos", 2: "Tu amor" },
    picante: true,
    history: []
  };

  let rolling = false;
  let currentCard = null; // { cat, text, pts, kind }
  let votesOpen = false;

  /* ---------- helpers DOM ---------- */

  const $ = (id) => document.getElementById(id);

  const diceEl = $("dice");
  const diceBox = $("dice-box");

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (s.points) state.points = s.points;
      if (typeof s.turn === "number") state.turn = s.turn;
      if (s.names) state.names = s.names;
      if (typeof s.picante === "boolean") state.picante = s.picante;
      if (Array.isArray(s.history)) state.history = s.history;
    } catch (e) { /* estado corrupto, se ignora */ }
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- sonido (WebAudio, sin archivos) ---------- */

  let audioCtx = null;
  function ac() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTone(freq, dur, type, vol, when) {
    const ctx = ac();
    if (!ctx) return;
    const t = when || ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.12, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }

  function soundRoll() {
    const t = ac().currentTime;
    // cascada de "clicks" cortos
    for (let i = 0; i < 10; i++) {
      playTone(220 + Math.random() * 600, 0.03, "square", 0.06, t + i * 0.08);
    }
  }

  function soundWin() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      playTone(f, 0.28, "triangle", 0.16, ac().currentTime + i * 0.13));
  }

  function soundFail() {
    playTone(220, 0.3, "sawtooth", 0.08, ac().currentTime);
    playTone(160, 0.4, "sawtooth", 0.08, ac().currentTime + 0.15);
  }

  /* ---------- confeti ---------- */

  const cvs = $("confetti");
  const ctx = cvs.getContext("2d");
  let particles = [];

  function sizeCanvas() {
    cvs.width = innerWidth; cvs.height = innerHeight;
  }
  addEventListener("resize", sizeCanvas);
  sizeCanvas();

  function confetti() {
    const colors = ["#f472b6", "#a78bfa", "#facc15", "#34d399", "#fb7185", "#38bdf8"];
    const n = 120;
    for (let i = 0; i < n; i++) {
      particles.push({
        x: innerWidth / 2 + (Math.random() - 0.5) * 260,
        y: innerHeight * 0.35 + (Math.random() - 0.5) * 200,
        vx: (Math.random() - 0.5) * 9,
        vy: -Math.random() * 8 - 2,
        g: 0.22 + Math.random() * 0.12,
        size: 5 + Math.random() * 7,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        color: colors[(Math.random() * colors.length) | 0],
        life: 1
      });
    }
  }

  (function loop() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    if (particles.length) {
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += p.g; p.rot += p.vr; p.life -= 0.012;
        ctx.save();
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });
      particles = particles.filter(p => p.life > 0 && p.y < cvs.height + 20);
    }
    requestAnimationFrame(loop);
  })();

  /* ---------- corazones flotantes ---------- */

  const heartsBox = document.querySelector(".bg-hearts");
  const HEART_SET = ["💜", "💗", "❤️", "💕", "💞", "🩷"];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    s.textContent = HEART_SET[(Math.random() * HEART_SET.length) | 0];
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = 12 + Math.random() * 22 + "px";
    s.style.animationDuration = (7 + Math.random() * 9) + "s";
    s.style.animationDelay = (Math.random() * 12) + "s";
    heartsBox.appendChild(s);
  }

  /* ---------- render ---------- */

  function other(p) { return p === 1 ? 2 : 1; }

  function render() {
    $("points1").textContent = state.points[1];
    $("points2").textContent = state.points[2];
    $("name1").textContent = state.names[1];
    $("name2").textContent = state.names[2];

    const total = state.points[1] + state.points[2] || 1;
    $("bar1").style.width = (state.points[1] / total) * 100 + "%";
    $("bar2").style.width = (state.points[2] / total) * 100 + "%";

    document.getElementById("player1Card").classList.toggle("active", state.turn === 1);
    document.getElementById("player2Card").classList.toggle("active", state.turn === 2);
    $("turn1").textContent = state.turn === 1 ? "Tu turno" : "En espera";
    $("turn2").textContent = state.turn === 2 ? "Tu turno" : "En espera";

    const who = state.turn === 1 ? "💜 " + state.names[1] : "💗 " + state.names[2];
    $("turnHint").innerHTML = "Turno de <strong>" + who + "</strong>";

    save();
  }

  function renderHistory() {
    const ul = $("historyList");
    if (!state.history.length) {
      ul.innerHTML = '<li class="hist-empty">Todavía no hay jugadas.</li>';
    } else {
      ul.innerHTML = state.history.map(h =>
        `<li>${h.icon} <b>${h.who}</b> — ${h.text} <em style="opacity:.7">· +${h.pts} pts</em></li>`
      ).join("");
      ul.scrollTop = ul.scrollHeight;
    }

    const lead = state.points[1] === state.points[2] ? "Están empatados 😍" :
      (state.points[1] > state.points[2] ? "Gana 💜 " + state.names[1] : "Gana 💗 " + state.names[2]);
    $("statsText").textContent = lead + " · " + state.points[1] + " vs " + state.points[2];
  }

  function renderAll() { render(); renderHistory(); }

  /* ---------- dado ---------- */

  const FACE_ROT = {
    1: { x: 0, y: 0 },
    6: { x: 0, y: 180 },
    3: { x: 0, y: -90 },
    4: { x: 0, y: 90 },
    2: { x: -90, y: 0 },
    5: { x: 90, y: 0 }
  };

  function rollDice(callback) {
    const face = 1 + ((Math.random() * 6) | 0);
    const r = FACE_ROT[face];
    const spins = 2 + ((Math.random() * 2) | 0);
    const rx = r.x + 360 * spins * (Math.random() < 0.5 ? 1 : -1) * (spins > 0 ? 1 : 1);
    const ry = r.y + 360 * spins;
    diceEl.style.transition = "none";
    diceEl.style.transform = "rotateX(0deg) rotateY(0deg)";
    void diceEl.offsetWidth;
    diceEl.style.transition = "transform .85s cubic-bezier(.2,.8,.3,1.05)";
    diceEl.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
    setTimeout(() => callback(face), 860);
  }

  /* ---------- lógica de juego ---------- */

  function pickRandom(arr) { return arr[(Math.random() * arr.length) | 0]; }

  function currentCatList() {
    // si el modo picante está apagado, la cara picante se vuelve comodín
    return state.picante ? COMODIN_ORDER : COMODIN_ORDER.filter(c => c !== "picante");
  }

  function showResult(catKey, source) {
    const cat = CONTENT[catKey];
    const pts = (source === "comodin" ? 2 : 1) * cat.pts;

    currentCard = { cat: catKey, catObj: cat, pts: pts, text: pickRandom(cat.items) };

    $("cardEmpty").classList.add("hidden");
    $("cardVote").classList.add("hidden");
    $("cardResult").classList.remove("hidden");
    $("cardResult").className = "card accent-" + cat.accent;

    $("catIcon").textContent = cat.icon;
    $("catName").textContent = cat.name + (source === "comodin" ? " ⭐×2" : "");
    $("cardText").textContent = currentCard.text;
    $("cardPts").textContent = "🎯 Completada vale +" + pts + " puntos";

    $("actions").classList.remove("hidden");
  }

  function showVote() {
    votesOpen = true;
    currentCard = null;
    $("cardEmpty").classList.add("hidden");
    $("cardResult").classList.add("hidden");
    $("cardVote").classList.remove("hidden");
    $("cardVote").className = "card accent-comodin card";

    const grid = $("voteGrid");
    grid.innerHTML = currentCatList().map(c => {
      const cat = CONTENT[c];
      return '<button class="vote-btn" data-cat="' + c + '"><span class="v-emoji">' + cat.icon +
        '</span>' + cat.name + '</button>';
    }).join("");

    grid.querySelectorAll(".vote-btn").forEach(b => {
      b.addEventListener("click", () => { votesOpen = false; showResult(b.dataset.cat, "comodin"); });
    });
  }

  function dimEditables(on) {
    document.querySelectorAll(".player-card").forEach(c => c.classList.toggle("dimmed", on));
  }

  function setReadyState(ready) {
    $("rollBtn").disabled = !ready;
    $("modeSwitch").classList.toggle("disabled", !ready);
    dimEditables(!ready);
  }

  function doRoll() {
    if (rolling) return;
    rolling = true;
    setReadyState(false);
    currentCard = null;

    $("cardEmpty").classList.remove("hidden");
    $("cardResult").classList.add("hidden");
    $("cardVote").classList.add("hidden");
    $("actions").classList.add("hidden");

    soundRoll();
    diceEl.classList.add("rolling");
    diceBox.classList.add("raised");

    rollDice((face) => {
      diceEl.classList.remove("rolling");
      diceBox.classList.remove("raised");

      let cat = FACE_TO_CAT[face];
      if (!currentCatList().includes(cat) && CONTENT[cat]) {
        cat = "comodin"; // picante fuera de modo
      }

      if (cat === "comodin") {
        showVote();
      } else {
        setTimeout(() => showResult(cat, "directo"), 120);
      }
      rolling = false;
    });
  }

  function resolveCard(done) {
    if (!currentCard && !votesOpen) return;

    const who = state.turn;
    const name = state.names[who];
    const pts = currentCard ? currentCard.pts : 0;

    if (done && currentCard) {
      state.points[who] += pts;
      state.history.unshift({
        icon: currentCard.catObj.icon,
        who: name,
        text: currentCard.text,
        pts: pts
      });
      state.history = state.history.slice(0, 60);
      const el = $("points" + who);
      el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop");
      confetti();
      soundWin();
    } else if (!done) {
      soundFail();
    }

    currentCard = null;
    votesOpen = false;

    if (done || !currentCard) state.turn = other(state.turn);

    renderAll();
    render();

    $("cardResult").classList.add("hidden");
    $("cardVote").classList.add("hidden");
    $("actions").classList.add("hidden");
    $("cardEmpty").classList.remove("hidden");

    setReadyState(true);
  }

  /* ---------- eventos ---------- */

  $("rollBtn").addEventListener("click", doRoll);
  $("doneBtn").addEventListener("click", () => resolveCard(true));
  $("skipBtn").addEventListener("click", () => resolveCard(false));

  const mode = $("modeSwitch");
  function toggleMode() {
    if (rolling || votesOpen) return;
    state.picante = !state.picante;
    mode.setAttribute("aria-checked", String(state.picante));
    save();
    const off = state.picante ? "" : " (modo encendido en el comodín)";
    $("turnHint").innerHTML = "Modo picante " + (state.picante ? "encendido 🌶️" : "apagado") + off;
  }
  mode.addEventListener("click", toggleMode);
  mode.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMode(); } });

  // nombres editables
  [["name1", 1], ["name2", 2]].forEach(([id, p]) => {
    const el = $(id);
    el.addEventListener("blur", () => {
      const v = el.textContent.trim() || state.names[p];
      state.names[p] = v;
      el.textContent = v;
      save();
      render();
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); el.blur(); }
    });
  });

  $("resetBtn").addEventListener("click", () => {
    const ok = confirm("¿Seguro que querés reiniciar todo? Se borran puntos e historial.");
    if (!ok) return;
    state.points = { 1: 0, 2: 0 };
    state.turn = 1;
    state.history = [];
    save();
    renderAll();
    $("cardResult").classList.add("hidden");
    $("cardVote").classList.add("hidden");
    $("actions").classList.add("hidden");
    $("cardEmpty").classList.remove("hidden");
  });

  /* ---------- arranque ---------- */

  load();
  mode.setAttribute("aria-checked", String(state.picante));
  renderAll();

})();