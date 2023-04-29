import ClientOnly from '@/components/ClientOnly'
import React from 'react'
import CartClient from './CartClient'

type Props = {}

const page = (props: Props) => {
  return (
    <ClientOnly>
      <CartClient/>
    </ClientOnly>
  )
}

export default page