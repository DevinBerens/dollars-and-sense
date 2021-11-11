import React from 'react';
import CompanyLogo from 'companyLogo';

let Menu = (props) => {
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: '#ffffff',
          flex: '1 1 auto',
          maxWidth: '100%',
          maxHeight: '100%',
          padding: '50px',
          overflow: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            Our Favorites
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              <img src="images/s-img-1.jpg" alt="" />
              <div>
                <h3>Loaded Cheese Fry Burger</h3>
                <p>
                  American cheese, lettuce, tomato, red onions, pickles, topped
                  with loaded bacon-cheese fries & poblano queso. Skewered with
                  a loaded potato skin.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              <img src="images/s-img-2.jpg" alt="" />
              <div>
                <h3>Cajun Shrimp & Chicken Pasta</h3>
                <p>
                  Sautéed shrimp, chicken, red bell peppers, spicy Cajun Alfredo
                  sauce, Parmesan-Romano, fettuccine and a warm garlic
                  breadstick.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              <img src="images/s-img-3.jpg" alt="" />
              <div>
                <h3>Poke Nachos</h3>
                <p>
                  marinated raw ahi, crispy wontons, avocado, serranos, white
                  truffle sauce, sweet soy ginger sauce, sriracha aïoli,
                  cilantro, green onions, nori, sesame seeds.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              <img src="images/s-img-4.jpg" alt="" />
              <div>
                <h3>Boneless Wings</h3>
                <p>
                  choose up to two sauces: buffalo, whiskey black pepper, bbq,
                  korean chili garlic, lemon pepper dry rub
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', marginRight: '10px' }}>
              <img src="images/s-img-5.jpg" alt="" />
              <div>
                <h3>Big Ribs</h3>
                <p>
                  Slow-cooked, fall-off-the-bone tender big back pork ribs
                  fire-grilled and basted with your choice of sauce. Served with
                  seasoned fries and coleslaw.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <img src="images/s-img-6.jpg" alt="" />
              <div>
                <h3>Nashville Hot Chicken Sandwich</h3>
                <p>spicy sweet slaw, white cheddar, toasted brioche bun.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            Our Delicious Menu
          </h1>

          <div>
            <div>
              <img src="images/p-1.jpg" alt="" />
              <h3>Blazing Pound of Cheese Fries</h3>
              <p>
                Loaded with poblano queso, mixed cheese, bacon, pickled
                jalapeños, green onions and a side of BBQ Ranch.
              </p>
            </div>
            <div>
              <span class="price"> $11.99 </span>
              <img src="images/p-2.jpg" alt="" />
              <h3>Fried Chicken Tenders</h3>
              <p>maple dijon, buttermilk ranch, fries.</p>
            </div>
            <div>
              <span> $14.49 </span>
              <img src="images/p-3.jpg" alt="" />
              <h3>Grilled Chicken and Avocado Sandwich</h3>
              <p>
                avocado, swiss, roasted tomatoes, arugula, basil aïoli, toasted
                brioche bun.
              </p>
            </div>
            <div>
              <span> $14.49 </span>
              <img src="images/p-4.jpg" alt="" />
              <h3>House Cheesesteak</h3>
              <p>
                chopped ribeye, white cheddar, house steak sauce, roasted garlic
                aïoli, fried onion strings.
              </p>
            </div>
            <div>
              <span> $20.99 </span>
              <img src="images/p-5.jpg" alt="" />
              <h3>Catch of the Season</h3>
              <p>
                Beer-battered Cod Fillets and crispy Fried Shrimp served with
                Whiskey-Glaze on the side. Served with mashed potatoes and
                lemon-butter broccoli.
              </p>
            </div>
            <div>
              <span> $23.99 </span>
              <img src="images/p-6.jpg" alt="" />
              <h3>Speared & Seared</h3>
              <p>
                Grilled 6 ounce Sirloin and grilled Shrimp Skewers basted in
                Whiskey-Glaze. Served with mashed potatoes and lemon-butter
                broccoli.
              </p>
            </div>
            <span> $23.99 </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
