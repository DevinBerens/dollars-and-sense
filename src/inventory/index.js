import React, { Fragment, useState } from "react";
import CompanyLogo from "companyLogo";

import { stockItems, defaultInventory } from "./stockItems";

let Inventory = (props) => {
  const [currentStock, setCurrentStock] = useState(
    defaultInventory.sort((a, b) => {
      let nameA = a.stock.toUpperCase();
      let nameB = b.stock.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    })
  );
  const [tempStock, setTempStock] = useState([]);
  function handleTempStock(checked, stock) {
    if (checked) {
      setTempStock([
        ...tempStock.filter((stockItem) => stockItem !== stock),
        stock,
      ]);
    } else {
      setTempStock([...tempStock.filter((stockItem) => stockItem !== stock)]);
    }
  }

  function addItems() {
    let newStockList = [];
    tempStock.forEach((stock) => {
      newStockList.push({ stock: stock, quantity: 1 });
    });

    let mergeStockList = [...newStockList, ...currentStock];

    let returnList = [];

    mergeStockList.forEach((mStock) => {
      let found = returnList.find((rStock) => rStock.stock === mStock.stock);
      if (!found) {
        returnList.push({ stock: mStock.stock, quantity: mStock.quantity });
      } else {
        returnList = [
          ...returnList.filter((rlStock) => rlStock.stock !== mStock.stock),
          { stock: mStock.stock, quantity: mStock.quantity + found.quantity },
        ];
      }
    });
    setCurrentStock(
      [...returnList].sort((a, b) => {
        let nameA = a.stock.toUpperCase();
        let nameB = b.stock.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
    );

    //Clear
    let radios = document.querySelectorAll('input[type="checkbox"]');
    radios.forEach((radio) => (radio.checked = false));
    setTempStock([]);
  }

  function removeItems() {
    let newStockList = [];

    let returnList = [];

    let others = [];

    tempStock.forEach((mStock) => {
      currentStock.forEach((cStock) => {
        let found = others.find((oStock) => oStock.stock === cStock.stock);
        if (cStock.stock !== mStock && !found) {
          others.push(cStock);
        }
      });
    });

    tempStock.forEach((mStock) => {
      let found = currentStock.find((cStock) => cStock.stock === mStock);
      if (found) {
        let res = found.quantity - 1;
        if (res > 0) {
          returnList.push({ stock: mStock, quantity: res });
        }
      }
    });
    setCurrentStock(
      [...returnList, ...others].sort((a, b) => {
        let nameA = a.stock.toUpperCase();
        let nameB = b.stock.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
    );
    //Clear
    let radios = document.querySelectorAll('input[type="checkbox"]');
    radios.forEach((radio) => (radio.checked = false));
    setTempStock([]);
  }

  function resetInventory() {
    setCurrentStock(
      defaultInventory.sort((a, b) => {
        let nameA = a.stock.toUpperCase();
        let nameB = b.stock.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
    );
  }

  return (
    <Fragment>
      <div className="indexWrapper">
        <table style={{ backgroundColor: "white" }}>
          <tbody>
            {stockItems.map((stockItem, ix) => (
              <tr key={ix}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleTempStock(e.target.checked, stockItem)
                    }
                  />
                </td>
                <td>{stockItem}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <CompanyLogo />
        <div style={{ color: "#ffffff" }}>Manage Inventory</div>

        <div class="inventoryButtons">
          <button id="add" className="btnAdd" onClick={addItems}>
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

          <button id="Remove" className="btnRemove" onClick={removeItems}>
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
          <button
            id="Current Inventory"
            className="btnCurrentInventory"
            onClick={resetInventory}
          >
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
              Reset Inventory
            </div>
          </button>
        </div>
        <div style={{ color: "white" }}>
          {currentStock.map((stockItem, ix) => (
            <div
              key={ix}
              style={{ marginRight: "5px", display: "inline-block" }}
            >
              {stockItem.stock}:{stockItem.quantity}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default Inventory;
