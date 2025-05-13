import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            style={{
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: variant === "primary" ? "blue" : "gray",
                color: "white",
            }}
        />
    );
};
