import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  table: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: "20px 30%",
    [theme.breakpoints.down("sm")]: {
      width: "20%",
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr 1fr 1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20%",
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr 1fr 1fr",
    },
  },
  tableItem: {
    border: "none",
    height: 29,
    width: 29,
    margin: "5px",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    transition: "0.5s ease",
    "&:hover": {
      backgroundColor: "#33691e",
    },
  },
  tableItemActive: {
    border: "none",
    height: 29,
    width: 29,
    margin: "5px",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "50%",
    transition: "0.5s ease",
  },
  itemLink: {
    textDecoration: "none",
    fontWeight: 500,
    color: "white",
  },
}));

const Pagination = ({ productsPerPage, totalProducts, paginate, filters }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(
    filters.currentPage - 1
  );

  const classes = useStyles();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.table}>
        {pageNumbers.map((number, index) => (
          <button
            className={
              selectedIndex === index
                ? classes.tableItemActive
                : classes.tableItem
            }
            index={index}
            key={number}
            onClick={() => {
              paginate(number);
              setSelectedIndex(index);
            }}
            selected={selectedIndex === index}
          >
            <div className={classes.itemLink}>
              {number}
            </div>
          </button>
        ))}
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    filters: state.filterReducer,
  };
}

export default connect(mapStateToProps)(Pagination);
