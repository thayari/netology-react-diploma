
import React from 'react';
import More from './More';
import Preloader from './Preloader';
import Item from './Item';
import useFetch from './useFetch';;

export default function Items() {
  const loadMore = () => { }

  const {data, loading, error} = useFetch('http://localhost:7070/api/items');

  return (
    <>
      <div className="row">
        {loading ? <Preloader /> : data.map(item => <Item key={item.id} {...item} />) }
      </div>
      <More handleClick={loadMore} />
    </>

  )
}
