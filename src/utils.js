export function uuid() {
  const calc = { 12: () => 4, 16: v => (v & 3 | 8) };
  let value = '';

  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      value += '-';
    }
    value += (calc[i] ? calc[i](random) : random).toString(16);
  }

  return value;
}

const namespace = 'todoapp';
export function store(data) {
  if (!arguments.length) {
    // no data provided, get the item
    return JSON.parse(window.localStorage.getItem(namespace));
  }

  window.localStorage.setItem(namespace, JSON.stringify(data));
}
