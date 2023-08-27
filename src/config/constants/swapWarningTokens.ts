import { Token } from '@plaxswap/sdkccf'
import tokens from 'config/constants/tokens'

const { bondly, safemoon,cake } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  bondly,
}

export default SwapWarningTokens
