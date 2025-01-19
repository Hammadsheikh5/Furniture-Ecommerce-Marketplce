import Banner from '@/components/banner'
import Filter from '@/components/filter'
import Header from '@/components/header'
import ProductGrid from '@/components/productGrid'
import React from 'react'

export default function ShopPage() {
  return (
    <div>
      <Header/>
      <Banner title="Shop"/>
      {/* <Filter/> */}
      <ProductGrid />
    </div>
  )
}
