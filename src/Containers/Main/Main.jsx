import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      submitted: false,
      success: false,
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  handleSubmit(e) {
    e.persist();
    e.preventDefault();

    console.log("handleSumbit");
    if (this.state.count === 0) {
      console.log("arrow Function");
//      document.querySelector(".form-box").submit();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "subscribe", ...this.state })
      })
        .then(() => { 
          alert("Success!"); 
          this.setState(prevState => ({
            submitted: !prevState.submitted,
            count: prevState.count + 1
          })); 
        })
        .catch(error => alert(error));


      
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
              <form name="subscribe_home" netlify netlify-honeypot="bot-field" hidden>
                <input type="email" name="email" value={this.state.email} />
              </form>
              <form
                className="form-box"
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
                  value={this.state.email}
                  onChange={ (e)=> this.setState(()=>({email: e.value}))}
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
