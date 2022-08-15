import Cookies from "js-cookie";
import { ApiRequest } from "@/service/index";

const login = (user, pass) => {
    return ApiRequest.post(
        "/users/login",
        {
            email: user,
            password: pass,
        })
}
const get = () => {
    return ApiRequest.get(
        "/users",
    )
}

const setAccessToken = (userLogged) => {
    Cookies.set("userLogged", userLogged,)
}

const getAccessToken = () => {
    return Cookies.get("userLogged");
}

const deleteAccessToken = () => {
    Cookies.remove('userLogged');
}

export default {
    login,
    get,
    setAccessToken,
    getAccessToken,
    deleteAccessToken
}
