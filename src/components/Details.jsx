import React from 'react'

const Details = () => {
    const {id} = useParams();

    const post = Data.find((item) => item.id === parseInt(id))
console.log(post,"post")
  return (
    <>
    <div>Details</div>
        <div>
            {/* <h1>{post.title}</h1> */}
            <img src={post.img_url} />
            <p>{post.description}</p>
        </div>
    </>
    
  )
}

export default Details