import { create } from 'storybook/theming/create';
import CustomBrand from './CustomBrand'; // Import the custom component
import React from 'react';

export default create({
  base: 'light',

  // === Typography ===
  fontBase: '"Nunito", sans-serif',
  fontCode: 'monospace',

  // === Brand ===
  brandTitle: 'InsightBoard UI',
  brandUrl: 'https://insightboard.com',
  brandImage: '/brand-logo-ui.png',
  brandTarget: '_self',

  // === Solid Colors ===
  colorPrimary: '#6D28D9',
  colorSecondary: '#374151',

  // === UI ===
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#f9fafb',
  appBorderColor: '#f3f4f6',
  appBorderRadius: 8,

  // === Text ===
  textColor: '#171717',
  textInverseColor: '#ffffff',

  // === Toolbar ===
  barBg: '#ffffff',
  barTextColor: '#6b7280',
  barHoverColor: '#374151',
  barSelectedColor: '#6D28D9',

  // === Forms ===
  inputBg: '#ffffff',
  inputBorder: '#f3f4f6',
  inputTextColor: '#171717',
  inputBorderRadius: 6,
});