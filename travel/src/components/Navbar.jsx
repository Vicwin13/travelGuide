import logo from "../assets/Fill 213.png"
export default function Navbar() {
  return (
    <>
        <nav className="bg-[#f55a5a] flex p-[1rem] gap-1 justify-center">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <p className="text-white font-medium">
                my travel journal
            </p>
        </nav>
    </>
  );
}
