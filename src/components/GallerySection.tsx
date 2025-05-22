import React from "react";
import { galleryImages } from "../data/gallery";

const GallerySection: React.FC = () => (
  <section
    className="py-12 px-4 bg-white rounded-3xl shadow my-8 max-w-6xl mx-auto"
    id="gallery"
  >
    <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
      Gallery
    </h2>
    <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
      {galleryImages.map((img) => (
        <div
          key={img.id}
          className="overflow-hidden rounded-xl shadow-md border-2 border-blue-100 group"
        >
          <img
            src={img.image}
            alt={img.alt}
            className="object-cover w-full h-40 md:h-48 lg:h-56 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl"
          />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
