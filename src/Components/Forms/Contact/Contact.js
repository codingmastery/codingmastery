import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      submitted: false,
      success: false,
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  handleSubmit(e) {
    e.persist();
    

    console.log('handleSumbit');
    if (this.state.count === 0) {
      console.log('arrow Function');
      //      document.querySelector(".form-box").submit();

      fetch('/send_mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'subscribeHome',
          email: `${this.state.email}`
        })
      })
        .then(response => {
          alert('Success!');
          console.log(response);
          this.setState(prevState => ({
            submitted: !prevState.submitted,
            count: prevState.count + 1
          }));
        })
        .catch(error => alert(error));
        
    }

    e.preventDefault();
    return;
  }
  render() {
    return (
      <div className="form-container">
        <p> We will get back to you asap! </p>
        <form className="form-box" netlify data-netlify="true" name='contact' method="POST">
          <div className="input">
            <label htmlFor="contactName">Name</label>
            <input type="text" id="contactName" name="contactName" />
          </div>
          <div className="input">
            <label htmlFor="contactEmail">Email</label>
            <input type="text" id="contactEmail" name="contactEmail" />
          </div>
          <div className="input">
            <label htmlFor="emailMessage">Message</label>
            <textarea
              id="emailMessage"
              name="emailSubject"
              rows="10"
              cols="140"
            />
          </div>
        </form>
        <button className="cta" onClick={e => console.log('clicked!')}>
          Send Message
        </button>
      </div>
    );
  }
}

export default Contact;
