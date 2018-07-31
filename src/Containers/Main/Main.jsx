import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      submitted: false,
      success: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    //e.persist();
    //e.preventDefault();

    console.log("handleSumbit");
    if (this.state.count === 0) {
      console.log("arrow Function");
      document.querySelector(".form-box").submit();
      this.setState(prevState => ({
        submitted: !prevState.submitted,
        count: prevState.count + 1
      }));
    }
    return;
  }
  render() {
    return (
      <main className="grid-container-mainContent">
        <div className="jumbotron">
          {this.state.submitted === false ? (
            <React.Fragment>
              <h1> Learn to code </h1>
              <p>It's easy. We provide all the steps!</p>

              <form
                className="form-box"
                method="POST"
                action="/send-email"
                onSubmit={this.handleSubmit}
              >
                <label className="labelEmail" htmlFor="email">
                  Enter you email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />

                <div className="cta" onClick={this.handleSubmit}>
                  Subscribe now!
                </div>
              </form>
              <p className="small">(Email will only be use to send updates)</p>
            </React.Fragment>
          ) : this.state.success ? (
            <div className="form-box form-success">
              <h1>Super!</h1>
              <p> You are one step closer to conquer the world! </p>
              <p className="small">Mwahahahahaha</p>
            </div>
          ) : (
            <React.Fragment>
              <div className="form-box form-failure">
                <h1>Something went wrong!</h1>
                <p>
                  Please try again in a few minutes.We are investigating the
                  issue.
                </p>
              </div>
              <Link className="link-cta" to="/">
                Back Home
              </Link>
            </React.Fragment>
          )}
        </div>
      </main>
    );
  }
}

export default Main;
