import React from "react";

class BadgeForm extends React.Component {
  state={}
    // handleChange = e=>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value,
    //     // })
    //     this.setState({
    //       [e.target.name]: e.target.value,
    //     })
    // }
    handleClick = e=>{
        console.log('button was clicked')
    }
    handleSubmit = e=>{
        e.preventDefault()
        console.log('form was submited')
        console.log(this.state)

    }
  render() {
    return (
      <>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              // cambiamos "this.handleChange" por
              // "this.props.onXhange" porque estamos
              // recibiendo los props de BadgeNew a travez
              // de "onChange"
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>

        </form>
      </>
    );
  }
}

export default BadgeForm