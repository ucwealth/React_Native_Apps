import { useState } from "react";

 const CreatePost = () => {
     const [title, setTitle] = useState('')
     const [body, setBody] = useState('')
     const [author, setAuthor] = useState('mario')
     
    return ( 
        <div className="create">
            <h1>Add New Post</h1>
            <form action="" method="post">
                <label>Post title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => { 
                    setTitle(e.target.value)
                }}
                />

                <label>Post body: </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
                    
                </textarea>
                <label>Post author: </label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="wiki">wiki</option>
                    <option value="only fans">only fans</option>
                </select>
                <button type="submit">Add Post</button>
            </form>
        </div>
     );
}

export default CreatePost