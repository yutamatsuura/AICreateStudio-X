/**
 * Linear風 カラーパレット定義
 * Pattern 3: Linear-inspired Design
 */

import { PaletteOptions } from '@mui/material/styles';

export const palette: PaletteOptions = {
  mode: 'light',

  primary: {
    main: '#5E6AD2',      // Linear紫
    light: '#8A95E6',
    dark: '#4A55B8',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#8A8F98',      // グレー（サブカラー）
    light: '#A8ACB4',
    dark: '#6C717A',
    contrastText: '#FFFFFF',
  },

  error: {
    main: '#EF4444',
    light: '#F87171',
    dark: '#DC2626',
    contrastText: '#FFFFFF',
  },

  warning: {
    main: '#F59E0B',
    light: '#FBBF24',
    dark: '#D97706',
    contrastText: '#FFFFFF',
  },

  info: {
    main: '#3B82F6',
    light: '#60A5FA',
    dark: '#2563EB',
    contrastText: '#FFFFFF',
  },

  success: {
    main: '#10B981',
    light: '#34D399',
    dark: '#059669',
    contrastText: '#FFFFFF',
  },

  background: {
    default: '#FFFFFF',   // メイン背景
    paper: '#FFFFFF',     // カード・Paper背景
  },

  text: {
    primary: '#171717',   // メインテキスト
    secondary: '#8A8F98', // サブテキスト（グレー）
    disabled: '#D1D5DB',
  },

  divider: '#E5E7EB',

  // カスタムカラー（Linear風の追加色）
  grey: {
    50: '#FAFAFA',        // サイドバー背景
    100: '#F5F5F5',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#8A8F98',       // グレー
    600: '#6C717A',
    700: '#4B5563',
    800: '#374151',
    900: '#171717',       // テキスト
  },

  // アクションカラー
  action: {
    active: '#5E6AD2',
    hover: 'rgba(94, 106, 210, 0.08)',
    selected: 'rgba(94, 106, 210, 0.12)',
    disabled: '#D1D5DB',
    disabledBackground: '#F5F5F5',
    focus: 'rgba(94, 106, 210, 0.12)',
  },
};
