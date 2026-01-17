'use client';

// ============================================
// U-001: ダッシュボード
// ============================================

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import CodeIcon from '@mui/icons-material/Code';
import TopicIcon from '@mui/icons-material/Topic';
import { MainLayout } from '@/layouts/MainLayout';
import { ProtectedRoute } from '@/components/common/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';

const QUICK_ACTIONS = [
  {
    title: 'ペルソナ生成',
    description: 'AIとの会話でペルソナを作成',
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    color: '#5E6AD2',
    path: '/persona',
  },
  {
    title: 'テーマ生成',
    description: 'ファイルやリンクからテーマ抽出',
    icon: <TopicIcon sx={{ fontSize: 40 }} />,
    color: '#26B5CE',
    path: '/theme',
  },
  {
    title: '記事生成',
    description: 'SEO最適化された記事作成',
    icon: <ArticleIcon sx={{ fontSize: 40 }} />,
    color: '#F2994A',
    path: '/article',
  },
  {
    title: '画像生成',
    description: 'AI会話で2パターン画像生成',
    icon: <ImageIcon sx={{ fontSize: 40 }} />,
    color: '#9B51E0',
    path: '/image',
  },
  {
    title: 'プロンプト生成',
    description: 'カスタムプロンプト最適化',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    color: '#27AE60',
    path: '/prompt',
  },
];

function DashboardContent() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <Box>
        {/* ヘッダー */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            ダッシュボード
          </Typography>
          <Typography variant="body1" color="text.secondary">
            ようこそ、{user?.name}さん
          </Typography>
        </Box>

        {/* サブスクリプション状態 */}
        <Card sx={{ mb: 4, bgcolor: 'primary.main', color: 'white' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Proプラン
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  トライアル残り: 14日
                </Typography>
              </Box>
              <Chip
                label="アクティブ"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* クイックアクション */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            クイックアクション
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 2,
            }}
          >
            {QUICK_ACTIONS.map((action) => (
              <Box key={action.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        color: action.color,
                      }}
                    >
                      {action.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {action.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{ color: action.color }}>
                      開始する
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* 最近のプロジェクト（モックデータ） */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            最近のプロジェクト
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                プロジェクトがまだありません。
                <br />
                クイックアクションから新しいプロジェクトを作成しましょう。
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
