import React from "react";
import InputControl from "../InputControl/InputControl";

const basicInfoBody = (
    <div className="tab-details">
        <div className="tab-rows">
            <InputControl
                label="Name"
                placeholder="Enter your full name eg. Aashu"
            />
            <InputControl
                label="Title"
                placeholder="Enter your title eg. Frontend developer"
            />
        </div>
        <div className="tab-rows">
            <InputControl
                label="Linkedin Link"
                placeholder="Enter your linkedin profile link"
            />
            <InputControl
                label="Github Link"
                placeholder="Enter your github profile link"
            />
        </div>
        <div className="tab-rows">
            <InputControl label="Email" placeholder="Enter your email" />
            <InputControl
                label="Enter phone"
                placeholder="Enter your phone number"
            />
        </div>
    </div>
);

export default basicInfoBody;