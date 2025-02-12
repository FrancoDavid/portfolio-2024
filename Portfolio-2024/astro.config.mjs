import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import dotenv from 'dotenv';
import path from 'path';

const ENV = process.env.NODE_ENV || 'development'

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${ENV}`)
})

export default defineConfig({
  env: {
    API_URL: process.env.API_URL,
    GITHUB_SITE_URL: process.env.GITHUB_SITE_URL,
    LINKEDIN_SITE_URL: process.env.LINKEDIN_SITE_URL,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
  output: 'server',
  integrations: [react()]
});