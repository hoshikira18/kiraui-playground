import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: "primary" | "secondary";
};

export const Input = ({ variant = "primary", ...props }: InputProps) => {
    return (
        <input
            type="text"
            style={{
                padding: "8px 16px",
                border: "1px solid",
                borderRadius: "4px",
                borderColor: variant === "primary" ? "blue" : "gray",
                backgroundColor: variant === "primary" ? "#f0f8ff" : "#f5f5f5",
            }}
            {...props}
        />
    );
};
