import * as React from "react";
import { Cell, Column, HeaderCell } from "rsuite-table";
import Table from "rsuite/Table";
import "./ip-list.css";

const columns__ = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "ip", headerName: "IP", width: 130 },
  { field: "network", headerName: "Network", width: 130 },
  { field: "subnet_mask", headerName: "Subnet mask", width: 130 },
  {
    field: "network_prefix",
    editable: true,
    headerName: "Prefix",
    type: "number",
    width: 90,
  },
  {
    field: "place_name",
    headerName: "place_name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "location", headerName: "location", width: 130 },
  { field: "mac", headerName: "mac", width: 130 },
  { field: "hardware_type", headerName: "hardware_type", width: 130 },
  { field: "description", headerName: "description", width: 130 },
];

const rows = [
  {
    id: 1,
    ip: "102.100.100.100",
    network: "100.410.300.100",
    subnet_mask: "255.255.255.255",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 2,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 3,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 4,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 5,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 6,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 7,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 8,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 9,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 10,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 11,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 12,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 13,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 15,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 16,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 17,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 18,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 19,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 20,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 21,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 22,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
  {
    id: 23,
    ip: "10.41.30.4",
    network: "10.41.30.1",
    subnet_mask: "255.255.255.0",
    network_prefix: 24,
    place_name: "File server",
    location: "Server room",
    mac: "FF:FF:FF:FF:FF",
    hardware_type: "PC",
    description: "DN-3",
  },
];

export default function DataTable() {
  return (
    <div className="data-table">
      <Table
        autoHeight={true}
        data={rows}
        onRowClick={(data) => {
          console.log(data);
        }}
        onSortColumn={(sortColumn, sortType) => {
          console.log(sortColumn, sortType);
        }}
      >
        <Column sortable width={70} align="center" fixed>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={120} fixed>
          <HeaderCell>IP</HeaderCell>
          <Cell dataKey="ip" />
        </Column>

        <Column width={120}>
          <HeaderCell>Network</HeaderCell>
          <Cell dataKey="network" />
        </Column>

        <Column width={120}>
          <HeaderCell>Subnet mask</HeaderCell>
          <Cell dataKey="subnet_mask" />
        </Column>

        <Column width={50}>
          <HeaderCell>Prefix</HeaderCell>
          <Cell dataKey="network_prefix" />
        </Column>

        <Column width={120}>
          <HeaderCell>Place name</HeaderCell>
          <Cell dataKey="place_name" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>Location</HeaderCell>
          <Cell dataKey="location" />
        </Column>
        <Column width={120} fixed="right">
          <HeaderCell>Action</HeaderCell>

          <Cell>
            {(rowData) => {
              function handleAction() {
                alert(`id:${rowData.id}`);
              }
              return (
                <span>
                  <a onClick={handleAction}> Edit </a> | <a onClick={handleAction}> Remove </a>
                </span>
              );
            }}
          </Cell>
        </Column>
      </Table>
    </div>
  );
}
