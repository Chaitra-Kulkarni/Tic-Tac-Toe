import { useState } from "react";

const Square = () => {
  const [initValue, setInitValue] = useState("");
  return (
    <button
      className="h-12 w-12 border-2 border-emerald-600 text-3xl"
      onClick={() => setInitValue("O")}
    >
      {initValue}
    </button>
  );
};

export default Square;
