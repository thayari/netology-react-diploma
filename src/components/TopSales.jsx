import React from 'react'
import Preloader from './Preloader';
import Item from './Item';
import useFetch from './useFetch';

export default function TopSales() {
  const {data, loading} = useFetch('http://localhost:7070/api/top-sales')

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {loading ? <Preloader /> : data.map(item => <Item key={item.id} {...item} />) }
      </div>
    </section>
  )
}
