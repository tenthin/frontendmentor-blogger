import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Dropdown() {
  const [arrowDirection, setArrowDirection] = useState("down");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setArrowDirection(arrowDirection === "down" ? "up" : "down");
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="dropdown-header" onClick={handleClick}>
        <span>Dropdown Header</span>
        {arrowDirection === "down" ? (
          <KeyboardArrowDownIcon />
        ) : (
          <KeyboardArrowUpIcon />
        )}
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
