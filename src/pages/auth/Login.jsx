import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

/* ---------------- Schema ---------------- */
const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        console.log("Login Data:", data);

        // ✅ Dummy auth logic (replace with API)
        if (data.email === "admin@gmail.com" && data.password === "123456") {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/service/user_manage");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20 px-4 space-y-4">

                {/* Logo */}
                <div className="w-full sm:w-[450px] md:w-[550px] bg-gray-300 rounded border border-gray-500 shadow-sm overflow-hidden p-2">
                    For logo
                </div>

                {/* Login Card */}
                <div className="w-full sm:w-[450px] md:w-[550px] bg-white rounded border border-gray-500 shadow-lg overflow-hidden">

                    {/* Title */}
                    <div className="bg-linear-to-b text-bold text-lg from-gray-50 to-white border-b border-gray-400 px-6 py-3">
                        <h2 className="text-xl md:text-2xl font-normal text-gray-700">
                            Login to the Admin&apos;s Room
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-8">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* FORM WRAPPER — changes direction on mobile */}
                            <div className="flex flex-col md:flex-row gap-8">

                                {/* Left side */}
                                <div className="flex-1 space-y-6">

                                    {/* Email */}
                                    <div className="flex md:items-start md:flex-row flex-col gap-3">
                                        <label className="w-24 text-sm text-gray-700 pt-1.5 md:text-right">
                                            Login or<br />Email
                                        </label>

                                        <div className="flex-1">
                                            <input
                                                {...register("email")}
                                                className="w-full h-10 border border-gray-400 px-2 text-sm
                                                  focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="flex md:items-start md:flex-row flex-col gap-3">
                                        <label className="w-24 text-sm text-gray-700 pt-1.5 md:text-right">
                                            Password
                                        </label>

                                        <div className="flex-1">
                                            <input
                                                type="password"
                                                {...register("password")}
                                                className="w-full h-10 border border-gray-400 px-2 text-sm
                                             focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            />
                                            {errors.password && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.password.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex md:flex-row flex-col items-start md:items-center gap-3">
                                        <div className="w-30 hidden md:block"></div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-32 h-10 text-sm border border-gray-400 rounded
                                                   bg-linear-to-b from-gray-100 to-gray-200
                                                hover:from-gray-200 hover:to-gray-300
                                                active:from-gray-300 active:to-gray-400
                                               disabled:opacity-60 disabled:cursor-not-allowed
                                                   transition-all"
                                        >
                                            {isSubmitting ? "Signing in..." : "Sign in"}
                                        </button>
                                    </div>

                                </div>

                                {/* Right side (Forgot Password) — moves down on mobile */}
                                <div className="md:w-44 pt-1 md:pt-1">
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700 text-md font-medium block mb-2"
                                    >
                                        Forgot password?
                                    </a>
                                    <p className="text-sm text-gray-800 leading-relaxed">
                                        You can recover the password to your account.
                                    </p>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Login;