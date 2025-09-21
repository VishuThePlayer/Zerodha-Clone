import React from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';

function SupportPage() {
  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Support Portal</h2>
        <Button variant="primary">My tickets</Button>
      </div>

      {/* Search */}
      <Form className="mb-5">
        <Form.Control
          type="search"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </Form>

      {/* Two-column layout */}
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-md-8">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Account Opening</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li><a href="#">Resident individual</a></li>
                  <li><a href="#">Minor</a></li>
                  <li><a href="#">Non Resident Indian (NRI)</a></li>
                  <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                  <li><a href="#">Glossary</a></li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Your Zerodha Account</Accordion.Header>
              <Accordion.Body>
                <p>Links and content go here...</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Kite</Accordion.Header>
              <Accordion.Body>
                <p>Links and content go here...</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Funds</Accordion.Header>
              <Accordion.Body>
                <p>Links and content go here...</p>
              </Accordion.Body>
            </Accordion.Ite
