import React, {useState} from 'react'

import { Card, CardContent, Image } from 'semantic-ui-react'

const DevRender = ({dev}) => {

    const [imageUrl, setImageUrl] = useState(null);

    const handleClick = event => {
        console.log(event.target);
        console.log('Image clicked');  

        // full screen script here
    };

    return(
        <>
            {dev.map((item, index) => (
                <Card.Group key={index}>
                    <Card>
                        <Image src={item.picture} wrapped ui={false} onClick={handleClick} />
                        <CardContent>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Description>{item.description}</Card.Description>
                        </CardContent>
                    </Card>
                </Card.Group>
            ))}
        </>
    )
}

export default DevRender;