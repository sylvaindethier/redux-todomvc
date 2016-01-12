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

export function store(namespace, data) {
  if (arguments.length > 2) {
    return window.localStorage.setItem(namespace, JSON.stringify(data));
  }

  return JSON.parse(window.localStorage.getItem(namespace));
}
