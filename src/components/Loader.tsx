'use client';

import Image from 'next/image';
import React from 'react';

import loading from '../../public/gif/loading.webp'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        {/* Spinner */}
        <Image src={loading} alt="loading" width={500} height={300} />
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;