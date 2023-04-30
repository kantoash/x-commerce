import React from 'react'
import ProductClient from './ProductClient'
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import getMyProducts from '../actions/getMyProducts';

const page = async () => {
  const products = await getMyProducts();
  
  if (!products) {
    return (
        <ClientOnly>
            <EmptyState title='No Products' subtitle='There is no product'  />
        </ClientOnly>
    )
  }


  return (
    <ClientOnly>
      <ProductClient products={products} />
    </ClientOnly>
  )
}

export default page