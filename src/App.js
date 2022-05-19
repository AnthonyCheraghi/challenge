import "./App.css";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
    return (
        <Container>

            <Card height={400} >
              <div className="fullBox" style={{background: 'red'}}> 1 </div>
            </Card>

            <Card height={240} >
              <div className="midBox" style={{background: 'blue'}}> 2 </div>
              <div className="midBox" style={{background: 'blue'}}> 3 </div>
            </Card>

            <Card height={240} >
              <div className="halfBox" style={{background: 'orange'}}> 4 </div>
              <div className="halfBox" style={{background: 'orange'}}> 5 </div>
              <div className="halfBox" style={{background: 'orange'}}> 6 </div>
            </Card>

            <Card height={240} >
              <div className="fullBox" style={{background: 'purple'}}> 7 </div>
            </Card>

            <Card height={240} >
              <div className="fullBox" style={{background: 'black'}}> 8 </div>
            </Card>

            <Card height={400} >
              <div className="midBox" style={{background: 'brown'}}> 9 </div>
              <div className="midBox" style={{background: 'brown'}}> 10 </div>
            </Card>

            <Card height={240} >
              <div className="halfBox" style={{background: 'green'}}> 11 </div>
              <div className="halfBox" style={{background: 'green'}}> 12 </div>
              <div className="halfBox" style={{background: 'green'}}> 13 </div>
            </Card>

            <Card height={400} >
              <div className="fullBox" style={{background: 'gray'}}> 14 </div>
            </Card>

            <Card height={240} >
              <div className="fullBox" style={{background: 'pink'}}> 15 </div>
            </Card>
        </Container>
    );
}

export default App;
