import React from "react";
import LandingPage from "./pages/LandingPage";
import { supabase } from "./lib/supabase";
import { useState } from "react";
import { useLayoutEffect } from "react";
import DashBoard from "./pages/DashBoard";

const App = () => {
  const [currentSession, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session?.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  if (loading) return <h1>loading.......</h1>;
  return currentSession ? <DashBoard /> : <LandingPage />;
};

export default App;

//IQU5OLhCkB5JRkLS
