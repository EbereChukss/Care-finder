import NavBar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import About from '@/components/about';
import Footer from '@/components/footer';
import Blog from '@/components/blog';
import HashElement from '@/hashElement/hashElement';
import Contact from '@/components/contact';

export default function Home() {
  return (
   <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <Contact/>
    <Blog/>
    <Footer/>
    <HashElement/>
   </div>
  );
}
