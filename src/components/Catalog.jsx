import React from 'react'
import Search from './Search'
import Categories from './Categories'
import Items from './Items'
import More from './More'

export default function Catalog() {
  return (
    <section class="catalog">
      <h2 class="text-center">Каталог</h2>
      <Search />
      <Categories />
      <Items />
    </section>
  )
}
