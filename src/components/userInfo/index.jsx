import React, {useState} from "react";
import "./index.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import DotMenuIcon from "../dropdownMenu/DotMenuIcon";

const UserInfo = ({ userName, closeSession, children }) => {
  const [open, setOpen] = useState(false);
  const name = userName.split(" ");
  
  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div style={{display: "flex"}}>
      <div className="gv-container-info">
        <div className='unc-icons-user'>
          {
            name.map(i => (
              <p>{i.slice(0, 1).toUpperCase()}</p>
            ))
          }
        </div>
        <div className="gv-info">
          <p>Hola,</p>
          <span>{userName}</span>
        </div>
      </div>
      {window.innerWidth > 468 ? <DotMenuIcon handleOpen={handleOpen}/> : null}
      {window.innerWidth > 468 && open && <DropdownMenu menuOptions={children} handleOpen={handleOpen} setMenuOptions={setOpen} closeSession={closeSession}/>}
    </div>
  );
};

export default UserInfo;
