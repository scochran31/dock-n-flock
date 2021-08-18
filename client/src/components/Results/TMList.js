import React from 'react'
import TMItem from './TMItem'

const TMList = ({ items, isLoading }) => {
  return isLoading ? <h1>Loading...</h1> :
    <section className='cards'>
      {items.map((item) => (
        <TMItem key={item.id} item={item}></TMItem>
      ))}
    </section>
}

export default TMList
