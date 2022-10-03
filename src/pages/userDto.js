
// import React,{useState} from "react";
// import {toast} from "react-toastify";
// import Base from "../components/Base";
// import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
// import axios from "axios";



// const userDto=()=>{
//    const [name,setname]=useState('')
//    const [date,setdate]=useState('')
//    const [place,setplace]=useState('')
//    const [age,setage]=useState('')
//    const [hobbiese,sethobbies]=useState('')
//    // const [gender,setgender]=useState('')

// const handleSubmit=(e)=>{
//    e.preventDefault();

//    // if(name===""){
//    //    toast.error("Name is required")
//    // }else {
//    //    toast.error("date is required")
//    localStorage.setItem("name",name);
//    localStorage.setItem("date",date);
//    localStorage.setItem("place",place);
//    localStorage.setItem("age",age);

//    localStorage.setItem("hobbiese",hobbiese);




// };
















// return(



//        <Base>
        
//         <Container>

//         <Row className="mt-4">
//         <Col sm={{size:6,offset:3}} >
            
//         <Card color="secondary">

//         <CardHeader>

//         <h3>Fill YOUR DETAILS</h3>
//         </CardHeader>
//       <CardBody>


      
        
//          {/*  Field*/}
//          <Form>
//             <FormGroup>
//             <Input type="text"
//             placeholder="Enter Name"
//             name="name"
//             id="username"
//            value={name}
//            onChange={e=>setname(e.target.value)} 
//            ></Input>
//             </FormGroup>
//             </Form>


//             {/* <Input type="text" name="username" id="loginUser" placeholder="Enter Name"
//        required  value={register.username} 
//        onChange={(e) => changeDetails(e)} */}





//             <Form>
//          {/* dob Field*/}

//             <FormGroup>
//             <Input type="date"
//             name="date"
//             placeholder="Enter Date of birth"
//             value={date}
//            onChange={e=>setname(e.target.value)} 

//             ></Input>
//             </FormGroup>
//             </Form>
//             <Form>
//          {/* Place Field*/}

//             <FormGroup>
//             <Input type="text"
//             name="place"
//             placeholder="Enter Place"
        
//             value={place}
//             onChange={e=>setplace(e.target.value)} 
//             ></Input>
//             </FormGroup>
//             </Form>

//             <Form>
//             {/* Age Field*/}

//             <FormGroup>
//             <Input type="integer"
//             name="age"
//             id="age"
//             placeholder="Enter Age"
//             value={age}
//             onChange={e=>setage(e.target.value)} 
//             ></Input>
//             </FormGroup>
//             </Form>

//             <Form>
//             {/* Hobbies Field*/}

//             <FormGroup>
//             <Input type="text"
//             name="hobbies"
//             placeholder="Enter Hobbies"
//             value={hobbiese}
//            onChange={e=>sethobbies(e.target.value)} 

//             ></Input>
//             </FormGroup>
//             </Form>

           
//             {/* Gender Field
        
//             <Form>
//             <FormGroup>
//             <Input type="radio"
//             name="Gender"
//             value="Male"
//             id="flexRadioDefault"

//             onChange={(e) => handleChange(e)}
           

//             ></Input>
//             </FormGroup>
//             </Form>
//           */}
 




//             <Container  className="text-center">

//             <Button  onClick={e => insertAction(e)} color="dark">Submit</Button>

//             </Container>

//             </CardBody>
//         </Card>
//         </Col>
//         </Row>
//     </Container>
//        </Base>
// )
// };

//       export default userDto;
