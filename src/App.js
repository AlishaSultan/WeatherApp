import './App.css';
import '../src/components/assets/weather.css'
import Card from './components/Card';
import { useState } from 'react';


function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(time);
  
  const updatetime = () => {
     time = new Date().toLocaleTimeString();
    settime(time);
  }

  setInterval(updatetime, 1000); 

  // Get the current date
  let currentDate = new Date();

  // Extract the components (year, month, day)
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
  let day = currentDate.getDate().toString().padStart(2, '0');

  // Construct the desired date format (e.g., YYYY-MM-DD)
  let customDateFormat = `${day}-${month}-${year}`;



  return (
      <div className = "wrapper">
      <div className ="background-image">
     
        <Card ctime={ctime} customDateFormat = {customDateFormat} />
      </div>
    </div>
    
      

    
  );
}

export default App;
