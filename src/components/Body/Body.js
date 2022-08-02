import React, { useRef, useState } from "react";
import "./body.css";
import ReactToPrint from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

export default function Body() {
    const colors = ["#adb5bd", "#48bb78", "#0bc5ea", "#fd757d", "#ed8936"];
    const sect = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };
    const resumeRef = useRef();

    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
        [sect.basicInfo]: {
            id: sect.basicInfo,
            sectionTitle: sect.basicInfo,
            detail: {},
        },
        [sect.workExp]: {
            id: sect.workExp,
            sectionTitle: sect.workExp,
            details: [],
        },
        [sect.project]: {
            id: sect.project,
            sectionTitle: sect.project,
            details: [],
        },
        [sect.education]: {
            id: sect.education,
            sectionTitle: sect.education,
            details: [],
        },
        [sect.achievement]: {
            id: sect.achievement,
            sectionTitle: sect.achievement,
            points: [],
        },
        [sect.summary]: {
            id: sect.summary,
            sectionTitle: sect.summary,
            detail: "",
        },
        [sect.other]: {
            id: sect.other,
            sectionTitle: sect.other,
            detail: "",
        },
    });

    return (
        <div className="body-container">
            <h1>Resume Builder</h1>
            <div className="body-toolbar">
                <div className="colors">
                    {colors.map((item, index) => {
                        return (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: item,
                                }}
                                className="color"
                                onClick={() => setActiveColor(item)}
                            ></span>
                        );
                    })}
                </div>
                <ReactToPrint
                    trigger={() => {
                        return (
                            <button className="btn-download">
                                Download <FontAwesomeIcon icon={faDownload} />
                            </button>
                        );
                    }}
                    content={() => resumeRef.current}
                />
            </div>
            <div className="body-main">
                <Editor
                    sect={sect}
                    info={resumeInformation}
                    setInfo={setResumeInformation}
                />
                <Resume
                    ref={resumeRef}
                    sections={sect}
                    information={resumeInformation}
                    activeColor={activeColor}
                />
            </div>
        </div>
    );
}
