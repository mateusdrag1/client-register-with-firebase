type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
  return (
    <div className='bg-white text-black shadow-md rounded-lg p-6 flex flex-col justify-center'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <hr className='border-2 border-cyan-500' />
      <div className='p-6'> {children}</div>
    </div>
  );
};

export default Card;
