import { client } from "../../lib/axios";


export const PostApiRegister = async (user) => {
    try{
        const response = await client.post("/api/user/signup", {
            username: user.username,
            email: user.email,
            password: user.password
        })
        localStorage.setItem("token", response.data.jwt)
        
    }catch (err){
        console.log(err);
    }
}


export const PostApiLogin = async (user) => {
    try{
        const response = await client.post("/api/user/login", {
            email: user.email,
            password: user.password
        })
        localStorage.setItem("token", response.data.jwt)
    }catch (err){
        console.log(err);
    }
}

