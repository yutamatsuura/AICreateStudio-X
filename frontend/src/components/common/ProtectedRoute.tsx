'use client';

// ============================================
// ProtectedRoute
// 認証が必要なページを保護
// ============================================

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Box, CircularProgress } from '@mui/material';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      // 未認証の場合はログインページへ
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      // 管理者権限が必要な場合のチェック
      if (requireAdmin && user?.role !== 'admin') {
        router.push('/dashboard');
      }
    }
  }, [isLoading, isAuthenticated, user, requireAdmin, router]);

  // ローディング中
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // 認証確認中（リダイレクト待ち）
  if (!isAuthenticated || (requireAdmin && user?.role !== 'admin')) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <>{children}</>;
};
