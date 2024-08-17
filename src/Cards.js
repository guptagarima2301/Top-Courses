import React from "react";
import Card from "./Card";

const Cards=({courses})=>{
    let allCourses=[];
// returns you a list of all courses from api
    const getCourses=()=>{
        Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })

        return allCourses;
    
    }
    return(
        <div>
            {!courses ? (
                <div>
                <p>no daata found</p>
                </div>

            ):(
                getCourses().map((course) =>{
                    return <Card key={course.id} course={course}></Card>
                 })
     
            )}
            {

    

        }



        </div>

    )
}

export default Cards;