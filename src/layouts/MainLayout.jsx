import react from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout({ children }) {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex flex-grow flex-col'>
                {children}
            </main>
            <Footer />
        </div>
    )
}