import React from 'react';
import Table from './Table';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const RfqDetails = () => {
    const style = {
        main: {
            margin: '3px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 'bold',
            background: '#fff',
            letterSpacing: '0.4px'
        },
        bg: {
            margin: '3px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '0.4px'

        }

    };



    return (
        <>
            <div id='rfq_record'>
                <div id='rfq_search' className='row  pt-4' style={{ 'height': '100px' }}>
                    <div id='rfq_id' className='col-6' style={{
                        color: '#252733', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: '20px',
                        letterSpacing: '0.3px'
                    }}>RFQs</div>
                    <div id='frq_search' className='col-3 text-right' >
                        <div className='border rounded bg-white' style={{ height: 33 + 'px' }} >
                            <input type='text' placeholder='Search' className='text-center h-100 px-2 border-0' style={{ 'width': '85%', 'outline': 'none' }} />
                            <SearchIcon className='h-100 p-1 ' style={{ 'width': '15%', 'opacity': '0.4' }} />
                        </div>
                    </div>
                    <div id='rfq_name' className='col-3 text-right' style={{ color: '#252733', fontSize: '15px', fontWeight: '600', letterSpacing: '0.2px' }}>Jones Ferdinand <AccountCircleIcon fontSize='large' /></div>
                </div>
                <div className='row' style={{ fontWeight: 'bold', letterSpacing: '0.4px', fontStyle: 'normal' }}>
                    <div className='col-8'>
                        <div className='text-left mx-3'>
                            <Button size="large" style={style.main} variant="outlined">ALL RFQs</Button>
                            <Button size="large" style={style.bg} variant="outlined" disabled>
                                ACTIVE
                            </Button>
                            <Button size="large" style={style.bg} variant="outlined" disabled>
                                ARCHIVE
                            </Button>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='text-right mx-1'>
                            <Button variant="contained" size="small" className='mx-1' borderRadius="10px !important" style={{ fontWeight: 'bold', letterSpacing: '0.4px', color: '#fff', background: '#29CC97', borderRadius: '10px', border: '1px solid #B2B2B6' }}>
                                CREATE RFQs
                            </Button>
                            <Button size="small" variant="contained" className='mx-1' style={{ fontWeight: 'bold', letterSpacing: '0.4px', color: '#fff', background: '#E2E5E7', borderRadius: '10px !important', border: '1px solid #B2B2B6' }}>DRAFTS</Button>
                        </div>

                    </div>
                </div>
                <div style={{ minHeight: '74%', marginTop: '-3px', marginLeft: '12px', marginRight: '12px', backgroundColor: '#fff', border: '1px solid #DFE0EB', borderRadius: '4px' }}>
                    <div className="row" style={{ height: '60px' }}>
                        <div className='col-4 offset-8  text-right'>
                            <div className='row w-100 h-100 m-0 p-0' style={{
                                fontSize: '12px', fontStyle: 'normal',
                                fontWeight: '600',
                                letterSpacing: '0.2px',
                                color: '#4B506D'
                            }}>
                                <div className='col-3 text-center my-auto px-1'>
                                    <span style={{ display: 'inline-block', width: '12px', height: '12px', verticalAlign: 'middle', marginRight: '6px', marginBottom: '3px', background: '#DD22BF' }}></span>
                                    <span style={{ display: 'inline-block', margin: 'auto' }}>Private</span>
                                </div>
                                <div className='col-3 text-center my-auto px-1'>
                                    <span style={{ display: 'inline-block', width: '12px', height: '12px', verticalAlign: 'middle', marginRight: '6px', marginBottom: '3px', background: '#8392F6' }}></span>
                                    <span style={{ display: 'inline-block', margin: 'auto' }}>Public</span>
                                </div>
                                <div className='col-3 text-center m-auto'>
                                    <SortIcon /><span style={{ display: 'inline-block', marginLeft: '3px' }}>Sort</span>
                                </div>
                                <div className='col-3 text-center m-auto px-1'>
                                    <FilterListIcon /><span style={{ display: 'inline-block', marginLeft: '3px' }}>Filter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Table />
                    <div className='row text-center' style={{ height: '55px', color: '#9FA2B4', fontSize: '11px' }}>
                        <div className='col-8 my-auto'></div>
                        <div className='col-2 my-auto'>
                            <span>Rows per page</span>
                            <span><ArrowDropDownIcon /></span>
                        </div>
                        <div className='col-1 my-auto text-left'>
                            1-6 of 100
                        </div>
                        <div className='col-1 my-auto text-left px-0'>
                            <span style={{ display: 'inline-block', textAlign: 'left', marginLeft: '10px' }}><ArrowBackIosIcon style={{ fontSize: '12px' }} /></span>
                            <span style={{ display: 'inline-block', marginLeft: '10px' }}><ArrowForwardIosIcon style={{ fontSize: '12px' }} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RfqDetails;