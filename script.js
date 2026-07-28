// Lógica do site. Não precisa editar aqui — as informações que mudam
// (número de WhatsApp e lista de perfumes) ficam em config.js

// ---------- Animação do frasco no hero ----------
window.addEventListener('DOMContentLoaded', () => {
  const rect = document.getElementById('liquidRect');
  if (!rect) return;
  const targetHeight = 235; // ~78%
  let start = null;
  const duration = 1400;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const h = targetHeight * eased;
    rect.setAttribute('height', h);
    rect.setAttribute('y', 330 - h);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});

// ---------- Ícone do WhatsApp reutilizável ----------
const whatsIcon = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.4-1.42a9.9 9.9 0 0 0 4.64 1.18h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.3-1.63-.6-2.87-1.24-4.74-4.14-4.88-4.33-.14-.19-1.17-1.56-1.17-2.98s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.6 2.01 1.1 1 2.03 1.31 2.31 1.46.28.14.44.12.6-.07.17-.19.71-.82.9-1.1.19-.28.38-.23.64-.14.26.1 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/></svg>`;

// ---------- Links de WhatsApp ----------
function buildWhatsLink(perfume) {
  const msg = `Oi! Vi na sua vitrine e tenho interesse no ${perfume.brand} ${perfume.name} (R$ ${perfume.price}). Ainda está disponível?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// liga os botões que não são de um perfume específico (nav, hero, footer, flutuante) ao WhatsApp geral
document.querySelectorAll('.whats-link').forEach(el => {
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Oi! Vi sua vitrine de perfumes e queria saber mais :)')}`;
  el.target = '_blank';
  el.rel = 'noopener';
});

// ---------- Indicador visual de quanto resta no frasco ----------
function fillSVG(fill) {
  const h = Math.round(48 * (fill / 100));
  const y = 52 - h;
  return `
  <svg width="30" height="56" viewBox="0 0 30 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="4" width="22" height="48" rx="5" fill="none" stroke="rgba(27,20,15,0.35)" stroke-width="1.4"/>
    <rect x="4" y="${y}" width="22" height="${h}" rx="2" fill="#C17D3C" opacity="0.85"/>
    <rect x="10" y="0" width="10" height="6" rx="1.5" fill="rgba(27,20,15,0.35)"/>
  </svg>`;
}

// ---------- Renderiza os cards da vitrine ----------
const grid = document.getElementById('cardGrid');
let currentList = perfumes;

function renderCards(filter) {
  currentList = filter === 'Todos'
    ? perfumes
    : perfumes.filter(p => p.category && p.category.includes(filter));

  if (currentList.length === 0) {
    grid.innerHTML = `<p class="mono" style="grid-column:1/-1; color:rgba(27,20,15,0.55);">Nenhum perfume nessa categoria no momento.</p>`;
    return;
  }

  grid.innerHTML = currentList.map((p, i) => `
    <article class="card">
      <button class="card-more" data-index="${i}">Saber mais</button>
      <div class="card-top">
        <div class="fill-indicator">${fillSVG(p.fill)}</div>
        <div class="card-info">
          <div class="card-brand">${p.brand}</div>
          <div class="card-name">${p.name}</div>
          <div class="card-meta">${p.type} · ${p.fill}% cheio</div>
        </div>
      </div>
      <div class="card-badges">
        <span class="badge">${p.tag}</span>
      </div>
      <div class="card-bottom">
        <div class="price">R$ ${p.price}<span>preço combinado</span></div>
        <a href="${buildWhatsLink(p)}" target="_blank" rel="noopener" class="card-whats">${whatsIcon}WhatsApp</a>
      </div>
    </article>
  `).join('');
}

renderCards('Todos');

// ---------- Liga os botões de filtro ----------
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderCards(chip.textContent.trim());
  });
});

// ---------- Modal "Saber mais" ----------
const modal = document.getElementById('perfumeModal');

const imageIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.4"/><path d="M21 15.5l-5.2-5.2a1.5 1.5 0 0 0-2.1 0L4 20"/></svg>`;

function renderPhotoSection(p) {
  const images = p.images || [];

  if (images.length === 0) {
    return `
      <div class="modal-photo">
        <div class="modal-photo-main">
          <div class="modal-photo-placeholder">
            ${imageIcon}
            <span>Sem fotos ainda</span>
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="modal-photo">
      <div class="modal-photo-main"><img src="${images[0]}" alt="${p.brand} ${p.name}" id="modalMainImg"></div>
      ${images.length > 1 ? `
        <div class="modal-thumbs">
          ${images.map((src, i) => `
            <button class="modal-thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
              <img src="${src}" alt="">
            </button>
          `).join('')}
        </div>` : ''}
    </div>`;
}

// clique numa miniatura troca a foto principal (delegação de evento)
document.getElementById('modalPhoto').addEventListener('click', e => {
  const thumb = e.target.closest('.modal-thumb');
  if (!thumb) return;
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = thumb.dataset.src;
});

function tierList(label, notes) {
  return `
    <div class="pyramid-tier">
      <span class="tier-label">${label}</span>
      <ul>${(notes || []).map(n => `<li>${n}</li>`).join('')}</ul>
    </div>`;
}

function openModal(p) {
  document.getElementById('modalFill').innerHTML = fillSVG(p.fill);
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalMeta').textContent = `${p.type} · ${p.fill}% cheio`;
  document.getElementById('modalPhoto').innerHTML = renderPhotoSection(p);
  document.getElementById('modalDesc').textContent = p.description || '';

  document.getElementById('modalPyramid').innerHTML =
    tierList('Topo', p.notes && p.notes.topo) +
    tierList('Coração', p.notes && p.notes.coracao) +
    tierList('Fundo', p.notes && p.notes.fundo);

  document.getElementById('modalAccords').innerHTML = (p.accords || []).map(a => `
    <div class="accord-row">
      <span class="accord-name">${a.name}</span>
      <div class="accord-bar"><div class="accord-fill" style="width:${a.value}%"></div></div>
    </div>
  `).join('');

  const info = [
    ['Ocasião', p.occasion], ['Estação', p.season],
    ['Duração', p.longevity], ['Projeção', p.sillage]
  ].filter(([, v]) => v);
  document.getElementById('modalInfo').innerHTML = info.map(([label, value]) => `
    <div class="info-item">
      <div class="info-label">${label}</div>
      <div class="info-value">${value}</div>
    </div>
  `).join('');

  document.getElementById('modalPrice').innerHTML = `R$ ${p.price}<span>preço combinado</span>`;
  const modalWhats = document.getElementById('modalWhats');
  modalWhats.href = buildWhatsLink(p);
  modalWhats.innerHTML = `${whatsIcon}WhatsApp`;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

grid.addEventListener('click', e => {
  const btn = e.target.closest('.card-more');
  if (!btn) return;
  openModal(currentList[Number(btn.dataset.index)]);
});

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });