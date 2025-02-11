
const Pricing = () => {
    return (
      <section className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/** Pricing Card */}
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-gray-500 mt-2">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#DD0429]">${plan.price}</span>
                <span className="text-gray-500"> /month</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2 px-4 bg-[#DD0429] text-white rounded-xl font-semibold transition hover:bg-red-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "For individuals starting out.",
      price: "19",
      features: ["10 Projects", "5 GB Storage", "Basic Support"],
    },
    {
      name: "Pro",
      description: "For growing businesses.",
      price: "49",
      features: ["50 Projects", "50 GB Storage", "Priority Support"],
    },
    {
      name: "Enterprise",
      description: "For large enterprises.",
      price: "99",
      features: ["Unlimited Projects", "500 GB Storage", "Dedicated Support"],
    },
  ];
  
  export default Pricing;