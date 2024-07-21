import React from 'react';
import Form from 'react-bootstrap/Form';

const ObjectForm = ({ onCheckboxChange }) => {
    const checkboxes = [
        "Elementary", "High School", "Post-Secondary"
    ];

    return (
        <Form className='text-start mb-4 h5'>
            {checkboxes.map((label, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    id={`checkbox-${index}`}
                    label={label}
                    className='custom-checkbox-lvl m-2 ms-3'
                    onChange={() => onCheckboxChange(label)}
                />
            ))}
        </Form>
    );
};

export default ObjectForm;
