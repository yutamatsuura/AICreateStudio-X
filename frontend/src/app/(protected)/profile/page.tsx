'use client';

// ============================================
// プロフィールページ
// ============================================

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import { MainLayout } from '@/layouts/MainLayout';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';

function ProfileContent() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <MainLayout>
      <Box>
        {/* ヘッダー */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          プロフィール
        </Typography>

        {/* ユーザー情報 */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              基本情報
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3,
              }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  名前
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {user.name}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  メールアドレス
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {user.email}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  権限
                </Typography>
                <Chip
                  label={user.role === 'admin' ? '管理者' : '一般ユーザー'}
                  color={user.role === 'admin' ? 'error' : 'primary'}
                  size="small"
                />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  登録日
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {new Date(user.createdAt).toLocaleDateString('ja-JP')}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* サブスクリプション情報 */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              サブスクリプション
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3,
              }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  プラン
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Proプラン（トライアル）
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  トライアル残り
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  14日
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Divider sx={{ my: 3 }} />

        {/* API設定（モック） */}
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              API設定
            </Typography>
            <Typography variant="body2" color="text.secondary">
              OpenAI APIキーの設定は、アカウント設定ページで行えます。
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
