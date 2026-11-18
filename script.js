// Filter cards by their data-kind attribute; update the selected button.
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-kind]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  const category = button.dataset.filter;
  projects.forEach(project => { project.hidden = category !== 'all' && project.dataset.kind !== category; });
}));
