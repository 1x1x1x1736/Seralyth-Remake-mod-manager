// ---------------------------------------------------------------------------
// Downloads are served from the project's GitHub Releases so the large files
// never have to be committed to the GitHub Pages branch.
// ---------------------------------------------------------------------------
const RELEASE_BASE =
  'https://github.com/1x1x1x1736/Seralyth-Remake-mod-manager/releases/latest/download/';
const RELEASE_URL = `${RELEASE_BASE}Seralyth.Remake.exe`;
const LINUX_URL = `${RELEASE_BASE}Seralyth.Remake.Linux.x64.tar.gz`;

const ROLE_ID = '1575298213135786147';
const BUYER_ROLE_ID = '1548833356504899595';

const THEME_KEY = 'seralyth-website-theme';
const LAYOUT_KEY = 'seralyth-website-layout';
const THEMES = {
  midnight: { label: 'Midnight', color: '#070b13', tip: 'Cyan + violet — the default glow.', colors: ['#070B13', '#00E5FF', '#A56BFF'] },
  ember: { label: 'Ember', color: '#120a08', tip: 'Warm orange + hot pink ember light.', colors: ['#120A08', '#FF9D6B', '#FF5F8D'] },
  matrix: { label: 'Matrix', color: '#04100a', tip: 'Terminal green + cyan code glow.', colors: ['#04100A', '#59E0A0', '#7CF2FF'] },
  rose: { label: 'Rose', color: '#120711', tip: 'Soft pink + violet neon.', colors: ['#120711', '#FF7AC6', '#A56BFF'] },
  arctic: { label: 'Arctic', color: '#06111d', tip: 'Ice blue + cyan frost.', colors: ['#06111D', '#68B8FF', '#7CF2FF'] }
};
const LAYOUTS = {
  default: { label: 'Default', tip: 'Balanced spacing and full panels.' },
  compact: { label: 'Compact', tip: 'Tighter rows — fits more on screen.' },
  glassy: { label: 'Glassy', tip: 'Frosted translucent surfaces.' },
  bold: { label: 'Bold', tip: 'High-contrast blocks and borders.' }
};

// rank is shared by the mod cards and the 1st/2nd/3rd podium. Keep it in sync
// with the catalog order in the manager (Skidalyth is 2nd place).
const MODS = [
  { id: 'seralyth-remake', name: 'Seralyth Remake', author: '1x1x1x1_VR12', version: '14 builds', tag: 'mixed', paid: true, rank: 1,
    desc: 'Pick one of 13 builds, or the key-gated Paid build that injects without installing.', image: 'seralyth-remake.png' },
  { id: 'skidalyth', name: 'Skidalyth', author: 'Chillzmodz', version: 'Latest', tag: 'illegal', rank: 2,
    desc: 'GitHub Mod release download. No source-code button.', image: 'skidalyth.png' },
  { id: 'novalight', name: 'Novalight', author: 'Unknown', version: '1.0.0', tag: 'illegal', rank: 3,
    desc: 'Updated Novalight.dll ships with the manager and installs automatically.', image: 'novalight.png' },
  { id: 'spectral', name: 'Spectral', author: 'Unknown', version: '1.0.0', tag: 'illegal', rank: 4,
    desc: 'Copies your local Spectral Menu.dll into the plugins folder.', image: 'spectral.png' },
  { id: 'malachi-reborn', name: 'Malachi Reborn', author: 'Unknown', version: '1.0.0', tag: 'illegal', rank: 5,
    desc: 'Updated Malachis_Menu_Reborn.dll ships with the manager and installs in one click.', image: 'malachi-reborn.png' },
  { id: 'bark', name: 'Bark', author: 'NgbatzYT', version: '3.0.2', tag: 'legal', rank: 6,
    desc: 'GitHub 3.0.2 release download. No source-code button.', image: 'bark.png' },
  { id: 'poison-menu', name: 'Poison Menu', author: 'heycanihavethis', version: '2 builds', tag: 'mixed', rank: 7,
    desc: 'Choose Legal or Illegal; the matching DLL is installed for you.', image: 'poison-menu.png' },
  { id: 'lag-menu', name: 'Lag Menu', author: 'MrLag', version: 'Latest', tag: 'illegal', rank: 8,
    desc: 'Auto-updates from lagmenu.lol on startup and installs the latest LagMenu.dll directly.', image: 'lag-menu.png' },
  { id: 'stupid-template', name: 'StupidTemplate', author: 'Unknown', version: 'Latest', tag: 'illegal', rank: 9,
    desc: 'Updated StupidTemplate.dll ships with the manager and installs directly.', image: null },
  { id: 'zynxgtgold', name: 'ZynxGTGold', author: 'Unknown', version: 'Latest', tag: 'illegal', rank: 10,
    desc: 'Downloads ZynxGTGold.dll from its fresh link and installs it.', image: 'zynxgtgold.png' },
];

