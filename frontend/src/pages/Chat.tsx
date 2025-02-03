import { Box, Avatar, Typography, Button, IconButton } from '@mui/material';
import red from '@mui/material/colors/red';
import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ChatItem from '../components/chat/ChatItem';
import { IoMdSend } from "react-icons/io";

type Message = {
    role: "user" | "assistant";
    content: string;
}
const Chat = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [chatMessages, setChatMessages] = useState<Message[]>([]);
    const handleSubmit = async () => {
        console.log(inputRef.current?.value);
        const content = inputRef.current?.value as string;
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
        }
        const newMessage: Message = { content, role: "user" };
        setChatMessages((prev) => [...prev, newMessage]);
    };
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                height: "100%",
                width: "100%",
                mt: 3,
                gap: 3
            }}>
                <Box sx={{ 
                    display: {md: "flex", xs: "none", sm: "none"},
                    flex: 0.2,
                    flexDirection: "column"
                    }}>
                    <Box sx={{ 
                        display: "flex", 
                        width: "100%", 
                        height: "60vh", 
                        bgcolor: "rgb(17,29,39)",
                        borderRadius: 5,
                        flexDirection: "column",
                        mx: 3,
                    }}> 
                        <Avatar sx={{
                            mx: "auto",
                            my: 2,
                            bgcolor: "white",
                            color: "black",
                            fontWeight: 700
                        }}>
                            { auth?.user?.name[0] }
                            {/* { auth?.user?.name.includes(" ") ? auth?.user?.name.split(" ")[1][0] : "" } */}
                        </Avatar>
                        <Typography sx={{
                            mx: "auto",
                            fontFamily: "Work Sans",
                        }}
                        >You are talking to a chatbot.
                        </Typography>
                        <Typography sx={{
                            mx: "auto",
                            my: 4,
                            padding: 3,
                            fontFamily: "Work Sans",
                        }}
                        >You can ask a program related to general knowledge, but avoid sharing personal information.
                        </Typography>
                        <Button sx={{
                            width: "100px",
                            mx: "auto",
                            my: "auto",
                            color: "white",
                            fontWeight: 700,
                            borderRadius: 3,
                            bgcolor: red[300],
                            ":hover": {
                                bgcolor: red.A400,
                            }
                        }}
                        >Clear Conversation
                        </Button>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    flex: {md: 0.8, xs: 1, sm: 1},
                    flexDirection: "column",
                    px: 3
                }}>
                    <Typography sx={{
                        fontSize: "40px",
                        color: "white",
                        mb: 2,
                        mx: "auto",
                        fontWeight: "600"
                    }}
                    >Model - GPT 3.5 Turbo
                    </Typography>
                    <Box sx={{
                        width: "100%",
                        height: "60vh",
                        borderRadius: 3,
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "scroll",
                        overflowX: "hidden",
                        overflowY: "auto",
                        scrollBehavior: "smooth"
                    }}
                    >{chatMessages.map((chat, index) => (
                        //@ts-ignore  // this ignores type checking
                        <ChatItem content = {chat.content} role = {chat.role} key={index} />
                    ))}
                </Box>
                <div style={{
                    width: "100%", 
                    padding: "20px", 
                    borderRadius: 8,
                    backgroundColor: "rgb(17,27,39)",
                    display: "flex",
                    marginRight: "auto"
                }}>
                    {" "}
                    <input
                        ref={inputRef}
                        type="text" 
                        style={{ 
                            width: "100%", 
                            backgroundColor: "transparent", 
                            padding: "10px", 
                            border: "none", 
                            outline: "none",
                            color: "white",
                            fontSize: "20px"
                        }}>
                    </input>
                    <IconButton onClick={handleSubmit} sx={{
                        ml: "auto", 
                        color: "white"
                    }}>
                        <IoMdSend/>
                    </IconButton>
                </div>
                </Box>
            </Box>
    );
};

export default Chat;