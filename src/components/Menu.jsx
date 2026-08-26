import {
  ArrowUpRight,
  ShoppingBag,
  Plus,
  Minus,
  X,
  Trash2,
  MapPin,
  Navigation,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

function Menu() {
  /* =========================================================
     RESTAURANT LOCATION
  ========================================================= */

  const RESTAURANT_LOCATION = {
    lat: 24.8964922,
    lng: 67.0453184,
  };

  /* =========================================================
     DELIVERY RATES

     Distance is based on ACTUAL DRIVING DISTANCE from OSRM.
  ========================================================= */

  const DELIVERY_RATES = [
    { maxDistance: 3, fee: 100 },
    { maxDistance: 5, fee: 150 },
    { maxDistance: 8, fee: 200 },
    { maxDistance: 12, fee: 300 },
    { maxDistance: 15, fee: 400 },
  ];

  /* =========================================================
     STATES
  ========================================================= */

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    location: "",
  });

  const [delivery, setDelivery] = useState({
    distance: null,
    fee: 0,
    loading: false,
    error: "",
    source: "",
  });

  /* =========================================================
     MENU ITEMS
  ========================================================= */

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
      urdu: "جمّہ گجّر اسپیشل نہاری تھالی",
      name: "Jumma Gujjar Special Nihari Thaali",
      description: "The ultimate Jumma Gujjar specialty",
      price: 2400,
      featured: true,
    },
    {
      id: 22,
      category: "Nihari",
      urdu: "جمّہ گجّر نہاری ٹن 450 گرام",
      name: "Jumma Gujjar Nihari Tin 450 GM",
      description:
        "Our signature Nihari packed in a convenient 450 GM tin",
      price: 800,
      featured: true,
    },
    {
      id: 23,
      category: "Nihari",
      urdu: "جمّہ گجّر نہاری ٹن 900 گرام",
      name: "Jumma Gujjar Nihari Tin 900 GM",
      description:
        "Our signature Nihari packed in a generous 900 GM tin",
      price: 1600,
      featured: true,
    },
  ];

  const extras = [
    {
      id: 24,
      category: "Extras",
      urdu: "ایکسٹرا مغز",
      name: "Extra Maghaz",
      description: "Rich and traditional brain topping",
      price: 400,
    },
    {
      id: 25,
      category: "Extras",
      urdu: "ایکسٹرا نلی",
      name: "Extra Nalli",
      description: "Tender bone marrow served extra",
      price: 400,
    },
    {
      id: 26,
      category: "Extras",
      urdu: "ایکسٹرا بوٹی",
      name: "Extra Boti",
      description: "Extra tender Nihari meat pieces",
      price: 300,
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
      price: 80,
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

  /* =========================================================
     CART FUNCTIONS
  ========================================================= */

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

      return [
        ...current,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
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
    const item = cart.find(
      (item) => item.id === id
    );

    return item ? item.quantity : 0;
  };

  /* =========================================================
     TOTALS
  ========================================================= */

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const finalTotal =
    totalPrice + delivery.fee;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-PK").format(
      price
    );

  /* =========================================================
     CUSTOMER INPUT
  ========================================================= */

  const resetDelivery = () => {
    setDelivery({
      distance: null,
      fee: 0,
      loading: false,
      error: "",
      source: "",
    });
  };

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));

    /*
      Any change to address/landmark/location means
      the previous delivery calculation is no longer valid.
    */

    if (
      name === "address" ||
      name === "landmark" ||
      name === "location"
    ) {
      resetDelivery();
    }
  };

  /* =========================================================
     GOOGLE MAPS
  ========================================================= */

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=24.8964922,67.0453184",
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* =========================================================
     GOOGLE MAPS COORDINATE EXTRACTION
  =========================================================

     Handles common Google Maps URLs containing coordinates.

     Examples:

     https://www.google.com/maps/@24.9001,67.0502,17z

     https://www.google.com/maps/search/?api=1&query=24.9001,67.0502

     https://www.google.com/maps?q=24.9001,67.0502
  ========================================================= */

  const extractCoordinatesFromGoogleMapsLink = (
    rawUrl
  ) => {
    if (!rawUrl || !rawUrl.trim()) {
      return null;
    }

    try {
      const url = new URL(rawUrl.trim());

      const host = url.hostname.toLowerCase();

      if (
        !host.includes("google.com") &&
        !host.includes("googleusercontent.com") &&
        !host.includes("maps.app.goo.gl") &&
        !host.includes("goo.gl")
      ) {
        return null;
      }

      /*
        1. ?query=lat,lng
      */

      const queryValues = [
        url.searchParams.get("query"),
        url.searchParams.get("q"),
        url.searchParams.get("ll"),
      ];

      for (const value of queryValues) {
        if (!value) continue;

        const match = value.match(
          /(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)/
        );

        if (match) {
          const lat = Number(match[1]);
          const lng = Number(match[2]);

          if (
            lat >= -90 &&
            lat <= 90 &&
            lng >= -180 &&
            lng <= 180
          ) {
            return { lat, lng };
          }
        }
      }

      /*
        2. /@lat,lng,zoom
      */

      const atMatch = rawUrl.match(
        /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)(?:,\d+(?:\.\d+)?z)?/
      );

      if (atMatch) {
        const lat = Number(atMatch[1]);
        const lng = Number(atMatch[2]);

        if (
          lat >= -90 &&
          lat <= 90 &&
          lng >= -180 &&
          lng <= 180
        ) {
          return { lat, lng };
        }
      }

      /*
        3. Coordinates anywhere in URL.

        This catches some additional Google Maps formats.
      */

      const genericMatch = rawUrl.match(
        /(-?\d{1,3}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)/
      );

      if (genericMatch) {
        const lat = Number(genericMatch[1]);
        const lng = Number(genericMatch[2]);

        if (
          lat >= -90 &&
          lat <= 90 &&
          lng >= -180 &&
          lng <= 180
        ) {
          return { lat, lng };
        }
      }

      return null;
    } catch {
      return null;
    }
  };

  /* =========================================================
     GEOCODE ADDRESS
  ========================================================= */

  const geocodeAddress = async () => {
    const fullAddress = [
      customer.address.trim(),
      customer.landmark.trim(),
      "Karachi, Pakistan",
    ]
      .filter(Boolean)
      .join(", ");

    const geocodeUrl =
      "https://nominatim.openstreetmap.org/search" +
      "?format=jsonv2" +
      "&limit=1" +
      "&countrycodes=pk" +
      "&addressdetails=1" +
      `&q=${encodeURIComponent(fullAddress)}`;

    const response = await fetch(
      geocodeUrl,
      {
        method: "GET",
        headers: {
          Accept:
            "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        "Address lookup failed."
      );
    }

    const results =
      await response.json();

    if (
      !results ||
      !results.length
    ) {
      return null;
    }

    const lat = Number(
      results[0].lat
    );

    const lng = Number(
      results[0].lon
    );

    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng)
    ) {
      return null;
    }

    return {
      lat,
      lng,
    };
  };

  /* =========================================================
     OSRM ROAD DISTANCE
  ========================================================= */

  const getRoadDistance = async (
    customerLat,
    customerLng
  ) => {
    const routeUrl =
      "https://router.project-osrm.org/route/v1/driving/" +
      `${RESTAURANT_LOCATION.lng},${RESTAURANT_LOCATION.lat};` +
      `${customerLng},${customerLat}` +
      "?overview=false&alternatives=false&steps=false";

    const response =
      await fetch(routeUrl);

    if (!response.ok) {
      throw new Error(
        "Road route calculation failed."
      );
    }

    const routeData =
      await response.json();

    if (
      routeData.code !== "Ok" ||
      !routeData.routes ||
      !routeData.routes.length
    ) {
      throw new Error(
        "No driving route was found."
      );
    }

    /*
      OSRM returns meters.
      Convert to kilometers.
    */

    const distance =
      Number(
        routeData.routes[0].distance
      ) / 1000;

    if (
      !Number.isFinite(distance) ||
      distance < 0
    ) {
      throw new Error(
        "Invalid route distance."
      );
    }

    return distance;
  };

  /* =========================================================
     DELIVERY FEE
  ========================================================= */

  const getDeliveryFee = (
    distance
  ) => {
    const rate =
      DELIVERY_RATES.find(
        (item) =>
          distance <=
          item.maxDistance
      );

    return rate
      ? rate.fee
      : null;
  };

  /* =========================================================
     CALCULATE DELIVERY
  ========================================================= */

  const calculateDelivery =
    async () => {
      const address =
        customer.address.trim();

      const landmark =
        customer.landmark.trim();

      const locationLink =
        customer.location.trim();

      if (!address) {
        setDelivery({
          distance: null,
          fee: 0,
          loading: false,
          error:
            "Please enter your delivery address.",
          source: "",
        });

        return;
      }

      setDelivery({
        distance: null,
        fee: 0,
        loading: true,
        error: "",
        source: "",
      });

      try {
        let coordinates =
          null;

        let source =
          "";

        /*
          ======================================================
          PRIORITY 1 — GOOGLE MAPS LINK
          ======================================================
        */

        if (locationLink) {
          coordinates =
            extractCoordinatesFromGoogleMapsLink(
              locationLink
            );

          if (coordinates) {
            source =
              "Google Maps location";
          }
        }

        /*
          ======================================================
          PRIORITY 2 — ADDRESS + LANDMARK
          ======================================================
        */

        if (!coordinates) {
          coordinates =
            await geocodeAddress();

          if (coordinates) {
            source =
              landmark
                ? "Address + landmark"
                : "Delivery address";
          }
        }

        /*
          ======================================================
          LOCATION NOT FOUND
          ======================================================
        */

        if (!coordinates) {
          setDelivery({
            distance: null,
            fee: 0,
            loading: false,
            error:
              "We could not locate this address. Please enter a more complete address, add a nearby landmark, or paste a Google Maps location link.",
            source: "",
          });

          return;
        }

        /*
          ======================================================
          IMPORTANT SAFETY CHECK

          Prevent accidentally calculating a location
          outside Pakistan.
        ======================================================
        */

        if (
          coordinates.lat < 23 ||
          coordinates.lat > 38 ||
          coordinates.lng < 60 ||
          coordinates.lng > 78
        ) {
          setDelivery({
            distance: null,
            fee: 0,
            loading: false,
            error:
              "The selected location does not appear to be in Pakistan. Please enter a Karachi delivery location.",
            source: "",
          });

          return;
        }

        /*
          ======================================================
          ACTUAL ROAD DISTANCE
          ======================================================
        */

        const distance =
          await getRoadDistance(
            coordinates.lat,
            coordinates.lng
          );

        /*
          ======================================================
          DELIVERY FEE
          ======================================================
        */

        const fee =
          getDeliveryFee(distance);

        /*
          ======================================================
          OUTSIDE DELIVERY AREA
          ======================================================
        */

        if (fee === null) {
          setDelivery({
            distance,
            fee: 0,
            loading: false,
            error:
              `Your location is ${distance.toFixed(
                1
              )} km away. Unfortunately, our delivery area currently covers locations up to 15 km.`,
            source,
          });

          return;
        }

        /*
          ======================================================
          SUCCESS
          ======================================================
        */

        setDelivery({
          distance,
          fee,
          loading: false,
          error: "",
          source,
        });
      } catch (error) {
        console.error(
          "Delivery calculation error:",
          error
        );

        setDelivery({
          distance: null,
          fee: 0,
          loading: false,
          error:
            "Unable to calculate the driving distance right now. Please check your address or Google Maps link and try again.",
          source: "",
        });
      }
    };

  /* =========================================================
     WHATSAPP ORDER
  ========================================================= */

  const orderOnWhatsApp =
    () => {
      if (!cart.length) {
        return;
      }

      if (!customer.name.trim()) {
        alert(
          "Please enter your name."
        );
        return;
      }

      if (!customer.phone.trim()) {
        alert(
          "Please enter your phone number."
        );
        return;
      }

      if (!customer.address.trim()) {
        alert(
          "Please enter your delivery address."
        );
        return;
      }

      if (delivery.loading) {
        alert(
          "Please wait while delivery charges are being calculated."
        );
        return;
      }

      if (
        delivery.distance ===
          null ||
        delivery.error
      ) {
        alert(
          "Please calculate your delivery charges first."
        );
        return;
      }

      const restaurantNumber =
        "923168937463";

      let message =
        "Assalam-o-Alaikum Jumma Gujjar Nihari & Pakwan!\n\n";

      message +=
        "I would like to place an order:\n\n";

      cart.forEach(
        (item, index) => {
          message += `${index + 1}. ${
            item.name
          } x${item.quantity} — Rs. ${formatPrice(
            item.price *
              item.quantity
          )}\n`;
        }
      );

      message +=
        "\n------------------------\n";

      message += `Subtotal: Rs. ${formatPrice(
        totalPrice
      )}\n`;

      message += `Driving Distance: ${delivery.distance.toFixed(
        2
      )} km\n`;

      message += `Delivery Charges: Rs. ${formatPrice(
        delivery.fee
      )}\n`;

      message += `TOTAL: Rs. ${formatPrice(
        finalTotal
      )}\n`;

      message +=
        "------------------------\n\n";

      message +=
        "Customer Details:\n";

      message += `Name: ${customer.name}\n`;

      message += `Phone: ${customer.phone}\n`;

      message += `Address: ${customer.address}\n`;

      if (customer.landmark.trim()) {
        message += `Nearby Landmark: ${customer.landmark}\n`;
      }

      if (customer.location.trim()) {
        message += `Google Maps Location: ${customer.location}\n`;
      }

      message +=
        "\nPlease confirm my order.\nThank you!";

      const whatsappUrl =
        `https://wa.me/${restaurantNumber}?text=` +
        encodeURIComponent(
          message
        );

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    };

  /* =========================================================
     MENU ITEM
  ========================================================= */

  const MenuItem = ({
    item,
  }) => {
    const quantity =
      getQuantity(item.id);

    return (
      <div
        className={`menu-card ${
          item.featured
            ? "featured-card"
            : ""
        }`}
      >
        <div className="menu-card-top">
          <div className="menu-names">
            <div className="urdu-name">
              {item.urdu}
            </div>

            <h4>{item.name}</h4>

            <p>
              {item.description}
            </p>
          </div>

          <div className="menu-price">
            <small>RS.</small>

            <strong>
              {formatPrice(
                item.price
              )}
            </strong>
          </div>
        </div>

        <div className="menu-card-bottom">
          <span>
            JUMMA GUJJAR
          </span>

          {quantity === 0 ? (
            <button
              className="add-button"
              onClick={() =>
                addToCart(item)
              }
            >
              <Plus size={14} />
              ADD
            </button>
          ) : (
            <div className="quantity-control">
              <button
                onClick={() =>
                  decreaseQuantity(
                    item.id
                  )
                }
              >
                <Minus size={13} />
              </button>

              <span>
                {quantity}
              </span>

              <button
                onClick={() =>
                  increaseQuantity(
                    item.id
                  )
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

  /* =========================================================
     CATEGORY
  ========================================================= */

  const Category = ({
    number,
    subtitle,
    title,
    items,
  }) => (
    <div className="menu-category">
      <div className="menu-category-heading">
        <div>
          <span className="category-number">
            {number}
          </span>

          <div>
            <small>
              {subtitle}
            </small>

            <h3>{title}</h3>
          </div>
        </div>

        <span className="category-line"></span>
      </div>

      <div className="nihari-grid">
        {items.map((item) => (
          <MenuItem
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {/* =====================================================
          MENU
      ===================================================== */}

      <section
        className="menu-section"
        id="menu"
      >
        <div className="menu-header">
          <div className="menu-label">
            <span></span>
            OUR MENU
          </div>

          <div className="menu-heading-row">
            <h2>
              The Taste
              <span>
                Of Tradition.
              </span>
            </h2>

            <p>
              Discover the flavors
              that have made Jumma
              Gujjar a name for
              authentic Karachi
              Nihari and traditional
              Pakistani cuisine.
            </p>
          </div>
        </div>

        <Category
          number="01"
          subtitle="OUR SPECIALTY"
          title="Nihari"
          items={nihariItems}
        />

        <Category
          number="02"
          subtitle="EXTRAS"
          title="Nihari Extras"
          items={extras}
        />

        <Category
          number="03"
          subtitle="ON THE SIDE"
          title="Breads & Sides"
          items={sides}
        />

        <Category
          number="04"
          subtitle="TRADITIONAL FAVORITES"
          title="Biryani & Pulao"
          items={biryaniItems}
        />

        <Category
          number="05"
          subtitle="SWEET & REFRESHING"
          title="Desserts & Drinks"
          items={drinks}
        />

        {/* CTA */}

        <div className="menu-cta">
          <div>
            <span>
              READY TO ORDER?
            </span>

            <h3>
              Taste the tradition.
              <em>
                Made for you.
              </em>
            </h3>
          </div>

          <button
            className="menu-cart-cta"
            onClick={() =>
              setCartOpen(true)
            }
          >
            View Your Order
            <ArrowUpRight
              size={18}
            />
          </button>
        </div>
      </section>

      {/* =====================================================
          FLOATING CART
      ===================================================== */}

      {totalItems > 0 &&
        !cartOpen && (
          <button
            className="floating-cart"
            onClick={() =>
              setCartOpen(true)
            }
          >
            <span className="floating-cart-icon">
              <ShoppingBag
                size={19}
              />

              <b>
                {totalItems}
              </b>
            </span>

            <span>
              Your Order
            </span>

            <strong>
              Rs.{" "}
              {formatPrice(
                totalPrice
              )}
            </strong>

            <ArrowUpRight
              size={18}
            />
          </button>
        )}

      {/* =====================================================
          CART OVERLAY
      ===================================================== */}

      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() =>
            setCartOpen(false)
          }
        >
          <aside
            className="cart-drawer"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* CART HEADER */}

            <div className="cart-header">
              <div>
                <small>
                  YOUR SELECTION
                </small>

                <h2>
                  Your Order
                </h2>
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

            {/* CART ITEMS */}

            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingBag
                    size={38}
                  />

                  <h3>
                    Your cart is empty
                  </h3>

                  <p>
                    Add something
                    delicious from
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

                      <h4>
                        {item.name}
                      </h4>

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
                          <Minus
                            size={12}
                          />
                        </button>

                        <strong>
                          {
                            item.quantity
                          }
                        </strong>

                        <button
                          onClick={() =>
                            increaseQuantity(
                              item.id
                            )
                          }
                        >
                          <Plus
                            size={12}
                          />
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
                        <Trash2
                          size={15}
                        />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* =================================================
                CART BOTTOM
            ================================================= */}

            <div className="cart-bottom">

              {/* SUMMARY */}

              <div className="cart-summary">
                <div className="summary-row">
                  <span>
                    Subtotal
                  </span>

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
                        2
                      )} km)`}
                  </span>

                  <strong>
                    {delivery.fee >
                    0
                      ? `Rs. ${formatPrice(
                          delivery.fee
                        )}`
                      : "—"}
                  </strong>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row summary-total">
                  <span>
                    Total
                  </span>

                  <strong>
                    Rs.{" "}
                    {formatPrice(
                      finalTotal
                    )}
                  </strong>
                </div>
              </div>

              {/* =================================================
                  CUSTOMER DETAILS
              ================================================= */}

              <div className="customer-fields">

                <div className="delivery-heading">
                  <MapPin
                    size={18}
                  />

                  <div>
                    <strong>
                      Delivery Details
                    </strong>

                    <span>
                      Enter your address
                      so we can calculate
                      your exact driving
                      distance.
                    </span>
                  </div>
                </div>

                {/* NAME */}

                <label className="field-label">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={
                    customer.name
                  }
                  onChange={
                    handleCustomerChange
                  }
                  autoComplete="name"
                />

                {/* PHONE */}

                <label className="field-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="03XX XXXXXXX"
                  value={
                    customer.phone
                  }
                  onChange={
                    handleCustomerChange
                  }
                  autoComplete="tel"
                />

                {/* ADDRESS */}

                <label className="field-label">
                  Delivery Address
                  <span>
                    Required
                  </span>
                </label>

                <textarea
                  name="address"
                  placeholder="House / Flat No., Street, Block, Area, Karachi"
                  rows="3"
                  value={
                    customer.address
                  }
                  onChange={
                    handleCustomerChange
                  }
                  autoComplete="street-address"
                />

                {/* LANDMARK */}

                <label className="field-label">
                  Nearby Landmark
                  <span className="optional-label">
                    Optional
                  </span>
                </label>

                <input
                  type="text"
                  name="landmark"
                  placeholder="e.g. near Lucky One Mall, mosque, school, petrol pump..."
                  value={
                    customer.landmark
                  }
                  onChange={
                    handleCustomerChange
                  }
                />

                {/* LOCATION LINK */}

                <div className="location-link-heading">
                  <Navigation
                    size={16}
                  />

                  <div>
                    <label className="field-label">
                      Google Maps Location
                      <span className="optional-label">
                        Optional
                      </span>
                    </label>

                    <small>
                      Paste your Google
                      Maps location link
                      for the most accurate
                      result.
                    </small>
                  </div>
                </div>

                <button
                  type="button"
                  className="map-location-button"
                  onClick={
                    openGoogleMaps
                  }
                >
                  <MapPin
                    size={17}
                  />

                  Open Google Maps

                  <ArrowUpRight
                    size={16}
                  />
                </button>

                <input
                  type="url"
                  name="location"
                  placeholder="Paste Google Maps link here"
                  value={
                    customer.location
                  }
                  onChange={
                    handleCustomerChange
                  }
                  inputMode="url"
                />

                <div className="location-help">
                  <Navigation
                    size={14}
                  />

                  <span>
                    A Google Maps link
                    containing your exact
                    location gives us the
                    most accurate delivery
                    calculation.
                  </span>
                </div>

                {/* CALCULATE */}

                <button
                  type="button"
                  className="calculate-delivery"
                  onClick={
                    calculateDelivery
                  }
                  disabled={
                    delivery.loading
                  }
                >
                  {delivery.loading ? (
                    <>
                      <span className="delivery-spinner"></span>
                      Calculating Road
                      Distance...
                    </>
                  ) : (
                    <>
                      <Navigation
                        size={17}
                      />
                      Calculate Delivery
                      Charges
                    </>
                  )}
                </button>

                {/* SUCCESS */}

                {delivery.distance !==
                  null &&
                  !delivery.error &&
                  !delivery.loading && (
                    <div className="delivery-result">

                      <div className="delivery-success-title">
                        <CheckCircle2
                          size={17}
                        />

                        <span>
                          Delivery available
                        </span>
                      </div>

                      <div className="delivery-result-grid">
                        <div>
                          <span>
                            Driving Distance
                          </span>

                          <strong>
                            {delivery.distance.toFixed(
                              2
                            )}{" "}
                            km
                          </strong>
                        </div>

                        <div>
                          <span>
                            Delivery Charges
                          </span>

                          <strong>
                            Rs.{" "}
                            {formatPrice(
                              delivery.fee
                            )}
                          </strong>
                        </div>
                      </div>

                      <small className="delivery-source">
                        Calculated using road
                        distance
                      </small>
                    </div>
                  )}

                {/* ERROR */}

                {delivery.error && (
                  <div className="delivery-error">
                    <span>
                      {delivery.error}
                    </span>
                  </div>
                )}
              </div>

              {/* WHATSAPP */}

              <button
                className="whatsapp-order"
                onClick={
                  orderOnWhatsApp
                }
              >
                Order on WhatsApp

                <ArrowUpRight
                  size={19}
                />
              </button>

              <p className="cart-note">
                Your order will open
                in WhatsApp for
                confirmation.
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default Menu;