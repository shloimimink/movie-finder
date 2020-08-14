import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchMovies, setLoading, clearMovies} from '../../actions/searchActions';


const SearchForm = (props) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert('please enter some content');
        } else {
            props.fetchMovies(text);
            props.setLoading();
            setText('');
        }
    };
    const onChange = (e) => {
        setText(e.target.value)
    };

    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container">
                <h1 className="display-5 mb-3">
                    <i className="fa fa-search">Search for movies ,TV Shows...</i>
                </h1>
                <form id="searchForm" onSubmit={onSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        name="text"
                        placeholder="Search..."
                        value={text}
                        onChange={onChange}
                    />
                    <button
                        type="button"
                        onClick={props.clearMovies}
                        className="btn btn-warning btn-bg mt-3 mx-2">
                        Clear Movies
                    </button>
                    <button type="submit" className="btn btn-primary btn-bg mt-3">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect(
    null,
    {fetchMovies, setLoading, clearMovies}
)(SearchForm);
