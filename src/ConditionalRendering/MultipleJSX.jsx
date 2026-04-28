import React from 'react'

const MultipleJSX = () => {
    const isStudent = false;
    return (
        <>
            <div>MultipleJSX</div>
            {isStudent ? (

                <div>
                    <h2>Student Dashboard</h2>
                    <p>Welcome to the Course</p>
                </div>
            ) : (
                <div>
                    <h2>Guest Dashboard</h2>
                    <p>Please Enroll in the Course</p>
                </div>
            )
            }
        </>
    )
}

export default MultipleJSX