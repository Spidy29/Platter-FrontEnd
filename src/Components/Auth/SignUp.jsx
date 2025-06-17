import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaBuilding } from "react-icons/fa";
import { authService } from "../../services/authService";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const InputField = ({ register, type, placeholder, error, icon: Icon }) => (
  <motion.div className="relative" variants={fadeInUp}>
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="h-5 w-5 text-indigo-600" />
    </div>
    <input
      {...register}
      type={type}
      className="appearance-none rounded-xl relative block w-full pl-10 px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm shadow-sm hover:shadow-md transition-shadow duration-200"
      placeholder={placeholder}
    />
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 text-xs mt-1"
      >
        {error}
      </motion.p>
    )}
  </motion.div>
);

const SelectField = ({ register, error }) => (
  <motion.div className="relative" variants={fadeInUp}>
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FaBuilding className="h-5 w-5 text-indigo-600" />
    </div>
    <select
      {...register}
      className="appearance-none rounded-xl relative block w-full pl-10 px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <option value="">Select user type</option>
      <option value="hotel">Hotel</option>
      <option value="customer">Customer</option>
    </select>
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 text-xs mt-1"
      >
        {error}
      </motion.p>
    )}
  </motion.div>
);

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const registerPromise = authService.initiateRegister(data);

    try {
      toast.promise(
        registerPromise,
        {
          loading: "Creating your account...",
          success: (response) => {
            if (response.success) {
              navigate("/verify-otp", {
                state: {
                  email: data.email,
                  isLogin: false,
                },
              });
              return "🎉 Account created! Please check your email for OTP.";
            }
            throw new Error(response.message || "Registration failed");
          },
          error: "😕 Could not create account. Please try again.",
        },
        {
          style: {
            minWidth: "300px",
          },
          success: {
            duration: 3000,
            icon: "✨",
          },
          error: {
            duration: 3000,
            icon: "❌",
          },
        }
      );
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl"
      >
        <div>
          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Create Account
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-2 text-center text-sm text-gray-600"
          >
            Join our community today
          </motion.p>
        </div>

        <motion.form
          variants={fadeInUp}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md space-y-4">
            <InputField
              register={register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full name"
              error={errors.name?.message}
              icon={FaUser}
            />

            <InputField
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email address"
              error={errors.email?.message}
              icon={FaEnvelope}
            />

            <SelectField
              register={register("userType", {
                required: "User type is required",
              })}
              error={errors.userType?.message}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Create Account
          </motion.button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Login here
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
