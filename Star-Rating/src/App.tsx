import { useState } from "react";
import "./App.css";
import Star from "./components/Star";

function App() {
  const starArray = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  return (
    <div>
      <div className="text-3xl font-bold">Please Rate Us! ❤️</div>
      <div className="flex gap-2 justify-center pt-5">
        {starArray.map((star, index) => (
          <Star
            key={index}
            filled={index < (hoverRating || rating)}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
          />
        ))}
      </div>
      <div className="text-2xl pt-6">Your rating is : {rating}</div>
    </div>
  );
}

export default App;