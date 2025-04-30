import React from "react";
import "./LabMember.css";

export default function LabMember({
  name,
  department,
  section,
  hobby,
  skill,
  children,
}) {
  return (
    <div className="lab-member-card">
      <h3 className="lab-member-name">{name}</h3>
      <ul className="lab-member-details">
        <li>
          <strong>Department:</strong> {department}
        </li>
        <li>
          <strong>Section:</strong> {section}
        </li>
        <li>
          <strong>Hobby:</strong> {hobby}
        </li>
        <li>
          <strong>Skill:</strong> {skill}
        </li>
      </ul>
      {children && (
        <blockquote className="lab-member-quote">{children}</blockquote>
      )}
    </div>
  );
}
