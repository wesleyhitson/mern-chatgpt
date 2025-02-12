// functions that work with the API 
import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post("/user/login", {
        email,
        password
    });
    if (response.status !== 200) {
        throw new Error("Unable to login");
    }
    const data = await response.data;
    return data;
}

export const checkAuthStatus = async () => {
    const response = await axios.get("/user/auth-status");
    if (response.status !== 200) {
        throw new Error("Unable to authenticate");
    }
    const data = await response.data;
    return data;
}

export const sendChatRequest = async (message: string) => {
    const response = await axios.post("/chat/new", {
        message
    });
    if (response.status !== 200) {
        throw new Error("Unable to send chat");
    }
    const data = await response.data;
    return data;
}

export const getUserChats = async () => {
    console.log("getting user chats");
    const res = await axios.get("/chat/all-chats");
    if (res.status !== 200) {
        throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
}

export const deleteUserChats = async () => {
    console.log("getting user chats");
    const res = await axios.delete("/chat/delete");
    if (res.status !== 200) {
        throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
}
