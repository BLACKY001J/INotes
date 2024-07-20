import React, { useState } from 'react'

const Note = () => {
    const [title, setTitle] = useState('')              
    const [description, setDescription] = useState('')

    const handleClick = async () => {

        let result = await fetch('http://localhost:5000/addnote', {
            method: 'post',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
                'authorization': JSON.parse(localStorage.getItem('token'))
            }
        })
        result = await result.json();
        console.log(result)
    }
    return (
        <>
            <div className='app-container'>
                <h2>Add Notes</h2>
                <form className='note-form'>
                    <input type="text" className="input-form" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} minLength={5} required placeholder='title' />
                    <input type="text" className="text-area" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} minLength={5} required placeholder='content...' rows={10} />

                    <button disabled={title.length < 5 || description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </>
    )

}

//  the 'value' attribute sets the value that gets submitted with the form data if the input is selected or filled in by the user.

export default Note;