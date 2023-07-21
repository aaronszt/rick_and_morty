import validation from "./Validation";
import { useState } from "react";

const Form = ({login}) => {
    const [errors, setErrors] = useState({})

    const {userData, setUserData} = useState({
        email: "",
        password: ""
    });

const handlerChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })

    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
    }))
}

const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
}

    return(
        <>
            <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
            <input type="text" name = "email" onChange={handlerChange} value = {userData.email}/>
            {
                errors.email && <p>{errors.email}</p>
            }
            <label htmlFor="password">Password</label>
            <input type="text" name = "password" value = {userData.password} onChange={handlerChange}/>
            {
                errors.password && <p>{errors.password}</p>
            }
            <button>Submit</button>
            </form>
        </>
    )
}

export default Form;