interface ProductType {
  id: number;
  title: string;
  imageLink: string;
  price: number;
  quantity?: number;
  totalPrice?: number;
}

interface LocationState {
  pathname: string;
}

interface AddCartPayloadType {
  product: ProductType;
  quantityOfAllProducts: number;
  totalPrice: number;
}
