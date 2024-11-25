import { useEffect, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import CardFooter from "../../components/CardFooter/CardFooter";
import GiftItem from "../../components/GiftItem/GiftItem";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import "./styles.css";

interface GiftBox {
  id: number;
  isWithGift: boolean;
}

interface ClickCountItem {
  id: number;
  text: string;
}

const customBoxList: GiftBox[] = [
  { id: 0, isWithGift: true },
  { id: 1, isWithGift: false },
  { id: 2, isWithGift: true },
  { id: 3, isWithGift: false },
  { id: 4, isWithGift: true },
  { id: 5, isWithGift: false },
  { id: 6, isWithGift: true },
  { id: 7, isWithGift: false },
  { id: 8, isWithGift: true },
];

const customClickCountList: ClickCountItem[] = [
  { id: 0, text: "1st Try" },
  { id: 1, text: "2nd Try" },
  { id: 2, text: "3rd Try" },
];

const Game: FC = () => {
  const [click, setClick] = useState<number>(0);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (): void => {
    setClick((prev) => prev + 1);
    setIsDisable(false);
  };

  useEffect(() => {
    if (click > 2) {
      alert("You lose :(");
      navigate("/");
    }
  }, [click]);

  return (
    <MainWrapper>
      <main className="container__game">
        <div className="container__game--content">
          <div className="game__header">
            <p className="game__header--text">
              Simply choose the right gift box...
            </p>
            <div className="game__try-container">
              {customClickCountList.map((el) => (
                <span
                  key={el.id}
                  className={`game__try-item ${
                    click === el.id ? "active" : ""
                  }`}
                >
                  {el.text}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`game__field-container ${isDisable ? "disable" : ""}`}
            onClick={() => setIsDisable(true)}
          >
            {customBoxList.map((el) => (
              <GiftItem
                key={el.id}
                isWithGift={el.isWithGift}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
        <CardFooter />
      </main>
    </MainWrapper>
  );
};

export default Game;
