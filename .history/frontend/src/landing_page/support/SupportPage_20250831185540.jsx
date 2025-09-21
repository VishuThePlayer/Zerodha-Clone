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
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Console</Accordion.Header>
              <Accordion.Body>
                <p>Links and content go here...</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Coin</Accordion.Header>
              <Accordion.Body>
                <p>Links and content go here...</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-4">
          {/* Notices */}
          <div className="p-3 mb-3 bg-light border-start border-warning border-4">
            <p>
              <a href="#">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
            </p>
            <p>
              <a href="#">Revision in expiry day of Index and Stock derivatives contracts</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="p-3 border">
            <h6>Quick links</h6>
            <ol>
              <li><a href="#">Track account opening</a></li>
              <li><a href="#">Track segment activation</a></li>
              <li><a href="#">Intraday margins</a></li>
              <li><a href="#">Kite user manual</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
