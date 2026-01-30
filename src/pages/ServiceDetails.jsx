import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { getService } from "../api/services";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function load() {
      setErr("");
      setLoading(true);
      try {
        const s = await getService(id);
        setService(s);
      } catch (e) {
        setErr(e?.response?.data?.message || "Failed to load service");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p className="text-slate-300">Loading...</p>;

  if (err) {
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
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="text-slate-300">
          {service.durationMins} mins • ${service.price}
        </p>
      </div>

      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">About</h2>
        <p className="text-slate-300">
          {service.description || "No description provided."}
        </p>
      </Card>

      <div className="flex gap-3">
        <Link to="/services">
          <Button variant="ghost">Back</Button>
        </Link>

        {/* Next step later: route to booking with this service */}
        <Link to={`/booking/${service._id}`}>
          <Button>Book this service</Button>
        </Link>
      </div>
    </div>
  );
}
