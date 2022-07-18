import { Row, Col } from "reactstrap"
import { CERTIFICATIONSLIST } from "../../shared/CERTIFICATIONSLIST";


const Certifications = () => {
    return (
        CERTIFICATIONSLIST.map((card) => {
            return (
                <Row>
                    <Col xs='12' className='certificationInfoCol'>
                        <h4 className='textYellow'>{card.title}</h4>
                        <h4>{card.institution}</h4>
                    </Col>
                    <Col xs='12' className='certificationCol'>
                        <img src={card.image} alt={card.image} key={card.index} className='certificateImg' />
                    </Col>
                </Row>
            )
        })
    )
}

export default Certifications;