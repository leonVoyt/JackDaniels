import { FC, ReactNode } from "react";
import Header from "../Header/Header";
import "./styles.css";
interface MainWrapperProps {
  children: ReactNode; // Specifies that children can be any valid React node
}
const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-wrapper__content">{children}</div>
    </>
  );
};
export default MainWrapper;
