type ButtonProps = {
    gradient?: boolean;
    text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
import './Button.css';
export default function Button({ gradient = false, text = "", ...props }: ButtonProps) {
    return (
        <button className={`button ${gradient ? "button-gradient" : ""}`} {...props}>
            {text}
        </button>
    )
}