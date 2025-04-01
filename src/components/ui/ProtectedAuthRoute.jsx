import { supabase } from "@/lib/supabase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedAuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error("Error fetching session:", error.message);
          setLoading(false);
          return;
        }

        if (session?.user) {
          navigate("/dashboard");
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setLoading(false);
      }
    };

    currentSession();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedAuthRoute;
