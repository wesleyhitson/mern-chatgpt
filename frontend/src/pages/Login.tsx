import React from 'react';
import { Box, Typography } from '@mui/material';

const Login = () => {
    return (
        <Box 
            width={100%}
            height={100%}
            display="flex"
            flex={1}
        >
            <Box
                padding={8}
                mt={8}
                display={{ xs: "none", sm: "none", md: "flex" }}
            >
                <img src="airobot.png" alt="Robot" style={{width: "400px"}} />
            </Box>
            <Box
                display="flex"
                flex={{ xs: 1, md: 0.5 }}
                justifyContent={"center"}
                alignItems={"center"}
                padding={2}
                ml={"auto"}
                mt={16}
            >
                <form style={{width: "100%"}}>
                    <Box
                        sx={{
                            display: "flex", 
                            flexDirection: "column"
                        }}
                    >
                        <Typography 
                            variant="h4" textAlign="center"
                            padding={2}
                            fontWeight={600}
                        >
                            Login
                        </Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;