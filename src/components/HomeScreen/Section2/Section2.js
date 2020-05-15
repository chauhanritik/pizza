import React, { Component } from "react";
import Classes from "../../../styles/HomeScreen/Section2/Section2.module.css";

export class Section2 extends Component {
  state = {
    leaveTop: "",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = window.scrollY,
      leaveMax = Math.max(-50, scrollTop - 300),
      leaveTop = Math.min(100, leaveMax);
    console.log(scrollTop);

    this.setState({
      leaveTop: leaveTop,
    });
  };

  render() {
    const { Section2, leaves, IntroBox } = Classes;
    const { leaveTop } = this.state;
    return (
      <section className={Section2}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className={IntroBox}>
                <h1>Welcome to Our Pizzeria</h1>
                <span className="text-muted">
                  Collaboratively benchmark multifunctional methodologies
                  vis-a-vis effective imperatives. Completely morph proactive
                  bandwidth vis-a-vis highly efficient niches
                </span>
              </div>
            </div>
            <div className="col-md-12"></div>
          </div>
        </div>
        <img
          src="/assets/layer_02.png"
          className={leaves}
          alt="Leave"
          style={{ top: `${leaveTop}px` }}
        />
      </section>
    );
  }
}

export default Section2;