const TAG_LABEL = { legal: 'LEGAL', illegal: 'ILLEGAL', mixed: 'LEGAL + ILLEGAL' };
const PLACE_LABEL = ['1st place', '2nd place', '3rd place'];
const PLACE_MEDAL = ['🥇', '🥈', '🥉'];

function rankedMods() {
  return [...MODS].sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));
}

function rankLabel(mod, fallback) {
  return String(mod.rank ?? fallback).padStart(2, '0');
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function inlineMarkdown(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}

function renderPodium() {
  const target = document.getElementById('podium');
  if (!target) return;

  target.innerHTML = rankedMods().slice(0, 3).map((mod, index) => {
    const shot = mod.image
      ? `<img src="assets/mods/${mod.image}" alt="${escapeHtml(mod.name)} preview" loading="lazy" />`
      : '';
    const shotClass = mod.image ? 'podium-shot' : 'podium-shot placeholder';
    return `
      <article class="podium-card place-${index + 1}">
        <div class="podium-head">
          <span class="podium-medal" aria-hidden="true">${PLACE_MEDAL[index]}</span>
          <span class="podium-place">${PLACE_LABEL[index]}</span>
          <span class="rank">#${rankLabel(mod, index + 1)}</span>
        </div>
        <div class="${shotClass}">${shot}</div>
        <div class="podium-info">
          <h3>${escapeHtml(mod.name)}</h3>
          <span class="tag tag-${mod.tag}">${TAG_LABEL[mod.tag]}</span>
          <p>by ${escapeHtml(mod.author)}</p>
        </div>
      </article>`;
  }).join('');
}

function renderMods() {
  const grid = document.getElementById('modGrid');
  if (!grid) return;

  grid.innerHTML = rankedMods().map((mod, index) => {
    const shot = mod.image
      ? `<img src="assets/mods/${mod.image}" alt="${escapeHtml(mod.name)} preview" loading="lazy" />`
      : '';
    const shotClass = mod.image ? 'mod-shot' : 'mod-shot placeholder';
    const rank = rankLabel(mod, index + 1);
    const paidBadge = mod.paid ? '<span class="tag tag-paid">PAID</span>' : '';
    return `
      <article class="mod-card">
        <div class="${shotClass}">${shot}<span class="rank">#${rank}</span></div>
        <div class="mod-info">
          <div class="mod-top">
            <h3>${escapeHtml(mod.name)}</h3>
            <span class="tag-group"><span class="tag tag-${mod.tag}">${TAG_LABEL[mod.tag]}</span>${paidBadge}</span>
          </div>
          <p>${escapeHtml(mod.desc)}</p>
          <div class="mod-meta"><span>by ${escapeHtml(mod.author)}</span><span>${escapeHtml(mod.version)}</span></div>
        </div>
      </article>`;
  }).join('');
}

function renderChangelog(markdown) {
  const target = document.getElementById('changelogBody');
  if (!target) return;

  const lines = markdown.split(/\r?\n/);
  const html = [];
  let listOpen = false;
  let inFence = false;
  let entryCount = 0;

  const closeList = () => {
    if (listOpen) { html.push('</ul>'); listOpen = false; }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith('```')) {
      inFence = !inFence;
      closeList();
      continue;
    }
    if (inFence) continue;

    if (line.startsWith('### ')) {
      closeList();
      if (entryCount >= 3) break;
      entryCount += 1;
      html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
      continue;
    }
    if (entryCount === 0) continue;

    if (line.startsWith('- ')) {
      if (!listOpen) { html.push('<ul>'); listOpen = true; }
      html.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
      continue;
    }
    if (line === '') { closeList(); }
  }
  closeList();

  if (!entryCount) {
    target.innerHTML = '<p class="muted">No entries found in CHANGELOG.md.</p>';
    return;
  }
  html.push('<p class="muted">Open <code>CHANGELOG.md</code> in the project for the full history.</p>');
  target.innerHTML = html.join('');
}

