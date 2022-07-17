import Link from 'next/link'
import { useRouter } from 'next/router'
import { BlueLayout } from '../../components/layout/BlueLayout'
import { MainLayout } from '../../components/layout/MainLayout'


export default function ContactPage() {
  const { asPath } = useRouter()
  return (
    <>
      <main className={'main'}>
      <h1>Contact Page</h1>
        <h1 className={'title'}>
          Go to<Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>Route: { asPath }</code>
        </p>
      </main>
    </>
    )
}

ContactPage.getLayout = function getLayout( page:JSX.Element ){
  return (
    <MainLayout>
      <BlueLayout>
        { page }
      </BlueLayout>
    </MainLayout>
  )
}