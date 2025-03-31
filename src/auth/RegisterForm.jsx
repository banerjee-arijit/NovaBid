import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, UserPlus, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BGanimation from "@/components/ux/BGanimation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import ReactToaster from "@/components/ui/Toaster";

const RegisterForm = () => {
  const [loading, setIsloading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = user;
    if (!user.email || !user.password) {
      toast.error("Please fill in both fields");
      return;
    }

    setIsloading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    });

    setIsloading(false);

    if (error) {
      toast.error("Invalid username or email or password");
    } else {
      const isVerified = data?.user?.user_metadata?.email_verified;

      if (!isVerified) {
        toast.loading(
          "Verification email sent. Please verify your email to continue.",
          {
            duration: 5000,
          }
        );
        return;
      }

      toast.success("Successfully registered!");
      navigate("/auth/login");
    }
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      <ReactToaster />
      <BGanimation />
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-cyan-500/10 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-cyan-600/10 via-black to-purple-800/20 border-r border-cyan-500/10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
            <Rocket className="relative text-cyan-400 w-16 h-16" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Join{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                NOVA Bid
              </span>
            </h1>
            <p className="text-gray-400 max-w-sm">
              Create your account and start bidding on exclusive items today
            </p>
          </motion.div>
        </div>

        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white">
              Create your account
            </h2>
            <p className="text-gray-400 mt-2">
              Fill in your details to get started
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
            onSubmit={handleRegister}
          >
            <div className="space-y-4">
              <div className="space-y-4">
                <InputField
                  icon={<User />}
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={user.username}
                  onChange={handleOnChange}
                />
                <InputField
                  icon={<Mail />}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={user.email}
                  onChange={handleOnChange}
                />
                <InputField
                  icon={<Lock />}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className="flex items-center text-sm">
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-600"
                />
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            <button
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02]"
              type="submit"
            >
              <UserPlus className="w-5 h-5" />
              Create Account
            </button>

            <p className="text-center text-gray-400 text-sm">
              Already have an account?{" "}
              <button
                className="text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
                onClick={handleBtnClick}
              >
                Sign in
              </button>
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ icon, type, name, placeholder, value, onChange }) => (
  <div className="relative">
    <span className="absolute top-3 left-3 text-cyan-400">{icon}</span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-cyan-500/20 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-300"
    />
  </div>
);

export default RegisterForm;
