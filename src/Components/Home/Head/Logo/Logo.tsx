import {useNavigate} from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    return (

        <div onClick={() => {navigate("/Xinema/")}}>
            <img src="/Xinema/images/Logo.png"
                 alt="the-mandalorian-font"/>
        </div>

    )
}

export default Logo;