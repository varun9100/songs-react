
export const songSelect = (song) =>{
    return{
        type: "SONG_SELECTED",
        payload: song
    };
};