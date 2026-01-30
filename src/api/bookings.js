import { api } from "./client";

export async function createBooking(payload) {
  const { data } = await api.post("/api/bookings", payload);
  return data.booking;
}

export async function getMyBookings() {
  const { data } = await api.get("/api/bookings/my");
  return data.bookings;
}

export async function cancelBooking(id) {
  const { data } = await api.patch(`/api/bookings/${id}/cancel`);
  return data.booking;
}
