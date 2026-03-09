type ButtonProps = {
    gradient?: boolean;
    text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ gradient = false, text = "", ...props }: ButtonProps) {
    return (
        <button
            style={{
                padding: "0.6rem 1.6rem",
                borderRadius: "9999px",
                border: "none",
                color: "white",
                fontSize: "1.2rem",
                fontFamily: "'Coiny','sans-serif'",
                cursor: "pointer",
                background: gradient
                    ? "var(--gradient)"
                    : "var(--dark-alt)"
            }}
            {...props}
        >
            {text}
        </button>
    )
}