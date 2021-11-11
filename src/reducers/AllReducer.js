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
  console.log(tempForm);
  tempForm.push({ ...action.payload, quantity: 1 });
  console.log(action.payload);
  temp.cartList = tempForm;
  return temp;
};

const quantityPlus = (state, action) => {
  console.log(action);
  let temp = { ...state };
  let tempForm = [...temp.cartList];
  let tempList = [...temp.list];
  let index = tempList.findIndex((element) => element.id === action.payload.id);
  tempForm.map((item, i) => {
    if (item.id === action.payload.id && item.quantity !== 10) {
      let itemQuantity = item.quantity + 1;
      console.log(item.price, tempList[index].price);
      console.log(item.price + tempList[index].price);
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
  console.log(tempForm);
  console.log([action.payload]);
  tempForm = [action.payload];
  console.log(tempForm);
  temp.viewItem = tempForm;
  console.log(temp);
  return temp;
};

const getReducer = (state = initialState, action) => {
  console.log(action);
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

    default:
      return state;
  }
};

export default getReducer;
