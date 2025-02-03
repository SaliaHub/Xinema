import { useState, } from "react";



function PieceCase({
                       image,
                       alt,title}: {
    image: string;
    alt: string;title:string }) {
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
                display: "inline-block",
                position: "relative",
                width: 400,
                height: 256,
                border: "1px solid rgba(171,171,171,0.43)",
                borderRadius: 11,
                margin: 16,
                right:100,
            }}
        >
            <img
                src={image}
                alt={alt}
                style={{
                    position: "absolute",
                    height: 256,
                    width: 170,
                    top: 0,
                    borderRadius:10
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 180,
                }}
            >
                <h1
                    style={{
                        fontSize: 20,
                        color: "white",
                        fontFamily: "Verdana",
                    }}>
                    {title}
                </h1>
                <button
                    value={"Bande Annonce"}
                    type={"button"}
                    onMouseOver={withMouseOver}
                    onMouseOut={withOutMouseOver}
                    style={{
                        position: "absolute",
                        color: "white",
                        display: "inline",
                        border: "1px solid #FFFFFFFF",
                        borderRadius: 5,
                        background: backGround ? "rgba(117,117,117,0.4)" : "transparent",
                        width:106.99
                    }}
                >
                    Bande annonce
                </button>
            </div>

        </div>
    );
}



export default PieceCase;
