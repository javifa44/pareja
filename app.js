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
        "Bailá un vals o un reggaetón sin música. Tu pareja elige el ritmo.",
        "Mandale a tu pareja un audio de WhatsApp cantando una canción de amor.",
        "Hacé 10 sentadillas diciendo «te amo» en cada una.",
        "Convencé a tu pareja de que sos un mimo transitando una pared.",
        "Hacé reír a tu pareja sin tocarla durante 30 segundos al hilo.",
        "Repetí «miau, guau, pío» cada vez que digas una palabra con 'a' por 1 minuto.",
        "Escribí un mini-poema de 4 versos sobre tu pareja y leelo en voz alta.",
        "Hacé de espejo: tu pareja hace gestos lentos y vos los imitás exactos.",
        "Bailá de a dos por 30 segundos usando una escoba como micrófono.",
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
        "Masaje de espalda con la persona de pie y vos detrás.",
        "Masaje de gemelos y pantorrillas, con agua caliente antes.",
        "Masaje de manos mientras ven una serie. Nada de prisa.",
        "Masaje de hombros con el pulgar en los puntos tensos, con presión suave.",
        "Masaje de pies con movimientos circulares y un beso en el talón al final.",
        "Masaje de espalda con las palmas bien calientes. Vení, sin frío.",
        "Masaje de cabeza y cuello hasta que tu pareja se relaje del todo.",
        "Masaje relámpago de 1 minuto: no podés pedir nada durante 60 segundos.",
        "Masaje facial suave con crema hidratante por 2 minutos."
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
        "Confesá una manía tuya que tu pareja aún no conozca.",
        "Decile cuál sería tu cita ideal y qué harían.",
        "Confesá tres comidas que cocinarías solo para tu pareja.",
        "Contale algo que hayas aprendido en esta relación.",
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
        "Hacele una lista escrita de 5 cosas que amás de él o ella.",
        "Elegí hoy, por una vez, lo que tu pareja quiere (film, música, comida).",
        "Cargale el teléfono y dejale la pantalla de inicio con un fondo lindo.",
        "Ordená la cama y dejá el lado de tu pareja impecable.",
        "Preparale una merienda sorpresa con su sabor favorito.",
        "Encargate de una tarea de tu pareja hoy.",
        "Regalale una plantita o flor simple «porque sí».",
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
        "Bailen pegaditos y que tu pareja decida cuándo termina.",
        "Susurro al oído: decile qué te gustaría hacerle esta noche (con calma).",
        "Dale un beso en el hombro y bajá despacio hasta la muñeca. Suspenso.",
        "Mandale a tu pareja un mensaje sugestivo al oído para que lo lea.",
        "Abrazá por detrás a tu pareja durante 30 segundos. Nada más.",
        "Jugá a sobarles la espalda hasta encontrar su «punto débil».",
        "Mirada intensa sin reírse: gana el que primero conecta un beso.",
        "Murmuro de cuello y nuca, pero solo guiños, sin manos.",
        "Beso en el lóbulo de la oreja (que dure un suspiro).",
        "Vean la próxima película medio día acurrucados, sin pantalla que los separe.",
        "Juego de miradas picantes hasta que alguien se ríe.",
        "Dale el control de la música a tu pareja y bailen lento."
      ]
    }
  };

  const COMODIN_ORDER = ["desafio", "masaje", "confesion", "favor", "picante"];

  /* mapeo dado -> categoría por cara del cubo */
  const FACE_TO_CAT = { 1: "desafio", 2: "masaje", 3: "confesion", 4: "favor", 5: "picante", 6: "comodin" };

  const DEFAULT_REWARDS = {
    1: "El ganador elige qué comemos y qué vemos en la próxima cita. El perdedor pone la mesa y el postre.",
    2: "El perdedor planea y paga una cita elegida por el ganador, con todos los detalles que el ganador pida.",
    3: "El perdedor prepara una salida o experiencia elegida por el ganador: cana, show, spa, día de campo, clase de cocina… y queda en deuda hasta cumplirla."
  };

  /* ---------- estado ---------- */

  const STORAGE_KEY = "dadoDelAmor_v2";

  const DEFAULTS = {
    points: { 1: 0, 2: 0 },
    turn: 1,
    names: { 1: "Alex", 2: "Majo" },
    picante: true,
    history: [],
    goal: 100,
    margin: 20,
    rewards: { ...DEFAULT_REWARDS },
    champions: [],
    pendingReward: null, // { who, name } con premio sin elegir
    lastClaim: null,     // { name, reward }
    season: 1
  };

  let state = { ...DEFAULTS, points: { ...DEFAULTS.points }, names: { ...DEFAULTS.names }, rewards: { ...DEFAULTS.rewards }, history: [] };

  let rolling = false;
  let currentCard = null;
  let votesOpen = false;
  let claiming = false; // cuando el modal de premio está abierto solo para elegir

  /* ---------- helpers DOM ---------- */

  const $ = (id) => document.getElementById(id);
  const diceEl = $("dice");
  const diceBox = $("dice-box");

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      let v = {};
      for (const k of Object.keys(DEFAULTS)) {
        if (s[k] !== undefined) v[k] = s[k];
      }
      state = Object.assign(state, v);
      state.points = Object.assign({ 1: 0, 2: 0 }, s.points);
      state.names = Object.assign({ 1: "Alex", 2: "Majo" }, s.names);
      state.rewards = Object.assign({ ...DEFAULT_REWARDS }, s.rewards);
      if (!Array.isArray(state.history)) state.history = [];
      if (!Array.isArray(state.champions)) state.champions = [];
    } catch (e) { /* estado corrupto, se ignora */ }
  }

  function save() {
    const persist = {
      points: state.points, turn: state.turn, names: state.names, picante: state.picante,
      history: state.history, goal: state.goal, margin: state.margin, rewards: state.rewards,
      champions: state.champions, pendingReward: state.pendingReward,
      lastClaim: state.lastClaim, season: state.season
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(persist)); } catch (e) {}
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
    for (let i = 0; i < 10; i++) playTone(220 + Math.random() * 600, 0.03, "square", 0.06, t + i * 0.08);
  }

  function soundWin() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      playTone(f, 0.3, "triangle", 0.16, ac().currentTime + i * 0.13));
  }

  function soundFanfare() {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) =>
      playTone(f, 0.45, "triangle", 0.2, ac().currentTime + i * 0.16));
  }

  function soundFail() {
    playTone(220, 0.3, "sawtooth", 0.08, ac().currentTime);
    playTone(160, 0.4, "sawtooth", 0.08, ac().currentTime + 0.15);
  }

  /* ---------- confeti ---------- */

  const cvs = $("confetti");
  const ctx = cvs.getContext("2d");
  let particles = [];

  function sizeCanvas() { cvs.width = innerWidth; cvs.height = innerHeight; }
  addEventListener("resize", sizeCanvas);
  sizeCanvas();

  function confetti(n, x, y) {
    const colors = ["#ff5c8a", "#8b5cf6", "#f5b301", "#2dd4bf", "#ff8a5c", "#38bdf8"];
    const count = n || 120;
    const cx = x !== undefined ? x : innerWidth / 2;
    const cy = y !== undefined ? y : innerHeight * 0.32;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: cx + (Math.random() - 0.5) * 320,
        y: cy + (Math.random() - 0.5) * 220,
        vx: (Math.random() - 0.5) * 10,
        vy: -Math.random() * 9 - 2,
        g: 0.22 + Math.random() * 0.12,
        size: 6 + Math.random() * 8,
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
  const HEART_SET = ["💙", "💗", "❤️", "💕", "💞", "🩷"];
  for (let i = 0; i < 16; i++) {
    const s = document.createElement("span");
    s.textContent = HEART_SET[(Math.random() * HEART_SET.length) | 0];
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = 12 + Math.random() * 20 + "px";
    s.style.animationDuration = (7 + Math.random() * 9) + "s";
    s.style.animationDelay = (Math.random() * 12) + "s";
    heartsBox.appendChild(s);
  }

  /* ---------- render ---------- */

  function other(p) { return p === 1 ? 2 : 1; }

  function flashHint(msg, hot) {
    const el = $("turnHint");
    el.innerHTML = msg;
    el.classList.remove("hot");
    if (hot) el.classList.add("hot");
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }

  function render() {
    $("points1").textContent = state.points[1];
    $("points2").textContent = state.points[2];
    $("ptsGoal1").innerHTML = state.points[1] + " / " + state.goal;
    $("ptsGoal2").innerHTML = state.points[2] + " / " + state.goal;
    $("goalNum").textContent = state.goal + " pts";
    $("marginNum").textContent = state.margin;
    $("seasonNum").textContent = state.season;

    $("name1").textContent = state.names[1];
    $("name2").textContent = state.names[2];

    const r1 = Math.min(state.points[1] / state.goal, 1);
    const r2 = Math.min(state.points[2] / state.goal, 1);
    $("bar1").style.width = (r1 * 100) + "%";
    $("bar2").style.width = (r2 * 100) + "%";

    document.getElementById("player1Card").classList.toggle("active", state.turn === 1);
    document.getElementById("player2Card").classList.toggle("active", state.turn === 2);
    $("turn1").textContent = state.turn === 1 ? "Tu turno" : "En espera";
    $("turn2").textContent = state.turn === 2 ? "Tu turno" : "En espera";

    const who = state.turn === 1 ? "💙 " + state.names[1] : "💗 " + state.names[2];
    $("turnHint").innerHTML = "Turno de <strong>" + who + "</strong>";

    renderStats();
  }

  function renderStats() {
    const lead = state.points[1] === state.points[2] ? "Están empatadísimos 😍"
      : (state.points[1] > state.points[2]
        ? "Gana 💙 " + state.names[1]
        : "Gana 💗 " + state.names[2]);
    $("statsText").textContent = lead + " · " + state.points[1] + " vs " + state.points[2];

    const champs = $("championsLine");
    if (state.champions.length) {
      const counts = {};
      state.champions.forEach(n => counts[n] = (counts[n] || 0) + 1);
      champs.innerHTML = Object.entries(counts).map(([n, c]) =>
        '<span class="champ-tag">🏆 Campeón/a: ' + n + " ×" + c + "</span>").join("");
    } else {
      champs.innerHTML = "";
    }

    const lc = $("lastClaim");
    if (state.lastClaim) {
      lc.classList.remove("hidden");
      lc.innerHTML = "🎟️ <b>" + state.lastClaim.name + "</b> eligió: <i>" + state.lastClaim.reward + "</i>";
    } else {
      lc.classList.add("hidden");
    }

    $("claimBtn").classList.toggle("hidden", !state.pendingReward);
  }

  function renderHistory() {
    const ul = $("historyList");
    if (!state.history.length) {
      ul.innerHTML = '<li class="hist-empty">Todavía no hay jugadas.</li>';
    } else {
      ul.innerHTML = state.history.map(h =>
        `<li>${h.icon} <b>${h.who}</b> — ${h.text} <em style="opacity:.7">· +${h.pts} pts</em></li>`).join("");
      ul.scrollTop = ul.scrollHeight;
    }
  }

  function renderAll() { render(); renderHistory(); }

  /* ---------- dado ---------- */

  const FACE_ROT = {
    1: { x: 0, y: 0 },
    6: { x: 0, y: 180 },
    2: { x: -90, y: 0 },
    3: { x: 0, y: 90 },
    4: { x: 0, y: -90 },
    5: { x: 90, y: 0 }
  };

  function rollDice(callback) {
    const face = 1 + ((Math.random() * 6) | 0);
    const r = FACE_ROT[face];
    const spins = 2 + ((Math.random() * 2) | 0);
    const rx = r.x + 360 * spins;
    const ry = r.y + 360 * spins * (Math.random() < 0.5 ? 1 : -1);
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
    $("cardVote").className = "card accent-comodin";

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

  function setReadyState(ready) {
    $("rollBtn").disabled = !ready;
    $("modeSwitch").classList.toggle("disabled", !ready);
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
      if (!currentCatList().includes(cat) && CONTENT[cat]) cat = "comodin";

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
    const pts = currentCard ? currentCard.pts : 0;

    if (done && currentCard) {
      state.points[who] += pts;
      state.history.unshift({
        icon: currentCard.catObj.icon, who: state.names[who], text: currentCard.text, pts: pts
      });
      state.history = state.history.slice(0, 60);
      const el = $("points" + who);
      el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop");
      confetti(70);
      soundWin();
    } else if (!done) {
      soundFail();
    }

    currentCard = null;
    votesOpen = false;
    state.turn = other(state.turn);
    save();

    renderAll();

    $("cardResult").classList.add("hidden");
    $("cardVote").classList.add("hidden");
    $("actions").classList.add("hidden");
    $("cardEmpty").classList.remove("hidden");

    checkWinOn(who);

    setReadyState(true);
  }

  /* ---------- meta y victoria ---------- */

  function checkWinOn(p) {
    if (state.points[p] < state.goal) return false;
    const diff = state.points[p] - state.points[other(p)];
    if (diff >= state.margin) {
      openCelebration(p);
      return true;
    }
    // nota de desempate (sin romper el flujo)
    const target = state.names[p];
    flashHint("🔥 ¡Meta alcanzada por <strong>" + target + "</strong> pero muy parejo! Necesitás " +
      state.margin + " pts de ventaja para ganar. ¡A desempatar! 💪", true);
    return false;
  }

  /* ---------- celebración y premios ---------- */

  let pendingClaimWho = null;

  function openCelebration(who) {
    pendingClaimWho = who;
    claiming = true;
    renderCelebration();
    $("celeOverlay").classList.remove("hidden");
    soundFanfare();
    confetti(180);
    setTimeout(() => confetti(120, innerWidth * 0.2, innerHeight * 0.4), 400);
    setTimeout(() => confetti(120, innerWidth * 0.8, innerHeight * 0.4), 800);
  }

  function renderCelebration() {
    const who = pendingClaimWho;
    if (!who) return;
    const winnerName = state.names[who];
    const loserName = state.names[other(who)];

    $("celeTitle").textContent = "¡Ganó " + winnerName + "!";
    $("laterBtn").classList.remove("hidden");
    $("celeSub").textContent = claiming
      ? "La temporada tiene campeón. " + loserName + ": toca cumplir 💍"
      : "Premio pendiente para " + winnerName + ". Elegí cuál va a cumplir " + loserName + ".";

    const tiers = [
      { medal: "🥉", lvl: "Nivel 1 · Simple", txt: state.rewards[1] },
      { medal: "🥈", lvl: "Nivel 2 · Media", txt: state.rewards[2] },
      { medal: "🥇", lvl: "Nivel 3 · Épica", txt: state.rewards[3] }
    ];

    $("tiers").innerHTML = tiers.map((t, i) =>
      '<button class="tier-btn" data-tier="' + (i + 1) + '">' +
      '<span class="t-medal">' + t.medal + '</span>' +
      '<span class="t-body"><b>' + t.lvl + '</b><span>' + t.txt + '</span></span></button>'
    ).join("");

    $("tiers").querySelectorAll(".tier-btn").forEach(bh => {
      bh.addEventListener("click", () => {
        document.querySelectorAll("#tiers .tier-btn").forEach(x => x.classList.remove("sel"));
        bh.classList.add("sel");
        const tier = bh.dataset.tier;
        $("claimText").innerHTML = "<b>" + winnerName + "</b> elige: <b>" + state.rewards[tier] + "</b><br>" +
          "<small>¡" + loserName + ", te toca cumplir! 😄</small>";
        $("claimBox").classList.remove("hidden");
        $("laterBtn").classList.add("hidden");
        state.pendingReward = null;
        state.lastClaim = { name: winnerName, reward: state.rewards[tier] };
        save();
        renderStats();
      });
    });

    $("laterBtn").textContent = "Prefiero elegir el premio después";
  }

  function closeCelebration() {
    $("celeOverlay").classList.add("hidden");
    $("claimBox").classList.add("hidden");
    document.querySelectorAll("#tiers .tier-btn").forEach(x => x.classList.remove("sel"));
    $("laterBtn").classList.remove("hidden");
    claiming = false;
    renderStats();
  }

  function newSeason() {
    const winner = pendingClaimWho;
    if (winner) {
      state.champions.push(state.names[winner]);
      state.season += 1;
      state.points = { 1: 0, 2: 0 };
      state.turn = 1;
      state.history = [];
      state.pendingReward = null;
      save();
      closeCelebration();
      renderAll();
      confetti(140);
      flashHint("🎉 ¡Nueva temporada! A ver si " + state.names[2] + " toma la revancha.", false);
    }
  }

  /* ---------- ajustes ---------- */

  function openSettings() {
    $("setGoal").value = state.goal;
    $("setMargin").value = state.margin;
    $("setReward1").value = state.rewards[1];
    $("setReward2").value = state.rewards[2];
    $("setReward3").value = state.rewards[3];
    $("setOverlay").classList.remove("hidden");
  }

  function closeSettings() { $("setOverlay").classList.add("hidden"); }

  function saveSettings() {
    let goal = parseInt($("setGoal").value, 10);
    let margin = parseInt($("setMargin").value, 10);
    if (isNaN(goal) || goal < 10) goal = 100;
    if (isNaN(margin)) margin = 0;
    if (margin > goal / 2) margin = Math.max(0, Math.round(goal / 2));

    state.goal = goal;
    state.margin = margin;
    state.rewards[1] = $("setReward1").value.trim() || state.rewards[1];
    state.rewards[2] = $("setReward2").value.trim() || state.rewards[2];
    state.rewards[3] = $("setReward3").value.trim() || state.rewards[3];

    save();
    render();
    flashHint("⚙️ Ajustes guardados. Meta: " + goal + " pts, ventaja: " + margin + ". ¡A jugar!", false);
    closeSettings();
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
    flashHint(state.picante
      ? "🌶️ Modo picante encendido. ¡Que se cuide " + state.names[other(state.turn)] + "!"
      : "Modo picante apagado. Suavecito 💜");
  }
  mode.addEventListener("click", toggleMode);
  mode.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleMode(); }
  });

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
    el.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); el.blur(); } });
  });

  // ajustes
  $("openSet").addEventListener("click", openSettings);
  $("goalEdit").addEventListener("click", openSettings);
  $("setClose").addEventListener("click", closeSettings);
  $("saveSet").addEventListener("click", saveSettings);

  // celebración
  $("celeClose").addEventListener("click", closeCelebration);
  $("laterBtn").addEventListener("click", () => {
    if (pendingClaimWho) state.pendingReward = { who: pendingClaimWho, name: state.names[pendingClaimWho] };
    save();
    flashHint("🏅 " + state.names[pendingClaimWho] + " deberá elegir su premio más tarde.", false);
    closeCelebration();
  });
  $("seasonBtn").addEventListener("click", newSeason);
  $("claimBtn").addEventListener("click", () => {
    if (state.pendingReward) { pendingClaimWho = state.pendingReward.who; claiming = true; }
    else { pendingClaimWho = state.turn; claiming = true; }
    renderCelebration();
    $("celeOverlay").classList.remove("hidden");
  });

  // reinicio con confirmación
  $("resetBtn").addEventListener("click", () => $("resetOverlay").classList.remove("hidden"));
  $("resetClose").addEventListener("click", () => $("resetOverlay").classList.add("hidden"));
  $("resetNo").addEventListener("click", () => $("resetOverlay").classList.add("hidden"));
  $("resetYes").addEventListener("click", () => {
    state.points = { 1: 0, 2: 0 };
    state.turn = 1;
    state.history = [];
    state.champions = [];
    state.pendingReward = null;
    state.lastClaim = null;
    state.season = 1;
    save();
    renderAll();
    closeCelebration();
    $("resetOverlay").classList.add("hidden");
    $("cardResult").classList.add("hidden");
    $("cardVote").classList.add("hidden");
    $("actions").classList.add("hidden");
    $("cardEmpty").classList.remove("hidden");
    flashHint("🔄 Todo reiniciado. Nueva temporada del amor 😍");
  });

  // cerrar overlays con clic fuera
  [$("setOverlay"), $("celeOverlay"), $("resetOverlay")].forEach(ov => {
    ov.addEventListener("click", (e) => {
      if (e.target === ov) { closeSettings(); closeCelebration(); ov.classList.add("hidden"); }
    });
  });

  /* ---------- arranque ---------- */

  load();
  save(); // normalizar estado viejo a la v2
  mode.setAttribute("aria-checked", String(state.picante));
  renderAll();
  renderHistory();

})();