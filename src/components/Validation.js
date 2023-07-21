const validation = (userData) => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "correo no valido"
    }

    if (!userData.email) errors.email = "ingrese email por favor"

    if (userData.email.length > 35) errors.email = "el email es demaciado largo"
    
    if (/.*\d+.*/.test(userData.password)){
        errors.password = "la contraseña debe contener un numero"
    }

    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "la contraseña debe contener entre 6 y 10 caracteres"
    }

    return errors
}


export default validation;