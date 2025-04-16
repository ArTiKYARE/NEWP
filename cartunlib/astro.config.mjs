import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/',  // Если сайт в корне домена
  output: 'static',  // TimeWeb поддерживает только статику
  trailingSlash: 'ignore',  // Автоматически обрабатывает слэши
});