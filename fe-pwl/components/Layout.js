export default function Layout({ children, className }) {
  return (
    <div className={`${className}`}>
      <main className="container mx-auto px-10">{children}</main>
    </div>
  );
}
