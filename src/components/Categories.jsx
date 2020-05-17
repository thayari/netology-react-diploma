import React from 'react'
import useFetch from './useFetch'
import { NavLink } from 'react-router-dom'

export default function Categories() {
  const {data, loading} = useFetch('http://localhost:7070/api/categories')

  // 
  
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li key={'all'} className="nav-item">
        <a className="nav-link active" href="#">Все</a>
      </li>
      {loading ? null : data.map(item => (<li key={item.id} className="nav-item">
        <a className="nav-link" href="#">{item.title}</a>
      </li>))}
    </ul>
  )
}
