/**
 * Linear風 MUI v7 テーマ
 * Pattern 3: Linear-inspired Design
 *
 * 特徴:
 * - トップバー固定（黒背景）
 * - 極薄サイドバー（64px拡張可能）
 * - テーブルリスト型のプロジェクト一覧
 * - ミニマルで効率的なデザイン
 * - プライマリカラー: #5E6AD2（Linear紫）
 */

import { createTheme, ThemeOptions } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

const themeOptions: ThemeOptions = {
  palette,
  typography,
  components,

  // スペーシング設定（8pxベース）
  spacing: 8,

  // シェイプ設定（角丸）
  shape: {
    borderRadius: 6,
  },

  // ブレークポイント設定
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  // z-index設定
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },

  // トランジション設定
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

// テーマの作成
export const theme = createTheme(themeOptions);

// TypeScript型定義のエクスポート
export type AppTheme = typeof theme;

// デフォルトエクスポート
export default theme;
