import React, { Component } from "react";
import Section1 from "../components/HomeScreen/Section1/Section1";
import Section2 from "../components/HomeScreen/Section2/Section2";

export class HomeScreen extends Component {
  render() {
    return (
      <section>
        <Section1 />
        <Section2 />
      </section>
    );
  }
}

export default HomeScreen;
