import { FaDumbbell, FaUser, FaMedkit } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-black text-white pt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">About Us</h2>
        <div className="flex justify-around">
          {/* Personalized Plans */}
          <div className="flex flex-col items-center">
            <FaDumbbell size={48} className="text-lime-400 mb-4" />
            <h3 className="text-2xl font-bold">AI-Powered Fitness Plans</h3>
            <p className="max-w-sm text-[17px]">
              Using advanced AI, we generate customized workout routines that adapt to your goals and fitness level for optimal results.
            </p>
          </div>


          {/* Injury Prevention */}
          <div className="flex flex-col items-center">
            <FaMedkit size={48} className="text-lime-400 mb-4" />
            <h3 className="text-2xl font-bold">Injury Prevention</h3>
            <p className="max-w-sm text-[17px]">
              We focus on safe exercises that help you reach your goals without the risk of injury.
            </p>
          </div>

          {/* For All Fitness Levels */}
          <div className="flex flex-col items-center">
            <FaUser size={48} className="text-lime-400 mb-4" />
            <h3 className="text-2xl font-bold">For All Fitness Levels</h3>
            <p className="max-w-sm text-[17px]">
              Whether you're new to fitness or have experience, we provide simple, easy-to-follow plans.
            </p>
          </div>
        </div>
        <p className="text-2xl font-semibold text-lime-400 mt-8">
          Start your fitness journey with us – safer, smarter, and more effective!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
