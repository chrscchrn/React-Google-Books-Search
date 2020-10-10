import React, { useState, useEffect } from "react";
import Jumbotron from "../components/jumbotron";
import { List, ListItem } from "../components/list";
import { Col, Row, Container } from "../components/grid";
import API from "../utils/api";

export default function Saved() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks();
    }, [])
    
    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Your Saved Books!!!</h1>
                        </Jumbotron>
                        {books ? (
                            <List>
                                {books.map(book => (
                                <ListItem key={book.id}>
                                    <img src={book.image
                                            ? book.image 
                                            : null} />
                                    <strong>
                                        {book.title} by {book.authors}
                                    </strong>
                                    {/* <SaveBtn onClick={() => save(book.id)} /> DELETE THIS*/}
                                    <br/>
                                    <p>{book.description}</p>                                
                                    <a href={book.link 
                                            ? book.link 
                                            : null}>Open in Google Books</a>
                                </ListItem>
                                ))}
                            </List>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
}