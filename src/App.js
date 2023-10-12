import './App.css';
import{BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import HomePage from './components/HomePage';
import RQSuperHeros from './components/RQSuperHeroes';
import RQSuperheroesDetail from './components/RQSuperheroesDetail';
import SuperHeros from './components/SuperHeroes';
import ParallelQueries from './components/ParallelQueries';

const queryClient =new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li ><Link to="/">Home</Link></li>
          
            <li ><Link to="/superheroes">SuperHeros</Link></li>
          
            <li ><Link to="/rq-superheroes">RQ SuperHeros</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/parallelqueries" element={ <ParallelQueries/>}/>
         <Route path="/rq-superheroes/:heroId" element={ <RQSuperheroesDetail/>}/>
          <Route path="/" element={ <HomePage/>}/>
          <Route path="/superheroes" element={ <SuperHeros/>}/>
          <Route path="/rq-superheroes" element={ <RQSuperHeros/>}/>
        
        </Routes>
      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
    </div>
  );
}

export default App;
