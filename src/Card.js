import React from "react";

const Card=({course})=>{
    return(
        <div>
            <div>
                <img src={course.image.url}></img>

                <div>
                    <button>

                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    )
}

export default Card;