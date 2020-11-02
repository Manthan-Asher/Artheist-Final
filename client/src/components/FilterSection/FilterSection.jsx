import React, {Component} from "react";
import "./FilterSection.css";
import $ from "jquery";
import {getContests} from "../../actions/contests";
import {connect} from "react-redux";

export class FilterSection extends Component {
  state = {
    showFilter: false,
    contestType: "",
  };

  handleClick = (id) => {
    let cls = `.FilterContent${id}`;
    $(cls).slideToggle(300);
  };

  toggleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter,
      contestType: this.state.contestType,
    });
  };

  applyFilter = (e) => {
    this.props.getContests({type: e.target.value, limit: 6});
    this.setState({
      showFilter: this.state.showFilter,
      contestType: e.target.value,
    });
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

            {/* RADIO BUTTONS FOR FILTERING CONTESTS */}
            <div className="SubFilters">
              <button onClick={() => this.handleClick(1)}>
                Contest-Type <i className="fa fa-caret-down"></i>
              </button>
              <form className="FilterContent1">
                <label className="filterLabel">
                  All
                  <input
                    type="radio"
                    name="radio"
                    value=""
                    onClick={this.applyFilter}
                    checked={this.state.contestType === ""}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="filterLabel">
                  Dance
                  <input
                    type="radio"
                    name="radio"
                    value="Dance"
                    onClick={this.applyFilter}
                    checked={this.state.contestType === "Dance"}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="filterLabel">
                  Music
                  <input
                    type="radio"
                    name="radio"
                    value="Music"
                    onClick={this.applyFilter}
                    checked={this.state.contestType === "Music"}
                  />
                  <span className="checkmark"></span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, {getContests})(FilterSection);
