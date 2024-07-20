import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'


const Update = ()=> {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const params = useParams();             // to access the parameters of the current route.
    const navigate = useNavigate();

    useEffect(() => {
        getNotesDetails();
    }, [])

    const getNotesDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/notes/${params.id}`, {
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setTitle(result.title);
        setDescription(result.description);
    
    }

    const updateNote = async () => {
        let result = await fetch(`http://localhost:5000/notes/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'Application/json',
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        if (result) {
            navigate('/notes')
        }

    }

    return (
        <div className='product'>
        <h1>Update Note</h1>
        <input type="text" placeholder='Enter product name' className='inputBox'
            value={title} onChange={(e) => { setTitle(e.target.value) }}
        />

        <input type="text" placeholder='Enter product price' className='inputBox'
            value={description} onChange={(e) => { setDescription(e.target.value) }}
        />

        <button onClick={updateNote} className='appButton'>Update</button>
    </div>
    )
}

export default Update