import React from "react";
import { Box } from "@mui/material";
import TypingAnim from "../components/typer/TypingAnim";

const Home = () => {
    return <Box width={"100%"} height={"100%"}>
        <Box 
        sx={{
            display: "flex", 
            width: "100%", 
            mx: "auto", 
            alignItems: "center", 
            flexDirection: "column"}}
        >
            <Box><TypingAnim /></Box>
        </Box>
    </Box>
};

export default Home;
