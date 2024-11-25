import { JackDanielsMainBG } from "../../assets/img/png";
import { ArrowRightSVG } from "../../assets/img/svg/Arrow";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import "./styles.css";
const GetGift = () => {
  return (
    <MainWrapper>
      <main className="container__get-gift">
        <img
          src={JackDanielsMainBG}
          alt="JackDanielsMainBG"
          className="JackDanielsMainBG"
        />
        <div className="get-gift__text--container">
          <h1 className="get-gift__text-main">You did it!</h1>
          <p className="get-gift__text-second">
            You won the Limited Edition Jack Daniel's Sinatra Century!
          </p>
        </div>

        <div className="get-gift__how-get">
          <h2 className="get-gift__how-get-title">How to get prize?</h2>
          <ol className="get-gift__how-get-list">
            <li>
              You will be directed to the website of our certified distributors.
            </li>
            <li>
              Enter your address to get your Limited Edition Jack Daniel's
              Sinatra Century.
            </li>
            <li>
              The Limited Edition Jack Daniel's Sinatra Century will be
              delivered within 5-7 days
            </li>
          </ol>
        </div>
        <button className="get-gift-btn">
          Apply now <ArrowRightSVG />
        </button>
      </main>
    </MainWrapper>
  );
};
export default GetGift;
