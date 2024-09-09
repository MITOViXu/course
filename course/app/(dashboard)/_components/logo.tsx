import Image from "next/image";

const Logo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Image width={130} height={130} alt="logo" src={"/course.svg"} />
      <p style={{ fontFamily: "fantasy", margin: "0 0 15px 0" }}>
        Course to Learn 🐐{" "}
      </p>
    </div>
  );
};

export default Logo;
