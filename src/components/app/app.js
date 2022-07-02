import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

const App = () => {

  const data = [
    {label: 'This data is very important', important: true, id: '3'},
    {label: 'This data is very important', important: false, id: '1'},
    {label: 'This data is very important', important: false, id: '7'}
  ];

  return (    
    <div className="app">
      <AppHeader />

      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter/>
      </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
  );
};

export default App;
