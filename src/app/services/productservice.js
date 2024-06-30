

import { httpaxious } from "../helper/httphelper";



export async function productadd(task) {
  const result = await httpaxious.post("/api/product", task).then((response) => response.data);
  return result
}

export async function productget(x , y) {
  const result = await httpaxious.get(`/api/product/usedfor/${x}/name/${y}`).then((response) => response.data);
  return result
}

export async function productgetsingle(x ) {
  const result = await httpaxious.get(`/api/product/usedfor/${x}`).then((response) => response.data);
  return result
}

export async function singleproductget(x ) {
  const result = await httpaxious.get(`/api/product/${x}`).then((response) => response.data);
  return result
}



