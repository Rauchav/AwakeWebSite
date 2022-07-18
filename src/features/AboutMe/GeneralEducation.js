import { Row, Col } from "reactstrap";
import { GENERALEDUCATIONCARDS } from "../../shared/GENERALEDUCATIONCARDS";

const GeneralEducation = () => {
    return(
        GENERALEDUCATIONCARDS.map((card) => {
            return (
                <Row>
                    <Col xs='12' sm='12' md='12' lg='6' className='educationImgCol'>
                        <img src={card.image} alt={card.image} key={card.index} className='educationImg' />
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='6' className='certificationInfoCol'>
                        <h4>{card.institution}</h4>
                        <h4 className='textYellow'>{card.certificate}</h4>
                        <h6>{card.location}</h6>
                        <h6>{card.duration}</h6><br/>
                    </Col>
                </Row>
            )
        })
    )
}

export default GeneralEducation;