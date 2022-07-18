import { Card, CardImg, CardTitle } from 'reactstrap';
import { useState } from 'react';

const MenuButton = (props) => {
    const [stateImage, setStateImage] = useState(props.menubutton.image);

    const switchImage = () => {
        setStateImage(props.menubutton.image1);
    };

    const reverseImage = () => {
        setStateImage(props.menubutton.image);
    };

    return (
        <Card className='menuButton' key={props.menubutton.id} onMouseEnter={switchImage} onMouseOut={reverseImage}>
            <CardTitle className='cardTitle' onMouseEnter={switchImage} onMouseOut={reverseImage}>{props.menubutton.title}</CardTitle>
            <CardImg width='100%' src={stateImage} alt={props.menubutton.title} className='buttonImg' onMouseEnter={switchImage} onMouseOut={reverseImage} />
        </Card>
    );
};

export default MenuButton;