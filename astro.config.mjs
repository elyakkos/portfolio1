import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Используем плагин Vite

export default defineConfig({
  site: 'https://elyakkos.github.io',
  base: '/portfolio1',
  vite: {
    plugins: [tailwindcss()], // Добавляем плагин здесь
  },
});