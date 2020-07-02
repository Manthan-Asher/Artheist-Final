import React, {Component} from "react";
import Search from "../Search/Search";
import ContestCards from "../ContestCards/ContestCards";
import Filter from "../FilterSection/FilterSection";

class Contest extends Component {
  render() {
    return (
      <>
        <Search />
        <Filter />
        <ContestCards />
      </>
    );
  }
}

export default Contest;
