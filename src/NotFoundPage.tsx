import "./NotFoundPage.css"
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return <div>Erreur 404, page introuvable<br/>
        <Link to="/Xinema/">Revenir à la page</Link>
    </div>
}