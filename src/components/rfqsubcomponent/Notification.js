import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Notification = () => {
    const date = new Date();
    return (
        <>
            <div className="my-3">
                <div className=" my-2" style={{ padding: "0 10px" }}>
                    <div style={{ color: "Blue", fontSize: "14px", fontWeight: 'bold' }} className="py-1 px-3">Quotations</div>
                    <div className="d-flex justify-content-center h-100 mt-2 bg-white" style={{ padding: '8px 10px', border: "2px solid #DDE2FF", borderRadius: ".45rem", fontSize: '14px', fontWeight: 'bold', marginTop: "5px !important" }}>
                        <div className="my-auto" style={{ fontSize: '32px' }}><AccountCircleIcon style={{ fontSize: '45px' }} /></div>
                        <div>
                            <div style={{ fontSize: '12px', color: "#393838", fontWeight: 'bold', fontStyle: 'normal', letterSpacing: '0.4px' }}><span style={{ color: '#3751FF', fontWeight: 'bold' }}>Vendor Gabby Hawkins </span>has uploaded bid for RFQ ID 32453 </div>
                            <div style={{ fontSize: "11px", opacity: '0.5', letterSpacing: '0.4px', color: '#393838' }}>{date.toLocaleString()}</div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center h-100 mt-2 bg-white" style={{ padding: '8px 10px', border: "2px solid #DDE2FF", borderRadius: ".45rem", fontSize: '14px', fontWeight: 'bold', marginTop: "5px !important" }}>
                        <div className="my-auto" style={{ fontSize: '32px' }}><AccountCircleIcon style={{ fontSize: '45px' }} /></div>
                        <div>
                            <div style={{ fontSize: '12px', color: "#393838", fontWeight: 'bold', fontStyle: 'normal', letterSpacing: '0.4px' }}><span style={{ color: '#3751FF', fontWeight: 'bold' }}>Vendor Gabby Hawkins </span> has uploaded bid for RFQ ID 32453 </div>
                            <div style={{ fontSize: "11px", opacity: '0.5', letterSpacing: '0.4px', color: '#393838' }}>{date.toLocaleString()}</div>
                        </div>
                    </div>


                </div>
                <div className=" my-1" style={{ padding: "0 10px" }}>
                    <div style={{ color: "Blue", fontSize: "14px", fontWeight: 'bold' }} className="py-1 px-3">Points</div>
                    <div className="d-flex justify-content-center w-100 mt-2  h-100 bg-white" style={{ padding: '8px 10px', border: "2px solid #DDE2FF", borderRadius: ".45rem", fontSize: '14px', fontWeight: 'bold', marginTop: "5px !important" }}>
                        <div className="my-auto" style={{ fontSize: '32px' }}><AccountCircleIcon style={{ fontSize: '45px' }} /></div>
                        <div>
                            <div style={{ fontSize: '12px', color: "#393838", fontWeight: 'bold', fontStyle: 'normal', letterSpacing: '0.4px' }}>You have received<span style={{ color: '#3751FF', fontWeight: 'bold' }}>Blue Points </span> from RFQ ID 70996</div>
                            <div style={{ fontSize: "11px", opacity: '0.5', letterSpacing: '0.4px', color: '#393838' }}>{date.toLocaleString()}</div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center h-100 mt-2 bg-white" style={{ padding: '8px 10px', border: "2px solid #DDE2FF", borderRadius: ".45rem", fontSize: '14px', fontWeight: 'bold', marginTop: "5px !important" }}>
                        <div className="my-auto" style={{ fontSize: '32px' }}><AccountCircleIcon style={{ fontSize: '45px' }} /></div>
                        <div>
                            <div style={{ fontSize: '12px', color: "#393838", fontWeight: 'bold', fontStyle: 'normal', letterSpacing: '0.4px' }}>You have received <span style={{ color: '#78B563', fontWeight: 'bold' }}>Green Points </span>  from RFQ ID 70996</div>
                            <div style={{ fontSize: "11px", opacity: '0.5', letterSpacing: '0.4px', color: '#393838' }}>{date.toLocaleString()}</div>
                        </div>

                    </div>

                </div>

                <div className=" my-1" style={{ padding: "0 10px" }}>
                    <div style={{ color: "Blue", fontSize: "14px", fontWeight: 'bold' }} className="py-1 px-3">Deadlines Reached</div>
                    <div className="d-flex justify-content-center w-100 mt-2  h-100 bg-white" style={{ padding: '8px 10px', border: "2px solid #DDE2FF", borderRadius: ".45rem", fontSize: '14px', fontWeight: 'bold', marginTop: "5px !important" }}>
                        <div className="my-auto" style={{ fontSize: '32px' }}><AccountCircleIcon style={{ fontSize: '45px' }} /></div>
                        <div>
                            <div style={{ fontSize: '12px', color: "#393838", fontWeight: 'bold', fontStyle: 'normal', letterSpacing: '0.4px' }}> has closed bids for RFQ 77094 </div>
                            <div style={{ fontSize: "11px", opacity: '0.5', letterSpacing: '0.4px', color: '#393838' }}>{date.toLocaleString()}</div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center h-100 mt-2 bg-white" style={{ padding: '8px 10px', border: "2px solid #DDE2FF", borderRadius: ".45rem", fontSize: '14px', fontWeight: 'bold', marginTop: "5px !important" }}>
                        <div className="my-auto" style={{ fontSize: '32px' }}><AccountCircleIcon style={{ fontSize: '45px' }} /></div>
                        <div>
                            <div style={{ fontSize: '12px', color: "#393838", fontWeight: 'bold', fontStyle: 'normal', letterSpacing: '0.4px' }}><span style={{ color: '#3751FF', fontWeight: 'bold' }}>Operator Leslie Alexander </span> has confirmed BID ID 79903 for RFQ ID 73240 </div>
                            <div style={{ fontSize: "11px", opacity: '0.5', letterSpacing: '0.4px', color: '#393838' }}>{date.toLocaleString()}</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}


export default Notification;