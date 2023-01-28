import React from 'react';
import { useLocation } from 'react-router-dom';
import RocketCard from '../components/RocketCard';

const Search = () => {
    const {state} = useLocation();
    return (
        <div>
            <RocketCard rocket={state[0]}></RocketCard>
        </div>
    );
};

export default Search;