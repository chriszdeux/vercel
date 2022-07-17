import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MainLayout } from '../../components/layout/MainLayout'

export default function Pricing () {
  const { asPath } = useRouter()
  return (
    <MainLayout>
    <main className={'main'}>
    <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Go to<Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>Route: { asPath }.jsx</code>
      </p>
    </main>
  </MainLayout>
  )
}
