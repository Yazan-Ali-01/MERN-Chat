import React, { useState } from "react";
import AuthScreen from './AuthScreen'
import ChatsScreen from './ChatsScreen'

function App() {
  const [user,setUser] = useState(undefined)

  if (!user) {
    return <AuthScreen onAuth={(user)=> setUser(user)} />
  } else {
    return <ChatsScreen user={user} />
  }
}

export default App;
