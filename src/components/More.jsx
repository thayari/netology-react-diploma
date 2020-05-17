import React from 'react'

export default function More({handleClick}) {
  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
    </div>
  )
}
