"use client"
import React, { useEffect, useState } from 'react'
import getProducts from './check'

const page = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(data => setProducts(data))
      }, [])
    console.log(products)
  return (
    <div>page</div>
  )
}

export default page