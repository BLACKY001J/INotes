import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


const NoteList = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, []);

    const getNotes = async () => {
        let result = await fetch('https://i-notesbackend.vercel.app/allnotes', {
            method: 'get',
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        })
        result = await result.json()
        console.log(result)
        setNotes(result)
    }

    const deleteNotes = async (id)=> {
        let result = await fetch(`http://localhost:5000/deletenote/${id}`, {
            method: 'Delete',
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }

        })
        result = await result.json()
        console.log(result)
        if(result){
            getNotes()
        }
    }

    return (
        <>
            {
            notes.length > 0 ? notes.map((note) => {
                return (
            
                <Card style={{ width: '18rem' }} key={note._id}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.description}
                    </Card.Text>
                    <Button variant="primary my-3" onClick={()=> deleteNotes(note._id)}>Delete</Button>{' '}
                    <Link to={"/update/"+note._id} >Edit </Link>
                </Card.Body>
            </Card>
                )
            }): <h1>No Result Found</h1>}
        </>
    )
}

export default NoteList
