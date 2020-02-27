import React from 'react';

import classes from './VideoCard.module.css';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
    return(
        <div className={[classes.VideoCard, props.isPlaylist ? classes.PlaylistCard : null].join(' ')}>
            <Link to={"/watch/"+props.id}>
                <img className={classes.VideoThumbnail} src={props.thumbnail} alt="Video Thumbnail" />
                <h3 className={classes.VideoTitle}>{props.title}</h3>
            </Link>
        </div>
    );
}

export default VideoCard;