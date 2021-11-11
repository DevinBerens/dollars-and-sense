import React from 'react';
import CompanyLogo from 'companyLogo';

let Orders = (props) => {
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div
        style={{
          color: '#ffffff',
          height: '100%',
          marginTop: '50px',
          marginBottom: '50px',
          width: '60%',
        }}
      >
        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            Current Orders
          </h1>
          <div>
            <div
              style={{
                border: '1px solid #ffffff',
                padding: '20px 10px',
                marginTop: '10px',
              }}
            >
              <h4 style={{ margin: '0' }}>Boneless Wings</h4>
              <div style={{ marginTop: '5px', display: 'flex' }}>
                <div style={{ display: 'flex', flex: '1 1 auto' }}>
                  French Fries
                </div>
                <div>$12.99</div>
              </div>
            </div>
            <div
              style={{
                border: '1px solid #ffffff',
                padding: '20px 10px',
                marginTop: '20px',
              }}
            >
              <h4 style={{ margin: '0' }}>Cajun Shrimp & Chicken Pasta</h4>
              <div style={{ marginTop: '5px', display: 'flex' }}>
                <div style={{ display: 'flex', flex: '1 1 auto' }}>
                  French Fries
                </div>
                <div>$14.99</div>
              </div>
            </div>
            <div
              style={{
                border: '1px solid #ffffff',
                padding: '20px 10px',
                marginTop: '20px',
              }}
            >
              <h4 style={{ margin: '0' }}>Poke Nachos</h4>
              <div style={{ marginTop: '5px', display: 'flex' }}>
                <div style={{ display: 'flex', flex: '1 1 auto' }}>
                  Onion Rings
                </div>
                <div>$16.99</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            Completed Orders
          </h1>
          <div>
            <div
              style={{
                border: '1px solid #ffffff',
                padding: '20px 10px',
                marginTop: '10px',
              }}
            >
              <h4 style={{ margin: '0' }}>Loaded Cheese Fry Burger</h4>
              <div style={{ marginTop: '5px', display: 'flex' }}>
                <div style={{ display: 'flex', flex: '1 1 auto' }}>
                  French Fries
                </div>
                <div>$12.99</div>
              </div>
            </div>
            <div
              style={{
                border: '1px solid #ffffff',
                padding: '20px 10px',
                marginTop: '20px',
              }}
            >
              <h4 style={{ margin: '0' }}>
                Grilled Chicken and Avocado Sandwich
              </h4>
              <div style={{ marginTop: '5px', display: 'flex' }}>
                <div style={{ display: 'flex', flex: '1 1 auto' }}>
                  French Fries
                </div>
                <div>$14.99</div>
              </div>
            </div>
            <div
              style={{
                border: '1px solid #ffffff',
                padding: '20px 10px',
                marginTop: '20px',
              }}
            >
              <h4 style={{ margin: '0' }}>Blazing Pound of Cheese Fries</h4>
              <div style={{ marginTop: '5px', display: 'flex' }}>
                <div style={{ display: 'flex', flex: '1 1 auto' }}>
                  Onion Rings
                </div>
                <div>$16.99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Orders;
