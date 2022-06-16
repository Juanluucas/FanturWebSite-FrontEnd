import React, { useState } from 'react'
import Axios from 'axios'

function PostForm() {
    const url = ""
    const [data, setData] = useState({
        name: "",
        date: "",
        iduser: "",
        img: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            date: data.date,
            iduser: parseInt(data.iduser),
            img: data.img,
        })
            .then(res=>{
                console.log(res.data)
            })
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <ol>
                    <ul><input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input></ul>
                    <br/>
                    <ul><input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"></input></ul>
                    <br/>
                    <ul><input onChange={(e)=>handle(e)} id="iduser" value={data.iduser} placeholder="iduser" type="number"></input></ul>
                    <br/>
                    <ul><input onChange={(e)=>handle(e)} id="img" value={data.img} placeholder="img" type="text"></input></ul>
                    <br/>
                    <ul><button>Submit</button></ul>
                </ol>
                
                
                
                
            </form>
        </div>
    )
}



export default PostForm
