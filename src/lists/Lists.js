import {useState} from 'react'

const delete_image = "./delete_image.png";
const edit_image = './edit_image.png';

const Lists = () => {
    const [lists, setList] = useState([
        { id: 1, title: "My first list", created: "2023-16-1"},
    ]);
    return (
        <div className="lists">
            <h1>Welcome to your overview page of your lists</h1>
            <p style={{
                textAlign: 'center',
                color: 'white'
            }}>Create, Delete or Edit your lists!</p>
            <div className="collection-of-lists">
                {lists.map((list) => (
                    <div className="list-preview" key={list.id}>
                        <h2 style={{
                            color: 'white'
                        }}>{list.title}</h2>
                        <p>Created at: {list.created}</p>
                        <div className="action-images">
                            <img src={edit_image} className="action-images-list" />
                            <img src={delete_image} className="action-images-list" />
                        </div>
                    </div>
                ))}
                <div id="create-new">
                    <button type="submit" style={{
                        marginTop: "10px"
                    }}>Create a new list</button>
                </div>
            </div>
        </div>
    );
}

export default Lists;