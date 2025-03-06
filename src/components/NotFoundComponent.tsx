
import React from "react";

const NotFoundComponent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Go back home
      </a>
    </div>
  );
};

export default NotFoundComponent;
