export const injectStyle = (style) => {
  const styleElement = document.createElement('style');
  let styleSheet = null;
  document.head.appendChild(styleElement);
  styleSheet = styleElement.sheet;
  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

const slideInFromTop = `
  @keyframes slideInFromTop {
    0% {transform: translateY(-100%);}
    100% {transform: translateY(0%);}
  }
`;

const fadeIn = `
  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`;

export const addAnimations = () => {
  injectStyle(slideInFromTop);
  injectStyle(fadeIn);
};
