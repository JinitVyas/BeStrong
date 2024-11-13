import AboutUs from '../Components/AboutUs';
import ContactUs from '../Components/ContactUs';
import FooterSection from '../Components/FooterSection';
import HeaderSection from '../Components/HeaderSection';
import HeroSection from '../Components/HeroSection';
import Pricing from '../Components/Pricing';

function Home() {
    return (
        <div>
            <HeaderSection />
            <div id="home">
                <HeroSection />
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="plans">
                <Pricing />
            </div>
            <div id="contactus">
                <ContactUs />
            </div>
            <FooterSection />
        </div>
    );
}

export default Home;
