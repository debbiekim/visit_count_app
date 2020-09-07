import React from 'react';
import './App.css';

const cookies = document.cookie
.split(';')
.map(cookie => cookie.split('='))
.reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

const setCookie = (cookiename, cookievalue) => {
  console.log("setting cookie" + cookiename);
  var cookieexpires = "";
    var daysexpires = 40;
    var today = new Date();
    today.setTime(today.getTime() + (daysexpires * 864e5));
    cookieexpires = "expires=" + today.toUTCString() + ";";
    
    document.cookie = cookiename + "=" + cookievalue + ";" + cookieexpires + "path=/";
};

const deleteAllCookies = (cookiepath = '/') => {
  console.log("delete cookie");
  document.cookie.split(';').forEach(function(c) {
    document.cookie = c.trim().split('=')[0] + '=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path='+cookiepath;
  });
};

const generateReport = () => {
  console.log("generating a report..");
  const message = `Here's the summary of your report.  You've visited ${cookies.visit} times.  Your color of the ball was ${cookies.color}.`;
  alert(message);
}

const getRandomColor = () => {
  console.log("getting randomly selected color..");
  const colors = ["red", "blue"];
  const randomnum = Math.floor(Math.random() * colors.length);
  return colors[randomnum];
};

const getRandomName = () => {
  console.log("getting name..");
  const names = ["John", "Jenny", "Josh", "Smith", "David"];
  const randomname = Math.floor(Math.random() * names.length);
  return names[randomname];
};

const getVisitCounts = () => {
  console.log("getting visit");
  console.log("Cookies : " + cookies.visit);
  if(!cookies.visit) {
    // new cookie
    console.log("new cookie");
    setCookie("name", getRandomName());
    setCookie("visit", 1);
    setCookie("color", getRandomColor());
  } else {
    console.log("existing cookie");
    var c = parseInt(cookies.visit);
    setCookie("visit", c + 1);
  }
};

function App() {
  console.log("Starting..");
  getVisitCounts();
  return (
    <div className="App">
      <div className="center">
      <h1> Hello, Welcome {cookies.name}!</h1>
      <h2> You've visited us {cookies.visit} time</h2>
      <img src={cookies.color + ".png"} alt={cookies.color} width="200" height="200" /> 
      </div>
      <div className="button">
        <button onClick={deleteAllCookies}> Delete All Cookies </button>
        <button onClick={generateReport}> Generate A Report</button>
      </div>
    </div> 
  );
};

export default App;
