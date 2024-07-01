import { FaStar } from "react-icons/fa";

interface StarProps {
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave } : StarProps) => {
  return (
    <div onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <FaStar size={70} color={filled ? 'yellow' : 'gray'} />
    </div>
  );
};

export default Star;