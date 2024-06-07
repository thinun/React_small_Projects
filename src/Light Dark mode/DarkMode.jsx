import React from "react";

const MyComponent = () => {
  const [toogle, setToogle] = React.useState(false);

  const handleToggle = () => {
    setToogle((prevState) => !prevState);
  };

  return (
    <div className={`${toogle ? "dark" : "light"} min-h-screen flex items-center justify-center`}>
      <div className="text-8xl font-bold text-amber-600">
        <h1 className="dark:text-blue-700">Hello, Tailwind CSS!</h1>
      </div>
      <button
        className="absolute top-0 right-0 mr-4 mt-4 bg-black py-4 px-4 rounded text-white"
        onClick={handleToggle}
      >
        {toogle ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default MyComponent;
