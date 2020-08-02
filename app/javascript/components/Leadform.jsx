import React, { Component } from "react";
import Constants from "./Constants";

class Leadform extends Component {
  state = {};
  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    var edata = {
      name: $("input[name=name]").val(),
      emailId: $("input[name=email]").val(),
      mobileNumber: $("input[name=mobile]").val(),
      concern: $("#concern")[0].value,
    };
    $.ajax({
      type: "POST",
      url: Constants.backpath + "/saveLead",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(edata),
      datatype: "json",
      success: function (e) {
        alert("Your Request has been sent");
        location.reload();
      },
      error: function (e) {
        alert("Error occured");
      },
    });
  }
  render() {
    return (
      <div className="lead">
        <h6>We would love to hear from you </h6>
        <form id="leadform">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="concern"
              id="concern"
              placeholder="Please write your query here."
              className="form-control"
              aria-describedby="descHelp"
              required
            ></textarea>
          </div>
          <button
            id="leadsubmit"
            type="submit"
            className="btn btnlogin"
            onClick={(event) => this.handleClick(event)}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Leadform;
