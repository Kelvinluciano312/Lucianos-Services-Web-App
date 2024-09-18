import React, { Component } from "react";
import Zmage from "react-zmage";

class Portfolio extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;

    const projects = data.projects.map((project, index) => {
      const projectImage = "images/portfolio/" + project.image;
      return (
        <div key={index} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              {project.title}
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of Our Works</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
