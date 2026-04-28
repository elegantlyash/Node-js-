import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom';
const Technology = () => {

    const TechnologyData = Data.filter((item) => item.category === "Technology");
    console.log(TechnologyData)
    return (
        <div>
            {TechnologyData.map((Technology) => (
                <>
                    <Link to={`/post/${Technology.id}`}>
                        <h1>{Technology.title}</h1>
                        <img src={Technology.img_url} />
                    </Link>
                </>
            ))}
        </div>
    )
}

export default Technology