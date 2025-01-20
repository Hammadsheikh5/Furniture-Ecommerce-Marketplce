import Banner from '@/components/banner'
import Header from '@/components/header'
import ProductGrid from '@/components/productGrid'
import React from 'react'

export default  function ShopPage({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  const filter = searchParams?.filter || "default";

  return (
    <div>
      <Header/>
      <Banner title="Shop"/>
      <ProductGrid filter={filter}  />
    </div>
  )
}
