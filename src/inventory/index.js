import React from "react";
import CompanyLogo from "companyLogo";

let Inventory = (props) => {
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: "#ffffff" }}>Manage Inventory</div>

      <div class="inventoryButtons">
        <button id="add" class="btnAdd">
          <div
            style={{
              //display: "flex",
              //flex: "1 1 auto",
              // margin: "75 75px",
              marginRight: "25px",
              marginLeft: "25px",
              justifyContent: "center",
            }}
          >
            Add
          </div>
        </button>

        <button id="Remove" class="btnRemove">
          <div
            style={{
              //display: "flex",
              //flex: "1 1 auto",
              // margin: "75 75px",
              marginRight: "25px",
              marginLeft: "25px",
              justifyContent: "center",
            }}
          >
            Remove
          </div>
        </button>
        <button id="Current Inventory" class="btnCurrentInventory">
          <div
            style={{
              //display: "flex",
              //flex: "1 1 auto",
              // margin: "75 75px",
              marginRight: "25px",
              marginLeft: "25px",
              justifyContent: "center",
            }}
          >
            Current Inventory
          </div>
        </button>
      </div>
    </div>
  );
};
export default Inventory;
