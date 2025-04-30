import React from "react";
import LabMember from "./LabMember";
import "./LabMemberList.css";

export default function LabMemberList({ members }) {
  return (
    <div className="lab-member-list">
      {members.map((m, idx) => (
        <LabMember
          key={idx}
          name={m.name}
          department={m.department}
          section={m.section}
          hobby={m.hobby}
          skill={m.skill}
        >
          {m.quote}
        </LabMember>
      ))}
    </div>
  );
}
