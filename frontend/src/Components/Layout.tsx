import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#1800AD] text-[#F0F4F4]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
