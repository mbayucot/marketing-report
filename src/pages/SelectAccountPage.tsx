import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import Select from "react-select";

import "../Dashboard.css";
import { clients } from "../constants";

type Params = {
  clientId: string;
};

const SelectAccountPage = () => {
  let history = useHistory();
  let { clientId } = useParams<Params>();

  const found = clients.find((login) => login.id.toString() === clientId);

  const [selected, setSelected] = useState(false);

  const onSelectChange = (e: any) => {
    history.push(`/dashboard/${e.value}`);
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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            borderRadius: "3px",
          }}
        >
          <div
            style={{
              backgroundColor: "#27579a",
              padding: "6px 12px",
              marginBottom: "6px",
            }}
          >
            <p style={{ color: "#fff", marginBottom: "0" }}>
              Select an Account
            </p>
          </div>
          <Select
            placeholder="Search.."
            isClearable={true}
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
      </div>
    </>
  );
};

export default SelectAccountPage;
