import axios from "axios";

export const API = axios.create({
    baseURL: process.env.EACT_APP_API_URL
})