import React from 'react'
import Hero from '../Components/Hero/Hero'
import Item from '../Components/Items/Item'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Recommend from '../Components/Recommend/Recommend'


function Shop() {
  return (
  <div>
    <Hero></Hero>
    <Recommend></Recommend>
    <Popular></Popular>
    <Offers></Offers>
    <NewCollections></NewCollections>
    <NewsLetter></NewsLetter>
    <Item></Item>
    
    
  </div>
  )
}

export default Shop
