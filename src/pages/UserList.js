import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
//import ApiKey from '../../ApiKey';
import Header from '../components/Header';



const UserList = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];

        for(let i = 0; i < moviesId.length; i++) {
            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=21b1b9d489b7c2b42dd00c877fc5f8fc&language=fr-FR&external_source=imdb_id`)
            .then((res)=> setListData((listData) => [...listData, res.data]));
        }
        }, []);

      

    return (
        <div className='user-list-page'>
            <Header/>
            <h2>Coup de Coeur <span>❤️</span></h2>
            <div className="result">
                {listData.length > 0 ? listData.map((movie) => (
                    <Card movie={movie} key={movie.id}/>)) : <h2>Aucun coup de coeur pour le moment</h2>}
            </div>
        </div>
    );
};

export default UserList;