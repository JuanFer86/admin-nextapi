/* 
cookie cart
{
    'uuid-123-1': 4
    'uuid-123-2': 4
    'uuid-123-3': 4
    'uuid-123-4': 4
}

*/

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = async (): Promise<{ [id: string]: number }> => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((await getCookie("cart")) ?? "{}");
    return cookieCart;
  }

  return {};
};

export const addProductToCart = async (id: string) => {
  const cookieCart = await getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = async (id: string) => {
  const cookieCart = await getCookieCart();

  delete cookieCart[id];

  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = async (id: string) => {
  const cookieCart = await getCookieCart();

  if (!cookieCart[id]) return;

  cookieCart[id] -= 1;

  if (cookieCart[id] === 0) delete cookieCart[id];

  setCookie("cart", JSON.stringify(cookieCart));
};
