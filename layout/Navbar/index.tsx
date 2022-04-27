import { Image } from "@nextui-org/react";
//assets
import logo from "../../public/kluu_logo.png";

const Navbar = () => {
  return (
    <nav>
      <Image
        width={200}
        height={120}
        src="../../public/kluu_logo.png"
        alt="Kluu Logo"
        objectFit="cover"
      />
    </nav>
  );
};

export default Navbar;
