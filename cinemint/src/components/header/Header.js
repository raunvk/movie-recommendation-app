import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../resources/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = ({ getAllMovies, getMoviesByKeyword }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search keyword:", searchKeyword);
        if (searchKeyword.trim() === '') {
          getAllMovies();
        } 
        else {
          getMoviesByKeyword(searchKeyword.trim());
        }
        navigate(searchKeyword.trim() === '' ? '/' : `/${searchKeyword.trim()}`);
    };

    const handleHomeClick = () => {
        getAllMovies(); 
        setSearchKeyword(''); 
        navigate('/'); 
    };

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand href="/" className="brand-logo" onClick={handleHomeClick}>
                    <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
                </Navbar.Brand>
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                    <NavLink to="/" className="nav-link home-link" onClick={handleHomeClick}>
                        <FontAwesomeIcon icon={faHouse} size="2x"/>
                    </NavLink>
                </Nav>
                <Form onSubmit={handleSearch} className="d-flex align-items-center">
                    <Form.Control
                        type="text"
                        placeholder="⌕&ensp;Enter keyword"
                        className="custom-search-input"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <Button variant="outline-info" type="submit" className="custom-search-button">
                        <div className="custom-search-button-text">Search</div>
                    </Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;