async function loadChangelog() {
  try {
    const response = await fetch('CHANGELOG.md', { cache: 'no-store' });
    if (!response.ok) throw new Error(response.statusText);
    renderChangelog(await response.text());
  } catch {
    const target = document.getElementById('changelogBody');
    if (target) target.innerHTML = '<p class="muted">Change log unavailable. Open <code>CHANGELOG.md</code> in the project.</p>';
  }
}

function setupDownload() {
  const button = document.getElementById('downloadBtn');
  const notice = document.getElementById('downloadNotice');
  if (!button) return;

  const linux = document.getElementById('downloadLinuxBtn');
  if (RELEASE_URL) {
    button.href = RELEASE_URL;
    if (linux) linux.href = LINUX_URL;
    return;
  }

  button.href = '#';
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (!notice) return;
    notice.textContent = 'No download link set yet. Open Website/script.js and set RELEASE_URL.';
    notice.hidden = false;
  });
}

function setupCopyRole() {
  const roles = [
    ['copyRole', ROLE_ID],
    ['copyBuyerRole', BUYER_ROLE_ID]
  ];

  for (const [id, roleId] of roles) {
    const button = document.getElementById(id);
    if (!button) continue;
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(roleId);
        const small = button.querySelector('small');
        button.classList.add('success');
        if (small) small.textContent = 'Copied';
        setTimeout(() => {
          button.classList.remove('success');
          if (small) small.textContent = 'Copy';
        }, 1600);
      } catch {
        window.prompt('Copy this role ID:', roleId);
      }
    });
  }
}

