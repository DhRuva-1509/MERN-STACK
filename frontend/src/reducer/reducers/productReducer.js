import {
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS
} from '../actions/productActions';

const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT_SUCCESS:
      return { ...state, products: [...state.products, action.payload] };

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload)
      };

    default:
      return state;
  }
};

export default productReducer;