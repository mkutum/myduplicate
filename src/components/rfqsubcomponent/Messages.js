import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Messages = () => {
    return (
        <>
            <div className='px-0 mx-0 py-4 h-100 bg-white text-center'>
                <div style={{ height: '40px' }}>

                    <input type="input" placeholder="Search" style={{ textAlign: 'center', fontSize: '18px', color: '#565656', fontWeight: 'bold', color: '#868686', background: '#DDE2FF', border: 'none', width: '185px', height: '40px' }} />

                    <SearchIcon style={{ padding: '7px', textAlign: 'center', background: '#C4C4C4', height: '45px', width: '45px', borderRadius: '50%', margin: '-3px 1px 0px 17px' }} />
                </div>
                <div className="my-4" style={{ height: '40px', width: '100%', height: '45px', display: 'flex' }}>
                    <div className='mx-3' style={{ alignItems: 'center', width: '45px' }}>
                        <div style={{ borderRadius: '50%', fontSize: '23px', width: '45px', textAlign: 'center', background: '#C4C4C4', textAlign: 'center', color: '#565656', letterSpacing: '0.4px', fontWeight: 'bold', lineHeight: '45PX' }}>O</div>
                        <div style={{ fontSize: '12px', color: '#868686', width: '100%', textAlign: 'center' }}>Operators</div>
                    </div>
                    <div className='ml-2 mr-4' style={{ alignItems: 'center', width: '45px' }}>
                        <div style={{ borderRadius: '50%', fontSize: '23px', width: '45px', textAlign: 'center', background: '#C4C4C4', textAlign: 'center', color: '#565656', letterSpacing: '0.4px', fontWeight: 'bold', lineHeight: '45PX' }}>V</div>
                        <div style={{ fontSize: '12px', color: '#868686', width: '100%', textAlign: 'center' }}>Vendors</div>
                    </div>
                    <div style={{ width: '6rem', height: '45px' }}>
                        <div className='p-auto bg-primary text-center' style={{ margin: '11px 7px', borderRadius: '11px', color: 'white', fontWeight: 'bold' }}>
                            Buttons
                        </div>
                    </div>
                </div>


            </div>
        </>

    );
}

export default Messages;