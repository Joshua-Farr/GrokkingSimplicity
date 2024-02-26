const cart = [];
let shoppingCartTotal = 0;

// We want to add a new feature when calculating the cart's total
// Each article of clothing sold will have a property named seasonType.  Possible values are "hot" | "cold" | "annual".
// "hot" seasons are from the months of April to September
// "cold" seasons are from the months of October to March
// The buyers get a 10% discount if bought in the item's off-season.
// "annual" seasonTypes never get a discount
// e.g. gloves have a seasonType of cold, so buyers get a 10 percent discount if bought anytime from April to September

function addItem(name, price, seasonType) {
  shopping_cart.push({
    name: name,
    price: price,
    seasonType: seasonType,
  });
}

function getCurrentDiscountSeason() {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  if (month >= 4 && month <= 9) {
    return "hot";
  }
  return "cold";
}

function getItemDiscountSeason(item) {
  let discountSeason = item.seasonType;
  return discountSeason;
}

function isItemEligibleForDiscount(discountSeason) {
  return discountSeason === getCurrentDiscountSeason() ? true : false;
}

function calculateItemPriceAfterDiscount(item) {
  let itemPrice = item.price;

  const discountEligible = isItemEligibleForDiscount(item);

  if (discountEligible) {
    itemPrice *= 0.9;
  }

  return itemPrice;
}

function calculateCartTotal() {
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    shoppingCartTotal += calculateItemPriceAfterDiscount(item);
  }
}

const exampleCart = [
  {
    name: "hat",
    price: 10,
    seasonType: "annual",
  },
  {
    name: "gloves",
    price: 5,
    seasonType: "cold",
  },
  {
    name: "sunglasses",
    price: 15,
    seasonType: "hot",
  },
  {
    name: "scarf",
    price: 8,
    seasonType: "cold",
  },
  {
    name: "shorts",
    price: 20,
    seasonType: "hot",
  },
  {
    name: "jacket",
    price: 30,
    seasonType: "cold",
  },
  {
    name: "t-shirt",
    price: 10,
    seasonType: "annual",
  },
  {
    name: "boots",
    price: 40,
    seasonType: "cold",
  },
  {
    name: "sandals",
    price: 25,
    seasonType: "hot",
  },
  {
    name: "socks",
    price: 5,
    seasonType: "annual",
  },
  {
    name: "umbrella",
    price: 15,
    seasonType: "annual",
  },
  {
    name: "swimsuit",
    price: 30,
    seasonType: "hot",
  },
  {
    name: "raincoat",
    price: 35,
    seasonType: "cold",
  },
  {
    name: "sweater",
    price: 25,
    seasonType: "cold",
  },
  {
    name: "tank top",
    price: 10,
    seasonType: "hot",
  },
  {
    name: "jeans",
    price: 30,
    seasonType: "annual",
  },
  {
    name: "dress",
    price: 40,
    seasonType: "annual",
  },
  {
    name: "skirt",
    price: 20,
    seasonType: "annual",
  },
  {
    name: "sweatpants",
    price: 25,
    seasonType: "cold",
  },
  {
    name: "sweatshirt",
    price: 30,
    seasonType: "cold",
  },
];
