const Pricing = () => {
    return (
      <div className="bg-black text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Choose The Best Plan For Your Needs</h2>
          <div className="flex justify-center space-x-10">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Basic Membership</h3>
              <p className="text-4xl font-bold mt-4">$23.99 <span className="text-lg">/ month</span></p>
              <ul className="mt-4">
                <li>Access to all gym facilities</li>
                <li>Unlimited use of equipment</li>
                <li>Discounted rates on group classes</li>
              </ul>
              <button className="bg-lime-400 text-black font-semibold py-2 px-6 mt-6 rounded-md">Choose Plan</button>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Premium Membership</h3>
              <p className="text-4xl font-bold mt-4">$49.99 <span className="text-lg">/ month</span></p>
              <ul className="mt-4">
                <li>All the benefits of Basic</li>
                <li>Unlimited group classes</li>
                <li>Priority booking for personal training</li>
              </ul>
              <button className="bg-lime-400 text-black font-semibold py-2 px-6 mt-6 rounded-md">Choose Plan</button>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">VIP Membership</h3>
              <p className="text-4xl font-bold mt-4">$89.99 <span className="text-lg">/ month</span></p>
              <ul className="mt-4">
                <li>All the benefits of Premium</li>
                <li>Exclusive member events</li>
                <li>VIP lounge access</li>
              </ul>
              <button className="bg-lime-400 text-black font-semibold py-2 px-6 mt-6 rounded-md">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
  