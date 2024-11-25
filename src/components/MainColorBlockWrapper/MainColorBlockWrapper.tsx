import { FC, ReactNode } from "react";

interface MainColorBlockWrapperProps {
  children: ReactNode; // Specifies that children can be any valid React node
}
const MainColorBlockWrapper: FC<MainColorBlockWrapperProps> = ({
  children,
}) => {
  return <div className="header__notification">{children}</div>;
};
export default MainColorBlockWrapper;
