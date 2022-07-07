import React from "react";
import { Container, Header } from "rsuite";
import Sidemenu from "../sidebar/sidebar";
import Table from "../app-table/app-table-content";
// import AppHeader from "../app-header";
// import SearchPanel from "../search-panel";
// import PostStatusFilter from "../post-status-filter";
// import PostList from "../post-list";
// import PostAddForm from "../post-add-form";

// import {  LogoAnalytics, Dashboard, Group, Magic} from '@rsuite/icons'
import "rsuite/dist/rsuite.min.css";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Container>
        {/* боковое меню */}
        <Sidemenu />

        <Container>
        
          {/* заголовок */}
          <Header>
            <h2>IP Адреси</h2>
          </Header>
        
          {/* список ip */}
          <Table/>
        </Container>

      </Container>
    </div>
  );
};

export default App;
