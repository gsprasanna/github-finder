import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
import React from "react";
import LoadingIndicator from "./LoadingIndicator";

const GithubRepos = ({ repos }) => {
  const dataTable =
    repos.length > 0 ? (
      repos.map((item) => {
        return {
          repoName: (
            <a href={item.html_url} target="_blank">
              {item.name}
            </a>
          ),
          repoUrl: item.html_url,
        };
      })
    ) : (
      <LoadingIndicator />
    );
  const columns = [{ dataField: "repoName", text: "Repositories" }];
  return (
    <BootstrapTable
      keyField="repoName"
      data={dataTable}
      columns={columns}
      pagination={paginationFactory()}
    />
  );
};

export default GithubRepos;
