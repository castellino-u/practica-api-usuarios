import axios from "axios";
import { IUsers } from "../types/IUsers";


const API_URL = "https://jsonplaceholder.typicode.com/users";  //esta es la dirección de la api para después hacerle consultas


export const getUsers = async  (): Promise<IUsers[]> =>{

    try {
        const response = await axios.get(API_URL)
        return response.data
        
    } catch (error) {
        console.log("Error",error)
        return []
    }
}