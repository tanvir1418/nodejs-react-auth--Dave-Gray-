import { Link } from 'react-router-dom';

const Editor = () => {
    return (
        <section>
            <h1>Editors Page</h1>
            <br />
            <p>You must been assigned as Editor role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    );
};

export default Editor;
