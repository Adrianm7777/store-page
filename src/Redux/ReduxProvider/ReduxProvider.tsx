import { ReactNode } from "react";
import store from "../Store/Store";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
