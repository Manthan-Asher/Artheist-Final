import React, {Component} from "react";
import "./FilterSection.css";
import $ from "jquery";
import {getContests} from "../../actions/contests";
import {connect} from "react-redux";

export class FilterSection extends Component {
  state = {
    showFilter: false,
  };

  handleClick = (id) => {
    let cls = `.FilterContent${id}`;
    $(cls).slideToggle(300);
  };

  toggleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter,
    });
  };

  applyFilter = (e) => {
    this.props.getContests({type: e.target.name, limit: 3});
  };
  render() {
    let filterClasses = "FilterContainer";
    filterClasses += this.state.showFilter ? " showFilter" : "";
    return (
      <React.Fragment>
        <div className="filterSection">
          <div className="filterToggle" onClick={this.toggleFilter}>
            Apply Filters{" "}
            <span>
              <i className="fa fa-filter"></i>
            </span>
          </div>
          <div className={filterClasses}>
            <div className="Filter">
              <header>
                <span>
                  Apply Filters <i className="fa fa-filter"></i>
                </span>
              </header>
            </div>
            <div className="closeFilter">
              <i className="fa fa-close" onClick={this.toggleFilter}></i>
            </div>
            <div className="SubFilters">
              <button onClick={() => this.handleClick(1)}>
                Contest-Type <i className="fa fa-caret-down"></i>
              </button>

              <ul className="FilterContent1">
                <li>
                  Dance{" "}
                  <input
                    id="checkbox"
                    type="checkbox"
                    value="Filter1"
                    name="Dance"
                    onClick={this.applyFilter}
                  ></input>
                </li>
                <li>
                  Music{" "}
                  <input
                    id="checkbox"
                    type="checkbox"
                    value="Filter2"
                    name="Music"
                    onClick={this.applyFilter}
                  ></input>
                </li>
                <li>
                  Art{" "}
                  <input
                    id="checkbox"
                    type="checkbox"
                    value="Filter3"
                    name="Art"
                    onClick={this.applyFilter}
                  ></input>
                </li>
              </ul>
            </div>
            {/* <div className="SubFilters">
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
              </ul>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, {getContests})(FilterSection);
