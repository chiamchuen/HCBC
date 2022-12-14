import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Account.scss";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Account = () => {
  return (
    <div>
      <Card style={{ width: "17rem", margin: "20" }}>
        <Card.Header>Assets</Card.Header>
        <Card.Body>
          <Card.Title>Assets Value</Card.Title>
          <Card.Text> $10000</Card.Text>
          <Card.Title>Available Balance</Card.Title>
          <Card.Text> $250</Card.Text>
          <div class="card-body-row">
            <Button variant="outlined">Withdraw</Button>
            <Button variant="contained">Top-up</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Account;
