import React from "react";
import InputControl from "../InputControl/InputControl";

const projectBody = (
    <div className="tab-details">
        <div className="tab-rows">
            <InputControl
                label="Title"
                placeholder="Enter title eg. Chat app"
            />
        </div>
        <InputControl
            label="Overview"
            placeholder="Enter basic overview of project"
        />
        <div className="tab-rows">
            <InputControl
                label="Deployed Link"
                placeholder="Enter deployed link of project"
            />
            <InputControl
                label="Github Link"
                placeholder="Enter github link of project"
            />
        </div>
        <div className="tab-columns">
            <label>Enter project description</label>
            <InputControl placeholder="Line 1" />
            <InputControl placeholder="Line 2" />
            <InputControl placeholder="Line 3" />
            <InputControl placeholder="Line 4" />
        </div>
    </div>
);

export default projectBody;