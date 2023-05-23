import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import HomePage from './pages/homepage';
import ItemDetailsPage from './pages/pageTwo';
import { useContext, useEffect } from 'react';
import { categories as categoriesFromDatabase, items } from './data';
import { PrimaryContext } from './contexts/PrimaryContext';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
function App() {
  const { setCategories, setItems } = useContext(PrimaryContext);

  useEffect(() => {
    // get data
    setTimeout(() => {
      setCategories(categoriesFromDatabase);
      setItems(items);
    }, 1000)
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
