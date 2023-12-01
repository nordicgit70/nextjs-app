import { Metadata } from 'next'

export async function generateMetadata(
  { params},
): Promise<Metadata> {
  return {
    title: 'nextjs-app',
  }
}

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  return (<div>Hello world.</div>
  );
}
