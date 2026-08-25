import {
  ArrowUpRight,
  ShoppingBag,
  Plus,
  Minus,
  X,
  Trash2,
  MapPin,
} from "lucide-react";
import { useState } from "react";

function Menu() {
  /* =========================================
     RESTAURANT LOCATION
  ========================================= */

  const RESTAURANT_LOCATION = {
    lat: 24.8964922,
    lng: 67.0453184,
  };

  /* =========================================
     DELIVERY RATES
  ========================================= */

  const DELIVERY_RATES = [
    { maxDistance: 3, fee: 100 },
    { maxDistance: 5, fee: 150 },
    { maxDistance: 8, fee: 200 },
    { maxDistance: 12, fee: 300 },
    { maxDistance: 15, fee: 400 },
  ];

  /* =========================================
     STATES
  ========================================= */

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    location: "",
  });

  const [delivery, setDelivery] = useState({
    distance: null,
    fee: 0,
    loading: false,
    error: "",
  });

  /* =========================================
     MENU DATA
  ========================================= */

  const nihariItems = [
    {
      id: 1,
      category: "Nihari",
      urdu: "سنگل نہاری",
      name: "Single Nihari",
      description: "Our traditional slow-cooked Nihari",
      price: 600,
    },
    {
      id: 2,
      category: "Nihari",
      urdu: "سنگل نہاری فرائی",
      name: "Single Nihari Fry",
      description: "Nihari with a rich fried finish",
      price: 800,
    },
    {
      id: 3,
      category: "Nihari",
      urdu: "ڈبل نہاری",
      name: "Double Nihari",
      description: "A generous serving of our classic Nihari",
      price: 1200,
    },
    {
      id: 4,
      category: "Nihari",
      urdu: "نلی نہاری",
      name: "Nalli Nihari",
      description: "Slow-cooked Nihari with tender bone marrow",
      price: 1000,
      featured: true,
    },
    {
      id: 5,
      category: "Nihari",
      urdu: "مغز نہاری",
      name: "Maghaz Nihari",
      description: "Traditional Nihari with rich brain",
      price: 1000,
    },
    {
      id: 6,
      category: "Nihari",
      urdu: "دیسی گھی کا تڑکہ",
      name: "Desi Ghee Ka Tarka",
      description: "Finished with aromatic desi ghee",
      price: 200,
    },
    {
      id: 7,
      category: "Nihari",
      urdu: "سنگل اسپیشل نہاری",
      name: "Single Special Nihari",
      description: "Our elevated special serving",
      price: 1600,
      featured: true,
    },
    {
      id: 8,
      category: "Nihari",
      urdu: "اسپیشل نہاری تھالہ",
      name: "Special Nihari Tashla",
      description: "The ultimate Jumma Gujjar specialty",
      price: 2200,
      featured: true,
    },
  ];

  const sides = [
    {
      id: 9,
      category: "Sides",
      urdu: "روٹی",
      name: "Roti",
      description: "Fresh traditional flatbread",
      price: 30,
    },
    {
      id: 10,
      category: "Sides",
      urdu: "رائتہ",
      name: "Raita",
      description: "Cool and creamy yogurt dip",
      price: 50,
    },
  ];

  const biryaniItems = [
    {
      id: 11,
      category: "Biryani & Pulao",
      urdu: "سنگل بریانی",
      name: "Single Biryani",
      description: "Without Chicken",
      price: 150,
    },
    {
      id: 12,
      category: "Biryani & Pulao",
      urdu: "سنگل پلاؤ",
      name: "Single Pulao",
      description: "Without Chicken",
      price: 150,
    },
    {
      id: 13,
      category: "Biryani & Pulao",
      urdu: "بریانی آدھا کلو",
      name: "Biryani Half KG",
      description: "Without Chicken",
      price: 280,
    },
    {
      id: 14,
      category: "Biryani & Pulao",
      urdu: "بریانی ایک کلو",
      name: "Biryani 1 KG",
      description: "Without Chicken",
      price: 560,
    },
    {
      id: 15,
      category: "Biryani & Pulao",
      urdu: "چکن بریانی پلیٹ",
      name: "Chicken Biryani",
      description: "Single Plate",
      price: 250,
      featured: true,
    },
    {
      id: 16,
      category: "Biryani & Pulao",
      urdu: "چکن بریانی آدھا کلو",
      name: "Chicken Biryani Half KG",
      description: "Half Kilogram",
      price: 350,
    },
    {
      id: 17,
      category: "Biryani & Pulao",
      urdu: "چکن بریانی ایک کلو",
      name: "Chicken Biryani 1 KG",
      description: "One Kilogram",
      price: 700,
    },
    {
      id: 18,
      category: "Biryani & Pulao",
      urdu: "چکن پلاؤ ایک کلو",
      name: "Chicken Pulao 1 KG",
      description: "One Kilogram",
      price: 700,
    },
  ];

  const drinks = [
    {
      id: 19,
      category: "Desserts & Drinks",
      urdu: "کھیر",
      name: "Kheer",
      description: "Traditional rice pudding",
      price: 200,
    },
    {
      id: 20,
      category: "Desserts & Drinks",
      urdu: "جمّہ گجّر اسپیشل لسی",
      name: "Jumma Gujjar Special Lassi",
      description: "Our signature traditional lassi",
      price: 150,
      featured: true,
    },
    {
      id: 21,
      category: "Desserts & Drinks",
      urdu: "پستہ ملک بوتل",
      name: "Pista Milk Bottle",
      description: "Chilled pistachio milk",
      price: 120,
    },
  ];

  /* =========================================
     CART
  ========================================= */

  const addToCart = (item) => {
    setCart((current) => {
      const existing = current.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [...current, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const getQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  /* =========================================
     TOTALS
  ========================================= */

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const finalTotal = totalPrice + delivery.fee;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-PK").format(price);

  /* =========================================
     CUSTOMER DETAILS
  ========================================= */

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));

    if (name === "address") {
      setDelivery({
        distance: null,
        fee: 0,
        loading: false,
        error: "",
      });
    }
  };

  /* =========================================
     OPEN GOOGLE MAPS
  ========================================= */

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=24.8964922,67.0453184",
      "_blank"
    );
  };

  /* =========================================
     DISTANCE
  ========================================= */

  const calculateDistance = (
    lat1,
    lon1,
    lat2,
    lon2
  ) => {
    const R = 6371;

    const dLat =
      ((lat2 - lat1) * Math.PI) / 180;

    const dLon =
      ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    return R * c;
  };

  /* =========================================
     DELIVERY FEE
  ========================================= */

  const getDeliveryFee = (distance) => {
    const rate = DELIVERY_RATES.find(
      (item) => distance <= item.maxDistance
    );

    return rate ? rate.fee : null;
  };

  /* =========================================
     CALCULATE DELIVERY
  ========================================= */

  const calculateDelivery = async () => {
    if (!customer.address.trim()) {
      setDelivery({
        distance: null,
        fee: 0,
        loading: false,
        error: "Please enter your delivery address.",
      });

      return;
    }

    setDelivery({
      distance: null,
      fee: 0,
      loading: true,
      error: "",
    });

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=pk&q=${encodeURIComponent(
          customer.address
        )}`
      );

      if (!response.ok) {
        throw new Error("Address lookup failed");
      }

      const results = await response.json();

      if (!results.length) {
        setDelivery({
          distance: null,
          fee: 0,
          loading: false,
          error:
            "Address not found. Please enter a more complete Karachi address.",
        });

        return;
      }

      const customerLat = parseFloat(results[0].lat);
      const customerLng = parseFloat(results[0].lon);

      const distance = calculateDistance(
        RESTAURANT_LOCATION.lat,
        RESTAURANT_LOCATION.lng,
        customerLat,
        customerLng
      );

      const fee = getDeliveryFee(distance);

      if (fee === null) {
        setDelivery({
          distance,
          fee: 0,
          loading: false,
          error:
            "Sorry, this address is outside our delivery area.",
        });

        return;
      }

      setDelivery({
        distance,
        fee,
        loading: false,
        error: "",
      });
    } catch {
      setDelivery({
        distance: null,
        fee: 0,
        loading: false,
        error:
          "Unable to calculate delivery charges. Please try again.",
      });
    }
  };

  /* =========================================
     WHATSAPP
  ========================================= */

  const orderOnWhatsApp = () => {
    if (!cart.length) return;

    if (!customer.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!customer.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!customer.address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    if (delivery.loading) {
      alert("Please wait while delivery charges are calculated.");
      return;
    }

    if (
      delivery.distance === null ||
      delivery.error
    ) {
      alert("Please calculate your delivery charges first.");
      return;
    }

    const restaurantNumber = "923168937463";

    let message =
      "Assalam-o-Alaikum Jumma Gujjar Nihari & Pakwan!\n\n";

    message += "I would like to place an order:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${
        item.quantity
      } — Rs. ${formatPrice(
        item.price * item.quantity
      )}\n`;
    });

    message += "\n------------------------\n";
    message += `Subtotal: Rs. ${formatPrice(totalPrice)}\n`;
    message += `Delivery Distance: ${delivery.distance.toFixed(
      1
    )} km\n`;
    message += `Delivery Charges: Rs. ${formatPrice(
      delivery.fee
    )}\n`;
    message += `TOTAL: Rs. ${formatPrice(finalTotal)}\n`;
    message += "------------------------\n\n";

    message += "Customer Details:\n";
    message += `Name: ${customer.name}\n`;
    message += `Phone: ${customer.phone}\n`;
    message += `Address: ${customer.address}\n`;

    if (customer.location.trim()) {
      message += `Google Maps Location: ${customer.location}\n`;
    }

    message +=
      "\nPlease confirm my order.\nThank you!";

    const whatsappUrl =
      `https://wa.me/${restaurantNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };

  /* =========================================
     MENU ITEM
  ========================================= */

  const MenuItem = ({ item }) => {
    const quantity = getQuantity(item.id);

    return (
      <div
        className={`menu-card ${
          item.featured ? "featured-card" : ""
        }`}
      >
        <div className="menu-card-top">
          <div className="menu-names">
            <div className="urdu-name">
              {item.urdu}
            </div>

            <h4>{item.name}</h4>

            <p>{item.description}</p>
          </div>

          <div className="menu-price">
            <small>RS.</small>
            <strong>
              {formatPrice(item.price)}
            </strong>
          </div>
        </div>

        <div className="menu-card-bottom">
          <span>JUMMA GUJJAR</span>

          {quantity === 0 ? (
            <button
              className="add-button"
              onClick={() => addToCart(item)}
            >
              <Plus size={14} />
              ADD
            </button>
          ) : (
            <div className="quantity-control">
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                <Minus size={13} />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                <Plus size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="menu-section" id="menu">
        <div className="menu-header">
          <div className="menu-label">
            <span></span>
            OUR MENU
          </div>

          <div className="menu-heading-row">
            <h2>
              The Taste
              <span>Of Tradition.</span>
            </h2>

            <p>
              Discover the flavors that have made
              Jumma Gujjar a name for authentic
              Karachi Nihari and traditional
              Pakistani cuisine.
            </p>
          </div>
        </div>

        {/* NIHARI */}

        <div className="menu-category">
          <div className="menu-category-heading">
            <div>
              <span className="category-number">01</span>

              <div>
                <small>OUR SPECIALTY</small>
                <h3>Nihari</h3>
              </div>
            </div>

            <span className="category-line"></span>
          </div>

          <div className="nihari-grid">
            {nihariItems.map((item) => (
              <MenuItem
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* SIDES */}

        <div className="menu-category">
          <div className="menu-category-heading">
            <div>
              <span className="category-number">02</span>

              <div>
                <small>ON THE SIDE</small>
                <h3>Breads & Sides</h3>
              </div>
            </div>

            <span className="category-line"></span>
          </div>

          <div className="nihari-grid">
            {sides.map((item) => (
              <MenuItem
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* BIRYANI */}

        <div className="menu-category">
          <div className="menu-category-heading">
            <div>
              <span className="category-number">03</span>

              <div>
                <small>
                  TRADITIONAL FAVORITES
                </small>

                <h3>Biryani & Pulao</h3>
              </div>
            </div>

            <span className="category-line"></span>
          </div>

          <div className="nihari-grid">
            {biryaniItems.map((item) => (
              <MenuItem
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* DRINKS */}

        <div className="menu-category">
          <div className="menu-category-heading">
            <div>
              <span className="category-number">04</span>

              <div>
                <small>
                  SWEET & REFRESHING
                </small>

                <h3>Desserts & Drinks</h3>
              </div>
            </div>

            <span className="category-line"></span>
          </div>

          <div className="nihari-grid">
            {drinks.map((item) => (
              <MenuItem
                item={item}
                key={item.id}
              />
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="menu-cta">
          <div>
            <span>READY TO ORDER?</span>

            <h3>
              Taste the tradition.
              <em>Made for you.</em>
            </h3>
          </div>

          <button
            className="menu-cart-cta"
            onClick={() => setCartOpen(true)}
          >
            View Your Order
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      {/* FLOATING CART */}

      {totalItems > 0 && !cartOpen && (
        <button
          className="floating-cart"
          onClick={() => setCartOpen(true)}
        >
          <span className="floating-cart-icon">
            <ShoppingBag size={19} />
            <b>{totalItems}</b>
          </span>

          <span>Your Order</span>

          <strong>
            Rs. {formatPrice(totalPrice)}
          </strong>

          <ArrowUpRight size={18} />
        </button>
      )}

      {/* CART */}

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="cart-header">
              <div>
                <small>YOUR SELECTION</small>
                <h2>Your Order</h2>
              </div>

              <button
                className="cart-close"
                onClick={() =>
                  setCartOpen(false)
                }
              >
                <X size={22} />
              </button>
            </div>

            {/* ITEMS */}

            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingBag size={38} />
                  <h3>Your cart is empty</h3>
                  <p>
                    Add something delicious from
                    our menu.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    className="cart-item"
                    key={item.id}
                  >
                    <div className="cart-item-info">
                      <span>
                        {item.urdu}
                      </span>

                      <h4>{item.name}</h4>

                      <small>
                        Rs.{" "}
                        {formatPrice(
                          item.price
                        )}{" "}
                        each
                      </small>
                    </div>

                    <div className="cart-item-actions">
                      <div className="cart-quantity">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item.id
                            )
                          }
                        >
                          <Minus size={12} />
                        </button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <strong className="cart-item-total">
                        Rs.{" "}
                        {formatPrice(
                          item.price *
                            item.quantity
                        )}
                      </strong>

                      <button
                        className="remove-item"
                        onClick={() =>
                          removeFromCart(
                            item.id
                          )
                        }
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* BOTTOM */}

            <div className="cart-bottom">
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>

                  <strong>
                    Rs.{" "}
                    {formatPrice(
                      totalPrice
                    )}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>
                    Delivery
                    {delivery.distance !==
                      null &&
                      ` (${delivery.distance.toFixed(
                        1
                      )} km)`}
                  </span>

                  <strong>
                    {delivery.fee > 0
                      ? `Rs. ${formatPrice(
                          delivery.fee
                        )}`
                      : "—"}
                  </strong>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row summary-total">
                  <span>Total</span>

                  <strong>
                    Rs.{" "}
                    {formatPrice(
                      finalTotal
                    )}
                  </strong>
                </div>
              </div>

              {/* CUSTOMER */}

              <div className="customer-fields">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={customer.name}
                  onChange={
                    handleCustomerChange
                  }
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={customer.phone}
                  onChange={
                    handleCustomerChange
                  }
                />

                <textarea
                  name="address"
                  placeholder="Delivery Address — Karachi"
                  rows="3"
                  value={customer.address}
                  onChange={
                    handleCustomerChange
                  }
                />

                {/* MAP BUTTON */}

                <button
                  type="button"
                  className="map-location-button"
                  onClick={openGoogleMaps}
                >
                  <MapPin size={17} />

                  Choose Location on Google Maps

                  <ArrowUpRight
                    size={16}
                  />
                </button>

                <input
                  type="text"
                  name="location"
                  placeholder="Paste Google Maps location link (optional)"
                  value={customer.location}
                  onChange={
                    handleCustomerChange
                  }
                />

                {/* CALCULATE */}

                <button
                  type="button"
                  className="calculate-delivery"
                  onClick={calculateDelivery}
                  disabled={delivery.loading}
                >
                  {delivery.loading
                    ? "Calculating..."
                    : "Calculate Delivery Charges"}
                </button>

                {/* STATUS */}

                {delivery.distance !==
                  null &&
                  !delivery.error &&
                  !delivery.loading && (
                    <div className="delivery-result">
                      <div>
                        <span>
                          Distance
                        </span>

                        <strong>
                          {delivery.distance.toFixed(
                            1
                          )}{" "}
                          km
                        </strong>
                      </div>

                      <div>
                        <span>
                          Delivery
                        </span>

                        <strong>
                          Rs.{" "}
                          {formatPrice(
                            delivery.fee
                          )}
                        </strong>
                      </div>
                    </div>
                  )}

                {delivery.error && (
                  <p className="delivery-error">
                    {delivery.error}
                  </p>
                )}
              </div>

              <button
                className="whatsapp-order"
                onClick={
                  orderOnWhatsApp
                }
              >
                Order on WhatsApp
                <ArrowUpRight size={19} />
              </button>

              <p className="cart-note">
                Your order will open in
                WhatsApp for confirmation.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Menu;