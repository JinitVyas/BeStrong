import { FaDumbbell, FaUser, FaAppleAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why Should You Choose Us?</h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <FaDumbbell size={48} className="text-lime-400 mb-4" />
            <h3 className="text-2xl font-bold">Group Fitness Classes</h3>
            <p className="max-w-sm">We offer a variety of classes to keep you engaged and challenged.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUser size={48} className="text-lime-400 mb-4" />
            <h3 className="text-2xl font-bold">Personal Training</h3>
            <p className="max-w-sm">One-on-one sessions to help you meet your goals.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAppleAlt size={48} className="text-lime-400 mb-4" />
            <h3 className="text-2xl font-bold">Nutrition Counseling</h3>
            <p className="max-w-sm">Get personalized plans for your fitness goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
