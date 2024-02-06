import { createPortal } from "react-dom";

const ReactPortal = ({children, id}) => {
    const portalRoot = document.getElementById(id);
    return createPortal(children, portalRoot);
}

export default ReactPortal;