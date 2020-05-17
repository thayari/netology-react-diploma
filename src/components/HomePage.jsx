import React from 'react'
import TopSales from './TopSales'
import Items from './Items'
import Categories from './Categories'

export default function HomePage() {
  return (
    <>
      <TopSales />
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Categories />
        <Items />
      </section>
    </>
  )
}
