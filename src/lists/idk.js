import {useState} from 'react'

const Lists = () => {
    const [lists, setList] = useState([
        { id: 1 ,title: "My first list", items: ["- Taking the dog outside! and i need to talk with the neighbour", "- Practice React!", "- Learning new stuff!", "- Preparing food", "- Hit the gym"], created: "2023-16-01" },
        { id: 2 ,title: "My Second list", items: ["- Taking the dog outside! and i need to talk with the neighbour", "- Practice React!", "- Learning new stuff!", "- Preparing food", "- Hit the gym"], created: "2023-16-01" },
        { id: 3 ,title: "My Third list", items: ["- Taking the dog outside! and i need to talk with the neighbour", "- Practice React!", "- Learning new stuff!", "- Preparing food", "- Hit the gym"], created: "2023-16-01" },
    ]);

    return (
        <div className="lists">
            <h1>Welcome to your overview page of your Lists</h1>
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lists;