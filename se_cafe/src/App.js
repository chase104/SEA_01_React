import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import HomePage from './pages/homepage';
import ItemDetailsPage from './pages/pageTwo';
import { useContext, useEffect } from 'react';
import { PrimaryContext } from './contexts/PrimaryContext';
import axios from 'axios';

function App() {
  const { setCategories, setItems } = useContext(PrimaryContext);



  useEffect(() => {
    // get data
    // put data in context using SET functions
    // ask server for items and categories

    axios('/categories').then((response) => {
      setCategories(response.data);
    })
      
      
  }, []);

  useEffect(() => {
    axios('/items').then((response) => {
      console.log(response);
      setItems(response.data);
    });
  }, [])

  return (
    <div className="App">
     {/* forever sidebar */}
     <Sidebar />
     {/* <Drawer anchor={"left"} open={true} >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={"Item 1"}/>
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
      </Drawer> */}
     <HomePage />
     {/* <ItemDetailsPage /> */}
     {/* switch between 2 pages */}

    </div>
  );
}

export default App;
