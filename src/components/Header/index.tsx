import Link from 'next/link';

const Header = ({ links }) => {
  return (
    <header className='bg-white flex text-black py-5'>
      <nav className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl'>Site de Teste</h1>
        <ul className='flex space-x-5'>
          {links &&
            links.map(link => {
              return (
                <Link key={link.path} href={link.path}>
                  <li className='transition-all duration-500 cursor-pointer hover:text-cyan-300 hover:border-b hover:border-cyan-300'>
                    <a>{link.name}</a>
                  </li>
                </Link>
              );
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
