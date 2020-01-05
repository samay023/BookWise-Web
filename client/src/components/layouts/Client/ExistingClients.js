import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useQuery } from '@apollo/react-hooks';
import { getClients } from "../../../resolvers/clientResolver";
import { useMutation } from '@apollo/react-hooks';
import { updateSession } from "../../../resolvers/sessionResolver";
const ExistingClients = (props) => {

    const { loading, error, data} = useQuery(getClients);
    const { session } = props;

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error: {error}</p>);

    const RenderClients = () =>{
        const [row, activeRow] = useState({
            key: 0,
            selected : true
        });
    
        const [updateSessionInput, {error}] = useMutation(updateSession);

        const updateSessionDetails = async (event) => {
            let variables = {
                id:String(session.id),
                title:String(session.title),    
                description:String(session.description),
                address:{
                    streetNumber: Number(session.address.streetNumber),
                    streetName: String(session.address.streetName),
                    suburb: String(session.address.suburb),
                    postcode: Number(session.address.postcode),
                    state: String(session.address.state)
                },
                sessionFee:Number(session.sessionFee),
                sessionDate:String(session.sessionDate),
                sessionStartTime:String(session.sessionStartTime),
                sessionEndTime:String(session.sessionEndTime),
                notes:String(session.notes),
                clientDetails:String(event.currentTarget.id)
            }
            activeRow({key: String(event.currentTarget.id),selected:true});
            await updateSessionInput({variables});

            
        };

        if(error){
            console.log(error);
         };

        return(
        <div className="ClientCardList">
            {data.getClients.map((clientdata,index) => (
                <Card id={clientdata.id} key={index} style={{ width: '20rem' }} onClick={updateSessionDetails.bind(this)} className={`${row.key === clientdata.id ? 'active' : ''}`}>
                    <Card.Body>
                        <Card.Title>{clientdata.firstname + " "+ clientdata.surname}</Card.Title>
                        <Card.Text>
                            <span><strong>Email: </strong>{clientdata.email}</span>
                            <br/>
                            <span><strong>Phone: </strong>{clientdata.mobilePhone}</span>
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