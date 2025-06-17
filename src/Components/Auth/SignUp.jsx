import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { authService } from '../../services/authService';

export default function SignUp() {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: registerOtp, handleSubmit: handleOtpSubmit, formState: { errors: otpErrors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await authService.initiateRegister(data);
            if (response.success) {
                setEmail(data.email);
                setIsOtpSent(true);
                toast.success('OTP sent to your email');
            } else {
                toast.error(response.message || 'Registration failed');
            }
        } catch (error) {
            toast.error('Registration failed');
        }
    };

    const onOtpSubmit = async (data) => {
        try {
            const response = await authService.verifyRegister({
                email,
                otp: data.otp
            });
            if (response.success) {
                toast.success('Registration successful');
                navigate('/dashboard');
            } else {
                toast.error(response.message || 'OTP verification failed');
            }
        } catch (error) {
            toast.error('OTP verification failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {isOtpSent ? 'Verify your email' : 'Create your account'}
                    </h2>
                </div>
                
                {!isOtpSent ? (
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    {...register('name', { required: 'Name is required' })}
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Full name"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    type="email"
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="userType" className="sr-only">User Type</label>
                                <select
                                    {...register('userType', { required: 'User type is required' })}
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                >
                                    <option value="">Select user type</option>
                                    <option value="hotel">Hotel</option>
                                    <option value="customer">Customer</option>
                                </select>
                                {errors.userType && <p className="text-red-500 text-xs mt-1">{errors.userType.message}</p>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit(onOtpSubmit)}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="otp" className="sr-only">OTP</label>
                                <input
                                    {...registerOtp('otp', {
                                        required: 'OTP is required',
                                        pattern: {
                                            value: /^[0-9]{6}$/,
                                            message: 'OTP must be 6 digits'
                                        }
                                    })}
                                    type="text"
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter 6-digit OTP"
                                />
                                {otpErrors.otp && <p className="text-red-500 text-xs mt-1">{otpErrors.otp.message}</p>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Verify OTP
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
