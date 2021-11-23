const initialState = {
  list: [],
  cartList: [],
  viewItem: [],
};

const fetchProducts = (state, action) => {
  let temp = { ...state };
  let tempForm = [...temp.list];
  tempForm = action.item;
  temp.list = tempForm;
  return temp;
};

const cartProducts = (state, action) => {
  let temp = { ...state };
  let tempForm = [...temp.cartList];
  tempForm.push({ ...action.payload, quantity: 1 });
  temp.cartList = tempForm;
  return temp;
};

const quantityPlus = (state, action) => {
  let temp = { ...state };
  let tempForm = [...temp.cartList];
  let tempList = [...temp.list];
  let index = tempList.findIndex((element) => element.id === action.payload.id);
  tempForm.map((item, i) => {
    if (item.id === action.payload.id && item.quantity !== 5) {
      let itemQuantity = item.quantity + 1;
      let itemPrice = item.price + tempList[index].price;
      item.price = itemPrice;
      item.quantity = itemQuantity;
      return item;
    }
    return item;
  });
  temp.cartList = tempForm;

  return temp;
};

const quantityMinus = (state, action) => {
  let temp = { ...state };
  let tempForm = [...temp.cartList];
  let tempList = [...temp.list];
  let index = tempList.findIndex((element) => element.id === action.payload.id);
  tempForm.map((item, i) => {
    if (item.id === action.payload.id && item.quantity !== 1) {
      let itemQuantity = item.quantity - 1;
      let itemPrice = (item.price - tempList[index].price).toFixed(2);
      item.price = itemPrice;
      item.quantity = itemQuantity;
      return item;
    }

    return item;
  });
  temp.cartList = tempForm;

  return temp;
};

const viewProduct = (state, action) => {
  let temp = { ...state };
  let tempForm = [...temp.viewItem];
  tempForm = [action.payload];
  temp.viewItem = tempForm;
  return temp;
};

const removeCart = (state, action) => {
  let temp = { ...state };
  let tempForm = [...temp.cartList];
  tempForm = tempForm.filter((element) => element.id !== action.payload.id);
  temp.cartList = tempForm;
  return temp;
};

const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return state;

    case "FETCH_DATA_SUCCESS":
      return fetchProducts(state, action);

    case "CART_LIST":
      return cartProducts(state, action);

    case "QUANTITY_UP":
      return quantityPlus(state, action);

    case "QUANTITY_DOWN":
      return quantityMinus(state, action);

    case "VIEW_LIST":
      return viewProduct(state, action);

    case "REMOVE_CART":
      return removeCart(state, action);

    default:
      return state;
  }
};

export default getReducer;
