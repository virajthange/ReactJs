import Button from "./Button";

const Hero = () => {
  return (
    <div className=" w-full h-[62vh] bg-[whitesmoke] flex items-center flex-col justify-center">
      <h1 className="w-[85%] text-6xl sm:w-[40%] text-center md:w-[70%] xl:w-[60%]  justify-center font-bold items-center font-serif">
        The best way to{" "}
        <span className="px-4 rounded-xl bg-blue-400">learn</span> anything
      </h1>
      <p className="w-[85%] sm:w-[45%] py-5 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        dolorum.
      </p>
      <Button title="Be a part of our community" />
    </div>
  );
};
export default Hero;
