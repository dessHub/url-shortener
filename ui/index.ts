export const Colors = {
    text: '#333333',
    white: '#ffffff',
    blue: '#0000FF',
    warning: '#91070e',
    primary: '#2DA5BB',
  } as const;
  
  export type Color = keyof typeof Colors;
  
  export const Ui = {
    borderRadius: 10,
    contentMaxWidth: 1100,
  };
  
  export const Typography = {
    fontPrimary: 'Work Sans, sans-serif',
    fontSecondary: 'Aleo, sans-serif',
  };
  
  export const Breakpoints = {
    xs: '576px',
    // => @media (min-width: 576px) { ... }
  
    sm: '640px',
    // => @media (min-width: 640px) { ... }
  
    md: '768px',
    // => @media (min-width: 768px) { ... }
  
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
  
    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
  
    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  };
  