import React, { useEffect, useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const Table = () => {
    const [data, setData] = useState([]);



    // fetching the data from the API
    useEffect(() => {
        fetch('http://workindipl.herokuapp.com/listofrfq/', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json()).then(result => {
            setData(result)
            console.log(result)


        })
    }, [])




    const dataDisplay = (event) => {
        event.preventDefault();
        const tableLength = event.currentTarget.childNodes.length;
        const disCom = event.currentTarget.childNodes
        for (var i = 1; i < tableLength; i++) {
            if (disCom[i].style.display === 'none') {
                disCom[i].style.display = '';
            } else {
                disCom[i].style.display = 'none';
            }
        }
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <div className='w-100 border-bottom d-inline-flex pl-2 mr-2' style={{
                    position: 'relative', fontSize: '12px', justifyContent: 'space-evenly',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    letterSpacing: '0.2px',
                    color: '#9FA2B4'
                }}>
                    <div className='text-left pl-3 !important' style={{ width: '25%' }}>RFQ details</div>
                    <div className='text-center' style={{ width: '11%' }}>Part number</div>
                    <div className='text-center' style={{ width: '11%' }}>Engine number</div>
                    <div className='text-center ' style={{ width: '13%' }}>Manufacturer</div>
                    <div className='text-center' style={{ width: '8%' }}>Quantity</div>
                    <div className='text-center' style={{ width: '10%' }}>Target Date</div>
                    <div className='text-center' style={{ width: '10%' }}>Deadline</div>
                    <div className='text-center' style={{ width: '9%' }}>Priority</div>
                    <div className='text-center' style={{ width: '3%' }}></div>
                </div>

                {
                    data.map(item => {
                        const componentN = item.component_set.map((name) => {
                            return (`${name.component_name} `).charAt(0).toUpperCase() + (`${name.component_name}`).slice(1).toLowerCase()
                        });
                        const matchFirstLetter = componentN.join(", ");
                        const myRegEx = /\b(\w)/g;
                        return (
                            <div className='w-100 d-inline-flex pl-0  border border-bottom-0 text-center' style={{ position: 'relative', fontSize: '12px' }}>
                                <table onClick={dataDisplay} table="true" id="rfqTable" className='w-100' style={{ border: 'none', borderSpacing: '0 !important' }}  >
                                    <thead id={item.rfq_id}>
                                        <tr className='border border-left-0 border-right-0' style={{ height: '53px', padding: '5px 0', color: ' #252733', fontSize: '12px', letterSpacing: '0.2px', fontWeight: '600' }}>
                                            <th style={{ width: '5%', color: '#fff', fontSize: '23px', fontWeight: '300', textAlign: 'right' }}>
                                                <span style={{ position: 'absolute', left: 0, top: 0, borderTop: '0px solid yellow', borderLeft: '22px solid #DD22BF', borderBottom: '22px solid transparent' }}></span>
                                                <span style={{ display: 'inline-block', background: '#A1DFF9', position: 'relative', textAlign: 'center', marginRight: '0', width: '34px', borderRadius: '50%' }}>{matchFirstLetter.match(myRegEx)[0]}</span>
                                            </th>
                                            <th style={{ width: '21%', textAlign: 'left', paddingLeft: '5px' }}>
                                                <div style={{ display: 'inline-block' }}>{componentN.join(", ")}</div>
                                                <div style={{ fontSize: '10px', letterSpacing: '0.1px', color: '#A4A5A8' }}> Created on {item.create_date.split('T')[0]}</div>
                                            </th>
                                            <th style={{ width: '10%' }}></th>
                                            <th style={{ width: '11%' }}></th>
                                            <th style={{ width: '13%' }}></th>
                                            <th style={{ width: '8%' }}></th>
                                            <th style={{ width: '10%' }}>{item.targetdate.split('T')[0]}</th>
                                            <th style={{ width: '10%' }}>{item.deadline}</th>
                                            <th style={{ width: '9%' }}>
                                                <div className="border mx-4" style={item.rfq_reach === 'PUB' ? { padding: '1px 0', letterSpacing: '0.5PX', background: '#5291F0', color: '#fff', fontSize: '10px', borderRadius: '10px', border: 'none' } : { padding: '1px 0', letterSpacing: '0.5PX', background: '#DD22BF', color: '#fff', fontSize: '10px', borderRadius: '10px', border: 'none' }}>
                                                    <span>{item.rfq_reach}</span>
                                                </div>
                                            </th>
                                            <th style={{ width: '3%', color: '#C5C7CD' }}><MoreVertIcon /></th>
                                        </tr>
                                    </thead>
                                    <>
                                        {
                                            item.component_set.map((subset) => {
                                                return (

                                                    <tbody style={{ display: 'none' }} className={item.rfq_id} >
                                                        <tr style={{ height: '53px', color: '#252733', letterSpacing: '0.2px', fontSize: '10px', fontWeight: '600' }}>
                                                            <td></td>
                                                            <td className={'border border-left-0 border-right-0'} style={{ position: 'relative' }}>
                                                                <span style={{ display: 'inline-block', position: 'relative', width: '34px', height: "34px", color: '#fff', background: '#008DC8', fontSize: '23px', fontWeight: 300, borderRadius: '50%' }}>{subset.component_name.match(myRegEx)[0]}</span>
                                                                <span style={{ display: 'inline-block', position: 'relative', width: '75%', textAlign: 'left', paddingLeft: '10px' }}>{subset.component_name}</span>
                                                            </td>
                                                            <td className={'border border-left-0 border-right-0'}></td>
                                                            <td className={'border border-left-0 border-right-0'}>{subset.number}</td>
                                                            <td className={'border border-left-0 border-right-0'}>{subset.manufacturer}</td>
                                                            <td className={'border border-left-0 border-right-0'}>{subset.quantity}</td>
                                                            <td className={'border border-left-0 border-right-0'}></td>
                                                            <td className={'border border-left-0 border-right-0'}></td>
                                                            <td className={'border border-left-0 border-right-0'}></td>
                                                            <td style={{ color: '#C5C7CD' }} className={'border border-left-0 border-right-0'}><MoreVertIcon /></td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })

                                        }
                                    </>


                                </table>
                                {/* <div style={{ display: 'grid', placeItems: 'center' }}><MoreVertIcon style={{ color: '#C5C7CD' }} /></div> */}
                            </div>

                        )
                    })

                }


            </div>
        </>
    );
}

export default Table;


