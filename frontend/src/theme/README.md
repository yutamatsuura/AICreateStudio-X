# Linear風 MUI v7 テーマ

このディレクトリには、AICreateStudio-Xプロジェクトで使用するLinear風のMUI v7テーマが実装されています。

## 📁 ファイル構成

```
src/theme/
├── index.ts          # テーマのエントリーポイント
├── palette.ts        # カラーパレット定義
├── typography.ts     # タイポグラフィ設定
├── components.ts     # MUIコンポーネントのカスタマイズ
└── README.md         # このファイル
```

## 🎨 デザインの特徴

### Pattern 3: Linear風デザイン

- **レイアウト**: トップバー固定（黒背景）+ 極薄サイドバー（64px）+ テーブルリスト型
- **配色**:
  - 背景: `#FFFFFF`
  - トップバー: `#000000`
  - サイドバー: `#FAFAFA`
  - プライマリ: `#5E6AD2`（Linear紫）
  - テキスト: `#171717`
  - グレー: `#8A8F98`
- **特徴**:
  - ミニマルで効率的なデザイン
  - キーボードショートカット表示（将来実装）
  - テーブルリスト型のプロジェクト一覧
  - クリーンで読みやすいタイポグラフィ

## 🚀 使用方法

### 基本的な使い方

```tsx
// App.tsx または main.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* アプリケーションコンポーネント */}
    </ThemeProvider>
  );
}
```

### Next.js 14+ App Routerでの使用

```tsx
// app/layout.tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
```

## 🎨 カラーパレット

### プライマリカラー
- Main: `#5E6AD2`（Linear紫）
- Light: `#8A95E6`
- Dark: `#4A55B8`

### グレースケール
- `grey[50]`: `#FAFAFA`（サイドバー背景）
- `grey[500]`: `#8A8F98`（サブテキスト）
- `grey[900]`: `#171717`（メインテキスト）

### 背景
- Default: `#FFFFFF`
- Paper: `#FFFFFF`

## 📝 カスタマイズ済みコンポーネント

以下のMUIコンポーネントがLinear風にカスタマイズされています：

- ✅ AppBar（トップバー）: 黒背景、シャドウなし
- ✅ Drawer（サイドバー）: `#FAFAFA`背景
- ✅ Button: 角丸6px、シャドウなし
- ✅ Paper: 角丸8px、シャドウ最小限
- ✅ Card: ホバーエフェクト付き
- ✅ TextField: 角丸6px、フォーカス時紫ボーダー
- ✅ ListItemButton: サイドバー用スタイル
- ✅ Table: テーブルリスト型スタイル
- ✅ Dialog: 角丸12px
- ✅ Tab: アンダーライン紫

## 🔧 型定義

TypeScriptで完全な型安全性を提供します：

```tsx
import { AppTheme } from './theme';

// テーマの型を使用
function MyComponent({ theme }: { theme: AppTheme }) {
  return <div style={{ color: theme.palette.primary.main }}>Hello</div>;
}
```

## 📐 レイアウト設計

### トップバー（AppBar）
- 固定位置（`position: fixed`）
- 高さ: 64px（デフォルトToolbar）
- 背景: `#000000`
- 文字色: `#FFFFFF`

### サイドバー（Drawer）
- 幅: 64px（折りたたみ時）→ 240px（展開時）
- 背景: `#FAFAFA`
- ボーダー: `1px solid #E5E7EB`

### メインコンテンツ
- 背景: `#FFFFFF`
- パディング: `24px`（推奨）

## ⚙️ ブレークポイント

```ts
xs: 0px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

## 🎯 使用例

### Buttonの使用例

```tsx
<Button variant="contained" color="primary">
  プライマリボタン
</Button>

<Button variant="outlined">
  アウトラインボタン
</Button>
```

### Cardの使用例

```tsx
<Card>
  <CardContent>
    <Typography variant="h5">カードタイトル</Typography>
    <Typography variant="body2" color="text.secondary">
      サブテキスト
    </Typography>
  </CardContent>
</Card>
```

### Tableの使用例（Linear風）

```tsx
<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>プロジェクト名</TableCell>
        <TableCell>ステータス</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow hover>
        <TableCell>AICreateStudio-X</TableCell>
        <TableCell>進行中</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
```

## 🌟 ベストプラクティス

1. **CssBaselineを必ず使用**: グローバルスタイルのリセットに必要
2. **カラーは直接指定せず、theme経由で参照**: `theme.palette.primary.main`
3. **Boxコンポーネントのsx propを活用**: スタイル指定に便利
4. **レスポンシブデザイン**: ブレークポイントを活用

```tsx
<Box
  sx={{
    p: { xs: 2, md: 3 },  // xs: 16px, md: 24px
    bgcolor: 'background.default',
  }}
>
  {/* コンテンツ */}
</Box>
```

## 📚 参考リンク

- [MUI v7 Documentation](https://mui.com/)
- [Linear Design](https://linear.app/)
- [Material Design 3](https://m3.material.io/)

---

**最終更新日**: 2026-01-17
**テーマバージョン**: 1.0
**MUIバージョン**: v7
