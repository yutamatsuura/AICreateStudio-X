'use client';

// ============================================
// PublicLayout
// 公開ページ用レイアウト（Login等）
// ============================================

import React from 'react';
import { Box, Container } from '@mui/material';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
};
