import React, { Component } from "react";
import "./FilterSection.css";
import $ from "jquery";

export class FilterSection extends Component {
  handleClick = (id) => {
    let cls = `.FilterContent${id}`;
    $(cls).slideToggle(300);
  };

  render() {
    return (
      <React.Fragment>
        <div className="FilterContainer">
          <div className="Filter">
            <header>
              <span>Apply Filters</span>
            </header>
          </div>
          <div className="SubFilters">
            <button onClick={() => this.handleClick(1)}>
              Filter <i className="fa fa-caret-down"></i>
            </button>

            <ul className="FilterContent1">
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter1"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter2"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter3"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter4"
                ></input>
              </li>
            </ul>
          </div>
          <div className="SubFilters">
            <button onClick={() => this.handleClick(2)}>
              Filter <i className="fa fa-caret-down"></i>
            </button>

            <ul className="FilterContent2">
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter5"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter6"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter7"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter8"
                ></input>
              </li>
            </ul>
          </div>
          <div className="SubFilters">
            <button onClick={() => this.handleClick(3)}>
              Filter <i className="fa fa-caret-down"></i>
            </button>

            <ul className="FilterContent3">
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter5"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter6"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter7"
                ></input>
              </li>
              <li>
                SubHeading{" "}
                <input
                  id="checkbox"
                  type="checkbox"
                  value="Filter8"
                ></input>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterSection;
