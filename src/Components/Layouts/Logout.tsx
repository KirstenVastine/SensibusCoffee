import * as React from "react";

type LogoutProps = {
  history: any;
};

type LogoutState = {};

class Logout extends React.Component<LogoutProps, LogoutState> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.handleLogout();
  }

  handleLogout() {
    localStorage.clear();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        <h1>Logging out .......</h1>
      </div>
    );
  }
}

export default Logout;
