import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="footer_wrapper">
          <h3 className="footer1">
            Nasza firma - wszelkie prawa zastrzeżone, 2022
          </h3>
          <div className="social_media">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
      </footer>
    </div>
  );
};
