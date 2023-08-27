import { MenuItemsType, DropdownMenuItemType } from '@plaxswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win (Coming Soon)'),
    href: '#',
    icon: 'Trophy',
    items: [
      {
        label: t('Prediction (Coming Soon)'),
        href: '#',
      },
      {
        label: t('Lottery (Coming Soon)'),
        href: '#',
      },
    ],
  },
  {
    label: t('IFO (Coming soon)'),
    href: '#',
    icon: 'Ifo',
    items:[]
  },
  
  {
    label: '',
    href: '#',
    icon: 'More',
    hideSubNav: true,
    items: [
      
      {
        label: t('Voting (Coming soon)'),
        href: '#',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      
      
      {
        label: t('Blog (Coming soon)'),
        href: '#',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://cryptopreneur-community-fund.gitbook.io/cryptopreneur.finance/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  
]

export default config
