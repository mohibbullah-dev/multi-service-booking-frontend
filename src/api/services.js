import { api } from "./client";

export async function getServices() {
  const { data } = await api.get("/api/services");
  return data.services;
}

export async function createService(payload) {
  const { data } = await api.post("/api/services", payload);
  return data.service;
}

export async function deleteService(id) {
  await api.delete(`/api/services/${id}`);
}

export async function getService(id) {
  const { data } = await api.get(`/api/services/${id}`);
  return data.service;
}
