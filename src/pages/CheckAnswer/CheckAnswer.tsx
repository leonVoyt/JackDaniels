import { useEffect, useState } from "react";
import ArrowSVG from "../../assets/img/svg/Arrow";
import CardFooter from "../../components/CardFooter/CardFooter";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import "./styles.css";
import RedXSVG from "../../assets/img/svg/X";
import { useNavigate } from "react-router-dom";
const CheckAnswer = () => {
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const duration = 6000;
    const steps = 100;
    const intervalTime = duration / steps;

    let currentPercent = 0;

    const interval = setInterval(() => {
      currentPercent += 1;

      setPercent(currentPercent);

      if (currentPercent === 100) {
        clearInterval(interval);
        return navigate("/game");
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MainWrapper>
      <section className="check-answer-wrapper">
        <div className="check-answer--content">
          <div className="check-answer">
            <p className="check-answer--text">
              We are checking your answers...
            </p>
            <span className="check-answer__bar">
              <span style={{ width: `${percent}%` }} />
            </span>
            <div className="check-answer__points">
              <span className="check-answer__points-item">
                {percent > 33 ? <ArrowSVG /> : <RedXSVG />}

                <p>You answered 4 out of 4 questions</p>
              </span>
              <span className="check-answer__points-item">
                {percent > 66 ? <ArrowSVG /> : <RedXSVG />}

                <p>There are no previous polls from your IP address.</p>
              </span>
              <span className="check-answer__points-item">
                {percent > 99 ? <ArrowSVG /> : <RedXSVG />}

                <p>There are still prizes available!</p>
              </span>
            </div>
          </div>

          <CardFooter />
        </div>
      </section>
    </MainWrapper>
  );
};
export default CheckAnswer;
