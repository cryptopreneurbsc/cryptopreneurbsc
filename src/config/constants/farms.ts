import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'CCF',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xc97AFd148D0481D527dDB4b61978DaFB9f215D5c',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'CCF-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x716fD1dC99FB43dE86F24bE0aCe06d84599CBA25',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf4BbEf4DF031D21a6296905A9522C1204d217A4E',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 3,
    lpSymbol: 'CRF-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8C5cd878Bc279666958D1AE192E8847c5b8DD589',
    },
    token: serializedTokens.crf,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcc8E898Afebf2692587A28FDB933394a231327D7',
    },
    token: serializedTokens.pancake,
    quoteToken: serializedTokens.busd,
  },
  
  {
    pid: 5,
    lpSymbol: 'CRF-BIDR LP',
    lpAddresses: {
      97: '',
      56: '0xE8c61a4301858b87fd4Ed194406c5320188720D5',
    },
    token: serializedTokens.crf,
    quoteToken: serializedTokens.bidr,
  },
  
  {
    pid: 6,
    lpSymbol: 'HWC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9ae7567b496fa0f5da4b6e84da6298651281ee6d',
    },
    token: serializedTokens.hwc,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 7,
    lpSymbol: 'CREVO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe18e6c40dee0714aa9ede4d785c01860d194d75e',
    },
    token: serializedTokens.crevo,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 8,
    lpSymbol: 'BIDR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAe43F05AD6059Cad37E7a0aA5Aa39e63334F940B',
    },
    token: serializedTokens.bidr,
    quoteToken: serializedTokens.wbnb,
  }
  ,
  {
    pid: 9,
    lpSymbol: 'CPump-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x481Ed673660bA9a1D3f0b0B0C5665691eF441888',
    },
    token: serializedTokens.cpump,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 10,
    lpSymbol: 'VITSCO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xD5B813E6473A425654D2A3391654E983644F25A5',
    },
    token: serializedTokens.vitsco,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 11,
    lpSymbol: 'TRON-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x500a94EA82568e2987A300BBe76dBE4cE3266e30',
    },
    token: serializedTokens.trx,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 12,
    lpSymbol: 'BSW-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7764B0A29758422064d31D6D1c378D5b2eE78fFF',
    },
    token: serializedTokens.bsw,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 13,
    lpSymbol: 'MATIC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xB3E2d97A89cE59dD4E6B1D2278baeaEB57f683D2',
    },
    token: serializedTokens.matic,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 14,
    lpSymbol: 'HWC-CCF LP',
    lpAddresses: {
      97: '',
      56: '0xfeb8A95FC6C42925F6006335ca72d2Fe57F7B5EE',
    },
    token: serializedTokens.hwc,
    quoteToken: serializedTokens.cake,
  }
  ,
  {
    pid: 15,
    lpSymbol: 'LGOLD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc7cDe32B4211A2Fd1C5cd18A2508868A864a8eB7',
    },
    token: serializedTokens.lgold,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 16,
    lpSymbol: 'RC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc477bfe761C81ee42633a31F655175a06d5144D9',
    },
    token: serializedTokens.rc,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 17,
    lpSymbol: 'BANANA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc6E5B4a2A93f0e4ffA4677A9646A525aBF52937f',
    },
    token: serializedTokens.banana,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 18,
    lpSymbol: 'HWF-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x99EBEb517f8DE6Bb8E9cEa215461963814963284',
    },
    token: serializedTokens.hwf,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 19,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x44eCFB8333Cfa790154D97BcAC7229c21edBD267',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 20,
    lpSymbol: 'IDRT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x651a3f4383f2BAA41a6C8581dB9545932eD3BAaE',
    },
    token: serializedTokens.idrt,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 21,
    lpSymbol: 'FREE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4930bCE6D90C4afC5f952b47d2A7a91c807afA4B',
    },
    token: serializedTokens.free,
    quoteToken: serializedTokens.busd,
  }
  ,
  {
    pid: 22,
    lpSymbol: 'BIDR-IDRT LP',
    lpAddresses: {
      97: '',
      56: '0x672dd1AAe933AfEc719F0872c2f317f81EE32cBD',
    },
    token: serializedTokens.bidr,
    quoteToken: serializedTokens.idrt,
  }
]

export default farms
