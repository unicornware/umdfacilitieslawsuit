// global variables

// html elements
const ROOT = {
  app: document.getElementById('app')
};

// style
const BREAKPOINTS = {
  xsmall: 320,
  small: 480,
  schmedium: 768,
  medium: 980,
  large: 1200,
  xlarge: 1440
};

const COLORS = {
  dark: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, .65)'],
  med: ['rgba(155, 155, 155, 1)', 'rgba(222, 222, 222, 1)'],
  light: 'rgba(249, 250, 252, 1)',
  accent: 'rgba(229, 29, 55, 1)'
};

export { ROOT, BREAKPOINTS, COLORS };
