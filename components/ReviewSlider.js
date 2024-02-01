import CustomerReviews from "./CustomerReviews";

const reviews = [
  { text: "Great product! Highly recommended.", author: "John Doe" },
  { text: "Amazing service. Will buy again.", author: "Jane Smith" },
  // Add more reviews as needed
];

export default function ReviewSlider() {
  return (
    <div className="my-8 md:p-16 flex flex-col justify-center items-center">
      <div className="flex flex-col my-2 text-center">
        <p>What Buyers say</p>
        <p className="md:text-3xl text-2xl font-semibold text-black">
          Customer Reviews
        </p>
      </div>
      <CustomerReviews reviews={reviews} />
    </div>
  );
}
