import { api } from "./client";

export async function fetchMe() {
  const { data } = await api.get("/api/auth/me");
  return data.user;
}
