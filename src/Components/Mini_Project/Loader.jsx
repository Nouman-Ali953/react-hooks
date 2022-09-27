import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
    <div className="loader">
    <Oval
          height={80}
          width={80}
          color="#DAEAF1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#354259"
          strokeWidth={3}
          strokeWidthSecondary={4}
        />
    </div>
          </>
  );
};

export default Loader;
