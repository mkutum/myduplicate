
import React, { useState } from 'react';
import Notification from './Notification';
import Messages from './Messages';

const NotiMsg = () => {
    const [notification, setNotification] = useState(true);
    const [styler, setStyles] = useState({
        background: 'transparent',
        color: '#3751FF'
    });
    const [styler1, setStyles1] = useState({
        background: '#363740',
        color: '#fff'
    })

    const showNotification = () => {
        setNotification(true)
        setStyles({
            background: 'transparent',
            color: '#3751FF'
        })
        setStyles1({
            background: '#363740',
            color: '#fff'
        })

    }
    const showMessage = () => {
        setNotification(false)
        setStyles1({
            background: '#fff',
            color: '#3751FF'
        })
        setStyles({
            background: '#363740',
            color: '#fff'
        })


    }
    return (
        <>
            <div id='rfq_right'>
                <div id='rfq_right_bar' className="row m-0 " style={{ height: 45 + 'px' }}>
                    <div onClick={showNotification} id="noti" className='col-6 h-100 px-2' style={{ background: styler.background, color: styler.color, fontWeight: 'bold', fontSize: '15px', letterSpacing: '0.4px', lineHeight: '45px', textAlign: 'center' }}>
                        {/* <div style={styles}  className='card h-100 rounded-0 justify-content-center text-center'>NOTIFICATION</div> */}
                        NOTIFICATIONS
                    </div>
                    <div onClick={showMessage} id="msg" className='col-6 h-100 px-2' style={{ background: styler1.background, color: styler1.color, fontWeight: 'bold', fontSize: '15px', letterSpacing: '0.4px', lineHeight: '45px', textAlign: 'center', }}>
                        {/* <div className='card h-100 bg-secondary rounded-0 justify-content-center text-center'>MESSAGE</div> */}
                       MESSAGES
                    </div>
                </div>
                {
                    notification ? <Notification /> : <Messages />
                }



            </div>
        </>
    )
}

export default NotiMsg;