import React, { useState } from 'react';
import Table from './Table.jsx'; // Import the Table component

const Dropdown = () => {
  const [showTable, setShowTable] = useState(false);

  const handleDropdownClick = () => {
    setShowTable(!showTable); // Toggle the state to show/hide the table
  };

  return (
    <div>
      <button onClick={handleDropdownClick}>Toggle Table</button>
      {showTable && <Table />} {/* Render the table when showTable is true */}
    </div>
  );
};

export default Dropdown;
