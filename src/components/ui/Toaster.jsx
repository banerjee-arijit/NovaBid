import React from "react";
import { Toaster } from "react-hot-toast";

const ReactToaster = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#0a0a0a",
          color: "white",
          border: "1px solid #00b8db55",
          borderRadius: "10px",
          transition: "all 0.2s ease-in-out",
        },
      }}
    />
  );
};

export default ReactToaster;
