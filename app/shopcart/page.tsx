import ClientOnly from '@/components/ClientOnly'
import React from 'react'
import CartClient from './CartClient'


const page = () => {
  return (
    <ClientOnly>
      <CartClient/>
    </ClientOnly>
  )
}

export default page