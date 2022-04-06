import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useHistory } from "react-router-dom";

import { accounts } from "../constants";

type Account = {
  id: number;
  email: string;
  password: string;
  name: string;
};

const AccountPage = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState<Account>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewAccount = () => {
    handleShow();
  };

  const onEditClick = (id: any) => {
    // @ts-ignore
    let client = accounts.find((login: any) => login.id === id);
    setSelected(client);
    setShowEdit(true);
  };

  const onClientClick = (accountId: any) => {
    history.push(`/admin/clients/${accountId}`);
  };

  const onDeleteClick = () => {
    setShowConfirm(true);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#4c8ce6",
          width: "100%",
          height: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              marginBottom: "24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Button variant="success" onClick={handleNewAccount}>
                New Account
              </Button>
            </div>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </div>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => onClientClick(account.id)}
                      style={{ marginRight: "24px" }}
                    >
                      Clients
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => onEditClick(account.id)}
                      style={{ marginRight: "24px" }}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" onClick={onDeleteClick}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Account</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} type="submit">
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
      </Modal>

      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Account</Modal.Title>
        </Modal.Header>
        <Form>
          {selected && (
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" defaultValue={selected.name} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" defaultValue={selected.email} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setShowEdit(false)}
                  type="submit"
                >
                  Close
                </Button>
                <Button variant="primary" onClick={() => setShowEdit(false)}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal.Body>
          )}
        </Form>
      </Modal>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowConfirm(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AccountPage;
