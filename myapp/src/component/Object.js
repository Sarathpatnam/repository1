import React from 'react'

export default function Object() {
    let employ=[
    {
        name:"sarath",
        Salary:"8LPA"
    },
    {
        name:"sarath",
        Salary:"8LPA"
    },
    {
        name:"sarath",
        Salary:"8LPA"
    }]
    return (
        <div>
            <h1>List Rendering</h1>
            {
            employ.map(emp=>
            <>
            <p>{emp.name}</p>
            <p>{emp.Salary}</p>
            </>
            )
        }

        </div>
    )
}
