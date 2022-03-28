import React from "react";

const Header = ({ getWeatherData }) => {
  const handleKeyPress = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter") {
      return getWeatherData("", "", "", e.target.value);
    }
  };

  return (
    <div className="row  d-flex justify-content-between">
      <div className="col-md-8  mt-5">
        <h1 className="text-white ">INSTAWHEATHER</h1>
      </div>
      <div className="col-md-4 ">
        <button
          className="bg-transparent text-white  mt-5 mb-5"
          onClick={handleKeyPress}
          value={"F"}
        >
          F
        </button>
        |
        <button
          type="button"
          className="bg-transparent text-white  mt-5 mb-5"
          onClick={handleKeyPress}
          value={"C"}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Header;
