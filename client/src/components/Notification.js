import React, {useState} from 'react'

import { ChakraProvider, theme, Alert, AlertIcon, AlertTitle, AlertDescription, Button, Container, Box } from '@chakra-ui/react';


async function notifyUser(notificationText = "The notifications are enabled.") {
    if (!("Notification" in window)) {
        alert("Browser does not support notifications");
    } else if (Notification.permission === "granted") {
        const notification = new Notification(notificationText);
    } else if (Notification.permission !== "denied") {
        await Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                const notification = new Notification(notificationText);
            }
        })
    }
}


export default function Notification() {

    
const [userResponded, setUserResponded] = useState(false);

async function enableNotifsAndClose() {
await notifyUser().then(() => {
setUserResponded(true)
})
}

function disableNotifsAndClose() {
    setUserResponded(true)
}


  return (!(userResponded) && !(Notification.permission === "granted")) ?
        (<ChakraProvider theme={theme}>
             <Container>
                <Alert status="success">
                    <AlertIcon/>
                    <Box>
                        <AlertTitle>If you want to see your order notifications</AlertTitle>
                        <AlertDescription>We need your permission. </AlertDescription>
                    </Box>
                    <div>
                    <Button className="mb1" colorSchema='teal' onClick={enableNotifsAndClose}>Yes, I want to be notified<br/> about my order.</Button>
                    <Button colorSchema='grey' onClick={disableNotifsAndClose}>No, I'd rather not know!</Button></div>
                    
                    
                </Alert>
            </Container> </ChakraProvider>) : 
         (Notification.permission === "granted") &&
        <ChakraProvider theme={theme}>
          
        </ChakraProvider>
        
  
}
