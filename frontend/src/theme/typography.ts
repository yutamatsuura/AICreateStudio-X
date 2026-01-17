/**
 * Linear風 タイポグラフィ設定
 * クリーンで読みやすいフォント設定
 */

import { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

  // フォントサイズの基準
  fontSize: 14,

  // フォントウェイト
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,

  // 見出し
  h1: {
    fontSize: '2.5rem',      // 40px
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: '#171717',
  },

  h2: {
    fontSize: '2rem',        // 32px
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
    color: '#171717',
  },

  h3: {
    fontSize: '1.5rem',      // 24px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: '#171717',
  },

  h4: {
    fontSize: '1.25rem',     // 20px
    fontWeight: 600,
    lineHeight: 1.4,
    color: '#171717',
  },

  h5: {
    fontSize: '1.125rem',    // 18px
    fontWeight: 600,
    lineHeight: 1.5,
    color: '#171717',
  },

  h6: {
    fontSize: '1rem',        // 16px
    fontWeight: 600,
    lineHeight: 1.5,
    color: '#171717',
  },

  // 本文
  body1: {
    fontSize: '0.875rem',    // 14px
    lineHeight: 1.5,
    color: '#171717',
  },

  body2: {
    fontSize: '0.8125rem',   // 13px
    lineHeight: 1.5,
    color: '#8A8F98',
  },

  // UI要素
  button: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 500,
    lineHeight: 1.5,
    textTransform: 'none',   // Linearはテキスト変換なし
    letterSpacing: '0.01em',
  },

  caption: {
    fontSize: '0.75rem',     // 12px
    lineHeight: 1.5,
    color: '#8A8F98',
  },

  overline: {
    fontSize: '0.75rem',     // 12px
    fontWeight: 600,
    lineHeight: 2,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#8A8F98',
  },

  subtitle1: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#171717',
  },

  subtitle2: {
    fontSize: '0.8125rem',   // 13px
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#8A8F98',
  },
};
