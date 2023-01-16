const Navbar = () => {
    return (
        <nav>
            <h1>My-To-Do=List</h1>
            <div className="links">
                <a href="/" style={{
                    background: "blue"
                }}>Home</a>
                <a href="/lists" style={{
                    background: "green"
                }}>View your lists</a>
                <a href="/contact" style={{
                      background: "#6d0f2b"
                }}>Contact</a>
            </div>
        </nav>
    );
}

    export default Navbar;