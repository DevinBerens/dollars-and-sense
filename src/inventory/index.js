import React from "react";
import CompanyLogo from "companyLogo";

let Inventory = (props) => {
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: "#ffffff" }}>Inventory Index here</div>
      <div class="inventoryButtons">
        <button id="add" class="btnAdd">
          Add
        </button>

        <button id="Remove" class="btnRemove">
          Remove
        </button>
        <button id="Current Inventory" class="btnCurrentInventory">
          Current Inventory
        </button>
      </div>
    </div>
  );
};
export default Inventory;
