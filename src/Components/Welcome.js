import React from 'react';
import SignIn from './SignIn';

const Welcome = () => {
  return (
    <div className="container text-center">
      <section className="w-3/6 m-auto flex-wrap text-center mt-20">
       <div className="flex flex-wrap">
         <div className="w-full mb-8 p-10 bg-gray-100 relative rounded shadow">
           <h1 className="z-10 relative text-5xl text-center text-gray-900 absolute">
             Wicked Smaht
           </h1>
           <p className="text-gray-700">

           </p>
         </div>
       </div>
     </section>
      <SignIn />
    </div>
  )
};

export default Welcome;
