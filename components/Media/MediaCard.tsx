import { Col, Card } from 'react-bootstrap'

// const add = (num: number, num2: number): number => {
//     return num + num2
// }

interface IMediaCardProps {
    link: string
    title: string
    text?: string
}

export default (props: IMediaCardProps) => (
    <Col>
        <Card style={{ width: '20rem', marginBottom: "10px" }}>
            <iframe width="100%" height="318" src={props.link} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);
