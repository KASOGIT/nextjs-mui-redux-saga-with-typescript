import * as React from "react";
import { useDispatch } from "react-redux";

import { startClock, tickClock } from "../src/redux/Clock/actions";
import { loadData } from "../src/redux/UserData/actions";
import Home from "../src/pages/home";

interface Props {
  dispatch: any;
  ctx: any;
  getInitialProps: any;
}

const Index: any = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startClock());
  });

  return <Home title="Index Page" linkTo="/about" NavigateTo="Other Page" />;
};

Index.getInitialProps = async (props: Props) => {
  const { store, isServer } = props.ctx;
  store.dispatch(tickClock(isServer));

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
  }

  return { isServer };
};

export default Index;
