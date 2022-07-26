import { useState } from "react";
import { Col, Row } from "reactstrap";
import JourneyForm from "../../components/forms/journey/journey-form";
import Map from "../../components/map/map";
import { Distance, Route } from "../../interfaces/route";

// The Landing Page component uses a local state which it then parses down into child components. The reason for this is to avoid using 
// third party state management solutions, to keep the code as easy to understand and interpret as possible.
function LandingPage(){

    const [userRoute, setUserRoute] = useState<Route>();
    const [routeDistanceData, setRouteDistanceData] = useState<Distance>();

    return (
        <div>
            <Row>
                <Col sm={12} md={5} className="form-panel">
                    <div className="multi-form-container">
                        <JourneyForm
                            setUserRoute={setUserRoute}
                        /> 
                    </div>
                </Col>
                <Col sm={12} md={7} className="map-panel">
                    <Map route={userRoute} distanceData={(data: Distance) => setRouteDistanceData(data)}/>
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage; 