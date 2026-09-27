const html     = document.documentElement;
const btnTheme = document.getElementById('btn-theme');

const saved      = localStorage.getItem('theme');
const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initTheme  = saved || (preferDark ? 'dark' : 'light');

html.setAttribute('data-theme', initTheme);
if (btnTheme) btnTheme.textContent = initTheme === 'dark' ? '☀️' : '🌙';

if (btnTheme) {
  btnTheme.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btnTheme.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

const btnHam  = document.getElementById('btn-hamburger');
const navMenu = document.getElementById('nav-links');

if (btnHam && navMenu) {
  btnHam.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    btnHam.classList.toggle('open', isOpen);
    btnHam.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      btnHam.classList.remove('open');
      btnHam.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

function updateActive() {
  const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;

  let current = '';
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top <= 72) current = sec.id;
  });

  if (atBottom && sections.length) {
    current = sections[sections.length - 1].id;
  }

  navLinks.forEach(link => {
    const id = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', id === current);
  });
}

window.addEventListener('scroll', updateActive, { passive: true });
updateActive();

const backTop = document.getElementById('back-top');

if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 280);
  }, { passive: true });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const skillGrid = document.getElementById('skill-list');
const searchBox = document.getElementById('cari-skill');

const skills = [
  { nama: 'HTML & CSS',          level: 'Mahir',    persen: 85 },
  { nama: 'PHP & CodeIgniter',   level: 'Menengah', persen: 70 },
  { nama: 'JavaScript & Vue.js', level: 'Menengah', persen: 65 },
  { nama: 'PostgreSQL',          level: 'Menengah', persen: 60 },
  { nama: 'Git',                 level: 'Menengah', persen: 68 },
  { nama: 'Linux',               level: 'Pemula',   persen: 45 },
];

function renderSkills(keyword) {
  if (!skillGrid) return;
  const q    = (keyword || '').toLowerCase();
  const list = q ? skills.filter(s => s.nama.toLowerCase().includes(q)) : skills;

  if (!list.length) {
    skillGrid.innerHTML = '<p class="skill-empty">Skill tidak ditemukan.</p>';
    return;
  }

  skillGrid.innerHTML = list.map(s => `
    <div class="skill-card">
      <div class="skill-name">${s.nama}</div>
      <div class="skill-level">${s.level} — ${s.persen}%</div>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-w="${s.persen}"></div>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    skillGrid.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });
  });
}

if (skillGrid) renderSkills();
if (searchBox) searchBox.addEventListener('input', () => renderSkills(searchBox.value));

const hobiData = {
  sepeda: {
    judul: '🚲 Bersepeda',
    teks: 'Saya suka bersepeda dari awal SMP. Saya memiliki sepeda fixie dan selalu bersepeda pada sore atau malam hari jika tidak ada kegiatan ataupun tugas.'
  },
  manhwa: {
    judul: '📖 Membaca Manhwa',
    teks: 'Saya suka membaca manhwa, yaitu sebuah komik ciptaan dari Korea. Manhwa yang saya suka antara lain Lookism, Tower of God, Archmage Restaurant, dan Real Estate Developer.'
  }
};

const overlay    = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalBody  = document.getElementById('modal-body');
const btnClose   = document.getElementById('btn-close');

function bukaModal(key) {
  const data = hobiData[key];
  if (!data || !overlay) return;
  modalTitle.textContent = data.judul;
  modalBody.textContent  = data.teks;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
  btnClose.focus();
}

function tutupModal() {
  if (!overlay) return;
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

document.querySelectorAll('.btn-lihat').forEach(btn => {
  btn.addEventListener('click', () => bukaModal(btn.dataset.hobi));
});

if (btnClose) btnClose.addEventListener('click', tutupModal);

if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) tutupModal();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') tutupModal();
});

const tahunEl = document.getElementById('tahun');
if (tahunEl) tahunEl.textContent = new Date().getFullYear();
