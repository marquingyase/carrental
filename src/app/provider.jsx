"use client";
import { Toaster } from "react-hot-toast";

export const Provider = ({ children }) => {
  return (
    <main className="bg-stone-100">
      {children}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        // containerClassName=""
        // containerStyle={{}}
        // toastOptions={{
        //   // Define default options
        //   className: "",
        //   duration: 5000,
        //   style: {
        //     background: "#363636",
        //     color: "#fff",
        //   },

        //   // Default options for specific types
        //   success: {
        //     duration: 3000,
        //     theme: {
        //       primary: "green",
        //       secondary: "black",
        //     },
        //   },
        // }}
      />
    </main>
  );
};
