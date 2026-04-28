import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom';
const Fitness = () => {

    const FitnessData = Data.filter((item) => item.category === "Fitness");
    console.log(FitnessData)
    return (
        <div>
            {FitnessData.map((Fitness) => (
                <>
                    <Link to={`/post/${Fitness.id}`}>
                        <h1>{Fitness.title}</h1>
                        <img src={Fitness.img_url} />
                    </Link>
                </>
            ))}
        </div>
    )
}

export default Fitness