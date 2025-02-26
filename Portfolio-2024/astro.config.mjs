import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dotenv from 'dotenv';
import path from 'path';
import vercel from '@astrojs/vercel'

const ENV = process.env.NODE_ENV || 'development'

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${ENV}`)
})

export default defineConfig({
  adapter: vercel(),
  // adapter: vercel({ entrypoint: "server" }),
  // adapter: node({ mode: "standalone" }),
  output: 'server',
  integrations: [react()]
});