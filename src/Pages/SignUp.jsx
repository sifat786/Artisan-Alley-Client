import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from './../Hooks/useAuth';
import Swal from "sweetalert2";

const SignUp = () => {

  const {createUser} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    const {email, password} = data;

    //! create user:
    createUser(email, password)
    .then(res => {
      console.log(res.user);
      Swal.fire({
        title: 'Success',
        text: 'SignUp successfully done',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    })
    .catch(err => console.log(err))
  };

  return (
    <div>
      <Helmet>
        <title>Artisan Alley | SignUp</title>
      </Helmet>

      <div className="w-full max-w-2xl p-4 rounded-md md:p-12 shadow-lg mx-auto bg-gradient-to-r from-purple-300 to-pink-400">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Create your account
        </h2>
        <p className="text-sm text-center text-gray-600">
          Already have account?
          <Link
            to="/signin"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            SignIn here
          </Link>
        </p>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xl text-gray-50">
                Name
              </label>
              <input
                type="text"
                placeholder="your name"
                className="w-full px-3 py-2 border rounded-md  border-gray-300 text-gray-800 focus:border-default-600 focus:border-default-600"
                {...register("name")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border rounded-md  border-gray-300 text-gray-800 focus:border-default-600 focus:border-default-600"
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
              <label htmlFor="email" className="block text-sm">
                PhotoURL
              </label>
              <input
                type="text"
                placeholder="photoURL"
                className="w-full px-3 py-2 border rounded-md  border-gray-300 text-gray-800 focus:border-default-600 focus:border-default-600"
                {...register("image")}
              />
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-full px-3 py-2 border rounded-md border-gray-300 text-gray-800 focus:border-default-600 focus:border-default-600"
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
          className="w-full px-8 py-3 font-semibold rounded-md bg-gray-500 text-gray-50"
          type="submit"
          value="SignUp"
        />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
