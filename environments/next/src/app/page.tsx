import { http, createPublicClient, webSocket } from 'viem'
import { oortMainnetDev } from 'viem/chains'
import { Client } from './client'

export default async function Home() {
  const client = createPublicClient({
    chain: oortMainnetDev,
    transport: http(),
  })

  await client.getBlockNumber()

  return (
    <>
      <div>server: success</div>
      <Client />
    </>
  )
}
