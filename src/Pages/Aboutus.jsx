import React from 'react';

const Aboutus = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-20">
      <div className="flex justify-center items-center mb-6">
        <img
          src="/assets/logo.png" // <-- update your logo image src here
          alt="Exotic Veda Logo"
          className="w-48 h-48 object-contain "
          loading="lazy"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-6 text-gray-800 text-lg leading-relaxed">
        <p>
          Every part of the Exotic Veda logo tells a story of balance, unity, and the strong connection between people and nature. It reminds us of the sanctuary where the brand started, where ancient wisdom meets modern science to create products that nurture the body, mind, and soul.
        </p>
        <p>
          As Exotic Veda grows, the logo guides the brand's mission to share the benefits of holistic wellness with the world. It invites everyone to join in this journey, to embrace nature’s wisdom, and find harmony in today’s busy world.
        </p>

        <h1 className="text-3xl font-semibold pt-6">The Story Behind the Exotic Veda</h1>
        <p>
          In the heart of a vibrant forest, there was a secret place known only to the wisest nature guardians. This place, full of life and ancient knowledge, was where the Exotic Veda brand began. The logo of Exotic Veda captures the spirit and history of this magical place, showing a deep connection with nature and timeless wisdom for well-being.
        </p>

        <h2 className="text-2xl font-semibold pt-4">The Birth of the Design</h2>
        <div className="w-full flex justify-center my-4">
          <video
            src="https://www.exoticveda.com/static/media/WhatsApp%20Video%202024-08-07%20at%2016.07.54_c25b0265.82ad77e11994a81157ee.mp4" // <-- update your video src here
            autoPlay
            loop
            muted
            className="w-full max-w-3xl rounded-lg shadow-md"
          ></video>
        </div>
        <p>
          Long ago, a group of wise people found this special place while searching for a peaceful spot to meditate. They were amazed by the beauty and calm of the forest and were inspired by the patterns in nature. They created a symbol to represent the balance and unity of the natural world. Over time, this symbol became the logo of Exotic Veda.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Elements of the Logo</h2>

        <div className="grid gap-6 md:grid-cols-2 mt-4">
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold">1. Central Circle</h3>
            <p>At the center of the logo is a bold, golden circle. This represents the core of all life and energy, like the sun that nourishes the earth and the heart of the sanctuary from which all wisdom comes.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold">2. Petal-like Shapes</h3>
            <p>Surrounding the central circle are four petal-like shapes. These represent the four directions and the spreading of knowledge, health, and harmony. They also look like open hands ready to offer care and support.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold">3. Circular Motifs</h3>
            <p>Small circles among the petals symbolize the spreading of wisdom and knowledge. They also show how all life forms are connected, reflecting the holistic approach of Exotic Veda.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold">4. Eye-like Shapes</h3>
            <p>At the diagonals are shapes that look like eyes, symbolizing insight, awareness, and the careful protection of nature's secrets. They ensure that the essence of the sanctuary is maintained in everything Exotic Veda offers.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-50 md:col-span-2">
            <h3 className="text-xl font-semibold">5. Gold Color</h3>
            <p>The gold color represents purity, richness, and the valuable wisdom passed down through time. It also shows the quality and luxury that Exotic Veda promises.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
