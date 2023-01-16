
const Home = () => {

    const handleClick = () => {
        console.log('Hello, ninjas');
    }
    const handleClickAgain = (name) => {
        alert('Hello ' + name);
    }

    return (
        <div className="home">
            <h1>Welcome to the Home Page!</h1>
            <p style={{
                color: "white",
                textAlign: "center"
            }}>Create your special to do list! Add what ever you want and have a great overview.</p>
            <div className="section-list-box">
                <div className="list-box">
                    <div className="title">
                        <h1>My To Do List</h1>
                        <div className="title-buttons">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-body-text" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="item">
                        <p>- Taking the dog outside! and i need to talk with the neighbour</p>
                        <div className="item-buttons">
                            <button className="item-buttons" style={{
                                backgroundColor: 'orange'
                            }}>Edit</button>
                            <button className="item-buttons" style={{
                                backgroundColor: 'red'
                            }}>Delete</button>
                        </div>
                    </div>
                    <div className="item">
                        <p>- Practice React!</p>
                        <div className="item-buttons">
                            <button className="item-buttons" style={{
                                backgroundColor: 'orange'
                            }}>Edit</button>
                            <button className="item-buttons" style={{
                                backgroundColor: 'red'
                            }}>Delete</button>
                        </div>
                    </div>
                    <div className="item">
                        <p>- Learning new stuff!</p>
                        <div className="item-buttons">
                            <button className="item-buttons" style={{
                                backgroundColor: 'orange'
                            }}>Edit</button>
                            <button className="item-buttons" style={{
                                backgroundColor: 'red'
                            }}>Delete</button>
                        </div>
                    </div>
                    <div className="item">
                        <p>- Preparing food</p>
                        <div className="item-buttons">
                            <button className="item-buttons" style={{
                                backgroundColor: 'orange'
                            }}>Edit</button>
                            <button className="item-buttons" style={{
                                backgroundColor: 'red'
                            }}>Delete</button>
                        </div>
                    </div>
                    <div className="item">
                        <p>- Hit the gym</p>
                        <div className="item-buttons">
                            <button className="item-buttons" style={{
                                backgroundColor: 'orange'
                            }}>Edit</button>
                            <button className="item-buttons" style={{
                                backgroundColor: 'red'
                            }}>Delete</button>
                        </div>
                    </div>
                    <div className="item">
                        <p>- Eat dinner</p>
                        <div className="item-buttons">
                            <button className="item-buttons" style={{
                                backgroundColor: 'orange'
                            }}>Edit</button>
                            <button className="item-buttons" style={{
                                backgroundColor: 'red'
                            }}>Delete</button>
                        </div>
                    </div>
                    <form action="">
                        <input type="text" name="input-add-task" className="input-add-task" placeholder="Enter a task..."/>
                        <button className="add-task-button">Add</button>
                    </form>
                </div>
                <div className="list-box-desc">
                    <p>There are a lot of features you can use! Add, Edit, Delete what you want to.</p>
                    <p style={{
                        marginTop: '20px'
                    }}>Want to get started now?</p>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>
        </div>
    );
}
export default Home;