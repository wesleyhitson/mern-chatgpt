import React from "react";
import { Avatar, Box } from "@mui/material";

const ChatItem = ({ 
    content, 
    role 
}: {
    content: string;
    role: "user" | "assistant";
}) => {
    return role==="assistant" ? (
        <Box 
            sx={{display: "flex", p:2, bgcolor: "#004d5612", my:2, gap: 2}}
            >
                <Avatar sx={{ ml: "0" }}>
                    <img src="openai.png" alt="openai" width={"30px"} />
                </Avatar>
        </Box>
    ) : (
        <Box 
            sx={{display: "flex", p:2, bgcolor: "#004d5612", my:2, gap: 2}}
            >

        </Box>
    );
};

export default ChatItem;