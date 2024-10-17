import FooterSection from '../Components/FooterSection';
import HeaderSection from '../Components/HeaderSection';
import HeroSection from '../Components/HeroSection';
import Pricing from '../Components/Pricing';
import Services from '../Components/Services';

function Home() {
    return (
        <div>
            <HeaderSection />
            <HeroSection />
            <Services />
            <Pricing />
            <FooterSection />
        </div>
    );
}

export default Home;
