import { Metadata } from 'next'
import { getData } from "./server"

export async function generateMetadata(
  { params},
): Promise<Metadata> {
  console.log('--- generateMetaData ---')
  const res = await getData()
  return {
    title: 'nextjs-app',
  }
}


/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  console.log('--- Client ---')
  const res = await getData()
  return null
}
