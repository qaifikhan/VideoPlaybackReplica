import React from 'react';
import classes from './WatchPage.module.css';
import Axios from 'axios';
import VideoCard from '../../Components/VideoCard/VideoCard';

class WatchPage extends React.Component {
    state = {
        videoList: [],
        videoData: {},
        showLoader: true,
        currentVideoId: 0,
    }

    getVideoDetails = () => {       
        window.scrollTo(0, 0)
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/video/' + this.props.match.params.id)
        .then(response => {
            const videoDetails = {...response.data};
            Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
            .then(response => {
                this.setState({videoList: [...response.data], videoData: videoDetails, showLoader: false});
            })
            .catch(err => {
                alert('Failed => ' + err.response.data);
            })
        })
        .catch(err => {
            alert('Failed => ' + err.response.data);
        })
    }

    componentDidMount() {
        this.getVideoDetails();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.getVideoDetails();
        }
    }

    render() {
        const videoCards = this.state.videoList.map((item) => {
            return (
                <VideoCard key={item.id} isPlaylist={true} id={item.id} thumbnail={item.thumbnail} title={item.title} />
            )
        })
        
        return(
            <div className={classes.MainContainer}>
                <div className={classes.PlayerSection}>
                    <div className={classes.VideoDetails}>
                    {
                        this.state.showLoader ? null : 
                        <div>
                            <iframe className={classes.Player} title={'Video'} src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}?title=0&byline=0`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>                            
                            <h1>{this.state.videoData.title}</h1>
                            <p>{this.state.videoData.description}</p>
                        </div>
                    }
                    </div>

                    <div className={classes.PlaylistSection}>
                        <div className={classes.Playlist}>
                            {videoCards}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WatchPage;