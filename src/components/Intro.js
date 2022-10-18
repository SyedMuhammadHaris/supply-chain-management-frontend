import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SupplyChain from '../images/supplyChain.jpg'
import './styles.css';

const Intro = () => {
    return (
        <section className='home' data-aos="fade-up">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <h1 className="home__title">Supply Chain Management System</h1>

                        <p className='intro'>Vector SCMS is the combination of supply chain management system and buisness intelligence which combinely forms a product which intimates both manfacturer and supplier </p>
                     
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className="home__img">
                            <img src={SupplyChain} alt='Supply chain' />
                            </div>
                    </Col>
                </Row>
                </Container>

        </section>
    )
}

export default Intro;