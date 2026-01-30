import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { getServices, createService, deleteService } from "../api/services";
import { Link } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // Create form
  const [title, setTitle] = useState("");
  const [durationMins, setDurationMins] = useState(30);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [creating, setCreating] = useState(false);

  const isAuthed = !!localStorage.getItem("token");

  async function load() {
    setErr("");
    setLoading(true);
    try {
      const data = await getServices();
      setServices(data);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load services");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onCreate(e) {
    e.preventDefault();
    setErr("");
    if (!isAuthed) {
      setErr("Login first to create services.");
      return;
    }

    setCreating(true);
    try {
      const newService = await createService({
        title,
        durationMins,
        price,
        description,
      });
      setServices((prev) => [newService, ...prev]);
      setTitle("");
      setDurationMins(30);
      setPrice(0);
      setDescription("");
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to create service");
    } finally {
      setCreating(false);
    }
  }

  async function onDelete(id) {
    setErr("");
    try {
      await deleteService(id);
      setServices((prev) => prev.filter((s) => s._id !== id));
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to delete service");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Services</h1>
        <p className="text-slate-300">
          Browse and (if logged in) create services.
        </p>
      </div>

      {err ? <p className="text-sm text-red-400">{err}</p> : null}

      {/* Create service */}
      <Card className="space-y-4">
        <h2 className="text-lg font-semibold">Create service</h2>
        <form onSubmit={onCreate} className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Haircut"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Duration (mins)</label>
            <Input
              type="number"
              value={durationMins}
              onChange={(e) => setDurationMins(e.target.value)}
              min={5}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Price</label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min={0}
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="text-sm text-slate-300">
              Description (optional)
            </label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short details..."
            />
          </div>

          <div className="md:col-span-2">
            <Button className="w-full" type="submit" disabled={creating}>
              {creating ? "Creating..." : "Create"}
            </Button>
          </div>
        </form>
      </Card>

      {/* List services */}
      {loading ? (
        <p className="text-slate-300">Loading...</p>
      ) : services.length === 0 ? (
        <p className="text-slate-300">No services yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s._id} className="space-y-3">
              <div>
                <Link to={`/services/${s._id}`} className="hover:underline">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </Link>

                <p className="text-slate-300">
                  {s.durationMins} mins • ${s.price}
                </p>
                {s.description ? (
                  <p className="text-slate-400 text-sm mt-2">{s.description}</p>
                ) : null}
              </div>

              {isAuthed ? (
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => onDelete(s._id)}
                >
                  Delete
                </Button>
              ) : (
                <p className="text-xs text-slate-400">
                  Login to manage services.
                </p>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
