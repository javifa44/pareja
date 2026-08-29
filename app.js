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
        "Sorprendela con un beso largo y lento en el momento más inesperado del día: la cocina, el ascensor, la cola del kiosco.",
        "Contá una anécdota de ustedes dos como si fuera la historia de dos desconocidos en un bar. Sin nombres, con detalles.",
        "Ella te pide un deseo ahora mismo. Lo cumplís hoy (dentro de toda legalidad 😏).",
        "Regla nueva por 30 minutos: cada vez que ella se toque la cara, vos le das un beso donde ella elija.",
        "Inventá un «plan prohibido» para este fin de semana: algo que ninguno de los dos hizo nunca.",
        "Pelea de besos: el primero que se ríe pierde y queda debiendo un deseo.",
        "Murmurale al oído un párrafo de película de amor… pero reescribilo con historias de ustedes.",
        "Caminen una cuadra tomados de la mano y la siguiente con ella un paso adelante, siendo vos su sombra.",
        "Contale un secreto tuyo con la condición de que nunca lo repita ni a vos.",
        "Ella elige una canción: bailen en la cocina como si fuera el final de una película.",
        "Adiviná 3 cosas que ella pensó hoy. Por cada acierto, un beso.",
        "Hablá un minuto entero de lo que te enamora de estar con ella. Sin repetir palabras.",
        "Ella te da una orden para los próximos 10 minutos. Obediente y creativo.",
        "Repetile su frase favorita de la cama… con tu mejor actuación seductora.",
        "Elegí un lugar de la ciudad para un beso rápido y robáronlo en público.",
        "Ella cierra los ojos y te adivina solo por el tacto: 30 segundos, tres intentos."
      ]
    },
    masaje: {
      icon: "💆",
      name: "Masaje",
      accent: "masaje",
      pts: 10,
      items: [
        "Masaje de espalda completo, en silencio, con la música que ella elija. 5 minutos sin prisa.",
        "Masaje de pies con el aceite o crema que ella prefiera, y un beso en el empeine al final.",
        "Masaje de cuello y hombros mientras le susurrás un secreto que nunca contaste.",
        "Masaje de cabeza y cuero cabelludo, con deslizamientos lentos, hasta que se derrita.",
        "Masaje de manos largo, terminando con tus dedos entrelazados a las suyas durante un minuto.",
        "Masaje de brazos y antebrazos, con ella con los ojos cerrados, hablando bajito.",
        "Masaje de piernas: tobillos, gemelos y muslos. Ella marca el límite, vos el ritmo.",
        "«Mapa del tesoro»: ella te dibuja en su cuerpo los puntos que más le gustan y vos se los trabajás.",
        "Masaje de espalda y, al final, escribile una palabra en la piel con el dedo: que la adivine.",
        "Spa exprés: toalla tibia, crema, y un masaje de espalda con la luz baja.",
        "Masaje de hombros desde atrás, de pie, mientras le contás tu día con la voz bien lenta.",
        "Masaje facial suave con crema hidratante, terminando en un beso en la frente.",
        "Masaje de muñecas y manos de larga duración, hasta que se le caiga el celular de la mano.",
        "Masaje de cuello acostados, perfil contra perfil, con caricias del lado oscuro.",
        "Masaje de pies con movimientos circulares y después un beso en el talón. Sin reírse.",
        "Ella elige zona y tiempo. Vos el método. Resultado: le tenés que arrancar un «mmmm»."
      ]
    },
    confesion: {
      icon: "🫣",
      name: "Confesión",
      accent: "confesion",
      pts: 10,
      items: [
        "Contale cómo la describís cuando hablás de ella con alguien que no la conoce.",
        "Confesá cuál fue tu primer pensamiento cuando la viste, y cuál fue tu primer pensamiento hoy.",
        "Revelá un recuerdo tuyo que nunca contaste: vergonzoso, lindo o directamente raro.",
        "¿Cuál es la manía de ella que te derrite aunque jamás se la dijiste? Decile ahora.",
        "Contale el sueño más extraño que hayas tenido con ella, con todos los detalles raros.",
        "Confesá qué cosa le perdonás sin que ella lo sepa.",
        "¿Cuál fue tu momento de máximo orgullo por ella? Reconstruílo de punta a punta.",
        "Confesá qué te dio celos alguna vez y por qué (sé honesto, puede ser gracioso).",
        "Decile algo tuyo que no le mostraste nunca: un miedo, una ilusión, una contradicción.",
        "¿Qué parte de ella todavía te falta descubrir? Ese misterio que te da curiosidad.",
        "Decile dónde soñás besarla la próxima vez… y por qué ahí.",
        "Confesá una «tontería» que harías por ella sin dudar ni un segundo.",
        "¿Cuál es la pregunta que no te animás a hacerle? Hacésela. En serio.",
        "Contale tu plan secreto para los próximos meses con ella.",
        "Confesá en qué situación te sentís totalmente vulnerable con ella.",
        "Decile el elogio que te guardaste para después, para un momento especial. Ahora es ese momento."
      ]
    },
    favor: {
      icon: "🎁",
      name: "Favor",
      accent: "favor",
      pts: 10,
      items: [
        "Concretale hoy un plan anticipado: fecha, hora y algo rico. Vos lo armás completo.",
        "Dejale una nota escrita en un lugar donde la encuentre mañana: su bolso, su libro, su auto.",
        "Comprale esa cosa que «vio y no se compró». Pieza, libro, plantita, lo que sea.",
        "Armale una playlist con canciones y por cada una, un mensajito de por qué te recuerda a ella.",
        "Resolvé hoy un trámite o pendiente de ella (turno, compra, descarga, consulta).",
        "Mandalé un audio contándole algo lindo antes de que se duerma.",
        "Preparale una merienda o desayuno sorpresa con su sabor preferido.",
        "Escribile una carta a mano: tu año (real o inventado) con ella, futuro incluido.",
        "Acompañala en eso que le da fiaca hacer sola y hacelo vos lo más fácil posible.",
        "Elijala vos en la próxima decisión 100%: restaurante, película, horario de verse.",
        "Comprale un plan sencillo pero pensado: un café, una entrada, un pasaje a un lugar que ama.",
        "Dejale deuda pendiente: prometé un plan especial, fijá fecha y contale qué es (sin dañar la sorpresa).",
        "Regalale una «válvula de escape»: la decisión de hoy es toda de ella, sin opinión tuya.",
        "Hacele su comida o bebida favorita, aunque sea tu peor día para cocinar.",
        "Concretale la cita que ella siempre propone y vos siempre pateás.",
        "Escribile una lista de 10 cosas que amás de ella y mandéselas por mensaje."
      ]
    },
    picante: {
      icon: "🔥",
      name: "Picante",
      accent: "picante",
      pts: 15,
      items: [
        "Beso apasionado de 30 segundos con las manos quietas. Solo el beso, que diga él.",
        "Sesión de besos lentos en el cuello, el hombro y la clavícula, marcando dónde le hace más efecto.",
        "Murmurale al oído, sin tocarla, lo que le harías esta noche. Con detalles. Con calma.",
        "Show privado: bailá para ella un minuto, mirándola a los ojos, sin música.",
        "Descubrí su «punto débil» de la piel y usalo durante 2 minutos.",
        "Masaje de espalda que termina en un beso en la nuca. Y nada más… todavía.",
        "Juego de miradas: quien desvía la mirada primero pierde una prenda (opcional, divertido).",
        "Beso en el hombro con tu mano bajando lento por su brazo… hasta justo antes de los dedos.",
        "Cuenta regresiva: 30 segundos de beso sin soltarla, contando en voz baja del 30 al 0.",
        "Espalda contra la pared, un beso con un poquito de drama cinematográfico y las manos en su cintura.",
        "Susúrrale una orden para los próximos 10 minutos. Legal, pero firme.",
        "Baile lento con la luz baja: vos guiás, ella corta cuando quiera.",
        "Te pagan con caricias: un minuto de masaje de manos y muñecas, mirándose fijo.",
        "Ella te venda los ojos y te hace adivinar qué parte de su cuerpo te toca."
      ]
    }
  };

  const COMODIN_ORDER = ["desafio", "masaje", "confesion", "favor", "picante"];

  /* mapeo dado -> categoría por cara del cubo */
  const FACE_TO_CAT = { 1: "desafio", 2: "masaje", 3: "confesion", 4: "favor", 5: "picante", 6: "comodin" };

  /* ---------- premios: 3 categorías × 2 niveles ---------- */

  const REWARDS_META = {
    aventura: { icon: "🧳", name: "Aventura" },
    premium:  { icon: "🥂", name: "Noche premium" },
    libre:    { icon: "🃏", name: "Carta blanca" }
  };

  const DEFAULT_REWARDS = {
    aventura: {
      1: "Un día fuera de la rutina que arma el perdedor: ruta, picnic, ciudad o campo. El ganador elige rumbo, el perdedor lo hace realidad.",
      2: "Una escapada de verdad: un fin de semana o viajecito planificado por el perdedor, con sorpresas pensadas para el ganador."
    },
    premium: {
      1: "Una noche premium: el perdedor paga, el ganador elige el plan (cena con vista, show, pista VIP, lo que sea).",
      2: "Experiencia inolvidable: teatro, concierto, cena con banda en vivo o spa. El perdedor la prepara completa, de principio a fin."
    },
    libre: {
      1: "Un deseo libre (lógico y legal, pero creativo): algo que el ganador siempre quiso que el perdedor haga por él o ella.",
      2: "Carta blanca total: el ganador escribe su deseo más tentador, con fecha límite, y el perdedor lo cumple."
    }
  };

  /* ---------- pregunta personal (quiz del premio) ---------- */

  const QUIZ = [
    { q: "Si mañana le regalaran un viaje pago a cualquier lugar, ¿a dónde va?", opts: ["Playa y mar", "Montaña con frío", "Una ciudad europea", "Campo / casita rural"] },
    { q: "A la 1 de la mañana, su debilidad inconfesable es…", opts: ["Algo salado", "Dulce o helado", "Snacks + serie", "Herboristería… mejor no"] },
    { q: "¿Cuál es su plan de domingo perfecto?", opts: ["Dormir hasta tarde y café largo", "Salir al aire libre", "Series con mimos todo el día", "Paseo + algo rico"] },
    { q: "Su manía más tierna (esa que te hace sonreír sola a vos) es…", opts: ["Hacer planes a último momento", "Mandarte audios larguísimos", "Perder la hora mirando el celular", "Reírse de sus propios chistes"] },
    { q: "El regalo que más la emocionaría de verdad:", opts: ["Un viaje sorpresa", "Algo hecho a mano", "Esa cosa que nombró mil veces", "Un momento planeado solo para ella"] },
    { q: "¿Qué detalle la puede sacar de quicio más rápido?", opts: ["Llegar tarde", "Que le cambien los planes", "Que no le presten atención", "El ruido del chat en bucle"] },
    { q: "El lugar del cuerpo donde más le gusta que la besen:", opts: ["El cuello", "Los labios, obvio", "La frente", "Detrás de la oreja"] },
    { q: "¿Qué es lo que más la enamora de vos?", opts: ["Que la hacés reír", "Cómo la mirás", "Que la escuchás de verdad", "Que la apoyás en todo"] },
    { q: "Su plan soñado para una noche perfecta es…", opts: ["Cena + algo cultural", "Noche en casa con mimo", "Salir a bailar", "Algo nuevo que nunca probaron"] },
    { q: "¿Cuál es su clásico de película/serie que jamás se saltea?", opts: ["Una romántica", "Una de acción", "Una comedia vieja", "Una que vieron juntos y se volvió sagrada"] }
  ];

  /* ---------- estado ---------- */

  const STORAGE_KEY = "dadoDelAmor_v3";

  const DEFAULTS = {
    points: { 1: 0, 2: 0 },
    turn: 1,
    names: { 1: "Alex", 2: "Majo" },
    picante: true,
    history: [],
    goal: 100,
    margin: 20,
    rewards: JSON.parse(JSON.stringify(DEFAULT_REWARDS)),
    champions: [],
    pendingReward: null, // { who, name } premio sin elegir
    lastClaim: null,     // { name, reward, cat }
    season: 1
  };

  function cloneRewards() { return JSON.parse(JSON.stringify(DEFAULT_REWARDS)); }

  let state = {
    ...DEFAULTS, points: { ...DEFAULTS.points }, names: { ...DEFAULTS.names },
    rewards: cloneRewards(), history: []
  };

  let rolling = false;
  let currentCard = null;
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
      Object.assign(state, s);
      state.points = Object.assign({ 1: 0, 2: 0 }, s.points);
      state.names = Object.assign({ 1: "Alex", 2: "Majo" }, s.names);
      const merged = cloneRewards();
      for (const k of Object.keys(merged)) {
        if (s.rewards && s.rewards[k]) {
          merged[k] = { 1: s.rewards[k][1] || DEFAULT_REWARDS[k][1], 2: s.rewards[k][2] || DEFAULT_REWARDS[k][2] };
        }
      }
      state.rewards = merged;
      if (!Array.isArray(state.history)) state.history = [];
      if (!Array.isArray(state.champions)) state.champions = [];
      for (const k of ["goal", "margin", "season"]) {
        if (typeof state[k] !== "number" || isNaN(state[k])) state[k] = DEFAULTS[k];
      }
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

  /* ---------- sonido ---------- */

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
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => playTone(f, 0.3, "triangle", 0.16, ac().currentTime + i * 0.13));
  }

  function soundFanfare() {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => playTone(f, 0.45, "triangle", 0.2, ac().currentTime + i * 0.16));
  }

  function soundFail() {
    playTone(220, 0.3, "sawtooth", 0.08, ac().currentTime);
    playTone(160, 0.4, "sawtooth", 0.08, ac().currentTime + 0.15);
  }

  function soundPick() { playTone(880, 0.12, "triangle", 0.12, ac().currentTime); }

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
        x: cx + (Math.random() - 0.5) * 320, y: cy + (Math.random() - 0.5) * 220,
        vx: (Math.random() - 0.5) * 10, vy: -Math.random() * 9 - 2, g: 0.22 + Math.random() * 0.12,
        size: 6 + Math.random() * 8, rot: Math.random() * Math.PI * 2, vr: (Math.random() - 0.5) * 0.3,
        color: colors[(Math.random() * colors.length) | 0], life: 1
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

    $("bar1").style.width = (Math.min(state.points[1] / state.goal, 1) * 100) + "%";
    $("bar2").style.width = (Math.min(state.points[2] / state.goal, 1) * 100) + "%";

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
      : (state.points[1] > state.points[2] ? "Gana 💙 " + state.names[1] : "Gana 💗 " + state.names[2]);
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
      lc.innerHTML = "🎟️ <b>" + state.lastClaim.name + "</b> eligió <b>" + (REWARDS_META[state.lastClaim.cat] || { icon: "" }).icon +
        "</b> " + state.lastClaim.level + "º: <i>" + state.lastClaim.reward + "</i>";
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
    1: { x: 0, y: 0 }, 6: { x: 0, y: 180 }, 2: { x: -90, y: 0 },
    3: { x: 0, y: 90 }, 4: { x: 0, y: -90 }, 5: { x: 90, y: 0 }
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

      if (cat === "comodin") showVote();
      else setTimeout(() => showResult(cat, "directo"), 120);
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
    const target = state.names[p];
    flashHint("🔥 ¡Meta alcanzada por <strong>" + target + "</strong> pero muy parejo! Necesitás " +
      state.margin + " pts de ventaja para ganar. ¡A desempatar! 💪", true);
    return false;
  }

  /* ---------- celebración: categoría → quiz → premio ---------- */

  let pendingClaimWho = null;
  let quizIndex = 0;
  let chosenCat = null;

  function openCelebration(who) {
    pendingClaimWho = who;
    renderCategories();
    $("celeOverlay").classList.remove("hidden");
    soundFanfare();
    confetti(180);
    setTimeout(() => confetti(120, innerWidth * 0.2, innerHeight * 0.4), 400);
    setTimeout(() => confetti(120, innerWidth * 0.8, innerHeight * 0.4), 800);
  }

  function renderCategories() {
    chosenCat = null;
    quizIndex = -1;

    const winnerName = state.names[pendingClaimWho];
    const loserName = state.names[other(pendingClaimWho)];

    $("celeTitle").textContent = "¡Ganó " + winnerName + "!";
    $("celeSub").innerHTML = "Tocó la gloria, " + loserName + " cumple. Elegí la <b>categoría</b> que creas que más le gustaría a " + loserName + ".";

    $("quizStep").classList.add("hidden");
    $("claimBox").classList.add("hidden");

    const html = Object.entries(REWARDS_META).map(([k, m]) =>
      '<button class="tier-btn cat" data-cat="' + k + '">' +
      '<span class="t-medal">' + m.icon + '</span>' +
      '<span class="t-body"><b>' + m.name + '</b><span>Dos niveles: simple y épica.</span></span></button>'
    ).join("");
    $("tiers").innerHTML = html;

    $("tiers").querySelectorAll(".tier-btn").forEach(bh => {
      bh.addEventListener("click", () => {
        soundPick();
        renderQuiz(bh.dataset.cat);
      });
    });

    $("laterBtn").classList.remove("hidden");
    $("laterBtn").textContent = "Prefiero elegir el premio después";
  }

  function renderQuiz(catKey) {
    chosenCat = catKey;
    const loserName = state.names[other(pendingClaimWho)];

    quizIndex = (Math.random() * QUIZ.length) | 0;
    const q = QUIZ[quizIndex];

    $("celeSub").innerHTML = "Para ganarte el <b>Nivel 2</b>, respondé esta pregunta sobre <b>" + loserName + "</b>:";
    $("quizQ").textContent = q.q;
    const opts = q.opts.map((o, i) =>
      '<button class="q-btn" data-opt="' + i + '">' + o + '</button>').join("");
    $("quizOpts").innerHTML = opts;

    $("quizOpts").querySelectorAll(".q-btn").forEach(b => {
      b.addEventListener("click", () => {
        document.querySelectorAll("#quizOpts .q-btn").forEach(x => x.classList.remove("sel"));
        b.classList.add("sel");
        $("quizVerdict").classList.remove("hidden");
        soundPick();
      });
    });

    $("quizStep").classList.remove("hidden");
    $("claimBox").classList.add("hidden");
  }

  function resolveQuiz(correct) {
    const loserName = state.names[other(pendingClaimWho)];
    const level = correct ? 2 : 1;
    const reward = state.rewards[chosenCat][level];
    const meta = REWARDS_META[chosenCat];

    $("quizVerdict").classList.add("hidden");
    $("quizOpts").innerHTML = "";

    $("celeSub").innerHTML = correct
      ? "🎯 ¡Le acertaste! Te ganaste el <b>Nivel 2 · Épica</b> de la categoría " + meta.icon + "."
      : "Casi… <b>Nivel 1</b> para vos. Mejor siguen jugando juntos y conociéndose 😉";

    $("claimText").innerHTML =
      "<b>" + meta.icon + " " + meta.name + " · Nivel " + level + "</b><br>" +
      reward + "<br><small>¡" + loserName + ", te toca cumplir! 😄</small>";
    $("claimBox").classList.remove("hidden");
    $("laterBtn").classList.add("hidden");

    state.pendingReward = null;
    state.lastClaim = { name: state.names[pendingClaimWho], reward: reward, cat: chosenCat, level: level };
    save();
    renderStats();

    if (correct) { confetti(90); soundFanfare(); }
    else soundWin();
  }

  function closeCelebration() {
    $("celeOverlay").classList.add("hidden");
    $("claimBox").classList.add("hidden");
    $("quizVerdict").classList.add("hidden");
    $("quizOpts").innerHTML = "";
    $("laterBtn").classList.remove("hidden");
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
    $("setRewardA1").value = state.rewards.aventura[1];
    $("setRewardA2").value = state.rewards.aventura[2];
    $("setRewardB1").value = state.rewards.premium[1];
    $("setRewardB2").value = state.rewards.premium[2];
    $("setRewardC1").value = state.rewards.libre[1];
    $("setRewardC2").value = state.rewards.libre[2];
    $("setOverlay").classList.remove("hidden");
  }

  function closeSettings() { $("setOverlay").classList.add("hidden"); }

  function setReward(group, level) {
    return function () {
      const v = this.value.trim();
      if (v) state.rewards[group][level] = v;
    };
  }

  function saveSettings() {
    let goal = parseInt($("setGoal").value, 10);
    let margin = parseInt($("setMargin").value, 10);
    if (isNaN(goal) || goal < 10) goal = 100;
    if (isNaN(margin)) margin = 0;
    if (margin > goal / 2) margin = Math.max(0, Math.round(goal / 2));

    state.goal = goal;
    state.margin = margin;

    $("setRewardA1").value.trim() && (state.rewards.aventura[1] = $("setRewardA1").value.trim());
    $("setRewardA2").value.trim() && (state.rewards.aventura[2] = $("setRewardA2").value.trim());
    $("setRewardB1").value.trim() && (state.rewards.premium[1] = $("setRewardB1").value.trim());
    $("setRewardB2").value.trim() && (state.rewards.premium[2] = $("setRewardB2").value.trim());
    $("setRewardC1").value.trim() && (state.rewards.libre[1] = $("setRewardC1").value.trim());
    $("setRewardC2").value.trim() && (state.rewards.libre[2] = $("setRewardC2").value.trim());

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

  // celebración y quiz
  $("celeClose").addEventListener("click", closeCelebration);
  $("quizYes").addEventListener("click", () => resolveQuiz(true));
  $("quizNo").addEventListener("click", () => resolveQuiz(false));
  $("laterBtn").addEventListener("click", () => {
    if (pendingClaimWho) state.pendingReward = { who: pendingClaimWho, name: state.names[pendingClaimWho] };
    save();
    flashHint("🏅 " + state.names[pendingClaimWho] + " deberá elegir su premio más tarde.", false);
    closeCelebration();
  });
  $("seasonBtn").addEventListener("click", newSeason);
  $("claimBtn").addEventListener("click", () => {
    if (state.pendingReward) pendingClaimWho = state.pendingReward.who;
    else pendingClaimWho = state.turn;
    renderCategories();
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
  save();
  mode.setAttribute("aria-checked", String(state.picante));
  renderAll();
  renderHistory();

})();