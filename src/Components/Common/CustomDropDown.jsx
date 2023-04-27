import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
export default function CustomDropDown(props) {
  const list = props.dropList?.map((li, index) => {
    return (
      <Dropdown.Item href={li.route} key={index}>
        <div className="dropdown-div " onClick={() => props.handleClick(li)}>
          {li.title}
        </div>
      </Dropdown.Item>
    );
  });
  return (
    <Dropdown className="customDropdown">
      <Dropdown.Toggle id="dropdown-basic">{props.UserName}</Dropdown.Toggle>

      <Dropdown.Menu>{list}</Dropdown.Menu>
    </Dropdown>
  );
}
