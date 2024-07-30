const Square = ({ value, onSquareClick}) => {
  return (
    <button className="h-12 w-12 border-2 border-emerald-600 text-3xl" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
