import * as React from "react";
import { connect } from "react-redux";

import { startClock, tickClock } from "../src/redux/Clock/actions";
import { loadData } from "../src/redux/UserData/actions";
import Home from "../src/pages/home";

interface Props {
  dispatch: any;
  ctx: any;
}

class Index extends React.Component<Props, {}> {
  static async getInitialProps(props: Props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <Home title="Index Page" linkTo="/about" NavigateTo="Other Page" />;
  }
}

export default connect()(Index);
