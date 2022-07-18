import { Row, Col } from "reactstrap";
import { PROEXPERIENCECARDS } from "../../shared/PROEXPERIENCECARDS";

const ProExperience = () => {
    return (
        PROEXPERIENCECARDS.map((card) => {
            return (
                <Row>
                    <Col xs='12' sm='12' md='12' lg='6' className='educationImgCol'>
                        <img src={card.image} alt={card.image} key={card.index} className='educationImg' />
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='6' className='educationInfoCol'>
                        <h4>{card.company}</h4>
                        <h4 className='textYellow'>{card.position}</h4>
                        <h6>{card.location}</h6>
                        <h6>{card.duration}</h6><br />
                    </Col>

                </Row>
            )
        })
    )
}

export default ProExperience;