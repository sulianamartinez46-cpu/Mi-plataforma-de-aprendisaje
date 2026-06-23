<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mi Plataforma de Aprendizaje</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="aurora"></div>

<header class="topbar">
  <div class="topbar-inner">
    <div class="brand">✨ Mi Plataforma</div>
    <div class="user">
      <span><?=$alumno?></span>
      <div class="avatar-ring"><div class="avatar">S</div></div>
    </div>
  </div>
</header>

<main class="wrap">

  <section class="hero">
    <div class="hero-left">
      <p class="pill">Dashboard Personal</p>
      <h1>Tu camino de aprendizaje</h1>
      <p class="desc">Visualiza tu avance, comparte conocimiento y aprende de tu comunidad.</p>
      <div class="cta-row">
        <button class="btn-glow" onclick="scrollToPAQ()">Ver mis PAQs</button>
        <button class="btn-ghost" onclick="abrirBot()">Bot de Telegram</button>
      </div>
    </div>
    <div class="hero-right">
      <div class="orb-card">
        <div class="orb-num"><?=$progreso?></div>
        <div class="orb-label">% Completado</div>
        <svg class="orb-svg" width="220" height="220"><circle cx="110" cy="110" r="90" style="stroke-dashoffset:<?=565-($progreso*5.65)?>"/></svg>
      </div>
    </div>
  </section>

  <section id="paqs" class="section">
    <h2 class="section-title">PAQ Tracker</h2>
    <div class="paq-grid">
      <?php foreach($paqs as $p):?>
      <div class="paq-float" data-id="<?=$p['id']?>">
        <div class="paq-top">
          <span class="tag"><?=$p['cat']?></span>
          <span class="xp">+<?=$p['xp']?> XP</span>
        </div>
        <h3><?=$p['tema']?></h3>
        <div class="track">
          <div class="fill" style="width:<?=$p['porc']?>%"></div>
        </div>
        <div class="paq-bottom">
          <span class="porc"><?=$p['porc']?>%</span>
          <button onclick="completarPAQ('<?=$p['id']?>',this)">
            <?=$p['porc']==100?'✓ Hecho':'Completar'?>
          </button>
        </div>
      </div>
      <?php endforeach;?>
    </div>
  </section>

  <section class="section">
    <div class="section-head">
      <h2 class="section-title">Comunidad</h2>
      <button class="btn-outline" onclick="openModal()">Compartir algo</button>
    </div>
    <div class="bento">
      <div class="bento-card big">
        <div class="icon-play">▶</div>
        <h4>Guía rápida: APA en video</h4>
        <p>Por Ana M. • 2.3k vistas</p>
      </div>
      <div class="bento-card">
        <div class="icon-doc">📄</div>
        <h4>50 fórmulas Excel</h4>
        <p>Por Carlos R.</p>
      </div>
      <div class="bento-card add" onclick="openModal()">
        <div class="plus">+</div>
        <p>Sube tu aporte</p>
      </div>
    </div>
  </section>

</main>

<div id="modal" class="modal">
  <div class="modal-box">
    <button class="x" onclick="closeModal()">×</button>
    <h3>Compartir recurso</h3>
    <input placeholder="Título">
    <select><option>Matemáticas</option><option>Redacción</option><option>Ofimática</option></select>
    <input placeholder="Link YouTube/Drive/PDF">
    <button class="btn-glow btn-full" onclick="closeModal();toast('Recurso publicado')">Publicar</button>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
