import { useState } from 'react'
import Data from './Data.json'

const delete_image = "./delete_image.png";
const edit_image = './edit_image.png';

const Lists = () => {
  const [lists, setLists] = useState(Data);

  const handleDelete = (id) => {
    const newList = lists.filter((datas) => datas.id !== id);
    setLists(newList);
  }

  return (
    <div className="lists">
      <h1>Welcome to your overview page of your lists</h1>
      <p style={{
        textAlign: 'center',
        color: 'white'
      }}>Create, Delete or Edit your lists!</p>
      <div className="collection-of-lists">
        {lists.map(datas => {
          return (
            <div className="list-preview" key={datas.id}>
              <h2 style={{
                color: 'white'
              }}>{datas.title}</h2>
              <p>Created at: {datas.created}</p>
              <div className="action-images">
                <img src={edit_image} className="action-images-list" />
                <img src={delete_image} onClick={() => handleDelete(datas.id)} className="action-images-list" />
              </div>
            </div>
          )
        })}
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
