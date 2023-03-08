import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { Button } from "react-chat-engine-advanced";
 const ChatsPage = (props) => {
    return (
      <div style={{ height: "95vh", width: "100vw"}}>
        <PrettyChatWindow
          projectId="a36d8b9d-b6b0-47b5-b99a-c5a46766b42c"
          username={props.user.username} // adam
          secret={props.user.secret} // pass1234
          style={{ height: "100%" }} 
        />
        <div style={{ background: "#282b36"}}>
          <Button onClick={function noRefCheck(){
            window.location.reload();
          }} style={{ 
            width: "100%",
            height: "45px",
            cursor:" pointer",
            background: "#f72d7a",
            color: "#fff",   
         }}>
            <div>
              {' '}Logout
            </div>
          </Button>     
        </div>
      </div>
    );
};

export default ChatsPage;
