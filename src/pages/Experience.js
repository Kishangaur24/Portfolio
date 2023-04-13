import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            A.V. Inter College Gorakhpur Uttar Pradesh
          </h3>
          <p> High School 10th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            I did my Higher secondary 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Higher secondary
          </h4>

          <p> Science(Math ,Physics & Chemistry)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           I did my  Bachelor's Degree from Deen Dayal Upadhaya University Gorakhpur Uttar Pradesh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          <p> Bachlor of Arts</p> 
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-Nov - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           FunctionUp Experience
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Front-end Developer 4 month
          </h4>
          <p>
            During the functionUp 4 month front-end traning i have build 4 project Using React.js CSS,Recoil,React-Router-Dom
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
