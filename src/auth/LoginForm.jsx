import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ShieldCheck, Rocket } from "lucide-react";
import { useNavigate } from "react-router";
import BGanimation from "@/components/ux/BGanimation";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import toast from "react-hot-toast";
import ReactToaster from "@/components/ui/Toaster";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleBtnClick = (e) => {
    e.preventDefault();
    navigate("/auth/register");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!user.email || !user.password) {
      toast.error("Please fill in both fields");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);

    if (error) {
      toast.error("Invalid email or password");
    } else {
      console.log(data);
      toast.success("Logged In Successfull");
      navigate("/");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });

    setLoading(false);

    if (error) {
      toast.error("Google sign-in failed");
      console.error(error);
    } else {
      toast.success("Google sign-in successful");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10 relative overflow-hidden ">
      <BGanimation />
      <ReactToaster />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b8db_100%)] opacity-10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,184,219,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,219,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      ={" "}
      <div className="relative z-10 w-full max-w-5xl bg-[#000000d8] backdrop-blur-xl border border-[#00b8db]/10 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-[#00b8db10] via-black to-[#5b21b610] border-r border-[#00b8db]/10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00b8db] to-purple-500 rounded-full blur-xl opacity-20 animate-pulse" />
            <Rocket className="relative text-[#00b8db] w-16 h-16" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mt-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b8db] to-purple-400">
                NOVA Bid
              </span>
            </h1>
            <p className="text-neutral-400 max-w-sm">
              Dive into futuristic auctions, where innovation meets bidding.
            </p>
          </motion.div>
        </div>

        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white">Sign in</h2>
            <p className="text-neutral-400 mt-2">
              Log in to your NOVA Bid account
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
            onSubmit={handleLoginSubmit}
          >
            <div className="space-y-4">
              <InputField
                icon={<Mail />}
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              <InputField
                icon={<Lock />}
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between text-sm text-neutral-400">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-600"
                />
                Remember me
              </label>
              <a href="#" className="text-[#00b8db] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              className="w-full py-3 px-4 bg-gradient-to-r from-[#00b8db] to-cyan-300 text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
              type="submit"
            >
              <LogIn className="w-5 h-5" />
              Sign in
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#00b8db20]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-neutral-500 bg-black">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              className="w-full py-3 px-4 border border-[#00b8db30] hover:border-[#00b8db] text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
              onClick={handleGoogleSignIn}
            >
              <ShieldCheck className="w-5 h-5 text-[#00b8db]" />
              Sign in with Google
            </button>

            <p className="text-center text-neutral-400 text-sm">
              Don’t have an account?{" "}
              <button
                onClick={handleBtnClick}
                className="text-[#00b8db] hover:text-cyan-300 font-medium cursor-pointer"
              >
                Sign up
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

export default LoginForm;
