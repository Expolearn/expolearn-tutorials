import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 3px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 22px;
  color: #ff0901;
  text-align: center;
  padding: 10px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
`;

const Input = styled.input`
  font-size: 14px;
  border: 1px solid red;
  width: 150px;
  margin-left: 10px;
`;

const Select = styled.select`
  width: 200px;
  margin-left: 10px;
  color: #feba12;
  border: 1px solid red;
`;

const Option = styled.option`
  color: #feba12;
`;

const Button = styled.button`
  background-color: rgb(0, 0, 255, 0.6);
  color: #fff;
  width: 150px;
  border: 3px solid rgb(0, 0, 255, 0.3);
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "  ",
      email: " ",
      city: [],
      address: [],
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleUserEmail = this.handleUserEmail.bind(this);
    this.handleUserCity = this.handleUserCity.bind(this);
    this.handleUserAddress = this.handleUserAddress.bind(this);
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleUserEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleUserCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handleUserAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (typeof username === String && typeof email === String) {
      this.getSnapshotBeforeUpdate();
    }
  };
  render() {
    return (
      <>
        <Container>
          <Title> Login form </Title>
          <Container>
            <Label>Username</Label>
            <Input
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.handleUsername}
            ></Input>
          </Container>
          <Container>
            <Label>Email</Label>
            <Input
              placeholder="Enter your email address"
              value={this.state.email}
              onChange={this.handleUserEmail}
            ></Input>
          </Container>
          <Container>
            <Label>City</Label>
            <Select value={this.state.city} onChange={this.handleUserCity}>
              <Option> Johannesburg </Option>
              <Option> Pretoria </Option>
              <Option> Harare </Option>
              <Option> Kinshasa </Option>
              <Option> Maseru </Option>
              <Option> Luanda </Option>
              <Option> Yaounde </Option>
              <Option> Douala </Option>
            </Select>
          </Container>
          <Container>
            <Label>Address</Label>
            <Input
              placeholder="Enter your username"
              value={this.state.address}
              onChange={this.handleUserAddress}
            ></Input>
          </Container>
          <Button onClick={this.handleSubmit}> Save </Button>
        </Container>

        <Container>
          <Title> User Details</Title>
          <Container>
            <Label>Username: {this.state.username}</Label>
          </Container>
          <Container>
            <Label> Email: {this.state.email}</Label>
          </Container>
          <Container>
            <Label>
              {" "}
              City:
              {this.state.city}
            </Label>
          </Container>
          <Container>
            <Label>Address: {this.state.address}</Label>{" "}
          </Container>
        </Container>
      </>
    );
  }
}
