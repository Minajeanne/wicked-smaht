import React from 'react';
import SignIn from './SignIn';

const Welcome = () => {
  return (
    <>
      <section className="w-3/6 m-auto flex flex-wrap mt-20">
        <div className="flex flex-wrap">
          <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
            <span className="text-grey-300 text-6xl absolute italic right-10">
              01
            </span>
            <h2 className="z-10 relative text-2xl text-gray-900 absolute">
              Wicked Smaht
            </h2>
            <hr className="block mb-6 mt-5 w-8 border-red-500 h-0 border-t-2" />
            <p className="text-gray-700">
              Welcome to the worst app ever
            </p>
          </div>
        </div>
      </section>
      <SignIn />
    </>
  )
};

export default Welcome;
