import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { getMyBookings } from "../api/bookings";
import { Link } from "react-router-dom";

function formatDateTime(iso) {
  const d = new Date(iso);
  return d.toLocaleString(); // simple for now
}

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  async function load() {
    setErr("");
    setLoading(true);
    try {
      const data = await getMyBookings();
      setBookings(data);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <p className="text-slate-300">Your latest reservations.</p>
        </div>

        <Button variant="ghost" onClick={load}>
          Refresh
        </Button>
      </div>

      {loading ? (
        <p className="text-slate-300">Loading...</p>
      ) : err ? (
        <p className="text-red-400">{err}</p>
      ) : bookings.length === 0 ? (
        <Card>
          <p className="text-slate-300">No bookings yet.</p>
          <div className="mt-4">
            <Link to="/services">
              <Button>Browse services</Button>
            </Link>
          </div>
        </Card>
      ) : (
        <div className="grid gap-4">
          {bookings.map((b) => (
            <Card key={b._id} className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">
                    {b.serviceId?.title || "Service"}
                  </h3>
                  <p className="text-slate-300">{formatDateTime(b.startAt)}</p>
                </div>

                <span className="text-sm rounded-full border border-slate-700 px-3 py-1">
                  {b.status}
                </span>
              </div>

              <div className="text-sm text-slate-300">
                <span className="text-slate-400">Duration:</span>{" "}
                {b.serviceId?.durationMins ?? "-"} mins{" "}
                <span className="mx-2 text-slate-600">•</span>
                <span className="text-slate-400">Price:</span> $
                {b.serviceId?.price ?? "-"}
              </div>

              {b.serviceId?._id ? (
                <Link
                  to={`/services/${b.serviceId._id}`}
                  className="inline-block"
                >
                  <Button variant="ghost">View service</Button>
                </Link>
              ) : null}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
