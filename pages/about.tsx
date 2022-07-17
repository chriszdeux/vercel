import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'

export default function AboutPage() {
  const { asPath } = useRouter()

  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Back to <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>Route: { asPath }</code>
      </p>
    </>
  )
}


AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
