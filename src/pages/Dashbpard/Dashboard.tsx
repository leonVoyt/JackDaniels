import { JackDanielsMainBG, Subtract } from "../../assets/img/png";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import "./styles.css";
const Dashboard = () => {
  return (
    <MainWrapper>
      <main>
        <section className="container__main">
          <span className="btn__main">
            <img src={Subtract} alt="" />
            <span className="btn__main-text">Exclusive Offer for You!</span>
          </span>
          <div className="main__text-wrapper">
            <h1 className="text__main">
              Congratulations! You Could Win a Limited Edition Jack Daniel's
              Sinatra Century!
            </h1>
            <p className="main__color-opacity">
              Today, 2 June, 2024, you have been chosen to participate in this
              survey.
              <span className="main__color">
                {" "}
                It will only take a minute of your time{" "}
              </span>
              and you can
              <span className="main__color"> receive a fantastic prize: </span>
              Limited Edition Jack Daniel's Sinatra Century!
            </p>
          </div>
          <img
            src={JackDanielsMainBG}
            alt="JackDanielsMainBG"
            className="JackDanielsMainBG"
          />
          <div className="main__color-opacity">
            <p>
              Every Sunday we choose 10 random users giving them the
              <span className="main__color">
                {" "}
                chance to win fabulous prizes
              </span>
              . Today's prize is a Limited Edition Jack Daniel's Sinatra
              Century!
              <span className="main__color">
                {" "}
                There will be 10 lucky winners. Only for those living in the
                United States!{" "}
              </span>
            </p>
            <p style={{ marginTop: 10 }}>
              This survey aims to improve the service for our users.
            </p>
          </div>
          <Questionnaire />
        </section>
      </main>
    </MainWrapper>
  );
};
export default Dashboard;
