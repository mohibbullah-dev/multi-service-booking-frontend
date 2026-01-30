export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base = variant === "ghost" ? "btn-ghost" : "btn-primary";

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
