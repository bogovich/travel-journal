import PropTypes from "prop-types";


const MainContent = ({children}) => {
    return (
        <main>
            <div className="main-container">
                {children}
            </div>
        </main>
    );
}

MainContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default MainContent;