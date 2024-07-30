import Square from "./components/Square";

const App = () => {
  return (
    <div className="w-1/2 mx-auto text-center font-medium">
      <h1>Hello TicTacToe!</h1>
      <div className="w-1/4 mx-auto">
        <div className="grid grid-cols-3 gap-2 m-2">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="grid grid-cols-3 gap-2 m-2">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="grid grid-cols-3 gap-2 m-2">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
};

export default App;
