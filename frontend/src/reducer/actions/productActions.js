import api from '../../api/api';
import { toast } from 'react-toastify';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await api.get('/products');
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch products");
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    const response = await api.post('/products', product);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: response.data
    });
    toast.success("Product added successfully");
  } catch (error) {
    console.error(error);
    toast.error("Failed to add product");
  }
};

export const editProduct = (product) => async (dispatch) => {
  try {
    const response = await api.put(`/products/${product.id}`, product);
    dispatch({
      type: EDIT_PRODUCT_SUCCESS,
      payload: response.data
    });
    toast.success("Product updated successfully");
  } catch (error) {
    console.error(error);
    toast.error("Failed to update product");
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    await api.delete(`/products/${productId}`);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId
    });
    toast.success("Product deleted successfully");
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete product");
  }
};
