const Bio = () => {
  return (
    <div className="my-5">
      <div className="text-center py-20 bg-blue-50 rounded-lg mb-5 space-y-4">
        <h1 className="text-5xl font-bold">
          About <span className="text-blue-500">Travel Elite</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover the most breathtaking places, recognized for their beauty and
          cultural significance.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-5xl font-bold playfair">
            The Legacy <span className="text-blue-500 playfair">of</span> Travel
            Elite
          </h1>
          <p className="text-justify text-gray-700 leading-relaxed">
            Travel Elite was born out of a passion for exploring the world’s
            hidden gems. Our mission is to recognize and celebrate destinations
            that offer unparalleled beauty, rich history, and unforgettable
            experiences. From towering mountains to serene coastal towns, we
            honor places that captivate travelers' hearts and leave lasting
            impressions.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-5xl font-bold my-12">AWARDS</h1>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="text-center p-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-blue-600">
              Most Scenic Destination
            </h2>
            <p className="text-justify text-gray-600 mt-3">
              Awarded to the most visually stunning place, where nature’s beauty
              unfolds in breathtaking landscapes, mesmerizing travelers with its
              charm.
            </p>
          </div>

          <div className="text-center pt-0 p-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-blue-600">
              Best Cultural Heritage
            </h2>
            <p className="text-justify text-gray-600 mt-3">
              Honoring places rich in history and traditions, preserving the
              cultural heritage that shapes our world today.
            </p>
          </div>

          <div className="text-center pt-0 p-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-bold text-blue-600">
              Adventure Destination of the Year
            </h2>
            <p className="text-justify text-gray-600 mt-3">
              Recognizing the ultimate adventure hotspots, where thrill-seekers
              find excitement in rugged terrains and daring explorations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
