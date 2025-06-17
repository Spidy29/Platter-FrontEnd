import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./Routes/AppRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#4ade80",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#f87171",
                secondary: "#fff",
              },
            },
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
