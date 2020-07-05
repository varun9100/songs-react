import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title: 'hello guru', duration: '4:25'},
        {title: 'kumbali', duration: '3:25'},
        {title: 'rockstar', duration: '4:00'},
        {title: 'night', duration: '3:50'},
        {title: 'paradise', duration: '3:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})