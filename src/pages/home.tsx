import * as React from "react";
import Link from "next/link";
import { connect } from "react-redux";

import Counter from "./components/counter";
import Clock from "./components/clock";

interface Props {
  error: any;
  lastUpdate: any;
  light: boolean;
  linkTo: string;
  NavigateTo: string;
  placeholderData: any;
  title: string;
}

const Home: React.FC<Props> = ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
};

export default connect(state => state)(Home);
