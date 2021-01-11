import React from "react";

function SectionTwo() {
  return (
    <section className="first-wrapper">
      <div className="container">
        <div className="new-word d-none d-sm-none d-md-block">New</div>

        <div className="title-wrapper">iPad Pro</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
          </ul>
        </div>

        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
