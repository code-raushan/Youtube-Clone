import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetails from './components/VideoDetails';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

//Using React Router DOM for routing

//Navbar component remains the same for all routes
function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}> 
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
