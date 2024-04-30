import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from './../Hooks/useAuth';
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

  const {createUser} = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    const {email, password, name, image} = data;
    reset();

    //! create user:
    createUser(email, password)
    .then(res => {
      updateProfile(res.user, {
        displayName: name,
        photoURL: image
      })
      .then(() => {
        console.log('profile updated');
        Swal.fire({
          title: 'Success',
          text: 'SignUp successfully done',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        setTimeout(() => {
          navigate('/')
      }, 3000);
      })
    })
    .catch(err => {
      console.log(err);
      Swal.fire({
        title: 'Error',
        text: 'Your email is already registered',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    })
  };

  return (
    <div>
      <Helmet>
        <title>Artisan Alley | SignUp</title>
      </Helmet>

      <div className="w-full max-w-2xl p-4 rounded-md md:p-12 shadow-lg mx-auto bg-gradient-to-r from-purple-300 to-blue-300 my-10 md:my-[70px] lg:my-[100px] container">
        <h2 className="text-center text-2xl md:text-[35px] font-semibold bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text mb-5">
          SignUp
        </h2>
        <p className="text-sm text-center text-gray-600">
          Already have account?
          <Link
            to="/signin"
            rel="noopener noreferrer"
            className="underline font-bold text-red-500"
          >
            SignIn
          </Link>
        </p>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-8 py-5">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-base md:text-xl font-bold">
                Name
              </label>
              <input
                type="text"
                placeholder="your name"
                required
                className="w-full px-3 py-2 border rounded-md "
                {...register("name")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-base md:text-xl font-bold">
                Email address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border rounded-md "
                {...register("email", {
                  required: {
                    value: true,
                    message: "please enter your email address",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "invalid email address",
                  },
                })}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-base md:text-xl font-bold">
                PhotoURL
              </label>
              <input
                type="text"
                placeholder="photoURL"
                required
                className="w-full px-3 py-2 border rounded-md "
                {...register("image")}
              />
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-base md:text-xl font-bold">
                  Password
                </label>
              </div>
              <input
                type="text"
                placeholder="Enter Your password"
                className="w-full px-3 py-2 border rounded-md"
                {...register("password", {
                  required: {
                    value: true,
                    message: "please enter your password",
                  },
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters",
                  },
                  validate: {
                    oneUpperCase: (value) =>
                      /^(?=.*[A-Z]).{6,}$/.test(value) ||
                      "password must be at least 1 uppercase letter",
                    oneLowerCase: (value) =>
                      /^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(value) ||
                      "password must be at least 1 lowercase letter",
                  },
                })}
              />
              {errors.password && (
                <span className="text-left text-red-600 font-medium">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <input
          className="w-full px-8 py-3 font-bold text-xl rounded-md bg-gray-500"
          type="submit"
          value="SignUp"
        />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
