import React from 'react';
import Form from 'react-bootstrap/Form';

const SubjectForm = ({ onCheckboxChange }) => {
    const checkboxes = [
        "Biology", "Chemistry", "Computer Science",
        "English", "French", "History", "Mathematics",
        "Performing Arts", "Physics", "Visual Arts"
    ];

    return (
        <Form className='text-start ms-2 mb-4 h5'>
            {checkboxes.map((label, index) => (
                <Form.Check
                    key={index}
                    type="checkbox"
                    id={`checkbox-${index}`}
                    label={label}
                    className='custom-checkbox m-2 ms-3'
                    onChange={() => onCheckboxChange(label)}
                />
            ))}
        </Form>
    );
};

export default SubjectForm;
