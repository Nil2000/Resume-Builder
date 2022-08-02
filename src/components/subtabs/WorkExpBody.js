import React from "react";
import InputControl from "../InputControl/InputControl";

const workExpBody = (
    <div className="tab-details">
        <div className="tab-rows">
            <InputControl
                label="Title"
                placeholder="Enter title eg. Frontend developer"
            />
            <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
            />
        </div>
        <div className="tab-rows">
            <InputControl
                label="Certificate Link"
                placeholder="Enter certificate link"
            />
            <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
            />
        </div>
        <div className="tab-rows">
            <InputControl
                label="Start Date"
                type="date"
                placeholder="Enter start date of work"
            />
            <InputControl
                label="End Date"
                type="date"
                placeholder="Enter end date of work"
            />
        </div>

        <div className="tab-columns">
            <label>Enter work description</label>
            <InputControl placeholder="Line 1" />
            <InputControl placeholder="Line 2" />
            <InputControl placeholder="Line 3" />
        </div>
    </div>
);

export default workExpBody;
