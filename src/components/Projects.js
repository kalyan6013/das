import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { listOfCompletedProjects, listOfOngoingProjects } from '../utils/utils';
import { Container } from 'react-bootstrap';
function Projects() {
  return (
  <>  <br/>
  <Container>
    <h5><u><b>Completed Projects</b></u></h5>
    <Row xs={1} md={6} className="g-4">
      {listOfCompletedProjects.map((projects, idx) => (
        <Col key={idx}>
        {/* <Link to={`/projects/${projects.id}`} style={{ textDecoration: 'none' }}> */}
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '1', overflow: 'hidden' }}>
            <Card.Img variant="top" src={projects.image} alt="No image"style={{ width: '100%', height:'200px', objectFit: 'cover' }} />
            </div>
            <Card.Body  style={{ flex: '0 1 auto' }}>
              <Card.Title>{projects.title}</Card.Title>
            </Card.Body>
          </Card>
          {/* </Link> */}
        </Col>
      ))}
    </Row>
    <br/>
    <h5><u><b>Ongoing Projects</b></u></h5>
    <Row xs={1} md={6} className="g-4">
      {listOfOngoingProjects.map((projects, idx) => (
        <Col key={idx}>
                        {/* <Link to={`/projects/${projects.id}`} style={{ textDecoration: 'none' }}> */}
          <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '1', overflow: 'hidden' }}>
            <Card.Img variant="top" src={projects.image} alt="No image"style={{ width: '100%', height:'200px', objectFit: 'cover' }} />
            </div>
            <Card.Body  style={{ flex: '0 1 auto' }}>
              <Card.Title>{projects.title}</Card.Title>
            </Card.Body>
          </Card>
          {/* </Link> */}
        </Col>
      ))}
    </Row>
    </Container>
    </>
  );
}

export default Projects;