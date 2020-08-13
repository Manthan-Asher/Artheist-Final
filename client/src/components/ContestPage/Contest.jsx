import React, {Component} from "react";
import Search from "../Search/Search";
import ContestCards from "../ContestCards/ContestCards";
import Filter from "../FilterSection/FilterSection";
//import MobileFilter from "../MobileFilter/MobileFilter"

class Contest extends Component {
  render() {
    return (
      <>
        <Search />
        <Filter />
        {/* <MobileFilter /> */}
        <ContestCards />
      </>
    );
  }
}

export default Contest;
