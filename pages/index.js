import React, {useEffect, useState} from 'react'
import CardPost from '../components/CardPost'

export default function Home({ posts }) {
  return (
        <>
          {
            posts.map(item => (
              <CardPost
                key = {item.id}
                id = {item.id}
                title = {item.attributes.title}
                description = {item.attributes.description}
                image = {item.attributes.imageURL}  
                date={item.attributes.createdAt}  
                cannonicalURL = {item.attributes.cannonicalURL}       
                />        
            ))
          }
        </>
  )
}

export async function getServerSideProps() {

  const url = "http://localhost:1337/api/blogs"
  const res = await fetch(url)
  const resJson = await res.json() 
  return{
    props: {
        posts: resJson.data
    }
  }
  
}


