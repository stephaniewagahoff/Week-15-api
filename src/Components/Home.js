import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const Home = (props) => {
    const { home, updateHome } = props;

    const deleteRoom = (roomId) => {
        const updateHomes = {
            ...home, 
            rooms: home.rooms.filter((x) => x._id !== roomId)
        };
        updateHome(updateHomes)
    }

    const addNewRoom = (room) => updateHome({...home, rooms: [...home.rooms, room]});

    const rooms = () => (
        <ul>
            {home.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{home.name}</h1>
            {
                rooms({ rooms, homeId: home._Id, deleteRoom })
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
    
};