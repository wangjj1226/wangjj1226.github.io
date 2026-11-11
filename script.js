const navLinks = [...document.querySelectorAll('.section-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
function updateNavigation() {
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 150) current = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) current = sections.at(-1);
  for (const link of navLinks) {
    const active = link.hash === '#' + current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
}, {passive:true});
updateNavigation();

document.querySelectorAll('.citation-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    panel.hidden = !opening;
    button.querySelector('span').textContent = opening ? '−' : '+';
  });
});

document.querySelectorAll('.copy-citation').forEach(button => {
  button.addEventListener('click', async () => {
    const text = document.getElementById(button.dataset.citation).textContent;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied!';
      document.getElementById('status').textContent = 'Citation copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy citation'; }, 2200);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById(button.dataset.citation));
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = 'Selected — press Ctrl/Cmd+C';
      document.getElementById('status').textContent = 'Copy unavailable. Citation selected; press Control or Command and C.';
    }
  });
});

const dialog = document.querySelector('.figure-dialog');
const dialogImage = dialog.querySelector('.dialog-image');
document.querySelectorAll('[data-figure]').forEach(button => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.figure;
    dialogImage.alt = button.querySelector('img').alt;
    document.getElementById('figure-caption').textContent = button.dataset.caption;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
