export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md p-4 flex justify-between">
      <div className="font-bold text-brand-700">BrandGlow</div>

      <div className="space-x-4">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </div>
    </nav>
  );
}