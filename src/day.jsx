import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Day() {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);

  const handleSelect1 = (eventKey, event) => {
    setSelectedOption1(eventKey);
  };

  const handleSelect2 = (eventKey, event) => {
    setSelectedOption2(eventKey);
  };

  const handleSelect3 = (eventKey, event) => {
    setSelectedOption3(eventKey);
  };

  const handleSelect4 = (eventKey, event) => {
    setSelectedOption4(eventKey);
  };

  const handleSelect5 = (eventKey, event) => {
    setSelectedOption5(eventKey);
  };

  const getVariant = (selectedOption) => {
    switch (selectedOption) {
      case 'Tutoring Session':
        return 'info';
      case 'Test Date':
        return 'danger';
      case 'Due Date':
        return 'warning';
      default:
        return 'outline-secondary';
    }
  };

  return (
    <>
      <InputGroup className="mt-2 mb-3">
        <DropdownButton
          variant={getVariant(selectedOption1)}
          title=""
          id="input-group-dropdown-1"
          onSelect={handleSelect1}
        >
          <Dropdown.Item eventKey="Test Date" className="text-danger">Test Date</Dropdown.Item>
          <Dropdown.Item eventKey="Tutoring Session" className="text-info">Tutoring Session</Dropdown.Item>
          <Dropdown.Item eventKey="Due Date" className="text-warning">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Undo">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <DropdownButton
          variant={getVariant(selectedOption2)}
          title=""
          id="input-group-dropdown-2"
          onSelect={handleSelect2}
        >
          <Dropdown.Item eventKey="Test Date" className="text-danger">Test Date</Dropdown.Item>
          <Dropdown.Item eventKey="Tutoring Session" className="text-info">Tutoring Session</Dropdown.Item>
          <Dropdown.Item eventKey="Due Date" className="text-warning">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Undo">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <DropdownButton
          variant={getVariant(selectedOption3)}
          title=""
          id="input-group-dropdown-3"
          onSelect={handleSelect3}
        >
          <Dropdown.Item eventKey="Test Date" className="text-danger">Test Date</Dropdown.Item>
          <Dropdown.Item eventKey="Tutoring Session" className="text-info">Tutoring Session</Dropdown.Item>
          <Dropdown.Item eventKey="Due Date" className="text-warning">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Undo">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <DropdownButton
          variant={getVariant(selectedOption4)}
          title=""
          id="input-group-dropdown-4"
          onSelect={handleSelect4}
        >
          <Dropdown.Item eventKey="Test Date" className="text-danger">Test Date</Dropdown.Item>
          <Dropdown.Item eventKey="Tutoring Session" className="text-info">Tutoring Session</Dropdown.Item>
          <Dropdown.Item eventKey="Due Date" className="text-warning">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Undo">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-2">
        <DropdownButton
          variant={getVariant(selectedOption5)}
          title=""
          id="input-group-dropdown-5"
          onSelect={handleSelect5}
        >
          <Dropdown.Item eventKey="Test Date" className="text-danger">Test Date</Dropdown.Item>
          <Dropdown.Item eventKey="Tutoring Session" className="text-info">Tutoring Session</Dropdown.Item>
          <Dropdown.Item eventKey="Due Date" className="text-warning">Due Date</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Undo">Undo</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
    </>
  );
}

export default Day;
