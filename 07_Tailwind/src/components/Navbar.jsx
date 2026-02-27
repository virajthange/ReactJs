import Button from "../components/Button";
const Navbar = () => {
  return (
    <div className="font-medium bg-blue-400 w-full h-[8vh] flex justify-between items-center px-4">
      <h2>
        <span className="text-3xl font-bold text-red-800">B</span>rand
      </h2>
      <nav>
        <ul className="hidden  flex gap-5 sm:flex ">
          <li>Home</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Products</li>
        </ul>
      </nav>
      <Button title="Contact Us" />
    </div>
  );
};

export default Navbar;
