import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John Doe",
    review: "WOW! Such an amazing place. The facilities are top-notch!",
    stars: 5,
    image: "./Images/beat.JPEG", // Update path to actual image location
  },
  {
    name: "Jane Smith",
    review: "The best gym interior I've ever seen. Highly recommended!",
    stars: 4.5,
    image: "./Images/beat.JPEG",
  },
  {
    name: "Mike Johnson",
    review: "Great equipment and very clean environment. Loved it!",
    stars: 5,
    image: "./Images/beat.JPEG",
  },
  {
    name: "Emily Brown",
    review: "Superb trainers and friendly staff. Worth every penny!",
    stars: 4.8,
    image: "./Images/beat.JPEG",
  },
  {
    name: "Chris Wilson",
    review: "Amazing vibe and the music is motivating!",
    stars: 5,
    image: "./Images/beat.JPEG",
  },
];

const GymReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-black mt-20 w-full overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-700">
        Customer Reviews
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md flex flex-col items-center text-center w-[200px] bg-gray-900 mt-20"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{review.name}</h3>
            <p className="text-white mb-4">{review.review}</p>
            <div className="text-yellow-500 text-lg mb-4">
              {"★".repeat(Math.floor(review.stars))}
              {review.stars % 1 !== 0 ? "☆" : ""}
            </div>
            <div className="flex flex-col items-center justify-center">
            <img
              src={review.image}
              alt={review.name}
              className="w-24 h-24 rounded-full border-2 border-white"
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GymReviews;
