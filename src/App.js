import React from 'react';
function App() {
  return (
      
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={require('./profile.jpg')} alt="Display" />
      <div className="px-6 py-4">
        <div className="App-header">
          Blessing Krofegha
        </div>
        <p className="">
          When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
        </p>
      </div>
      <div className="">
        <span className="">#Software Engineer</span>
        <span className="">#Writter</span>
        <span className="">#Public Speaker</span>
      </div>
    </div>
  );
}
export default App;
