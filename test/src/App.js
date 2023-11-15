import React from "react";
import './App.css'
import img1 from './images/dog.jpg';
import img2 from './images/flower1.jpg';
import img3 from './images/flower2.jpg';

const handleClick = () => {
    const caption = document.getElementsByTagName('figcaption');
    const gallery = document.getElementsByClassName('sect1');
    let i;
    for (i = 0; i < gallery.length; i++){
        if (caption[i].style.display === "none"){
            caption[i].style.display = "block"
        } else {
            caption[i].style.display = "none"
        }
    }

}
//commit
function Image(){
    return (
        <div className="gallery">
            <div className="sect1">
                <img src={img1} alt="" width="45%" height="auto"/>
                <figcaption>This is a picture of my dog, playing outside.</figcaption>
                <button onClick={handleClick}>Caption</button>
            </div>
            <div className="sect1">
                <img src={img2} alt="" width="50%" height="auto"/>
                <figcaption>Here is a picture of a flower inside above the sink.</figcaption>
                <button onClick={handleClick}>Caption</button>
            </div>
            <div className="sect1">
                <img src={img3} alt="" width="60%" height="auto"/>
                <figcaption>This is a picture of a flower.</figcaption>
                <button onClick={handleClick}>Caption</button>
            </div>
        </div>
    )
}
export default Image;