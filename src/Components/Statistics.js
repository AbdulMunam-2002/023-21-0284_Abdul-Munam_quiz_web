import Button from 'react-bootstrap/Button';
import image from '../assets/images/Group 10.png'

export default function Statistics() {
    return (
        <>
        <br></br><br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <h1 className="title-section">THE FAST POINT</h1>
                        <h1 style={{ color: 'red' }} className="title-section">GET STARTED</h1>
                        <h1 className="title-section">TRACKING AND RESERVATION</h1>
                    </div>

                    <div className="col col-lg-6 col-md-6 col-sm-12">
                        <img src={image}></img>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center">
                    <p>Pinpoint is the fastest tracking and reservation software<br></br>solution for personal and enterprise vehicles for institutes,<br></br>offices and companies with live tracking, history recording,<br></br>estimated arrival time and usage report generation and much<br></br>more features</p>
                </div>
            </div>
            <div className='bttn'>
                <div className="row">
                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <Button variant="secondary">5000 Users</Button>
                    </div>

                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <Button variant="secondary">10 Trusted Clients</Button>
                    </div>

                    <div className="col col-lg-4 col-md-4 col-sm-12">
                        <Button variant="secondary">10k+ Downloads</Button>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br>
        </>
    );
}