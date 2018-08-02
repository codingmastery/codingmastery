import React from 'react';
import { Link } from 'react-router-dom';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      submitted: false,
      success: false,
      email: '',
      email_: '',
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
      const encodedData= this.encode({ "form-name": "subscribeHome", "email": `${this.state.email}` });
      console.log('encoded data', encodedData);
      
      fetch("/send_mail", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData
      })
        .then((response) => {
           
          alert("Success!");
          console.log(response); 
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
      this.state.submitted === false ? (
        <React.Fragment>
          <h1> Learn to code </h1>
          <p>It's easy. We provide all the steps!</p>
          <form name="subscribe" netlify data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={this.state.email_}
              onChange={e => {
                e.persist();
                this.setState(prevState => ({ email_: e.target.value }));
              }}
            />
          </form>
          <form 
            name='subscribe'
            netlify 
            data-netlify="true" 
            className="form-box" 
            onSubmit={this.handleSubmit}
          >
            <div className="input">
              <input type="hidden" name="form-name" value="subscribe" />
              <label className="labelEmail" htmlFor="email">
                Enter you email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => {
                  e.persist();
                  this.setState(prevState => ({ email: e.target.value }));
                }}
              />
            </div>
          </form>
          <button className="cta" onClick={this.handleSubmit}>
            Subscribe now!
          </button>
          <p className="small">(Email will only be use to send updates)</p>
        </React.Fragment>
      ) : 
      null
      // this.state.success ? (
      //   <div className="form-box form-success">
      //     <h1>Super!</h1>
      //     <p> You are one step closer to conquer the world! </p>
      //     <p className="small">Mwahahahahaha</p>
      //   </div>
      // ) : (
      //   <React.Fragment>
      //     <div className="form-box form-failure">
      //       <h1>Something went wrong!</h1>
      //       <p>
      //         Please try again in a few minutes.We are investigating the issue.
      //       </p>
      //     </div>
      //     <Link className="link-cta" to="/">
      //       Back Home
      //     </Link>
      //   </React.Fragment>
      // )
    );
  }
}

export default Subscribe;