import React, { FC, useState } from "react";
import MainColorBlockWrapper from "../MainColorBlockWrapper/MainColorBlockWrapper";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import CardFooter from "../CardFooter/CardFooter";

interface Button {
  id: number;
  text: string;
}

interface QuestionnaireItem {
  id: number;
  customQuestion: string;
  btnLis: Button[];
}

const CustomQuestionnaire: QuestionnaireItem[] = [
  {
    id: 0,
    customQuestion: "Question 1 of 4:  Are you a man or a woman?",
    btnLis: [
      { id: 0, text: "Man" },
      { id: 1, text: "Woman" },
    ],
  },
  {
    id: 1,
    customQuestion: "Question 2 of 4:  How old are you?",
    btnLis: [
      { id: 0, text: "18-29" },
      { id: 1, text: "30-39" },
      { id: 2, text: "40-49" },
      { id: 3, text: "50+" },
    ],
  },
  {
    id: 2,
    customQuestion: "Question 3 of 4:  How many members are in your family?",
    btnLis: [
      { id: 0, text: "Alone" },
      { id: 1, text: "1" },
      { id: 2, text: "2" },
      { id: 3, text: "3+" },
    ],
  },
  {
    id: 3,
    customQuestion:
      "Question 4 of 4:  Have you bought anything at Jack Daniel's before?",
    btnLis: [
      { id: 0, text: "No" },
      { id: 1, text: "Yes" },
    ],
  },
];

interface CustomQuestionProps {
  text: string;
}

const CustomQuestion: FC<CustomQuestionProps> = ({ text }) => {
  return <p className="questionnaire__question">{text}</p>;
};

interface ButtonQuestionnaireProps {
  text: string;
  onClick: () => void;
}

const ButtonQuestionnaire: FC<ButtonQuestionnaireProps> = ({
  text,
  onClick,
}) => {
  return (
    <button className="button questionnaire" onClick={onClick}>
      {text}
    </button>
  );
};

const Questionnaire: FC = () => {
  const [question, setQuestion] = useState<number>(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (question === 3) {
      navigate("/check-answer");
    } else {
      setQuestion((prev) => prev + 1);
    }
  };

  return (
    <section className="questionnaire__wrapper">
      <MainColorBlockWrapper>
        <p>Hurry up! The number of prizes is limited!</p>
      </MainColorBlockWrapper>
      <div className="questionnaire--content">
        <div className="questionnaire--step-wrapper">
          {CustomQuestionnaire.map((el) => (
            <span
              key={el.id}
              className={`questionnaire--step ${
                el.id === question ? "active" : ""
              }`}
              onClick={() => setQuestion(el.id)}
            ></span>
          ))}
        </div>
        {CustomQuestionnaire.map((el) =>
          el.id === question ? (
            <React.Fragment key={el.id}>
              <CustomQuestion text={el.customQuestion} />
              {el.btnLis.map((btn) => (
                <ButtonQuestionnaire
                  key={btn.id}
                  text={btn.text}
                  onClick={handleClick}
                />
              ))}
            </React.Fragment>
          ) : null
        )}
      </div>
      <CardFooter />
    </section>
  );
};

export default Questionnaire;
