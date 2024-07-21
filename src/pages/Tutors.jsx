import React, { useState } from 'react';
import SubjectForm from '../SubjectForm';
import ObjectForm from '../OtherForm';
import RangeSliderComponent from '../RangeSlider';
import Tutor from '../tutor';

const allTutors = [
    {
        name: "Daniel Miller",
        subjects: ["Visual Arts", "Performing Arts"],
        price: 55,
        description: "Art educator specializing in drawing, painting, and dance",
        lvl: "Elementary"
    },
    {
        name: "David Smith",
        subjects: ["Chemistry", "Biology", "Mathematics"],
        price: 60,
        description: "Passionate about making learning interactive",
        lvl: "High School"
    },
    {
        name: "Emma Davis",
        subjects: ["French", "English"],
        price: 25,
        description: "Language specialist offering in-depth tutoring",
        lvl: "Elementary"
    },
    {
        name: "Grace Allen",
        subjects: ["Mathematics", "Chemistry", "Biology", "Physics"],
        price: 100,
        description: "Science tutor with expertise in all major STEM disciplines",
        lvl: "High School"
    },
    {
        name: "Hannah Lee",
        subjects: ["History", "English", "French"],
        price: 50,
        description: "Language enthusiast with a focus on cultural understanding",
        lvl: "Post-Secondary"
    },
    {
        name: "Jackie Thompson",
        subjects: ["Computer Science", "Mathematics", "Physics"],
        price: 95,
        description: "Expert in programming and mathematical sciences",
        lvl: "Post-Secondary"
    },
    {
        name: "Lily Martin",
        subjects: ["Visual Arts", "Performing Arts", "English"],
        price: 70,
        description: "Versatile tutor fostering creativity and expression",
        lvl: "High School"
    },
    {
        name: "Michael White",
        subjects: ["Computer Science", "Mathematics"],
        price: 35,
        description: "Experienced in many programming languages",
        lvl: "Elementary"
    },
    {
        name: "Olivia Green",
        subjects: ["Chemistry", "Biology"],
        price: 80,
        description: "Science tutor with a passion for hands-on learning",
        lvl: "High School"
    },
    {
        name: "Peter Wilson",
        subjects: ["English", "Performing Arts", "History"],
        price: 65,
        description: "Experienced in literature and historical contexts",
        lvl: "Post-Secondary"
    },
    {
        name: "Rachel Carter",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        price: 100,
        description: "STEM tutor focusing on advanced topics in math and science",
        lvl: "High School"
    },
    {
        name: "Ryan Harris",
        subjects: ["History", "English", "Visual Arts"],
        price: 45,
        description: "Historian and art enthusiast",
        lvl: "Post-Secondary"
    },
    {
        name: "Samuel Clark",
        subjects: ["Physics", "Mathematics"],
        price: 80,
        description: "Focus on theoretical concepts",
        lvl: "Post-Secondary"
    },
    {
        name: "Sarah Johnson",
        subjects: ["Mathematics", "Physics", "Chemistry"],
        price: 90,
        description: "Experienced tutor specializing in STEM subjects",
        lvl: "Post-Secondary"
    }, 
    {
        name: "Sophia Brown",
        subjects: ["English", "French", "History"],
        price: 30,
        description: "Bilingual tutor proficient in English and French literature",
        lvl: "Elementary"
    },    
];

const ReloadButton = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <button className="custom-start mt-3" onClick={handleReload}>
            Reset Selections
        </button>
    );
};

function Tutors() {
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [maxPrice, setMaxPrice] = useState(100);

    const handleCheckboxChange = (subject) => {
        if (selectedSubjects.includes(subject)) {
            setSelectedSubjects(selectedSubjects.filter(item => item !== subject));
        } else {
            setSelectedSubjects([...selectedSubjects, subject]);
        }
    };

    const handleLvlChange = (level) => {
        if (selectedLevels.includes(level)) {
            setSelectedLevels(selectedLevels.filter(item => item !== level));
        } else {
            setSelectedLevels([...selectedLevels, level]);
        }
    };

    const handlePriceChange = (value) => {
        setMaxPrice(value);
    };

    const filteredTutors = allTutors.filter(tutor => {
        return (
            selectedSubjects.every(subject => tutor.subjects.includes(subject)) &&
            (selectedLevels.length === 0 || selectedLevels.includes(tutor.lvl)) &&
            tutor.price <= maxPrice
        );
    });

    return (
        <>
            <div style={{ display: 'block', width: '100%', padding: 40 }} className="bg-mydarkgreen"></div>

            <div style={{ display: 'block', width: '100%', padding: 0 }}>
                <div className="row">
                    <div className="col-sm-3 bg-mydarkgreen py-4 ps-4">
                        <h1 className='pb-2'>Subject</h1>
                        <SubjectForm onCheckboxChange={handleCheckboxChange} />
                    </div>

                    <div className="col-sm-3 bg-mygreen p-4">
                        <h1 className='pb-2'>Level</h1>
                        <ObjectForm onCheckboxChange={handleLvlChange}/>
                        <h1>Price</h1>
                        <RangeSliderComponent onChange={handlePriceChange} />
                        <ReloadButton />
                    </div>

                    <div className="col-sm-6 m-0 pt-4 bg-mygreen">
                        <h1 className='pb-2'>Tutors</h1>
                        {filteredTutors.map((tutor, index) => (
                            <Tutor
                                key={index}
                                name={tutor.name}
                                subjects={tutor.subjects}
                                price={tutor.price}
                                description={tutor.description}
                                lvl={tutor.lvl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tutors;
