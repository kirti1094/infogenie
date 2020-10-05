import React, { Component } from "react";
import "./App.css";
import { Navi } from "./components/nav/navbar";
import { Logo } from "./components/logo/mainLogo";
import { SearchList } from "./components/search/search-bar.component";
import { ProcessTable } from "./components/processingQueue/processing-table.component";
import Table from "./components/SuppressionTable/suppression-table.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      activePage: 15,
    };
  }
  onComponentWillMount() { }
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Navi></Navi>
        <SearchList></SearchList>
        <Table></Table>
        <ProcessTable></ProcessTable>
      </div>
    );
  }
}

export default App;
