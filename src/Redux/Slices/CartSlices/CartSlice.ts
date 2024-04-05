import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const intialState: CartType = {
  products: [],
  quantityOfAllProducts: 0,
  allProductsPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddCartPayloadType>) => {
      const findProduct = state.products.find(
        (product) => product?.id === action.payload.product.id
      );
      if (findProduct) {
        findProduct.quantity! += action.payload.quantityOfAllProducts;
        findProduct.totalPrice! += action.payload.totalPrice;

        state.quantityOfAllProducts += action.payload.quantityOfAllProducts;
        state.allProductsPrice += action.payload.totalPrice;
      } else {
        const newProduct = {
          ...action.payload.product,
          totalPrice: action.payload.totalPrice,
          quantity: action.payload.quantityOfAllProducts,
        };

        state.products.push(newProduct);

        state.quantityOfAllProducts += action.payload.quantityOfAllProducts;

        state.allProductsPrice += action.payload.totalPrice;
      }
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const find = state.products.find(
        (product) => product?.id === action.payload
      );
      if (find) {
        state.quantityOfAllProducts -= find.quantity!;
        state.allProductsPrice -= find.totalPrice!;
      }

      state.products = state.products.filter(
        (product) => product?.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