function setupThemes() {
  const picker = document.getElementById('themePicker');
  const toggle = document.getElementById('themeToggle');
  const menu = document.getElementById('themeMenu');
  const label = document.getElementById('themeLabel');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!picker || !toggle || !menu) return;

  const tip = document.getElementById('themeTip');
  const tipTitle = document.getElementById('themeTipTitle');
  const tipBody = document.getElementById('themeTipBody');
  const tipSwatches = document.getElementById('themeTipSwatches');

  const hideTip = () => {
    if (!tip) return;
    tip.classList.remove('visible');
    tip.setAttribute('aria-hidden', 'true');
  };

  const positionTip = (event, button) => {
    if (!tip || !button) return;
    const rect = button.getBoundingClientRect();
    const width = tip.offsetWidth || 120;
    const height = tip.offsetHeight || 24;
    let left;
    let top;

    if (event && typeof event.clientX === 'number') {
      // Keep the compact chip centred on the pointer, clamped to this button.
      left = event.clientX - rect.left - width / 2;
      top = event.clientY - rect.top - height / 2;
    } else {
      // Keyboard focus has no pointer, so centre it in the button.
      left = (rect.width - width) / 2;
      top = (rect.height - height) / 2;
    }

    left = Math.max(2, Math.min(left, rect.width - width - 2));
    top = Math.max(2, Math.min(top, rect.height - height - 2));
    tip.style.left = `${Math.round(left)}px`;
    tip.style.top = `${Math.round(top)}px`;
  };

  const showTip = (button, event) => {
    if (!tip || (window.matchMedia && window.matchMedia('(hover: none)').matches)) return;
    const isTheme = Boolean(button.dataset.theme);
    const key = isTheme ? button.dataset.theme : button.dataset.layout;
    const data = isTheme ? THEMES[key] : LAYOUTS[key];
    if (!data) return;

    if (tipTitle) tipTitle.textContent = data.label;
    if (tipBody) tipBody.textContent = data.tip || '';
    if (tipSwatches) {
      tipSwatches.replaceChildren();
      (data.colors || []).forEach((color) => {
        const swatch = document.createElement('span');
        swatch.className = 'theme-tooltip-swatch';
        swatch.style.background = color;
        tipSwatches.appendChild(swatch);
      });
    }

    tip.classList.add('inside-button');
    if (tip.parentElement !== button) button.appendChild(tip);
    tip.setAttribute('aria-hidden', 'false');
    tip.classList.add('visible');
    positionTip(event, button);
  };

  menu.querySelectorAll('[data-theme], [data-layout]').forEach((button) => {
    button.addEventListener('mouseenter', (event) => showTip(button, event));
    button.addEventListener('mousemove', (event) => {
      if (tip && tip.classList.contains('visible')) positionTip(event, button);
    });
    button.addEventListener('mouseleave', hideTip);
    button.addEventListener('focus', () => showTip(button));
    button.addEventListener('blur', hideTip);
  });
  window.addEventListener('scroll', hideTip, { passive: true });
  window.addEventListener('resize', hideTip);

  let currentTheme = 'midnight';
  let currentLayout = 'default';

  const refreshLabel = () => {
    if (label) label.textContent = `${THEMES[currentTheme].label} · ${LAYOUTS[currentLayout].label}`;
  };

  const close = () => {
    hideTip();
    picker.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const applyTheme = (name) => {
    const theme = THEMES[name] ? name : 'midnight';
    currentTheme = theme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = 'dark';
    if (meta) meta.setAttribute('content', THEMES[theme].color);

    menu.querySelectorAll('[data-theme]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.theme === theme));
    });

    refreshLabel();
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* storage can be blocked */ }
  };

  const applyLayout = (name) => {
    const layout = LAYOUTS[name] ? name : 'default';
    currentLayout = layout;
    document.documentElement.dataset.layout = layout;

    menu.querySelectorAll('[data-layout]').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.layout === layout));
    });

    refreshLabel();
    try { localStorage.setItem(LAYOUT_KEY, layout); } catch { /* storage can be blocked */ }
  };

  let savedTheme = 'midnight';
  let savedLayout = 'default';
  try {
    const storedTheme = localStorage.getItem(THEME_KEY);
    const storedLayout = localStorage.getItem(LAYOUT_KEY);
    if (storedTheme && THEMES[storedTheme]) savedTheme = storedTheme;
    if (storedLayout && LAYOUTS[storedLayout]) savedLayout = storedLayout;
  } catch { /* storage can be blocked */ }

  applyTheme(savedTheme);
  applyLayout(savedLayout);

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = picker.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.addEventListener('click', (event) => {
    const themeOption = event.target.closest('[data-theme]');
    if (themeOption && THEMES[themeOption.dataset.theme]) {
      applyTheme(themeOption.dataset.theme);
      close();
      return;
    }

    const layoutOption = event.target.closest('[data-layout]');
    if (layoutOption && LAYOUTS[layoutOption.dataset.layout]) {
      applyLayout(layoutOption.dataset.layout);
      close();
    }
  });

  document.addEventListener('click', (event) => {
    if (!picker.contains(event.target)) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function setupNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupReveal() {
  const targets = document.querySelectorAll('.section-head, .feature, .podium-card, .mod-card, .panel-card, .download-card, .hero-stats');
  if (!targets.length) return;

  targets.forEach((element) => element.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: .1, rootMargin: '0px 0px -40px' });

  targets.forEach((element) => observer.observe(element));
}

function setupScrollEffects() {
  const progress = document.getElementById('scrollProgress');
  const toTop = document.getElementById('toTop');

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${percent}%`;
    if (toTop) toTop.classList.toggle('visible', window.scrollY > 480);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();

  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (!glow || reduced || coarse) return;

  let targetX = 0, targetY = 0, x = 0, y = 0, started = false;

  window.addEventListener('pointermove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    if (!started) {
      started = true;
      x = targetX;
      y = targetY;
      glow.classList.add('visible');
    }
  }, { passive: true });

  document.addEventListener('pointerleave', () => glow.classList.remove('visible'));

  const animate = () => {
    x += (targetX - x) * .12;
    y += (targetY - y) * .12;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    requestAnimationFrame(animate);
  };
  animate();
}

function setupTilt() {
  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.mod-card, .art-window').forEach((card) => {
    const isWindow = card.classList.contains('art-window');
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      if (isWindow) {
        card.style.setProperty('--rx', `${-2 + (0.5 - py) * 7}deg`);
        card.style.setProperty('--ry', `${3 + (px - 0.5) * 9}deg`);
      } else {
        card.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
        card.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
      }
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', isWindow ? '-2deg' : '0deg');
      card.style.setProperty('--ry', isWindow ? '3deg' : '0deg');
    });
  });
}

renderPodium();
renderMods();
loadChangelog();
setupDownload();
setupCopyRole();
setupThemes();
setupNav();
setupReveal();
setupScrollEffects();
setupCursorGlow();
setupTilt();
