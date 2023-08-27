import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Cryptopreneur Community',
  description:
    'The most popular AMM on BSC by user count! Earn CCF through yield farming or win it in the Lottery, then stake it in CCF Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Cryptopreneur Community), NFTs, and more, on a platform you can trust.',
  image: 'https://cryptopreneur.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Cryptopreneur Community')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Cryptopreneur Community')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Cryptopreneur Community')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Cryptopreneur Community')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Cryptopreneur Community')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Cryptopreneur Community')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Cryptopreneur Community')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Cryptopreneur Community')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Cryptopreneur Community')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Cryptopreneur Community')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Cryptopreneur Community')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Cryptopreneur Community')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Cryptopreneur Community')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Cryptopreneur Community')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Cryptopreneur Community')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Cryptopreneur Community')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Cryptopreneur Community')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Cryptopreneur Community')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Cryptopreneur Community Info & Analytics')}`,
        description: 'View statistics for Cryptopreneur Community exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Cryptopreneur Community Info & Analytics')}`,
        description: 'View statistics for Cryptopreneur Community exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Cryptopreneur Community Info & Analytics')}`,
        description: 'View statistics for Cryptopreneur Community exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Cryptopreneur Community')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Cryptopreneur Community')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Cryptopreneur Community')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Cryptopreneur Community')}`,
      }
    default:
      return null
  }
}
