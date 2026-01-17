// ============================================
// モック認証サービス
// デモアカウント:
// - demo@example.com / demo123 (user)
// - admin@example.com / admin123 (admin)
// ============================================

import type { User, LoginCredentials, AuthResponse } from '@/types';

// モックユーザーデータベース
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'user',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// モックパスワード（本番では絶対にこのような実装をしない）
const MOCK_PASSWORDS: Record<string, string> = {
  'demo@example.com': 'demo123',
  'admin@example.com': 'admin123',
};

// モック遅延（実際のAPIを模倣）
const mockDelay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// モックトークン生成
const generateMockToken = (userId: string): string => {
  return `mock_token_${userId}_${Date.now()}`;
};

/**
 * モックログイン
 */
export const mockLogin = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  await mockDelay();

  const user = MOCK_USERS.find((u) => u.email === credentials.email);

  if (!user || MOCK_PASSWORDS[credentials.email] !== credentials.password) {
    throw new Error('メールアドレスまたはパスワードが正しくありません');
  }

  return {
    user,
    accessToken: generateMockToken(user.id),
    refreshToken: generateMockToken(user.id),
  };
};

/**
 * モックログアウト
 */
export const mockLogout = async (): Promise<void> => {
  await mockDelay(200);
  // セッションストレージクリア
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('auth_session');
  }
};

/**
 * モックセッション検証
 */
export const mockValidateSession = async (
  token: string
): Promise<User | null> => {
  await mockDelay(200);

  // トークンからユーザーIDを抽出（モック実装）
  const match = token.match(/mock_token_(\d+)_/);
  if (!match) return null;

  const userId = match[1];
  return MOCK_USERS.find((u) => u.id === userId) || null;
};

/**
 * モックトークンリフレッシュ
 */
export const mockRefreshToken = async (
  refreshToken: string
): Promise<{ accessToken: string; refreshToken: string }> => {
  await mockDelay(200);

  const match = refreshToken.match(/mock_token_(\d+)_/);
  if (!match) {
    throw new Error('Invalid refresh token');
  }

  const userId = match[1];

  return {
    accessToken: generateMockToken(userId),
    refreshToken: generateMockToken(userId),
  };
};
