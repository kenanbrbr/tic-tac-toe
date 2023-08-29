import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const Cell = ({
  id,
  cell,
  cells,
  setCells,
  symbol,
  setSymbol,
  winningMessage,
}) => {
  const getSymbol = () => {
    return symbol ? "circle" : "cross";
  };

  const handleClick = () => {
    let tempArr = cells;

    if (tempArr[id] === "" && !winningMessage) {
      setSymbol((prev) => !prev);
      tempArr[id] = getSymbol();
    }

    setCells(tempArr);
  };

  const handleCellChange = (symbol) => {
    cells.map((cell, index) => {
      if (index === id) {
        return symbol;
      } else {
        return cell;
      }
    });
  };

  return (
    <div
      className="w-[200px] h-[200px] border-solid border-2 border-black box-border flex justify-center items-center"
      id={id}
      onClick={handleClick}
    >
      {cell === "cross" ? (
        <CloseIcon
          fontSize="large"
          fontWeight="bold"
          className="text-red-600"
        />
      ) : cell === "circle" ? (
        <PanoramaFishEyeIcon
          fontSize="large"
          fontWeight="bold"
          className="text-blue-600"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Cell;
