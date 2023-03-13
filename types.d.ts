// React Navigation types
type RootStackParamList = {
  Home: undefined,
  Details: undefined,
}

type CoinDetailsScreenNavigationProp = NavigationProp<RootStackParamList, "Details">
type HomeScreenNavigationProp = NavigationProp<RootStackParamList,"Home">


// Types of the application

type Roil = {
        times: number,
        currency: string,
        percentage: number
      }

type CryptoCurrencyCoin =  {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    fully_diluted_valuation: null | number,
    total_volume: number,
    high_24h: number,
    low_24h: number,
    price_change_24h: number,
    price_change_percentage_24h: number,
    market_cap_change_24h: number,
    market_cap_change_percentage_24h: number,
    circulating_supply: number,
    total_supply: null | number,
    max_supply: null | number,
    ath: number,
    ath_change_percentage: number,
    ath_date: string,
    atl: number,
    atl_change_percentage: number,
    atl_date: string,
    roil: Roil | null,
    last_updated: string
  }

  type CyptoCoinData = {
    id: string,
    symbol: string,
    name: string,
    description: {
      en: string,
    },
    image: {
      thumb: string,
      small: string,
      large: string,
    },
    market_data: {
      current_price: {
        usd: number,
      },
      ath: {
        usd: number,
      },
      ath_change_percentage: {
        usd: number,
      },
      ath_date: {
        usd: string,
      },
      atl: {
        usd: number,
      },
      atl_change_percentage: {
        usd: number,
      },
      atl_date: {
        usd: string,
      },
      market_cap: {
        usd: number,
      },
      market_cap_rank: number,
      fully_diluted_valuation: {
        usd: number,
      },
      total_volume: {
        usd: number,
      },
      high_24h: {
        usd: number,
      },
      low_24h: {
        usd: number,
      },
      price_change_24h: number,
      price_change_percentage_24h: number,
      price_change_percentage_7d: number,
      price_change_percentage_14d: number,
      price_change_percentage_30d: number,
      price_change_percentage_60d: number,
      price_change_percentage_200d: number,
      price_change_percentage_1y: number,
      market_cap_change_percentage_24h: number,
      price_change_24h_in_currency: {
        usd: number,
      },
      price_change_percentage_1h_in_currency: {
        usd: number,
      },
      price_change_percentage_24h_in_currency: {
        usd: number,
      },
      price_change_percentage_7d_in_currency: {
        usd: number,
      },
      price_change_percentage_14d_in_currency: {
        usd: number,
      },
      price_change_percentage_30d_in_currency: {
        usd: number,
      },
      price_change_percentage_60d_in_currency: {
        usd: number,
      },
      price_change_percentage_200d_in_currency: {
        usd: number,
      },
      price_change_percentage_1y_in_currency: {
        usd: number,
      },
      total_supply: number,
      max_supply: number,
      circulating_supply: number,
    },
    prices: [number, number][],
    tickers: [
      {
        base: string,
        target: string,
        last: number,
        coin_id: string,
      }
    ]
  }