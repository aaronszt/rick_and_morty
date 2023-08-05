import validation from "../Validation/Validation";
import { useState } from "react";

const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="text" name = "email" value = {userData.email} onChange = {handlerChange}/>
                {
                    errors.email && <p>{errors.email}</p>
                }
                <label htmlFor="password">Password: </label>
                <input type="text" name = "password"value = {userData.password} onChange = {handlerChange}/>
                {
                    errors.password && <p>{errors.password}</p>
                }
                <button /*disabled = {!userData.email || userData.password || errors.email || errors.password}*/>Submit</button>
            </form>
        </div>
    )
}

export default Form;