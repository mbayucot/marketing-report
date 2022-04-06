import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";

import "../Dashboard.css";
import { clients } from "../constants";
import Select from "react-select";

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

  const colourStyles: any = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        color: "#1771CE",
      };
    },
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#4c8ce6",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "380px",
            margin: "0",
            padding: "10px",
          }}
        >
          <Select
            placeholder="Select an Account.."
            isSearchable={true}
            name="color"
            options={
              found &&
              found.name.map((client: any) => ({
                label: client.name,
                value: client.id,
              }))
            }
            styles={colourStyles}
            onChange={onSelectChange}
          />
        </div>
        <div style={{ height: "90.5%" }}>
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
      </div>
    </>
  );
};

export default DashboardPage;
