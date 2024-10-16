import Header from './components/Header';
import Pricing from './Components/Pricing';
import Services from './Components/Services';
import State from './Components/State';
import Testimonials from './Components/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <State />
      <Services />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default App;
