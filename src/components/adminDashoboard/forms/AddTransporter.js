import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";


const AddTransporter = () => {
   const [transporterName, settransporterName] = useState("");
   const [transporterEmail, settransporterEmail] = useState("");
      const [transporterPhoneNo, settransporterPhoneNo] = useState("");
      const [transporterAddress, settransporterAddress] = useState("");
   const handleSubmit = (event) => {
     event.preventDefault();
     // Add the product to your database or API here
     // You could also dispatch an action to a Redux store here
     console.log(`Added product: ${transporterName} - ${transporterName} - ${transporterPhoneNo}`);
     // Reset the form
     settransporterName("");
     settransporterEmail("");
     settransporterPhoneNo("");
     settransporterAddress("");
   };

   return (
     <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
       <Form.Group controlId="formCode" className="formGroup">
         <Form.Label className="fw-bold">Name</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter name"
           value={transporterName}
           onChange={(event) => settransporterName(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formName" className="formGroup pt-3" >
         <Form.Label className="fw-bold">Email</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter email"
           value={transporterEmail}
           onChange={(event) => settransporterEmail(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formPrice" className="formGroup pt-3">
         <Form.Label className="fw-bold">Phone Number</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter Phone No"
           value={transporterPhoneNo}
           onChange={(event) => settransporterPhoneNo(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formCategory" className="formGroup pt-3">
         <Form.Label className="fw-bold">Address</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter address"
           value={transporterAddress}
           onChange={(event) => settransporterAddress(event.target.value)}
         />
       </Form.Group>
       {/* <Form.Group controlId="formQuantity" className="formGroup pt-3">
         <Form.Label className="fw-bold">Qauntity</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter a Quantity With Unit"
           value={quantity}
           onChange={(event) => setQauntity(event.target.value)}
         />
       </Form.Group> */}

       <Button variant="primary" type="submit" className="addBtn mt-3">
         Add Transporter
       </Button>
     </Form>
   );
};

export default AddTransporter;

// function AddProductForm() {

// }

