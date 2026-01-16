# AICreateStudio-X - Claude Code プロジェクト設定

## プロジェクト概要

**AICreateStudio-X**は、ペルソナ・テーマ・記事・画像・プロンプトを自動生成するAI駆動型コンテンツ生成SaaSプラットフォームです。

- **ビジネスモデル**: 有料SaaS（Proプラン + Enterpriseプラン）
- **無料体験**: 14日間無料トライアル（クレジットカード必須）
- **ターゲットユーザー**: 個人ブロガー、マーケター、コンテンツクリエイター
- **重要な特徴**: ユーザー自身がOpenAI APIキーを設定・管理

## プロジェクト構造

```
AICreateStudio-X/
├── frontend/              # Next.js 14+ App Router (React 18 + TypeScript 5)
│   ├── src/
│   │   ├── app/          # Next.js App Router pages
│   │   ├── components/   # Reactコンポーネント (MUI v6)
│   │   ├── hooks/        # カスタムReact Hooks
│   │   ├── lib/          # ライブラリ設定 (Auth.js, Stripe等)
│   │   ├── store/        # Zustand状態管理
│   │   ├── types/        # TypeScript型定義
│   │   └── utils/        # ユーティリティ関数
│   ├── public/           # 静的ファイル
│   └── package.json
├── backend/              # Python 3.11+ FastAPI
│   ├── app/
│   │   ├── api/          # APIエンドポイント
│   │   ├── core/         # コア設定 (セキュリティ、暗号化等)
│   │   ├── models/       # Prismaモデル
│   │   ├── schemas/      # Pydanticスキーマ
│   │   ├── services/     # ビジネスロジック
│   │   └── main.py       # FastAPIアプリケーション
│   ├── prisma/
│   │   └── schema.prisma # データベーススキーマ
│   └── pyproject.toml
├── docs/
│   ├── requirements.md   # 要件定義書 (1,198行)
│   └── SCOPE_PROGRESS.md # 開発進捗管理
├── .eslintrc.json        # ESLint設定
├── .prettierrc.json      # Prettier設定
├── .editorconfig         # EditorConfig設定
└── tsconfig.json         # TypeScript設定
```

## 技術スタック

### フロントエンド
- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript 5
- **UIライブラリ**: MUI (Material-UI) v6
- **状態管理**: Zustand
- **データフェッチング**: React Query (TanStack Query)
- **認証**: Auth.js v5 (Google OAuth + Email/Password)
- **決済**: Stripe (4.1%手数料)

### バックエンド
- **フレームワーク**: FastAPI
- **言語**: Python 3.11+
- **ORM**: Prisma for Python
- **バリデーション**: Pydantic
- **データベース**: PostgreSQL (Neon推奨)

### インフラ
- **フロントエンド**: Vercel
- **バックエンド**: Google Cloud Run
- **ストレージ**: AWS S3 / Cloudinary
- **データベース**: Neon (PostgreSQL Serverless)

### 外部API (ユーザー側)
- **OpenAI API**: GPT-4o, GPT Image 1.5, Whisper (ユーザー自身が設定)
- **WordPress**: REST API + Application Password (オプション)

### 外部サービス (プラットフォーム側)
- **認証**: Google Cloud OAuth
- **決済**: Stripe
- **ホスティング**: Vercel + GCR

## 開発の重要な注意事項

### 1. OpenAI API管理
- **ユーザーが自分のOpenAI APIキーを設定**: プラットフォーム側はAPI利用料を負担しない
- **セキュリティ**: APIキーはAES-256-GCMで暗号化してDB保存
- **初回セットアップ**: 新規登録後、APIキー設定を必須化（設定なしでは生成機能が使えない）
- **アカウント設定ページ**: APIキー入力・接続テスト機能を実装

### 2. 画像生成制限
- **API制限**: GPT Image 1.5は1リクエストで1画像のみ生成
- **実装**: 2パターン生成のため、2回の並列リクエストを実行
- **非推奨API**: DALL-E 3は2026年5月12日に廃止予定のため使用しない

### 3. WordPress統合
- **テーマ対応**: 自動検出は不可、ユーザー手動選択またはプリセット方式
- **認証**: Application Password方式（Basic認証）
- **自動投稿**: 記事生成後、WordPressへSEO最適化して自動投稿

### 4. セキュリティ要件
- **CVSS 3.1準拠**: 脆弱性は深刻度7.0以上を優先修正
- **データ暗号化**: APIキー、パスワードは暗号化保存
- **認証**: JWT + HttpOnly Cookie
- **CORS**: フロントエンドドメインのみ許可

### 5. ページ構成
- **共通ページ**: 2ページ (P-001, P-002)
- **ユーザーページ**: 16ページ (U-001〜U-016)
- **管理者ページ**: 5ページ (A-001〜A-005)
- **MVPフェーズ**: 11ページから実装開始 (P-001, P-002, U-001, U-003, U-005, U-007, U-012, U-013, U-014, A-001, A-002)

## Claude Codeでの開発フロー

### Phase 1: 要件定義 [完了]
- ✅ 要件定義書作成 (`docs/requirements.md`)
- ✅ SCOPE_PROGRESS更新
- ✅ Lint設定作成
- ✅ CLAUDE.md生成

### Phase 2: Git/GitHub管理 [次のステップ]
- リポジトリ初期化
- GitHub連携
- ブランチ戦略設定

### Phase 3: フロントエンド基盤
- Next.js 14+ + TypeScript環境構築
- MUI v6統合
- Auth.js v5認証設定
- Zustand状態管理セットアップ

### Phase 4: ページ実装
- MVPページから順次実装
- バックエンドAPI統合
- テスト・デバッグ

## 開発時の参照ドキュメント

### 必読ドキュメント
1. **要件定義書**: `docs/requirements.md` - 全ページ仕様、データ構造、セキュリティ要件
2. **進捗管理**: `docs/SCOPE_PROGRESS.md` - ページ実装状態、優先順位

### 重要な成功指標
- **定量目標**: 50名以上の有料ユーザー、80%以上のリテンション率、95%以上のWordPress連携成功率
- **定性目標**: Gamma風のUI、チャット形式の楽しさ、ワンクリックWordPress投稿

## よくある質問

### Q: OpenAI APIの利用料は誰が負担するのか?
**A**: ユーザー自身が自分のOpenAI APIキーを設定し、利用料を負担します。プラットフォーム側は負担しません。

### Q: 無料プランはあるのか?
**A**: いいえ。14日間の無料トライアル（クレジットカード登録必須）の後、Proプランに自動移行します。

### Q: Enterpriseプランはどう実装するのか?
**A**: Enterpriseは「問い合わせ」扱いで、初期実装では実装しません。フォームのみ用意します。

### Q: テンプレート機能は実装するのか?
**A**: 現段階では延期しています。将来的に検討する可能性があります。

### Q: DALL-E 3は使えるのか?
**A**: 使えません。DALL-E 3は2026年5月12日に廃止予定です。GPT Image 1.5を使用してください。

## 次のアクション

Phase 2 (Git/GitHub管理) を開始する準備が整いました。Git管理エージェントを起動して、リポジトリのセットアップを開始してください。

---

**最終更新日**: 2026-01-16
**ドキュメントバージョン**: 1.0
**プロジェクトステータス**: Phase 1 完了 → Phase 2 準備完了
