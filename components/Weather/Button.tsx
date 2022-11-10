export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    content: string
}
export const Button: React.FC<ButtonProps> = props => {

    const { content, ...buttonProps } = props;
    return (
        <button {...buttonProps} className="bg-blue hover:bg-blue2 transition-colors duration-300 py-4 px-6 text-white text-center rounded-md">
            {content}
        </button>
    )
}
