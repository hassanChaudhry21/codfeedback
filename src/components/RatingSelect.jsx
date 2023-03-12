import { useState } from "react";

function RatingSelect(props) {
  const [selected, setSelected] = useState(5);

  const handleSelect = (event) => {
    const selectedRating = Number(event.target.value);
    setSelected(selectedRating);
    props.select(selectedRating);
  };

  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <ul className="rating">
      {ratingOptions.map((option) => (
        <li key={option}>
          <input
            type="radio"
            id={`num${option}`}
            name="rating"
            value={option}
            onChange={handleSelect}
            checked={selected === option}
          />
          <label htmlFor={`num${option}`}>{option}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
