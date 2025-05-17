import FooterList from "../api/footer.json";
import "../../src/footer.css";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const Footer = () => {
  const iconList = {
    IoIosCall: <IoIosCall size={23} />,
    FaLocationDot: <FaLocationDot size={23} />,
    IoMail: <IoMail size={23} />,
  };

  return (
    <div className="footer-outer ">
      <ul className="footer-container">
        {FooterList.map((curElem, index) => {
          const { title, icon, details } = curElem;

          return (
            <li key={index} className="footer-list" style={{ listStyle: "none" }}>
              <h1>{iconList[icon]}</h1>
              <div>
                <p style={{ fontSize: "13px" }}>{title}</p>
                <p style={{ fontSize: "13px" }}>{details}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
