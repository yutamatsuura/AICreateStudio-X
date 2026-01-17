'use client';

// ============================================
// AppProvider
// 全プロバイダーの統合
// ============================================

import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import ThemeRegistry from '@/components/ThemeRegistry';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeRegistry>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeRegistry>
  );
};
