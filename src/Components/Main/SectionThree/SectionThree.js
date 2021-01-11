import React from "react";

function SectionThree() {
  return (
    <div>
      <section className="second-wrapper">
        <div className="container">
          <div className="new-word d-none d-sm-none d-md-block">New</div>

          <div className="title-wrapper">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionThree;
