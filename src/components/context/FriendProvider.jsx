import React, { createContext, useState } from 'react';
import Interaction from '../InteractionsCard/Interaction';

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
    const [text, setText] = useState([]);
    const [call, setcall] = useState([]);
    const [videoCall, setVideoCall] = useState([]);
    const [intaList, setIntaList] = useState([]);

    const getFormattedDate = () => {
        return new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    const handleInteractions = (type, friendName, id) => {
        const newInteractionData = {
            id: id,
            keyId: crypto.randomUUID(),
            type: type,
            friendName: friendName,
            date: getFormattedDate()
        };
        setIntaList(prevList => [newInteractionData, ...prevList]);
    };

    const handleCall = (friend) => {
        setcall([...call, friend]);
        handleInteractions('call', friend.name, friend.id);
    };

    const handleText = (friend) => {
        setText([...text, friend]);
        handleInteractions('text', friend.name, friend.id);
    };

    const handleVideoCall = (friend) => {
        setVideoCall([...videoCall, friend]);
        handleInteractions('video', friend.name, friend.id);
    };

    const data = { text, call, videoCall,intaList, setText, setcall, setVideoCall, handleCall, handleText, handleVideoCall }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;