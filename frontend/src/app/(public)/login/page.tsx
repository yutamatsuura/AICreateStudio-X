'use client';

// ============================================
// P-001: ログインページ
// ============================================

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  Divider,
  Stack,
} from '@mui/material';
import { PublicLayout } from '@/layouts/PublicLayout';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'ログインに失敗しました'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (demoEmail: string, demoPassword: string) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  return (
    <PublicLayout>
      <Box>
        {/* タイトル */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, textAlign: 'center', mb: 1 }}
        >
          AICreateStudio-X
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4 }}
        >
          AI駆動型コンテンツ生成プラットフォーム
        </Typography>

        {/* エラー表示 */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* ログインフォーム */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="メールアドレス"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <TextField
              label="パスワード"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={isLoading}
              sx={{ mt: 2 }}
            >
              {isLoading ? 'ログイン中...' : 'ログイン'}
            </Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }}>または</Divider>

        {/* デモアカウント */}
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, textAlign: 'center' }}
          >
            デモアカウントでログイン
          </Typography>
          <Stack spacing={1}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleDemoLogin('demo@example.com', 'demo123')}
            >
              一般ユーザー（demo@example.com）
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleDemoLogin('admin@example.com', 'admin123')}
            >
              管理者（admin@example.com）
            </Button>
          </Stack>
        </Box>
      </Box>
    </PublicLayout>
  );
}
