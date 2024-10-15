import './box.scss';

const Box = ({ title, image, backgroundImage, handleClick }) => {

    return (
        <div className='boxStructure' style={{ backgroundImage: `url("${backgroundImage}")` }} onClick={handleClick}>
            <span> {title} </span>
            {image && <img src={image} alt={title} />}
        </div>
    )
}

export default Box;