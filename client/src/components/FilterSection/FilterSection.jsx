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
    this.props.getContests({type: e.target.value, limit: 3});
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
            {/* <div className="SubFilters">
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
              </ul>
            </div> */}



            {/* RADIO BUTTONS FOR FILTERING CONTESTS */}
            <div className="SubFilters">
              <button onClick={() => this.handleClick(1)}>
                Contest-Type <i className="fa fa-caret-down"></i>
              </button>
              <ul className="FilterContent1">
                <li>
                  <label className="filterLabel">Dance
                    <input type="radio"  name="radio" value="Dance" onClick={this.applyFilter} />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                    <label className="filterLabel">Music
                      <input type="radio"  name="radio" value="Music" onClick={this.applyFilter} />
                      <span className="checkmark"></span>
                    </label>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, {getContests})(FilterSection);
