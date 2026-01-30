import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { getService } from "../api/services";
import { createBooking } from "../api/bookings";

export default function Booking() {
  const { serviceId } = useParams();

  const [service, setService] = useState(null);
  const [date, setDate] = useState(""); // yyyy-mm-dd
  const [time, setTime] = useState(""); // HH:MM
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function load() {
      setErr("");
      setLoading(true);
      try {
        const s = await getService(serviceId);
        setService(s);
      } catch (e) {
        setErr(e?.response?.data?.message || "Failed to load service");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [serviceId]);

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setSuccess("");

    if (!date || !time) {
      setErr("Please choose a date and time");
      return;
    }

    // Create ISO string from date + time (local time)
    const startAt = new Date(`${date}T${time}:00`);
    if (Number.isNaN(startAt.getTime())) {
      setErr("Invalid date/time");
      return;
    }

    setSaving(true);
    try {
      await createBooking({ serviceId, startAt: startAt.toISOString() });
      setSuccess("Booking created ✅");
      setDate("");
      setTime("");
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to create booking");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-slate-300">Loading...</p>;

  if (err && !service) {
    return (
      <div className="space-y-4">
        <p className="text-red-400">{err}</p>
        <Link to="/services">
          <Button variant="ghost">Back to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">Book Service</h1>
        <p className="text-slate-300">
          {service.title} • {service.durationMins} mins • ${service.price}
        </p>
      </div>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold">Choose date & time</h2>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Date</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Time</label>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {err ? <p className="text-sm text-red-400">{err}</p> : null}
          {success ? <p className="text-sm text-green-400">{success}</p> : null}

          <Button className="w-full" type="submit" disabled={saving}>
            {saving ? "Booking..." : "Confirm booking"}
          </Button>
        </form>
      </Card>

      <Link to={`/services/${service._id}`}>
        <Button variant="ghost">Back</Button>
      </Link>
    </div>
  );
}
