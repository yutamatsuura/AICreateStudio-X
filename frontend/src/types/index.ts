// ============================================
// AICreateStudio-X - 型定義の単一真実源
// ============================================

// ============================================
// ユーザー関連型
// ============================================

export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// 認証関連型
// ============================================

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: User) => void;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// ============================================
// セッション関連型
// ============================================

export interface Session {
  user: User;
  accessToken: string;
  expiresAt: string;
}

// ============================================
// API関連型
// ============================================

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  success: boolean;
}

// ============================================
// プロジェクト関連型（将来拡張用・最小限）
// ============================================

export type ProjectType = 'persona' | 'theme' | 'article' | 'image' | 'prompt';

export interface Project {
  id: string;
  userId: string;
  type: ProjectType;
  title: string;
  createdAt: string;
  updatedAt: string;
}
