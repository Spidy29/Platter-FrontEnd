import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
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

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const loginPromise = authService.initiateLogin(data.email);

    try {
      toast.promise(
        loginPromise,
        {
          loading: "Sending login OTP...",
          success: (response) => {
            if (response.success) {
              navigate("/verify-otp", {
                state: {
                  email: data.email,
                  isLogin: true,
                },
              });
              return "✉️ OTP sent! Please check your email.";
            }
            throw new Error(response.message || "Failed to send OTP");
          },
          error: "🔒 Could not initiate login. Please try again.",
        },
        {
          style: {
            minWidth: "300px",
          },
          success: {
            duration: 3000,
            icon: "📨",
          },
          error: {
            duration: 3000,
            icon: "❌",
          },
        }
      );
    } catch (error) {
      console.error("Login error:", error);
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
            Welcome Back
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-2 text-center text-sm text-gray-600"
          >
            Sign in to continue to your account
          </motion.p>
        </div>

        <motion.form
          variants={fadeInUp}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md space-y-4">
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
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Sign In
          </motion.button>

          <div className="text-center text-sm">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Sign up here
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
