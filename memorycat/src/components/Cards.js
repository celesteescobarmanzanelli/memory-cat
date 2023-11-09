import { useState } from "react";
import Card from './Card';

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/f1.jpg', stat: ""},
        { id: 1, img: '/img/f1.jpg', stat: ""},
        { id: 2, img: '/img/f2.png', stat: ""},
        { id: 2, img: '/img/f2.png', stat: ""},
        { id: 3, img: '/img/f3.png', stat: ""},
        { id: 3, img: '/img/f3.png', stat: ""},
        { id: 4, img: '/img/f4.jpg', stat: ""},
        { id: 4, img: '/img/f4.jpg', stat: ""},
        { id: 5, img: '/img/f5.jpg', stat: ""},
        { id: 5, img: '/img/f5.jpg', stat: ""},
        { id: 6, img: '/img/f6.jpg', stat: ""},
        { id: 6, img: '/img/f6.jpg', stat: ""},
        { id: 7, img: '/img/f7.jpg', stat: ""},
        { id: 7, img: '/img/f7.jpg', stat: ""},
        { id: 8, img: '/img/f8.jpg', stat: ""},
        { id: 8, img: '/img/f8.jpg', stat: ""},
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout( () => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container2">
            { items.map((item, index) =>(
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}

        </div>
    )
}

export default Cards;