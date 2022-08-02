import React from "react";
import InputControl from "../InputControl/InputControl";

const educationBody = (
    <div className="tab-details">
        <div className="tab-rows">
            <InputControl label="Title" placeholder="Enter title eg. B-tech" />
        </div>
        <InputControl
            label="College/School Name"
            placeholder="Enter name of your college/school"
        />
        <div className="tab-rows">
            <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of this education"
            />
            <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of this education"
            />
        </div>
    </div>
);

export default educationBody;
