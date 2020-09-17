import React,{useState, useEffect} from 'react';
import './App.css';
import {  FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // console.log(messages);
  // console.log(input);
  
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setMessages(
          snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []); 

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }

  return (
    <div className="App">
      
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="facebook" />
      <h1>This is shaw's version!</h1>
      <h3>Hey {username}</h3>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>   
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message}) => {
            return(<Message key={id} username={username} message={message} />)
          })
        }
      </FlipMove>    
    </div>
  );
}

export default App;
