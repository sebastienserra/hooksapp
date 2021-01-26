import React, {useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs, setSongs] =  useState( [
        {title: 'Almost home', id:1},
        {title: 'This wild darkness', id:2},
        {title: 'Memory gospel', id:3}

    ]);
    const addSong = (title) =>{
        setSongs([...songs, {title: title, id: uuidv1()}]);
    }
    useEffect(()=>{
        console.log('useEffect hook ran', songs);
    }, [songs]) // array enables to limit the time when the useEffect function is called for the elements passed in the array
    return ( 
        <div className="song-list">
            <ul>
                    {songs.map(song => {
                        return(<li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong ={addSong} />
        </div>
     );
}
 
export default SongList;