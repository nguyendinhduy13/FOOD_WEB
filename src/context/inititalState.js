import { fetchCart, fetchUser } from "../ultils/FetchLocalStorage"

const userInfo=fetchUser();
const cartInfo=fetchCart();

export const initalState={
        user:userInfo,
        foodIitems:null,
        cartShow:false,
        cartItems:cartInfo,
};
