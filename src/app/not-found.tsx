import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center">
      {/* 404 Content */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Oops! Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" passHref>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:scale-105">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;