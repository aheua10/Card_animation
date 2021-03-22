import "../SecondCrad/SecondCard.scss"
import img1 from '../SecondCrad/img1.jpg'
const SecondCard = () => {
    return (
            <div className="card-container">
                <div className="card-bx">
                    <div className="container">
                        <div className="card">
                          <div className="img-bx">
                            <img className="card-image" alt="just an img" src={img1}/>
                          </div>
                            <div className="content-container">
                            <h1>Card One</h1>
                             <p>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur asperiores, placeat dolores esse ex deserunt voluptate officia aliquam fugit impedit molestias suscipit tempora natus, quae error consectetur! Nobis, delectus.
                             </p>                    
                            </div>
                        </div>
                    </div>
                </div>
              </div>
    )
};
export default SecondCard