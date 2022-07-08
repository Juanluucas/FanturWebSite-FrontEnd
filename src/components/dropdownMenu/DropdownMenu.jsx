import React, { useRef, useEffect } from 'react';
import DropdownItem from './DropdownItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCircleXmark, faHouseChimney, faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./DropdownMenu.css";
import { useStore, useDispatch } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

const DropdownMenu = ({ handleOpen, menuOptions }) => {
    const refOne = useRef(null)
    const {user} = useStore();
    const dispatch = useDispatch()

    const hiddenOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            handleOpen();
        }
    }

    useEffect(() => {
        document.addEventListener("click", hiddenOnClickOutside, true)
    }, []);

    const closeSession = () =>{
        dispatch({
            type: types.authLogin
        })
    }

    return (
        <div className='gv-dropdownMenu-container' ref={refOne}>
            <DropdownItem path={"/"} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faCircleUser} />} >
                <p>Mi cuenta</p>
            </DropdownItem>
            {user.rol === "Admin" && <DropdownItem path={"/"} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faCircleUser} />} >
                <p>Crear Paquete</p>
            </DropdownItem>}
            <DropdownItem closeSession={closeSession} handleOpen={handleOpen} leftIcon={<FontAwesomeIcon icon={faCircleXmark} />}>
                <p>Cerrar Sesión</p>
            </DropdownItem>
        </div>
    )
}

export default DropdownMenu;