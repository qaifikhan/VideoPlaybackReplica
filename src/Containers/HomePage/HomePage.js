import React from 'react';
import classes from './HomePage.module.css';
import Axios from 'axios';
import VideoCard from '../../Components/VideoCard/VideoCard';

class HomePage extends React.Component {
    state = {
        videoList: [],
    }

    componentDidMount() {
        Axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
        .then(response => {
            this.setState({videoList: [...response.data]});
        })
        .catch(err => {
            alert('Failed => ' + err.response.data);
        })
    }

    render() {
        const videoCards = this.state.videoList.map((item) => {
            return (
                <VideoCard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} />
            )
        })
        return(
            <div className={classes.MainContainer}>
                <div className={classes.VideoGrid}>
                    {videoCards}
                </div>
            </div>
        );
    }
}

export default HomePage;