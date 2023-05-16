import { useState, createContext } from 'react';

export const MyFirstContext = createContext();


const MyFirstContextProvider = (props) => {
    // put state here

    const [pages, setPages] = useState(["Home", "About", "Contact"]);
    const [currentPage, setCurrentPage] = useState("Home");
    const [user, setUser] = useState({name: "Chase", role: "admin", userId: 1, imageUrl: "https:asdqweasdfasdf.com"});
    const [importantMessage, setImportantMessage] = useState("Your extended warranty will expire soon");
    const [notifications, setNotifications] = useState(
        [
            {
              userId: 1,
              content: 'Your order has been shipped!',
              importance: 9
            },
            {
              userId: 2,
              content: 'Your subscription is about to expire',
              importance: 8
            },
            {
              userId: 1,
              content: 'New sale: 20% off all items',
              importance: 5
            },
            {
              userId: 3,
              content: 'Welcome to our app!',
              importance: 7
            },
            {
              userId: 2,
              content: 'New feature added: Dark mode',
              importance: 2
            },
            {
              userId: 1,
              content: 'Your account information has been updated',
              importance: 7
            },
            {
              userId: 2,
              content: 'New sale: Buy one, get one free',
              importance: 6
            },
            {
              userId: 3,
              content: 'New feature added: Push notifications',
              importance: 3
            },
            {
              userId: 1,
              content: 'Your payment has been processed',
              importance: 4
            },
            {
              userId: 2,
              content: 'Your account has been locked due to suspicious activity',
              importance: 10
            },
            {
              userId: 3,
              content: 'New product release: The Ultimate Widget',
              importance: 8
            },
            {
              userId: 1,
              content: 'New sale: 30% off all clearance items',
              importance: 5
            },
            {
              userId: 2,
              content: 'Your subscription has expired',
              importance: 9
            },
            {
              userId: 3,
              content: 'Your order has been delivered',
              importance: 6
            },
            {
              userId: 1,
              content: 'New product release: The Super Widget',
              importance: 8
            },
            {
              userId: 2,
              content: 'New feature added: Live chat support',
              importance: 3
            },
            {
              userId: 3,
              content: 'Your payment has been declined',
              importance: 9
            },
            {
              userId: 1,
              content: 'New feature added: Multi-language support',
              importance: 2
            },
            {
              userId: 2,
              content: 'Your account has been deleted',
              importance: 10
            }
          ]
          
    )
    
    return (
        <MyFirstContext.Provider value={
            {
            pages, setPages,
            currentPage, setCurrentPage,
            user, setUser,
            importantMessage, setImportantMessage,
            notifications, setNotifications
            }
        }>
            
            {props.children}
        </MyFirstContext.Provider>
    )
}

export default MyFirstContextProvider;