type InputProps = {
  label: string;
  name: string;
  type: 'text' | 'number';
  value: string | number;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  readonly = false,
}: InputProps) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='text-sm'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readonly}
        className='w-full p-2 border border-gray-300 rounded-md'
      />
    </div>
  );
};

export default Input;
