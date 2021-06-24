
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import SmallSidebar from './SmallSidebar';
import SmallSidebarRow from './SmallSidebarRow';

function App() {
  return (
    <div className='app'>
    {/* Header */}
    <Router>
    <Header />
    <hr />
    <Switch>

      <Route exact path='/'>
    <div className='app__page'>
        <SmallSidebar />
        {/* <Sidebar /> */}
        <RecommendedVideos />
        
    </div>
      </Route>
      <Route path='/search/:searchTerm'>
        <div className='app__page'>
          <div className='smallsidebar'>
        <SmallSidebar />
          </div>
          <div className='searchpage'>

        <SearchPage />
          </div>
    </div>
      </Route>
    </Switch>
   
    </Router>
    
    {/* Recomended Video */}
    </div>
  );
}

export default App;
