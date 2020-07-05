import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if(song){
        return <div>
            Song Info
            <div>
            {song.title}<br></br>{song.duration}
            </div>
            </div>;
    }
    else return <div>Please select a Song</div>;
    
};

const mapStateToProps = (state) =>{
    return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);