import React from "react";

const Wrapper = ({children}) => {
  return (
    <section className=" bg-[rgb(43,43,43)] px-[3px] sm:px-[15px] md:px-[20%]"
>
        {children}
    </section>
  );
};

export default Wrapper;
