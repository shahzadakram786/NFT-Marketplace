import React from "react";

const Wrapper = ({children}) => {
  return (
    <section className="bg-[#2B2B2B] flex flex-col justify-center items-center gap-16 py-20">
        {children}
    </section>
  );
};

export default Wrapper;
