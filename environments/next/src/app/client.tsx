'use client'

import { useEffect, useState } from 'react'
import { http, createPublicClient, webSocket } from 'viem'
import { oortMainnetDev } from 'viem/chains'

export function Client() {
  const [success, setSuccess] = useState<boolean | undefined>()
  useEffect(() => {
    ;(async () => {
      const client = createPublicClient({
        chain: oortMainnetDev,
        transport: http(),
      })

      /*const webSocketClient = createPublicClient({
        chain: oortMainnetDev,
        transport: webSocket(
          'wss://eth-mainnet.g.alchemy.com/v2/4iIl6mDHqX3GFrpzmfj2Soirf3MPoAcH',
        ),
      })*/

      await client.getBlockNumber()
      //await webSocketClient.getBlockNumber()

      setSuccess(true)
    })()
  }, [])
  return <div>client: {success ? 'success' : ''}</div>
}
