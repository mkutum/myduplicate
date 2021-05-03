import React from 'react';
import Navbar from './Navbar'
import RfqDetails from './rfqsubcomponent/RfqDetails'
import NotiMsg from './rfqsubcomponent/NotiMsg'
const Rfqs = () => {

    return (
        <>
            <Navbar />
            <div id="rfqs" className="row">
                <RfqDetails />
                <NotiMsg />
            </div>
        </>
    )
}
export default Rfqs;