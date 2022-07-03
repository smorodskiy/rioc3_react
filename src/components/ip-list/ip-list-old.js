import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'ip', headerName: 'IP', width: 130 },
  { field: 'network', headerName: 'Network', width: 130 },
  { field: 'subnet_mask', headerName: 'Subnet mask', width: 130 },
  {
    field: 'network_prefix', editable: true,
    headerName: 'Prefix',
    type: 'number',
    width: 90,
  },
  {
    field: 'place_name',
    headerName: 'place_name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'location', headerName: 'location', width: 130 },
  { field: 'mac', headerName: 'mac', width: 130 },
  { field: 'hardware_type', headerName: 'hardware_type', width: 130 },
  { field: 'description', headerName: 'description', width: 130 },
  
];

const rows = [
  { id: 1, ip: '10.41.30.4', network: '10.41.30.1',  subnet_mask: '255.255.255.0',
  network_prefix: 24, place_name: 'File server', location: 'Server room',
  mac: 'FF:FF:FF:FF:FF', hardware_type: 'PC', description: 'DN-3'
  },
  { id: 2, ip: '10.41.30.4', network: '10.41.30.1',  subnet_mask: '255.255.255.0',
  network_prefix: 24, place_name: 'File server', location: 'Server room',
  mac: 'FF:FF:FF:FF:FF', hardware_type: 'PC', description: 'DN-3'
  },
  { id: 3, ip: '10.41.30.4', network: '10.41.30.1',  subnet_mask: '255.255.255.0',
  network_prefix: 24, place_name: 'File server', location: 'Server room',
  mac: 'FF:FF:FF:FF:FF', hardware_type: 'PC', description: 'DN-3'
  },
  { id: 4, ip: '10.41.30.4', network: '10.41.30.1',  subnet_mask: '255.255.255.0',
  network_prefix: 24, place_name: 'File server', location: 'Server room',
  mac: 'FF:FF:FF:FF:FF', hardware_type: 'PC', description: 'DN-3'
  },
  { id: 5, ip: '10.41.30.4', network: '10.41.30.1',  subnet_mask: '255.255.255.0',
  network_prefix: 24, place_name: 'File server', location: 'Server room',
  mac: 'FF:FF:FF:FF:FF', hardware_type: 'PC', description: 'DN-3'
  },

];

export default function DataTable() {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
}
