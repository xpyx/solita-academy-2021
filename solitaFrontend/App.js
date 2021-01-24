import React, {useState} from 'react';
import Navigator from './navigators/Navigator';
import AppContext from './contexts/AppContext';

const App = () => {

  const [solitaPersons, setSolitaPersons] = useState([]);

  return (
    <AppContext.Provider value={[solitaPersons, setSolitaPersons]}>
      <Navigator />
    </AppContext.Provider>

  );
};

export default App;
