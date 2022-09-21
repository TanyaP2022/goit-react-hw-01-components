
export function randomColor() {
  const colors = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * 16)];
  }
  return {
    background: color,
  };
}