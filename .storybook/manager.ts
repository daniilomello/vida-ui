import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: ' Vida',
    brandUrl: 'https://vida.danilabs.com.br/',
    brandImage: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><text x='0' y='55' font-family='Inter, Helvetica, Arial, sans-serif' font-size='34' font-weight='600' fill='white'>vida</text></svg>",
  }),
});
