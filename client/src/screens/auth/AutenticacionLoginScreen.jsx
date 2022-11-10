// importando biblioteca responsable por peticiones HTTP
import axios from 'axios';

// definir una base de url para los endpoints
const apiUrl = "https://kosmic-forum-api.herokuapp.com";

// definir o objeto de servicio
const authService = {

    // definir una funcion de login
    async authenticate(data) {
        const endpoint = `${apiUrl}/auth/sign-in`
        return axios.post(endpoint, data);
    },

    // funcion para salir o usuario logeado de local storage
    setLoggedUser(data){
        let parsedData = JSON.stringify(data)
        localStorage.setItem("user", parsedData)
    },

    // funcion responsable por recuperar o usuario logado de local storage
    getLoggedUser(){
        let data = localStorage.getItem("user");
        if(!data) return null;
        try {
            let parsedData = JSON.parse(data)
            return parsedData

        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export default authService;