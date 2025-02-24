import React, { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io"
import { Box, Typography, Button } from '@mui/material';
import CustomizedInput from '../components/shared/CustomizedInput';
import { BiBorderRadius } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            toast.loading("Signing up...", {id: "signup" });
            await auth?.signup(name, email, password);
            toast.success("Signed up successfully", {id: "signup" });
        } catch (error) {
            console.log(error);
            toast.error("Sign up failed", {id: "signup" });
        }
    };
    useEffect(() => {
        if (auth?.user) {
            return navigate("/chat");
        }
    }, [auth]);
    return (
        <Box 
            width={"100%"}
            height={"100%"}
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
                <form 
                    onSubmit={(handleSubmit)}
                    style={{
                        margin: "auto",
                        padding: "30px",
                        boxShadow: "10px 10px 20px #000",
                        borderRadius: "10px",
                        border: "none",
                    }}>
                    <Box
                        sx={{
                            display: "flex", 
                            flexDirection: "column"
                        }}
                    >
                        <Typography 
                            variant="h4" 
                            textAlign="center"
                            padding={2}
                            fontWeight={600}
                        >
                            Sign Up
                        </Typography>
                        <CustomizedInput name="name" type="text" label="Name" />
                        <CustomizedInput name="email" type="email" label="Email" />
                        <CustomizedInput name="password" type="password" label="Password" />
                        <Button 
                            type="submit" 
                            sx={{ 
                                px:2, 
                                py:1, 
                                mt:2, 
                                width:"400px", 
                                borderRadius:2, 
                                bgcolor: "#00fffc",
                                ":hover": {
                                    bgcolor: "white",
                                    color: "black"
                                }
                            }}
                            endIcon={<IoIosLogIn/>}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Signup;