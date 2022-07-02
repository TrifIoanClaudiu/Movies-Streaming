import axios from "axios"


export const axiosInstance = axios.create({
    baseURL : "https://jorneytroughtime.herokuapp.com/"})
