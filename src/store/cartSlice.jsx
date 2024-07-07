import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../data/const";

const initialState = {
  loading: false,
  name: '',
  phone_number: '',
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  total: 0,
  cartLength: JSON.parse(localStorage.getItem("cartItems"))?.length || 0,
};

export const addData = createAsyncThunk(
  "data/addData",
  async ({ apiEndpoint, newData }, thunkAPI) => {
    try {
      let data = newData.cart.map(el => {
        return {
          product: el.id,
          quantity: el.quantity,
          weight: el.weight,
          color: el.color
        }
      })
      const response = await axios.post(`${BASE_URL}${apiEndpoint}`, {
        name: newData.name,
        phone_number: newData.phone_number,
        items: data
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (initialState) => {
      initialState.cart = [];
      initialState.total = 0;
      initialState.name = '';
      initialState.phone_number = '';
      initialState.cartLength = 0;
      localStorage.removeItem("cartItems");
    },
    removeItem: (initialState, action) => {
      const itemId = action.payload;
      const tempCart = initialState.cart.filter((cartItem) => cartItem.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
        cartLength: tempCart.length
      };
    },
    incrementQuantity: (initialState, { payload }) => {
      let tempCart = initialState.cart.map((cartItem) => {
        if (cartItem.id === payload) {

          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    decrementQuantity: (initialState, { payload }) => {
      let tempCart = initialState.cart
        .map((cartItem) => {
          if (cartItem.id === payload) {

            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((el) => el.quantity !== 0);
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    calculateTotals: (initialState) => {
      return {
        ...initialState, total: initialState.cart.reduce((acc, item) => {
          return acc + item.price * item.quantity
        }, 0)
      };
    },
    setQuanTity: (initialState, { payload }) => {
      const { quantity, itemId } = payload;
      let tempCart = initialState.cart
        .map((cartItem) => {
          if (cartItem.id === itemId) {
            return {
              ...cartItem,
              quantity: quantity,
            };
          }
          return cartItem;
        })
        .filter((el) => el.quantity !== 0);
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    setCart: (initialState) => {
      return {
        ...initialState,
        cart: JSON.parse(localStorage.getItem("cartItems")) || [],
        cartLength: JSON.parse(localStorage.getItem("cartItems"))?.length || 0
      }
    },
    setName: (initialState, { payload }) => {

      return {
        ...initialState,
        name: payload
      }
    },
    setPhoneNumber: (initialState, { payload }) => {

      return {
        ...initialState,
        phone_number: payload
      }
    },
    getLength: (initialState, { payload }) => {
      return {
        ...initialState,
        cartLength: payload.length
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = [];
        state.name = '';
        state.phone_number = '';
        state.cartLength = 0;
        localStorage.removeItem("cartItems");
      })
      .addCase(addData.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const {
  clearCart,
  togglequantity,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  calculateTotals,
  setQuanTity,
  setCart,
  setName,
  setPhoneNumber,
  getLength
} = cartSlice.actions;

export default cartSlice.reducer;
