import { Row, Col } from "reactstrap";
import { TREDUCATIONCARDS } from "../../shared/TREDUCATIONCARDS";

const TREducation = () => {
    return (
        TREDUCATIONCARDS.map((card) => {
            return (
                <Row>
                    <Col xs='12' sm='12' md='12' lg='6' className='educationImgCol'>
                        <img src={card.image} alt={card.image} key={card.index} className='educationImg' />
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='6' className='educationInfoCol'>
                        <h4>{card.software}</h4>
                        <h4 className='textYellow'>{card.certificate}</h4>
                        <h6>{card.software}</h6>
                    </Col>

                </Row>
            )
        })
    )
}

export default TREducation;