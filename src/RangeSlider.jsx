import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const RangeSliderComponent = ({ onChange }) => {
    const [value, setValue] = useState(100);

    const handleChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <Form>
            <Form.Group as={Col} controlId="formSlider">
                <Form.Range
                    value={value}
                    min={1}
                    max={100}
                    onChange={handleChange}
                />
                <Form.Label>Per hour: less than ${value}</Form.Label>
            </Form.Group>
        </Form>
    );
};

export default RangeSliderComponent;
