import React, { useRef, useState } from 'react';
import { Sidebar } from '../Sidebar';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
const Navbar = () => {

    const titleShow = useRef(null)
    const titleDisplay = () => {
        if (titleShow.current.style.display === 'block') {
            titleShow.current.style.display = 'none';
        } else {
            titleShow.current.style.display = 'block';
        }

    }
    return (
        <>
            <div id='navigation_bar'>
                <div className='sidebar-icon'>
                    <ul className='sidebarList-icon'>
                        <li className='row'><div id="icon" onClick={titleDisplay} ><VerticalSplitIcon /></div></li>
                        {
                            Sidebar.map((value, key) => {
                                return (
                                    <li key={key} className="row" onClick={() => {
                                        window.location.pathname = value.link;


                                    }}>
                                        <div id="icon">{value.icon}</div>
                                    </li>
                                );

                            })
                        }


                    </ul>

                </div>
                <div className='sidebar-title' ref={titleShow}>
                    <ul className='sidebarList-title'>
                        <li key='mfirst' className='row'><div id="title" ></div></li>
                        {
                            Sidebar.map((value, key) => {
                                return (
                                    <li key={key} className="row" onClick={() => {
                                        window.location.pathname = value.link;
                                    }}>
                                        <div id="title">{value.title}</div>
                                    </li>
                                );

                            })
                        }


                    </ul>

                </div>
            </div>
        </>
    )
}
export default Navbar;