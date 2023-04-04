import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid';
import AdminLayout from '../../../layouts/AdminLayout'
import api from '../../../config/Api';
// import Skeleton from 'react-loading-skeleton';
import { CARD_TYPE } from '../../../config/CardTypes';

const CampaignPage = () => {

    const [campaigns, setCampaigns] = useState([])
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [pageLoading, setPageLoading] = useState(true)

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 25,
        page: 0,
    });

    useEffect(() => {
        fetchCampaigns();

    }, [])

    const fetchCampaigns = async () => {
        try {
            const res = await api.get(`/api/v1/campaign`)
            const data = res.data
            setCampaigns(data == null ? [] : data)
            setPageLoading(false)
            console.log(data)
        }
        catch (e) {
            console.log(e)
        }
    }

    const campaignsColumns = [
        {
            field: 'campaign_id',
            headerName: 'Campaign ID',
            flex: 1,
            resizable: true,
        },
        {
            field: 'card_type',
            headerName: 'Card Type',
            flex: 1,
            resizable: true,
            valueGetter: (v) => CARD_TYPE[v.row.card_type],
        },
        {
            field: 'start_date',
            headerName: 'Start Date',
            resizable: true,
            flex: 1,
        },
        {
            field: 'end_date',
            headerName: 'End Date',
            flex: 1,
            resizable: true,
        },
        {
            field: 'bonus_rates',
            headerName: 'Bonus Rates',
            flex: 1,
            resizable: true,
            valueFormatter: (p) => p.value.toFixed(2)

        },
        {
            field: 'min_spend',
            headerName: 'Minimum Spend',
            flex: 1,
            resizable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 1,
            resizable: true,
        },
    ];

    return (
        <div className='px-10 py-20'>
            {pageLoading ? <div count={rowsPerPage} height={60}></div> : <Box sx={{ height: '100vh', width: '100%' }}>
                <DataGrid
                    getRowId={(r) => r.campaign_id}
                    autoHeight {...campaigns}
                    rows={campaigns}
                    columns={campaignsColumns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: rowsPerPage,
                            },
                        },
                    }}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    slots={{ toolbar: CustomToolbar }}
                    pageSizeOptions={[rowsPerPage]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>}
        </div>
    );
}

function CustomToolbar() {
    return <GridToolbarContainer>
        <GridToolbar></GridToolbar>
    </GridToolbarContainer>

}

CampaignPage.getLayout = function getLayout(page) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}

export default CampaignPage;
