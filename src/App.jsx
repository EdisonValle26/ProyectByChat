import { useState } from "react";
import AuthPage from "./authPage";
import ChatsPage from "./chatsPage";
import "./App.css"

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;