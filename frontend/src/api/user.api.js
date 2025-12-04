import { instance } from "../utils/AxiosUtility"

export const loginUser = async (email,password)=>{
const user = await instance.post("auth/login",{
    email:email,
    password:password
})
return user.data.user
} 
export const registerUser = async (name,email,password)=>{
const user = await instance.post("auth/register",{
    name:name,
    email:email,
    password:password
})
return user.data.user
} 
export const getCurrentUser = async ()=>{
    const user = await instance.get("auth/me")
    return user.data.user
}