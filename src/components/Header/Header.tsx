import { useState, useEffect } from "react";
import "./styles.css";
import TimerSVG from "../../assets/img/svg/Timer";
import { JackDanielsBG } from "../../assets/img/png";
import ShopSVG from "../../assets/img/svg/Shop";
import MainColorBlockWrapper from "../MainColorBlockWrapper/MainColorBlockWrapper";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(480);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }s`;
  };

  return (
    <header className="header">
      <MainColorBlockWrapper>
        <TimerSVG />
        <p>
          You only have <strong>{formatTime(timeLeft)}</strong>, to participate.
        </p>
      </MainColorBlockWrapper>
      <div className="header__logo">
        <img src={JackDanielsBG} alt="Logo" onClick={() => navigate("/")} />
        <ShopSVG />
      </div>
      <div className="header__event-date">
        <p>Loyalty program</p>
        <p>2 June 2024</p>
      </div>
    </header>
  );
};

export default Header;
