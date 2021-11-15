import React, { useEffect,useState } from 'react';

import ContInfo from '../layouts/ContInfo';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';
import WrapTitle from '../layouts/WrapTitle';

import YoutubeList from '../info/YoutubeList'
import YoutubeSearch from '../info/YoutubeSearch';

const SECRET_KEY = process.env.REACT_APP_KEY;
console.log(SECRET_KEY)

function Youtube(){
    const [videos, setVideos] = useState([]);

    const start = ()=>{
        setTimeout(()=>{
            alert('ddd')
        },2000);
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${SECRET_KEY}&maxResults=30&type=video`, requestOptions)
            .then(response => response.json())
            // .then(result => console.log(result.items))
            .then(result => {
                setVideos(result.items)
                start();
            })
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=javascript&key=${SECRET_KEY}&maxResults=30&type=video`, requestOptions)
            .then(response => response.json())
            // .then(result => console.log(result.items))
            .then(result => {
                setVideos(result.items)
                start();
            })
            .catch(error => console.log('error', error));

    }, []);

    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["yotube", "reference"]} />
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search}/>
                            <div className="youtube">
                                <YoutubeList videos={videos} />
                            </div>
                        </div>
                    </div>
                </section>
            </Contents>
            <ContInfo />
            <Footer />      
        </div>
    )
}

export default Youtube;