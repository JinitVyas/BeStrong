import { FaPlayCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Embark on a Journey to Wellness: Elevate Your Fitness Experience with [Gym Name], 
          Your Ultimate Destination for Unleashing Your Full Potential and Embracing a Vibrant, Active Lifestyle.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-lime-400 px-6 py-3 text-black font-semibold rounded-md">
            Get Started
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 border border-white rounded-md">
            <FaPlayCircle size={24} />
            <span>Watch Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
