'use client';

// ============================================
// Sidebar
// サイドバーナビゲーション（Linear風: 極薄64px）
// ============================================

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Box,
  Tooltip,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ImageIcon from '@mui/icons-material/Image';
import CodeIcon from '@mui/icons-material/Code';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useAuth } from '@/contexts/AuthContext';

const DRAWER_WIDTH = 64;

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactElement;
  roles?: ('user' | 'admin')[];
}

const MENU_ITEMS: MenuItem[] = [
  {
    title: 'ダッシュボード',
    path: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'ペルソナ',
    path: '/persona',
    icon: <PersonIcon />,
  },
  {
    title: '記事生成',
    path: '/article',
    icon: <ArticleIcon />,
  },
  {
    title: '画像生成',
    path: '/image',
    icon: <ImageIcon />,
  },
  {
    title: 'プロンプト',
    path: '/prompt',
    icon: <CodeIcon />,
  },
  {
    title: 'プロフィール',
    path: '/profile',
    icon: <AccountCircleIcon />,
  },
  {
    title: '管理者',
    path: '/admin',
    icon: <AdminPanelSettingsIcon />,
    roles: ['admin'],
  },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen = false,
  onMobileClose,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const handleNavigate = (path: string) => {
    router.push(path);
    if (onMobileClose) {
      onMobileClose();
    }
  };

  // メニュー項目のフィルタリング（権限チェック）
  const filteredMenuItems = MENU_ITEMS.filter((item) => {
    if (!item.roles) return true;
    return user && item.roles.includes(user.role);
  });

  const drawerContent = (
    <Box>
      <Toolbar />
      <List
        sx={{
          px: 1,
          py: 2,
        }}
      >
        {filteredMenuItems.map((item) => {
          const isSelected = pathname === item.path;

          return (
            <Tooltip key={item.path} title={item.title} placement="right">
              <ListItemButton
                onClick={() => handleNavigate(item.path)}
                selected={isSelected}
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 1.5,
                  py: 1.5,
                  mb: 0.5,
                  borderRadius: 1.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: '#ffffff',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  },
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    color: isSelected ? '#ffffff' : 'text.secondary',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* モバイル用Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{
          keepMounted: true, // モバイルパフォーマンス向上
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            bgcolor: '#fafafa',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* デスクトップ用Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            bgcolor: '#fafafa',
            borderRight: '1px solid',
            borderColor: 'divider',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};
