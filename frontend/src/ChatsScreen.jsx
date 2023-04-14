import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsScreen = (props) => {
  return (
    <div className="background">
       <PrettyChatWindow
      projectId="70176e96-43eb-4094-bc3c-872e8e2ee95e"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  );
};

export default ChatsScreen;