import React, { useContext } from 'react'
import { MyFirstContext } from '../../contexts'

const Messages = () => {
  const { notifications } = useContext(MyFirstContext)

  const notificationsJSX = [];

  for(let i=0; i<4; i++) {
    notificationsJSX.push(<div>{notifications[i].content}</div>)
  }

  return (
    <div>
      {/* dispaly just 4 messages */}
      {notificationsJSX}
    </div>
  )
}

export default Messages