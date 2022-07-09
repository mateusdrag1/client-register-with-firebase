interface ButtonProps {
  color?: 'green' | 'red' | 'blue' | 'gray';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  color = 'gray',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`
    bg-${color}-500 hover:bg-${color}-800
    text-white font-bold py-2 px-4 rounded-md
    ${className}
  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
