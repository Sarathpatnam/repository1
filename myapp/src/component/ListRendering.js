import React from 'react'

export default function ListRendering() {

    let employ=["Sarath","bhagya","Harika"]
    return (
        <div>
            <h1>ListRendering</h1>
            {employ.map(element =>
                <h1>{element}</h1>

            )
        }
        </div>
    )
}
