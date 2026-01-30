import {
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      name: "Car Detailing",
      price: "$89",
      duration: "2 hours",
      category: "Automotive",
      image:
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&h=300&fit=crop",
    },
    {
      name: "Hair Styling",
      price: "$45",
      duration: "1 hour",
      category: "Beauty",
      image:
        "https://images.unsplash.com/photo-1562004760-acb5685fa628?w=400&h=300&fit=crop",
    },
    {
      name: "Massage Therapy",
      price: "$75",
      duration: "90 min",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    },
    {
      name: "Pet Grooming",
      price: "$55",
      duration: "1.5 hours",
      category: "Pet Care",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop",
    },
  ];

  const steps = [
    {
      icon: Calendar,
      title: "Choose Service",
      desc: "Browse our services and select what you need",
    },
    {
      icon: Clock,
      title: "Pick Date & Time",
      desc: "Select your preferred time slot",
    },
    {
      icon: CheckCircle,
      title: "Get Confirmed",
      desc: "Receive instant booking confirmation",
    },
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: TrendingUp, value: "2M+", label: "Bookings Monthly" },
    { icon: Award, value: "99.9%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-slate-950 opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Trusted by 10,000+ businesses
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Book Smarter.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Grow Faster.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto">
              The all-in-one booking platform that helps you manage
              appointments, automate reminders, and delight your customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all hover:scale-105 shadow-xl shadow-indigo-500/30"
              >
                Get Started Free
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-all border border-slate-700">
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-slate-950"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-slate-400 text-sm">
                  <span className="font-semibold text-white">4.9/5</span> from
                  2,000+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold mb-2 uppercase tracking-wide text-sm">
              Popular Services
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What We Offer
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <span className="text-2xl font-bold text-indigo-400">
                      {service.price}
                    </span>
                  </div>
                  <Link
                    to="/services"
                    className="block w-full py-2.5 text-center bg-indigo-600/10 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-semibold mb-2 uppercase tracking-wide text-sm">
              Simple Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Get Started in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                {/* Connection Line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-transparent" />
                )}

                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform shadow-xl shadow-indigo-500/30">
                    <step.icon className="w-12 h-12 text-white -rotate-3" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-950">
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-indigo-600 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 rounded-3xl text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:30px_30px]" />

            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses streamlining their booking process
              </p>
              <Link
                to="/services"
                className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
              >
                Get Started Free
              </Link>

              <div className="mt-8 text-white/80 text-sm">
                ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
