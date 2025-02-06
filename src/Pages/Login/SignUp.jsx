import { Link } from 'react-router-dom';
import formLogo from '../../assets/login-image.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const SignUp = () => {
    const [errorMessage , setErrorMessage] = useState('');
    // const [user, setUser] = useState(null);
    console.log(errorMessage);

    const {createUser} = useContext(AuthContext);

    const handleLoginButton = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createUser(email, password)
        .then( result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log('Error' , error.message)
        })
        
        // password validation
        if(password < 6){
           alert("Please provide 6 character or longer")
           return;
        }
       const  lowerCaseLetters = /[a-z]/g;
       if(!lowerCaseLetters.test(password)){
          alert("Provided a one lowercase")
          return;
       }
       const  upperCaseLetters = /[A-Z]/g;
       if(!upperCaseLetters.test(password)){
        alert("Provided a one Uppercase")
        return;
        }
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
        if(!specialCharRegex.test(password)){
            alert("Provided a one special")
            return;
        }
          
       
    }

    return (
        <div>
            <div className="mt-[80px]">
                        <div className="md:flex md:justify-center md:gap-8 md:max-w-7xl md:mx-auto min-h-[calc(100vh-(72px+60px))]">
                            
                            <div>
                                <div className="w-full  h-[490px] max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                                    <h2 className="mb-3 text-3xl font-bold text-center text-[#C73450]">Login to your account</h2>
                                    <p className="text-sm text-center dark:text-gray-600 font-semibold">Your already have an  account ?
                                        <Link to="/login"><a href="#" rel="noopener noreferrer" className="focus:underline hover:underline hover:text-[#C73450]"> Sign In</a></Link>
                                    </p>
                                   
                                    <form onSubmit={handleLoginButton} noValidate="" action="" className="space-y-8 mt-10">
                                        <div className="space-y-4">
                                        <div className="space-y-2">
                                                <label htmlFor="name"className="block text-sm">Name</label>
                                                <input  type="text" name="name"   placeholder="Enter your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm">Email address</label>
                                                <input type="email" name="email" id="email" placeholder="Enter your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between">
                                                    <label htmlFor="password" className="text-sm">Password</label>
                                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                                                </div>
                                                <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                            </div>
                                        </div>
                                        <button  type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-[#C73450]  text-white">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default SignUp;