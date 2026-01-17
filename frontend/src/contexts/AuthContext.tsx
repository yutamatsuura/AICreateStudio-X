'use client';

// ============================================
// 認証コンテキスト
// グローバル認証状態管理
// ============================================

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AuthContextType, User, LoginCredentials } from '@/types';
import {
  mockLogin,
  mockLogout,
  mockValidateSession,
} from '@/lib/auth/mockAuthService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初回マウント時にセッション復元を試みる
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof window === 'undefined') return;

        const sessionData = sessionStorage.getItem('auth_session');
        if (!sessionData) {
          setIsLoading(false);
          return;
        }

        const { accessToken } = JSON.parse(sessionData);
        const validatedUser = await mockValidateSession(accessToken);

        if (validatedUser) {
          setUser(validatedUser);
        } else {
          sessionStorage.removeItem('auth_session');
        }
      } catch (error) {
        console.error('Session restoration failed:', error);
        sessionStorage.removeItem('auth_session');
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  /**
   * ログイン
   */
  const login = async (email: string, password: string): Promise<void> => {
    const credentials: LoginCredentials = { email, password };
    const response = await mockLogin(credentials);

    // セッションストレージに保存
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(
        'auth_session',
        JSON.stringify({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
    }

    setUser(response.user);
  };

  /**
   * ログアウト
   */
  const logout = async (): Promise<void> => {
    await mockLogout();
    setUser(null);
  };

  /**
   * ユーザー情報更新
   */
  const updateUser = (updatedUser: User): void => {
    setUser(updatedUser);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * useAuth フック
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
