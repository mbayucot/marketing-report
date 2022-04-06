import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useParams, useHistory } from "react-router-dom";

import { clients } from "../constants";
import { forEach } from "react-bootstrap/ElementChildren";

type Params = {
  accountId: string;
};

type Client = {
  id: string;
  name: string;
  link: string;
};

const ClientPage = () => {
  let { accountId } = useParams<Params>();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState<Client>();
  const found = clients.find((login) => login.id.toString() === accountId);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNewAccount = () => {
    handleShow();
  };

  const onEditClick = (id: any) => {
    // @ts-ignore
    let _clients: any = found.name;
    let client = _clients.find((login: any) => login.id === id);
    setSelected(client);
    setShowEdit(true);
  };

  const onDeleteClick = (id: any) => {
    setShowConfirm(true);
  };

  // @ts-ignore
  // @ts-ignore
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
                New Client
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
                <th>Google Data Studio URL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {found &&
                found.name.map((client: any, key) => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.link}</td>
                    <td>
                      <Button
                        variant="secondary"
                        onClick={() => onEditClick(client.id)}
                        style={{ marginRight: "24px" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => onDeleteClick(client.id)}
                      >
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
          <Modal.Title>New Client</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Google Data Studio URL</Form.Label>
              <Form.Control type="text" />
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
          <Modal.Title>Edit Client</Modal.Title>
        </Modal.Header>
        <Form>
          {selected && (
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" defaultValue={selected.name} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Google Data Studio URL</Form.Label>
                <Form.Control type="text" defaultValue={selected.link} />
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
        <Modal.Body>Are you sure you want to delete this client?</Modal.Body>
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

export default ClientPage;
