import Header from '@/components/Header';

const AppRoutes = [
  { path: '/', name: 'Inicio' },
  { path: '/about', name: 'Sobre' },
  { path: '/services', name: 'Serviços' },
  { path: '/contact', name: 'Contato' },
];

const Layout = ({ children }) => {
  return (
    <div className='bg-[#333] h-screen text-white'>
      <Header links={AppRoutes} />

      <main className='container mx-auto py-3'>{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
