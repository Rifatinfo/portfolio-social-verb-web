import { useContext } from "react";
import { ScrollContext } from "../../../ScrollProvider";


const PageTitle2 = () => {
  const {PortfolioRef} = useContext(ScrollContext);
  return (
    <section ref={PortfolioRef} className="bg-[#f9fcff] py-[70px]">
      <div className="md:max-w-7xl md:mx-auto">
        <div className="border-l-[5px] border-[#dd0429] pl-5">
          <h2 className="mb-2 text-4xl font-semibold text-dark">
          work showcase
          </h2>
          <p className="text-sm font-medium text-body-color dark:text-dark-6">
          Showcasing innovative designs and dynamic projects crafted with precision and creativity
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageTitle2;

