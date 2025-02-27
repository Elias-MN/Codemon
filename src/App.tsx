import Header from './components/Header'
import { Footer } from './components/Footer'
import Info from './components/Info'
import Hero from './components/Hero';
import { Stadistics } from './components/Stadistics';

function App() {
  return (
  <main className='bg-blue-950'>
    <Header />
    {/* <Hero /> */}
    <Info />
    <Stadistics />
    <Footer />
  </main>
  );
}

export default App;
