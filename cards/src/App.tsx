import './App.css'
import Card from "./card/Card.tsx";

function App() {

    return (
        <div className="container">
            <div className="wrp">
                <Card title={"Card title"}
                      text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
                      href={"#"}
                      linkText={"Go somewhere"}>
                    <img src="../public/img.jpg" className="card-img-top" alt="picture"/>
                </Card>
                <Card title={"Card title"}
                      text={`Some quick example text to build on the card title and make up the bulk of the card's content.`}
                      href={"#"}
                      linkText={"Go somewhere"}/>
            </div>
        </div>
    )
}

export default App
