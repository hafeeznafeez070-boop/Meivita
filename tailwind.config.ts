import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
        mono: ['Rubik', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'meivita-green': '#7AB02A',
        'meivita-green-dark': '#16320A',
        'meivita-green-light': '#D7E8C3'
      }
    }
  },
  safelist: ['drop-shadow-xl', 'p-[100px]', 'p-[50px]']
};
