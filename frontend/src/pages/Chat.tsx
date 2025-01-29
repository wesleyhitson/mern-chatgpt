import { Box, Avatar, Typography, Button } from '@mui/material';
import red from '@mui/material/colors/red';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
    const auth = useAuth();
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                height: "100%",
                width: "100%",
                mt: 3,
                gap: 3,
            }}>
                <Box sx={{ display: {md: "flex", xs: "none", sm: "none"} }}>
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
                        }}>
                            You are talking to a chatbot.
                        </Typography>
                        <Typography sx={{
                            mx: "auto",
                            my: 4,
                            padding: 3,
                            fontFamily: "Work Sans",
                        }}>
                            You can ask a program related to general knowledge, but avoid sharing personal information.
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
                        }}>
                            Clear Conversation
                        </Button>
                    </Box>
                </Box>
            </Box>
    );
};

export default Chat;