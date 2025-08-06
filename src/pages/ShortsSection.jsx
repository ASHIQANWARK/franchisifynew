import React, { useState } from "react";

const shorts = [
  {
    id: "6UMRciqxeWM",
    
  },
  {
    id: "1U6BJkXF_9g",
    
  },
  {
    id: "0s_TGOlEYx0",
    
  },
  {
    id: "XmUqvZqrKME",
    
  },
];

// Card component for each short
const ShortsCard = ({ id, title }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div
      className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
      onClick={() => setShowPlayer(true)}
    >
      {showPlayer ? (
        <iframe
          loading="lazy"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[250px]"
        ></iframe>
      ) : (
        <div className="relative w-full h-[250px]">
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      
    </div>
  );
};

// Shorts Section Component
const ShortsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Franchisify Shorts</h2>
        <p className="mb-12 text-gray-600 max-w-3xl mx-auto">
          Quick insights, inspiring success stories, and bite-sized franchise opportunities — all under a minute.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shorts.map((short, index) => (
            <ShortsCard key={index} id={short.id} title={short.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortsSection;
