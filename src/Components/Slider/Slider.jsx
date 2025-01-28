
const Slider = () => {
    return (
        <div className="md:mt-0 mt-12">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Transform Your 
                            <span className="text-[#dd0429]"> Ideas </span> into Reality
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Seamlessly design and build dynamic solutions with precision and creativity. 
                            <br className="hidden md:inline lg:hidden" />From static concepts to dynamic innovations, we bring your vision to life with expertise and excellence
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#dd0429] text-gray-50 btn-outline border-2 border-[#dd0429]">Explore Projects</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border-2 rounded dark:border-gray-800">Get Started</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slider;