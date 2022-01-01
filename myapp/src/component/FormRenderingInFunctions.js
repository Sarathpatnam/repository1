import React, {useState} from 'react'

export default function FormRenderingInFunctions() {
    let initialData={
        uname:"",
        pword:""
    }
    let [values,updateValues]=useState(initialData);
    
  const  changeUsername=(event)=>{
            updateValues({
            ...values,uname:event.target.value
        })
    }
    const changePassword=(event)=>{
            updateValues({
                ...values,pword:event.target.value
            })
        }
       const submitUserData=(event)=>{
             event.preventDefault()
             console.log(`${values.uname} ${values.pword}`)
        }
    return (
        <div>
            <div>
                <form onSubmit={submitUserData} method='get'>
                    <input type="text" value={values.uname}
                    onChange={changeUsername}
                    />
                    <br></br>
                    <input type="text"  value={values.pword}
                    onChange={changePassword}
                    />

                    <br></br>
                    <button type='submit' required>Login</button>
                </form>
            </div>
        </div>
    )
}
