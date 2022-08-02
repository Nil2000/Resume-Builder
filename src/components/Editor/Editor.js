import React, { useEffect, useState } from "react";
import InputControl from "../InputControl/InputControl";
import "./editor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
    const sect = props.sect;
    const info = props.info;

    const [activeKey, setActiveKey] = useState(Object.keys(sect)[0]);

    const [activeInformation, setActiveInformation] = useState(
        info[sect[Object.keys(sect)[0]]]
    );

    const [detailIndex, setDetailIndex] = useState(0);

    const [sectionTitle, setSectionTitle] = useState(
        sect[Object.keys(sect)[0]]
    );

    //default values state
    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    });

    function handlePointer(value, index) {
        const tempValues = { ...values };
        if (!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    }

    const achievementsBody = (
        <div className="tab-details">
            <div className="tab-columns">
                <label>List your achievements</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 0);
                    }}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 1);
                    }}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 2);
                    }}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 3);
                    }}
                />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className="tab-details">
            <div className="tab-rows">
                <InputControl
                    label="Name"
                    placeholder="Enter your full name eg. Aashu"
                    value={values.name}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            name: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter your title eg. Frontend developer"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            title: event.target.value,
                        }))
                    }
                />
            </div>
            <div className="tab-rows">
                <InputControl
                    label="Linkedin Link"
                    value={values.linkedin}
                    placeholder="Enter your linkedin profile link"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            linkedin: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter your github profile link"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            github: event.target.value,
                        }))
                    }
                />
            </div>
            <div className="tab-rows">
                <InputControl
                    label="Email"
                    value={values.email}
                    placeholder="Enter your email"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            email: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Enter phone"
                    value={values.phone}
                    placeholder="Enter your phone number"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            phone: event.target.value,
                        }))
                    }
                />
            </div>
        </div>
    );

    const educationBody = (
        <div className="tab-details">
            <div className="tab-rows">
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter title eg. B-tech"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            title: event.target.value,
                        }))
                    }
                />
            </div>
            <InputControl
                label="College/School Name"
                value={values.college}
                placeholder="Enter name of your college/school"
                onChange={(event) =>
                    setValues((prev) => ({
                        ...prev,
                        college: event.target.value,
                    }))
                }
            />
            <div className="tab-rows">
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            startDate: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            endDate: event.target.value,
                        }))
                    }
                />
            </div>
        </div>
    );

    const otherBody = (
        <div className="tab-details">
            <InputControl
                label="Other"
                placeholder="Enter something"
                value={values.other}
                onChange={(event) => {
                    setValues((prev) => ({
                        ...prev,
                        other: event.target.value,
                    }));
                }}
            />
        </div>
    );

    const projectBody = (
        <div className="tab-details">
            <div className="tab-rows">
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. Chat app"
                    value={values.title}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            title: event.target.value,
                        }))
                    }
                />
            </div>
            <InputControl
                label="Overview"
                value={values.overview}
                placeholder="Enter basic overview of project"
                onChange={(event) =>
                    setValues((prev) => ({
                        ...prev,
                        overview: event.target.value,
                    }))
                }
            />
            <div className="tab-rows">
                <InputControl
                    label="Deployed Link"
                    value={values.link}
                    placeholder="Enter deployed link of project"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            link: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter github link of project"
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            github: event.target.value,
                        }))
                    }
                />
            </div>
            <div className="tab-columns">
                <label>Enter project description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 0);
                    }}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 1);
                    }}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 2);
                    }}
                />
                <InputControl
                    placeholder="Line 4"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 3);
                    }}
                />
            </div>
        </div>
    );

    const summaryBody = (
        <div className="tab-details">
            <InputControl
                label="Summary"
                placeholder="Enter your objective/summary"
                value={values.summary}
                onChange={(event) =>
                    setValues((prev) => ({
                        ...prev,
                        summary: event.target.value,
                    }))
                }
            />
        </div>
    );

    const workExpBody = (
        <div className="tab-details">
            <div className="tab-rows">
                <InputControl
                    label="Title"
                    placeholder="Enter title eg. Frontend developer"
                    value={values.title}
                    onChange={(event) => {
                        setValues((prev) => ({
                            ...prev,
                            title: event.target.value,
                        }));
                    }}
                />
                <InputControl
                    label="Company Name"
                    placeholder="Enter company name eg. amazon"
                    value={values.companyName}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            companyName: event.target.value,
                        }))
                    }
                />
            </div>
            <div className="tab-rows">
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter certificate link"
                    value={values.certificationLink}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            certificationLink: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="Location"
                    placeholder="Enter location eg. Remote"
                    value={values.location}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            location: event.target.value,
                        }))
                    }
                />
            </div>
            <div className="tab-rows">
                <InputControl
                    label="Start Date"
                    type="date"
                    placeholder="Enter start date of work"
                    value={values.startDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            startDate: event.target.value,
                        }))
                    }
                />
                <InputControl
                    label="End Date"
                    type="date"
                    placeholder="Enter end date of work"
                    value={values.endDate}
                    onChange={(event) =>
                        setValues((prev) => ({
                            ...prev,
                            endDate: event.target.value,
                        }))
                    }
                />
            </div>
            <div className="tab-columns">
                <label>Enter work description</label>
                <InputControl
                    placeholder="Line 1"
                    value={values.points ? values.points[0] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 0);
                    }}
                />
                <InputControl
                    placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 1);
                    }}
                />
                <InputControl
                    placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event) => {
                        handlePointer(event.target.value, 2);
                    }}
                />
            </div>
        </div>
    );

    function generateBody() {
        switch (sect[activeKey]) {
            case sect.basicInfo:
                return basicInfoBody;
            case sect.workExp:
                return workExpBody;
            case sect.project:
                return projectBody;
            case sect.education:
                return educationBody;
            case sect.achievement:
                return achievementsBody;
            case sect.summary:
                return summaryBody;
            case sect.other:
                return otherBody;
            default:
                return null;
        }
    }

    useEffect(() => {
        const activeInfo = info[sect[activeKey]];
        setSectionTitle(sect[activeKey]);
        setActiveInformation(activeInfo);
        setDetailIndex(0);
        setValues({
            name: activeInfo?.detail?.name || "",
            overview: activeInfo?.details
                ? activeInfo.details[0]?.overview || ""
                : "",
            link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            certificationLink: activeInfo?.details
                ? activeInfo.details[0]?.certificationLink || ""
                : "",
            companyName: activeInfo?.details
                ? activeInfo.details[0]?.companyName || ""
                : "",
            college: activeInfo?.details
                ? activeInfo.details[0]?.college || ""
                : "",
            location: activeInfo?.details
                ? activeInfo.details[0]?.location || ""
                : "",
            startDate: activeInfo?.details
                ? activeInfo.details[0]?.startDate || ""
                : "",
            endDate: activeInfo?.details
                ? activeInfo.details[0]?.endDate || ""
                : "",
            points: activeInfo?.details
                ? activeInfo.details[0]?.points
                    ? [...activeInfo.details[0]?.points]
                    : ""
                : activeInfo?.points
                ? [...activeInfo.points]
                : "",
            title: activeInfo?.details
                ? activeInfo.details[0]?.title || ""
                : activeInfo?.detail?.title || "",
            linkedin: activeInfo?.detail?.linkedin || "",
            github: activeInfo?.details
                ? activeInfo.details[0]?.github || ""
                : activeInfo?.detail?.github || "",
            phone: activeInfo?.detail?.phone || "",
            email: activeInfo?.detail?.email || "",
            summary:
                typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
            other:
                typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
        });
    }, [activeKey]);

    useEffect(() => {
        setActiveInformation(info[sect[activeKey]]);
    }, [info]);

    useEffect(() => {
        const details = activeInformation?.details;
        if (!details) return;

        const activeInfo = info[sect[activeKey]];
        setValues({
            overview: activeInfo.details[detailIndex]?.overview || "",
            link: activeInfo.details[detailIndex]?.link || "",
            certificationLink:
                activeInfo.details[detailIndex]?.certificationLink || "",
            companyName: activeInfo.details[detailIndex]?.companyName || "",
            location: activeInfo.details[detailIndex]?.location || "",
            startDate: activeInfo.details[detailIndex]?.startDate || "",
            endDate: activeInfo.details[detailIndex]?.endDate || "",
            points: activeInfo.details[detailIndex]?.points || "",
            title: activeInfo.details[detailIndex]?.title || "",
            linkedin: activeInfo.details[detailIndex]?.linkedin || "",
            github: activeInfo.details[detailIndex]?.github || "",
            college: activeInfo.details[detailIndex]?.college || "",
        });
    }, [detailIndex]);

    function handleSubmission() {
        switch (sect[activeKey]) {
            case sect.basicInfo: {
                const temp = {
                    name: values.name,
                    title: values.title,
                    linkedin: values.linkedin,
                    github: values.github,
                    email: values.email,
                    phone: values.phone,
                };
                props.setInfo((prev) => ({
                    ...prev,
                    [sect.basicInfo]: {
                        ...prev[sect.basicInfo],
                        detail: temp,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sect.workExp: {
                const tempDetail = {
                    certificationLink: values.certificationLink,
                    title: values.title,
                    startDate: values.startDate,
                    endDate: values.endDate,
                    companyName: values.companyName,
                    location: values.location,
                    points: values.points,
                };
                const tempDetails = [...info[sect.workExp]?.details];
                tempDetails[detailIndex] = tempDetail;

                props.setInfo((prev) => ({
                    ...prev,
                    [sect.workExp]: {
                        ...prev[sect.workExp],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sect.project: {
                const tempDetail = {
                    link: values.link,
                    title: values.title,
                    overview: values.overview,
                    github: values.github,
                    points: values.points,
                };
                const tempDetails = [...info[sect.project]?.details];
                tempDetails[detailIndex] = tempDetail;

                props.setInfo((prev) => ({
                    ...prev,
                    [sect.project]: {
                        ...prev[sect.project],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sect.education: {
                const tempDetail = {
                    title: values.title,
                    college: values.college,
                    startDate: values.startDate,
                    endDate: values.endDate,
                };
                const tempDetails = [...info[sect.education]?.details];
                tempDetails[detailIndex] = tempDetail;

                props.setInfo((prev) => ({
                    ...prev,
                    [sect.education]: {
                        ...prev[sect.education],
                        details: tempDetails,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sect.achievement: {
                const tempPoints = values.points;

                props.setInfo((prev) => ({
                    ...prev,
                    [sect.achievement]: {
                        ...prev[sect.achievement],
                        points: tempPoints,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sect.summary: {
                const tempDetail = values.summary;

                props.setInfo((prev) => ({
                    ...prev,
                    [sect.summary]: {
                        ...prev[sect.summary],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            case sect.other: {
                const tempDetail = values.other;

                props.setInfo((prev) => ({
                    ...prev,
                    [sect.other]: {
                        ...prev[sect.other],
                        detail: tempDetail,
                        sectionTitle,
                    },
                }));
                break;
            }
            default:
                return null;
        }
        console.log(values);
    }

    function handleAddNew() {
        const details = activeInformation?.details;
        if (!details) return;
        const lastDetail = details.slice(-1)[0];
        if (!Object.keys(lastDetail).length) return;
        details?.push({});

        props.setInfo((prev) => ({
            ...prev,
            [sect[activeKey]]: {
                ...info[sect[activeKey]],
                details: details,
            },
        }));
        setDetailIndex(details?.length - 1);
    }

    function handleDelete(index) {
        const details = activeInformation?.details
            ? [...activeInformation?.details]
            : "";
        if (!details) return;
        details.splice(index, 1);
        props.setInfo((prev) => ({
            ...prev,
            [sect[activeKey]]: {
                ...info[sect[activeKey]],
                details: details,
            },
        }));

        setDetailIndex((prev) => (prev === index ? 0 : prev - 1));
    }

    return (
        <div className="editor-container">
            <div className="editor-header">
                {Object.keys(sect).map((index) => {
                    return (
                        <div
                            className={
                                "editor-sect" +
                                (activeKey === index ? " active" : "")
                            }
                            key={index}
                            onClick={() => setActiveKey(index)}
                        >
                            {sect[index]}
                        </div>
                    );
                })}
            </div>
            <div className="editor-body">
                <InputControl
                    label="Title"
                    placeholder="Enter section title"
                    value={sectionTitle}
                    onChange={(event) => setSectionTitle(event.target.value)}
                />
                <div className="chips">
                    {activeInformation?.details
                        ? activeInformation?.details?.map((item, index) => (
                              <div
                                  className={
                                      "chip" +
                                      (detailIndex === index ? " active" : "")
                                  }
                                  key={item.title + index}
                                  onClick={() => {
                                      setDetailIndex(index);
                                  }}
                              >
                                  <p>
                                      {sect[activeKey]} {index + 1}
                                  </p>
                                  <FontAwesomeIcon
                                      icon={faXmark}
                                      onClick={(event) => {
                                          event.stopPropagation();
                                          handleDelete(index);
                                      }}
                                  />
                              </div>
                          ))
                        : ""}
                    {activeInformation?.details &&
                    activeInformation?.details?.length > 0 ? (
                        <div className="new" onClick={handleAddNew}>
                            +New
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                {generateBody()}

                <button className="btn-save" onClick={handleSubmission}>
                    Save
                </button>
            </div>
        </div>
    );
}
