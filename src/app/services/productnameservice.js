


import { httpaxious } from "../helper/httphelper";



export async function productnameadd(task) {
  const result = await httpaxious.post("/api/name", task).then((response) => response.data);
  return result
}

export async function productnameget(x) {
  console.log(x);
  const result = await httpaxious.get(`/api/name/${x}`).then((response) => response.data);
  return result
}