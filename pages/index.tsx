
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '../components/layout/MainLayout'

export default function HomePage() {
  const { asPath } = useRouter()
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={'title'}>
        Go to<Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>Route: / { asPath === '/' ? 'home' : asPath }</code>
      </p>
    </MainLayout>
  )
}
