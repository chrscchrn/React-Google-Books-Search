import React, { useState } from "react";
import { Col, Row, Container } from "../components/grid";
import API from "../utils/api";
import { Input, FormBtn } from '../components/form';
import Jumbotron from "../components/jumbotron";
import { List, ListItem } from "../components/list";
import SaveBtn from '../components/saveBtn';

export default function Search() {

    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };
    
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title) {
            API.searchBooks(formObject.title)
            .then(res => {
                setBooks(res.data.items)
            })
            .catch(err => console.log(err));
        }
    };
    function save(id) {
        let num;
        for (let i in books) {
            if (books[i].id === id)  {
                num = i
            }
        }
        
        API.saveBook({
            title: books[num].volumeInfo.title,
            authors: books[num].volumeInfo.title,
            description: books[num].volumeInfo.description,
            image: books[num].volumeInfo.imageLinks.smallThumbnail,
            link: books[num].accessInfo.webReaderLink,
            id: books[num].id
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
        
    return (
        <>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Search with Google Books!!!</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                onChange={handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <FormBtn
                                disabled={!formObject.title}
                                onClick={handleFormSubmit}
                            >
                                Get Books
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Search Results</h1>
                        </Jumbotron>
                        {books ? (
                        <List>
                            {books.map(book => (
                            <ListItem key={book.id}>
                                <img src={book.volumeInfo.imageLinks.thumbnail} />
                                <strong>
                                    {book.volumeInfo.title} by {book.volumeInfo.authors}
                                </strong>
                                <SaveBtn onClick={() => save(book.id)} />
                                <br/>
                                <p>{book.volumeInfo.description}</p>                                
                                <a href={book.accessInfo.webReaderLink 
                                        ? book.accessInfo.webReaderLink 
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