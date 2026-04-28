import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom';
const Hollywood = () => {

    const HollywoodData = Data.filter((item) => item.category === "Hollywood");
    console.log(HollywoodData)
    return (
        <div>
            {HollywoodData.map((Hollydata) => (
                <>
                    <Link to={`/post/${Hollydata.id}`}>
                        <h1>{Hollydata.title}</h1>
                        <img src={Hollydata.img_url} />
                    </Link>
                </>
            ))}
        </div>
    )
}

export default Hollywood