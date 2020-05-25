import React from 'react';
import SearchBar from './components/SearchBar'
import Logs from './components/Logs'
import AddBtn from './components/AddBtn'
import AddLogModal from './components/AddLogModal'
import EditLogModal from './components/EditLogModal'
import AddTechModal from './components/AddTechModal'
import TechListModal from './components/TechListModal'

function App() {
  return (
    <div>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </div>
  );
}

export default App;
