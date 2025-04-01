import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { supabase } from "./lib/supabase";
import Loader from "./components/ui/Loader";

const App = () => {
  const [currentSession, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session?.user) {
          setSession(session.user);
          navigate("/dashboard", { replace: true });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  if (loading) return <Loader />;
  return currentSession ? null : <LandingPage />;
};

export default App;
