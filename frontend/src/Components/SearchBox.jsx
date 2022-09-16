import React, { useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          aria-label="Search Product"
          aria-describedby="button-search"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};
