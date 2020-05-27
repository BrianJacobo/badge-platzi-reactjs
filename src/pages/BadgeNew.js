import React from "react";
import Navbar from "../components/Navbar";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import avatar from "../images/GAAAAA.jpeg";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state={ form:{
    firstName:'',
    lastName:'',
    email:'',
    jobTilte:'',
    twitter:'',
  } }

  handleChange = e=>{
    // const nextForm = this.state.form;
    // nextForm[e.target.name]=e.target.value;

    this.setState({
      // form:nextForm,
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value,
      }
    })
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                avatar={avatar}
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange}/>
              {/* aqui se lo pasamos como prop a BadgeFomr*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BadgeNew;
