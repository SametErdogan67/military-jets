import { Image } from "react-bootstrap";

import nato from "../assets/nato.png";

const Header = () => {
  return (
    <div>
      <Image src={nato} width="200px"></Image>
      <h2 className="my-2 font-monospace display-5 fw-bold mb-5 text-light">
        Military Jets
      </h2>
    </div>
  );
};

export default Header;
