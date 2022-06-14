

function Card({title,text}) {
    return <div>
        {title?<h4 className='card-title'>{title} </h4>:null}
        {text?<p className='card-text'>{text}</p>:null}
           </div>


}

export default Card;