
import { httpaxious } from "@/helper/httphelper";

export async function Signupuser(task) {
  console.log("Hello");
  console.log(task);
  const result = await httpaxious.post("/api/user", task).then((response) => response.data);
  return result
}