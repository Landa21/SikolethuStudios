import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'portfolio' | 'about' | 'services' | 'contact' | 'blog';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster position="top-right" />
    </div>
  );
}
