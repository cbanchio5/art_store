import React from 'react'
import Image from 'next/image'

type Props = { 
  art: { 
    id: number; 
    title: string; 
    description: string; 
    dimensions: string; 
    medium: string;
    image: string;
  }; 
}

const WorkCard = ({ art }: Props) => {
  return (
    <div className="group w-full max-w-md bg-[#E4DDD9] rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-900 dark:border-gray-800">
      
      {/* Image wrapper with landscape ratio */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image 
          src={art.image} 
          alt={art.title} 
          fill 
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105" 
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {art.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {art.dimensions}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          {art.medium}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {art.description}
        </p>
        
        {/* Link */}
        <div className="mt-4">
          <a 
            href="#" 
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors"
          >
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
