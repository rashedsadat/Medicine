import React from 'react';
import About from './Components/about/About';
import Analysis from './Components/analysis/Analysis';
import Department from './Components/department/Department';
import FreeConsult from './Components/freeConsult/FreeConsult';
import NavMenu from './Components/navComponent/NavMenu';
import Search from './Components/search/Search';
import Services from './Components/services/Services';
import TopContent from './Components/topContent/TopContent';
import Doctor from './Components/doctor/Doctor';
import Updates from './Components/updates/Updates';

function App() {
  return (
    <div>
      <NavMenu/>
      <TopContent/>
      <Services/>
      <About/>
      <Search/>
      <FreeConsult/>
      <Department/>
      <Analysis/>
      <Doctor/>
      <Updates/>
    </div>
  );
}

export default App;
