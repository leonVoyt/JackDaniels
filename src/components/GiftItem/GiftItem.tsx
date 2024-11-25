import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Bottom, BoxBg, Gift, Top } from "../../assets/img/png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
interface GiftItemProps {
  isWithGift?: boolean;
  onClick: () => void;
}
const GiftItem: FC<GiftItemProps> = ({ isWithGift = true, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setIsOpen(true);

    return setTimeout(() => {
      if (isWithGift) {
        navigate("/get-gift");
      }

      onClick();
    }, 1600);
  };

  return (
    <div className="gift-container">
      <motion.div className="gift-box" onClick={handleOpen}>
        {/* Box Body */}
        <motion.img src={Bottom} alt="Box Bottom" className="box-bottom" />
        <motion.img src={BoxBg} alt="Box BoxBg" className="box-bg" />

        {/* Box Lid */}
        <motion.img
          src={Top}
          alt="Box Top"
          className="box-top"
          animate={
            isOpen
              ? isWithGift
                ? {
                    y: [0, -10, -1200],
                    x: [0, 0, -1200],
                    rotateX: [0, 0, -90],
                    rotateZ: [0, 0, -60],
                  }
                : {
                    y: [0, -5, -5],
                    x: [0, 0, -20],
                    rotateX: [0, 0, -10],
                    rotateZ: [0, 0, -30],
                  }
              : { x: 0, y: 0, rotateX: 0, rotateZ: 0 }
          }
          transition={{
            duration: isWithGift ? 1.6 : 1.1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />

        {/* Light Effect */}
        <motion.div
          className="light-effect"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1.2 : 0.5,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {isWithGift && (
          <motion.span className="gift--hide">
            <motion.img
              src={Gift}
              alt="Gift"
              className="gift"
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: isOpen ? -50 : 50,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />
          </motion.span>
        )}

        {/* Gift */}
      </motion.div>
    </div>
  );
};

export default GiftItem;
