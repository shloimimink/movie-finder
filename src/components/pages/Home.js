import React from 'react';
import {connect} from 'react-redux';
import SearchForm from '../movie/SearchForm';
import MoviesContainer from '../movie/MoviesContainer';
import Spinner from '../layout/Spinner';


const Home = ({loading}) => {
    return (
        <div className="container">
            <SearchForm/>
            {loading ? <Spinner/> : <MoviesContainer/>}
        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.movies.loading
});

export default connect(mapStateToProps)(Home);
