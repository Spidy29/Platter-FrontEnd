import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import { authService } from "../../services/authService";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const isLogin = location.state?.isLogin;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isVerifying, setIsVerifying] = useState(false);

  const onSubmit = async (data) => {
    if (!email || isLogin === undefined) {
      toast.error("Invalid verification request");
      navigate("/login");
      return;
    }

    // For registration, ensure we have the required user data
    if (
      !isLogin &&
      (!location.state?.userData?.name || !location.state?.userData?.userType)
    ) {
      toast.error("Missing registration details");
      navigate("/signup");
      return;
    }
    setIsVerifying(true);
    const verifyPromise = isLogin
      ? authService.verifyLogin({ email, otp: data.otp })
      : authService.verifyRegister({
          email,
          otp: data.otp,
          name: location.state?.userData?.name,
          userType: location.state?.userData?.userType,
        });

    toast
      .promise(
        verifyPromise,
        {
          loading: "Verifying OTP...",
          success: (response) => {
            console.log("Verification response:", response);
            if (response.status === 201) {
              setTimeout(() => {
                navigate("/dashboard");
              }, 1000);
              return "🎉 Account verified! Redirecting to dashboard...";
            } else if (isLogin && response.success) {
              setTimeout(() => {
                navigate("/dashboard");
              }, 1000);
              return "🎉 Login successful! Redirecting to dashboard...";
            }
            throw new Error(response.message || "Verification failed");
          },
          error: "❌ Verification failed. Please try again.",
        },
        {
          style: {
            minWidth: "300px",
          },
          success: {
            duration: 2000,
            icon: "✅",
          },
          error: {
            duration: 3000,
            icon: "❌",
          },
        }
      )
      .finally(() => {
        setIsVerifying(false);
      });
  };

  // Redirect if no email in state
  if (!email || isLogin === undefined) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
        }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        <div>
          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-center text-3xl font-extrabold text-gray-900"
          >
            {isLogin ? "Verify Login" : "Verify Your Email"}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-2 text-center text-sm text-gray-600"
          >
            Enter the OTP sent to {email}
          </motion.p>
        </div>

        <motion.form
          variants={fadeInUp}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-indigo-600" />
              </div>
              <input
                {...register("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Please enter a valid 6-digit OTP",
                  },
                })}
                type="text"
                className="appearance-none rounded-xl relative block w-full pl-10 px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm shadow-sm hover:shadow-md transition-shadow duration-200"
                placeholder="Enter 6-digit OTP"
              />
              {errors.otp && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.otp.message}
                </motion.p>
              )}
            </div>
          </div>

          <motion.button
            variants={fadeInUp}
            type="submit"
            disabled={isVerifying}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </motion.button>

          <motion.div variants={fadeInUp} className="text-center mt-4">
            <button
              type="button"
              onClick={() => navigate(isLogin ? "/login" : "/signup")}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Back to {isLogin ? "Login" : "Sign Up"}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default OtpVerification;
