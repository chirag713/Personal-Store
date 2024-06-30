import { httpaxious } from "../helper/httphelper";

export async function cartadd(task) {
  const result = await httpaxious.post("/api/cart", task).then((response) => response.data);
  return result
}

export async function cartget(x) {
  console.log(x);
  const result = await httpaxious.get(`/api/cart/${x}`).then((response) => response.data);
  return result
}

export async function deletecart(x,y) {
  const result = await httpaxious.delete(`/api/cart/${x}/productid/${y}`).then((response) => response.data);
  return result
}