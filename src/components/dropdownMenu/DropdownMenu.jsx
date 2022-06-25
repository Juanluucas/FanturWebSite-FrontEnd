import React, { useRef, useEffect } from 'react';
import DropdownItem from './DropdownItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCircleXmark, faHouseChimney, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./DropdownMenu.css";

const DropdownMenu = ({ handleOpen, menuOptions, closeSession }) => {
    const refOne = useRef(null)

    const hiddenOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            handleOpen();
        }
    }

    useEffect(() => {
        document.addEventListener("click", hiddenOnClickOutside, true)
    }, []);

    return (
        <div className='gv-dropdownMenu-container' ref={refOne}>
            <DropdownItem path={"/"} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faCircleUser} />} >
                <p>Mi cuenta</p>
            </DropdownItem>
            <DropdownItem path={"/myfavourites"} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faHouseChimney} />} >
                <p>Mis favoritos</p>
            </DropdownItem>
            <DropdownItem path={"/myreservations"} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faBookmark} />} >
                <p>Mis reservas</p>
            </DropdownItem>
            <DropdownItem closeSession={closeSession} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faCircleXmark} />}>
                <p>Cerrar Sesión</p>
            </DropdownItem>
        </div>
    )
}

export default DropdownMenu;