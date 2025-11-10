import React, { useState } from "react";
import vet from "../assest/vett.jpeg";
import medicine from "../assest/medicine.webp";
import herbal from "../assest/herbal.jpg";
import skin from "../assest/skin.jpg";
import baby from "../assest/baby.jpg";
import presure from "../assest/presure.jpeg";

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      title: "Common Medicines",
      img: medicine,
      desc: "We offer a wide range of over-the-counter and prescription medicines for fever, cold, pain relief, and daily healthcare needs. Trusted brands available for all age groups.",
    },
    {
      title: "Herbal Medicines",
      img: herbal,
      desc: "We provide a wide range of pure herbal and Ayurvedic medicines. Our pharmacist partners carefully source and prepare each product based on your needs. Once your order is placed, we ensure fast and safe delivery of your required herbal medicines right to your doorstep.",
    },
    {
      title: "Veterinary",
      img: vet,
      desc: "We provide trusted veterinary products including antibiotics, vitamins, and nutritional supplements to keep your pets and livestock healthy and active.",
    },
    {
      title: "Skin Products",
      img: skin,
      desc: "Find skincare essentials including medicated creams, acne treatments, sunscreens, and moisturizers suitable for all skin types.",
    },
    {
      title: "Baby Care",
      img: baby,
      desc: "Your baby’s health matters. We offer baby creams, lotions, powders, and gentle baby medicines from the best brands to keep your little one safe and happy.",
    },
    {
      title: "Medicine Devices",
      img: presure,
      desc: "Stay prepared with medical devices like thermometers, blood pressure monitors, glucose meters, and more for regular health tracking at home.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20" id="services">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          Categories
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(item)}
            className="cursor-pointer bg-[#bde0df] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition transform p-4"
          >
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-black text-center mt-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-2xl font-bold hover:text-red-500"
              onClick={() => setSelectedCategory(null)}
            >
              &times;
            </button>
            <img
              src={selectedCategory.img}
              alt={selectedCategory.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-3 text-center">
              {selectedCategory.title}
            </h2>
            <p className="text-gray-700 text-center">{selectedCategory.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Service;
