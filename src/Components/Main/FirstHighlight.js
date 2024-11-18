import React from "react";

const FirstHighlight = () => {
  return (
    <section className="first-hightlight-wrapper">
      <div className="container">
        <div className="new-alert">New</div>
        <div className="title-wraper bold black">iPad Pro</div>
        <div className="links-wrapper">
          <ul>
            {/* we can also use Font Awesome class,<i className="fa fa-chevron-right"></i>*/}
            <li>
              <a href="#"> Learn more</a>
            </li>

            <li>
              <a href="#">Order</a>
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
};

export default FirstHighlight;
