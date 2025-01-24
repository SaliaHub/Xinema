
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {useState} from "react";


function PieceCase() {

    const [backGround, setBackGround] = useState(false);
    function withMouseOver() {
        setBackGround(true);
    }
    function withOutMouseOver() {
        setBackGround(false);
    }
    return (
            <div
                style={{
                    position: "relative",
                    width: 256,
                    height: 220,
                    border: "1px solid rgba(171,171,171,0.43)",
                    borderRadius:11
                }}
            >
                <img
                    src={"/Xinema/images/Breaking_Bad.webp"}
                    alt="Poster"
                    style={{
                        position: "absolute",
                        height: 144,
                        width: 256,
                        top: 0,
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10
                    }}
                />
                <button value={"Bande Annonce"}
                        type={"button"}
                        onMouseOver={withMouseOver}
                        onMouseOut={withOutMouseOver}
                       style={{
                           position: "absolute",
                           left:10,
                           bottom:45,
                           color:"white",
                           display:"inline",
                           border: "1px solid #FFFFFFFF",
                           borderRadius:5,
                           background: backGround ? "rgba(117,117,117,0.4)":"transparent",
                       }}
                >
                    Bande annonce
                </button>
            </div>
    )
}

export default PieceCase;
