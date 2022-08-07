import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You didn't select an option!</Alert.Heading>
        <p>
          Ensure an option is checked and try again.
        </p>
      </Alert>
    );
  }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

