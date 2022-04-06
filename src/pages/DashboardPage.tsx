import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

import "../Dashboard.css";
import { clients } from "../constants";

type Params = {
  clientId: string;
};

const DashboardPage = () => {
  let history = useHistory();
  let { clientId } = useParams<Params>();

  const found = clients.find((login) => login.id.toString() === clientId);

  const [selected, setSelected] = useState(false);

  const onSelectChange = (e: any) => {
    setSelected(true);
  };

  const handleSignout = () => {
    history.push(`/`);
  };

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/">
          Marketing Report
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div>
          <Form.Select
            aria-label="Default select example"
            onChange={onSelectChange}
            defaultValue=""
          >
            <option value="" disabled>
              Select Account
            </option>
            {found &&
              found.name.map((client: any) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
          </Form.Select>
        </div>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#/" onClick={handleSignout}>
              Sign out
            </a>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <main className="col-md-12 ms-sm-auto col-lg-12">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <div style={{ height: "550px" }}>
              <br />
              {selected && (
                <iframe
                  title="Marketing report"
                  width="100%"
                  height="100%"
                  src="https://datastudio.google.com/embed/reporting/1ldFFV3R1IGJTGG8BwScQhNXD2u7H_4Bh/page/MwXb"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
