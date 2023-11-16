import { getData } from "./server"

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const res = await getData()
  return null
}
