import React from "react";
import { Input } from "semantic-ui-react";
import ReactTable from "react-table-6";
import "./react-table.css";
import { userData } from "../data/users";
import CustomPaginationComponent from "./PaginationComponent";

const originalData = userData;

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: originalData,
      columns: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    let columns = [
      {
        Header: "Sr no.",
        accessor: "id",
        sortable: false,
        show: true,
        displayValue: " First Name",
      },
      {
        Header: "Suppression List Name",
        accessor: "name",
        sortable: false,
        show: true,
        displayValue: "Status ",
      },
      {
        Header: "Last Modified On",
        accessor: "modified",
        sortable: false,
        show: true,
        displayValue: " Visits ",
      },
      {
        Header: "Last Modified By",
        accessor: "modifiedBy",
        sortable: false,
        show: true,
        displayValue: " Visits ",
      },
      {
        Header: "Records",
        accessor: "Records",
        sortable: false,
        show: true,
        displayValue: " Visits ",
      },
      {
        Header: "Add",
        Cell: (row) => {
          return (
            <div>
              <img src={require("../data/add.png")} />
            </div>
          );
        },
      },
      {
        Header: "Edit",
        Cell: (row) => {
          return (
            <div>
              <img src={require("../data/pencil.png")} />
            </div>
          );
        },
      },
      {
        Header: "Delete",
        Cell: (row) => {
          return (
            <div>
              <img src={require("../data/delete.png")} />
            </div>
          );
        },
      },
    ];
    this.setState({ columns });
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = originalData.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.modifiedBy.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.id.toString().toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    this.setState({ data: filteredData });
  };

  render() {
    let { data, columns, searchInput } = this.state;
    return (
      <div>
        <br />
        <Input
          size="large"
          name="searchInput"
          value={searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />
        <br />
        <br />
        <ReactTable
          PaginationComponent={CustomPaginationComponent}
          data={data}
          columns={columns}
          defaultPageSize={4}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
