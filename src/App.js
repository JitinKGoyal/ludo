import { useEffect } from 'react';
import './App.css';
import MainLayout from './layouts/MainLayout';

function App() {

  // useEffect(() => {
  //   window.addEventListener('beforeunload', function (e) {
  //     var confirmationMessage = 'Are you sure you want to leave this page?';
  //     e.returnValue = confirmationMessage; // Standard for most browsers
  //     return confirmationMessage; // For some older browsers
  //   });
  // }, [])

  return (
    <div className="App">
      <center>
        <MainLayout />
      </center>
    </div>
  );
}

export default App;
