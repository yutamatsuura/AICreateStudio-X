/**
 * Linear風 MUIコンポーネントカスタマイズ
 * ミニマルで洗練されたコンポーネントスタイル
 */

import { Components, Theme } from '@mui/material/styles';

export const components: Components<Omit<Theme, 'components'>> = {
  // AppBar（トップバー）
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      },
    },
    defaultProps: {
      elevation: 0,
    },
  },

  // Drawer（サイドバー）
  MuiDrawer: {
    styleOverrides: {
      paper: {
        backgroundColor: '#FAFAFA',
        borderRight: '1px solid #E5E7EB',
        boxShadow: 'none',
      },
    },
  },

  // Button
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '0.875rem',
        padding: '8px 16px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      contained: {
        '&:hover': {
          boxShadow: 'none',
        },
      },
      outlined: {
        borderColor: '#E5E7EB',
        '&:hover': {
          borderColor: '#5E6AD2',
          backgroundColor: 'rgba(94, 106, 210, 0.04)',
        },
      },
    },
    defaultProps: {
      disableElevation: true,
    },
  },

  // Paper
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      outlined: {
        borderColor: '#E5E7EB',
      },
    },
    defaultProps: {
      elevation: 0,
    },
  },

  // Card
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        border: '1px solid #E5E7EB',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },

  // TextField（Input）
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 6,
          '& fieldset': {
            borderColor: '#E5E7EB',
          },
          '&:hover fieldset': {
            borderColor: '#8A8F98',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#5E6AD2',
            borderWidth: 2,
          },
        },
      },
    },
    defaultProps: {
      variant: 'outlined',
      size: 'small',
    },
  },

  // OutlinedInput
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#8A8F98',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#5E6AD2',
          borderWidth: 2,
        },
      },
      notchedOutline: {
        borderColor: '#E5E7EB',
      },
    },
  },

  // List（サイドバー用）
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        margin: '2px 8px',
        '&:hover': {
          backgroundColor: 'rgba(94, 106, 210, 0.08)',
        },
        '&.Mui-selected': {
          backgroundColor: 'rgba(94, 106, 210, 0.12)',
          color: '#5E6AD2',
          '&:hover': {
            backgroundColor: 'rgba(94, 106, 210, 0.16)',
          },
        },
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
        color: '#8A8F98',
        '.Mui-selected &': {
          color: '#5E6AD2',
        },
      },
    },
  },

  // Chip
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        fontWeight: 500,
        fontSize: '0.75rem',
      },
      outlined: {
        borderColor: '#E5E7EB',
      },
    },
  },

  // Table（Linearのテーブルリスト風）
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: '1px solid #E5E7EB',
        padding: '12px 16px',
        fontSize: '0.875rem',
      },
      head: {
        fontWeight: 600,
        color: '#8A8F98',
        backgroundColor: '#FAFAFA',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      },
    },
  },

  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(94, 106, 210, 0.04)',
        },
      },
    },
  },

  // Dialog
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },

  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: '1.25rem',
        fontWeight: 600,
        padding: '24px 24px 16px',
      },
    },
  },

  // Tooltip
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: '#171717',
        fontSize: '0.75rem',
        borderRadius: 6,
        padding: '6px 12px',
      },
      arrow: {
        color: '#171717',
      },
    },
  },

  // Switch
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 8,
      },
      track: {
        borderRadius: 11,
        backgroundColor: '#E5E7EB',
      },
      thumb: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },

  // Divider
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: '#E5E7EB',
      },
    },
  },

  // Avatar
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: '#5E6AD2',
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    },
  },

  // Badge
  MuiBadge: {
    styleOverrides: {
      badge: {
        fontSize: '0.625rem',
        fontWeight: 600,
        height: 18,
        minWidth: 18,
        borderRadius: 9,
      },
    },
  },

  // Tab
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '0.875rem',
        minHeight: 48,
        '&.Mui-selected': {
          color: '#5E6AD2',
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      indicator: {
        backgroundColor: '#5E6AD2',
        height: 2,
      },
    },
  },
};
