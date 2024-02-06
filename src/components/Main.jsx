import Entry from "./Entry";
import data from "../data.js"

const Main = () => {
    return (
        <main>
            <div className="main-container">
                {data.map((entry, index) => <Entry key={index} {...entry} />)}
            </div>
        </main>
    );
}

export default Main;