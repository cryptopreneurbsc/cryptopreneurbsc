import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x9066FDd1F40E7FDEB51560AB3E1D5a29d95F5392',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.3',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 1,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xcece7e90a5981054c9f278b20dae08c224a7eb0c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 2,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x56308b80a28980f8c7b5279d072440916322c5bd',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0000347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 3,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3733d01b3b0bd36c8bf6be7afaf009114c169ec6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000000347',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 4,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2ced32e46fa2122cd3b8b8d832631656b196b6da',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 5,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x274036520eb1f2f72288879106d13adc1a3801f7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 6,
    stakingToken: serializedTokens.cpump,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xadf03f0c2529468bb82599b8ab1738479c992af0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: serializedTokens.vitsco,
    earningToken: serializedTokens.trx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x1cb4f7c55c8d112689ff980ceeb97cda0d4c017a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0034',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 8,
    stakingToken: serializedTokens.vitsco,
    earningToken: serializedTokens.matic,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2156a2ff99a4459f8d55a9013c151edf1a63b039',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000138',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 9,
    stakingToken: serializedTokens.hwc,
    earningToken: serializedTokens.busd,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x0c941901e0ce661bc9b720075e39baf2976c2655',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0017',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 10,
    stakingToken: serializedTokens.crevo,
    earningToken: serializedTokens.bsw,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xdd7b33d8e0eda9ddc6390a546e3cd4469b4c1a44',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0034',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 11,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x351d468aded97d847159b5d01239bead43b38005',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000018',
    sortOrder: 1,
    isFinished: false,
  }
  
]

export default pools
