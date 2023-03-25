type Config = {
  chains: Record<
    number,
    {
      contractAddress: string
    }
  >
}

const config: Config = {
  chains: {
    97: {
      contractAddress: '0x9C9300274F781800954E6f0E55655F45c843323C',
    },
  },
}

export default config
