import ClientOnly from '@/components/ClientOnly'
import React from 'react'
import AddProductClient from './AddProductClient'

const page = () => {
  return (
    <ClientOnly>
      <AddProductClient/>
    </ClientOnly>
  )
}

export default page