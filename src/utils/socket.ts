import { io } from 'socket.io-client';

const URL = process.env.NEXT_PUBLIC_API_URL;
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on("connect_error", (err) => {
  console.log('Socket error: ', err.message); // not authorized
  alert('Error occured, please try again');
  socket.disconnect();
  window.location.href = '/';
});

export default socket;