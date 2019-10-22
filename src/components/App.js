import React from "react";
import axios from 'axios';
import Header from './header';
import Nav from './nav';
import Content from './content';
import { Container, Row, Col } from 'reactstrap';
import "./index.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentMounted: false,
            pageReady: false
        }
    }

    componentWillMount() {
     
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
        .then(res => {
          const photos = res.data;
          this.setState({ photoAlbums: photos });
          console.log(this.state)
        })        
        setTimeout(
            function() {
                this.setState({
                    pageReady: true
                })
            }
            .bind(this),
            1000
        );
    }

    componentWillUnmount(){
        console.log('component did unmount')
    }    

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps, 'prevState', prevState, snapshot)
    }    

    render() {
        const pageIsReady = this.state.pageReady;
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6">       
                        <Nav />
                    </Col>
                    <Col xs="12" sm="6">  
                        { pageIsReady ? <Content photoAlbums={this.state.photoAlbums} /> : <Content loading="Content is loading........." />  }
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default App;