
import clients2 from '../../assets/Akij_2.png'

const CompanyLogo = () => {
    return (
        <div>
            <div className="md:h-30 h-20 rounded-lg relative flex items-center justify-center p-2  hover:bg-gray-100 transition-all duration-300 ease-in-out">
                <img src={clients2} alt="Cart" className=" transform hover:scale-110 transition-transform duration-300 ease-in-out" />
            </div>


        </div>
    );
};

export default CompanyLogo;
