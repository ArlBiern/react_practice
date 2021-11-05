import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import LoadingComponent from "./LoadingComponent";

class App extends React.Component {
  state = {
    lat: null,
    errorMessage: "",
  };

  getLattitude = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <LoadingComponent message="Please accept location request" />;
  }

  componentDidMount() {
    console.log("Componend Did Mount");
    this.getLattitude();
  }

  componentDidUpdate() {
    console.log("Componend Did Update");
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
