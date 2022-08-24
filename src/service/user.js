import { ApiRequest } from "@/service/index";

const get = () => {
  return ApiRequest.get("/users");
};

const getUser = (id) => {
    return ApiRequest.get(
        `/users/${id}/`,
    )
}

const User = () => {
    return {
        get,
        getUser
    }
}



export default User
