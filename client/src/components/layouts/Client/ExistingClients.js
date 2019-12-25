import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { useQuery } from '@apollo/react-hooks';
import { getClients } from "../../../resolvers/clientResolver";

const ExistingClients = (props) => {

    const { loading, error, data} = useQuery(getClients);

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error: {error}</p>);
    


    const RenderClients = () =>{
        return(
        <div className="ClientCardList">
            {data.getClients.map((clientdata,index) => (
                <Card className="text-center" key={index+1} style={{ width: '20rem' }}>
                    <Card.Img variant="top"/>
                    <Card.Body>
                        <Card.Title>{clientdata.firstname + " "+ clientdata.surname}</Card.Title>
                        <Card.Text>
                            <p><strong>Email: </strong>{clientdata.email}</p>
                            <p><strong>Phone: </strong>{clientdata.mobilePhone}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
      )
    };

    return (<RenderClients />);
}
export default ExistingClients;