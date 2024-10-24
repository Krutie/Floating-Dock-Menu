export const scalefactor = (el, x, y) => {
  let rect;
  if (el.getBoundingClientRect === undefined) {
    // SVG Template Ref
    rect = el.$el.getBoundingClientRect();
  } else {
    // Div Template Ref
    rect = el.getBoundingClientRect();
  }

  let dx = Math.abs(x - (rect.left + rect.right) / 2.0);
  let dy = Math.abs(y - (rect.top + rect.bottom) / 2.0);
  let dist = Math.sqrt(dx ** 2 + dy ** 2);
  return Math.min(Math.max(1.0, 2 - (dist - 20) / 65), 2);
};
