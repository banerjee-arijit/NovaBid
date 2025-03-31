import React from "react";
import LandingPage from "./pages/LandingPage";
import Loader from "./components/ui/Loader";
import { useEffect } from "react";
import { supabase } from "./lib/supabase";
import { useState } from "react";

const App = () => {
  const [currentSession, setSession] = useState(null);
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default App;

//IQU5OLhCkB5JRkLS
