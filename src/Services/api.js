import axios from "axios";

const app = axios.create({
    baseURL: "https://games-hub-api.herokuapp.com/"
})

export default app