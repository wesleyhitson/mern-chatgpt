import React from "react";
import TextField from "@mui/material/TextField";
type Props = {
    name: string;
    type: string;
    label: string;
};

const CustomizedInput = (props: Props) => {
    return (
        <TextField InputLabelProps={{ style: { color: "white" } }}
            name={props.name}
            type={props.type}
            label={props.label}
            InputProps={{ style: { width: "400px", border-radius: 10px, font-size: "20px", color: "white" } }}
        />;
    );
};