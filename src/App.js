import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      cityData: {},
      searchQuery: ''
    }
  }
  getCity= async () =>{
  //localhost:3001/getCityInfo?cityName=Amman
  //Don't forget the (http://)
  //The axios is a library in react that helps you to make a request to an external resources
  
  let cityData = await axios.get(`${process.env.REACT_APP_SERVER}/getCityInfo?cityName=Amman`);
 //make sure to have the / here not in the .env
 
  console.log(cityData.data);
  this.setState({
    //axios will return your response inside the data property
    cityData: cityData.data
  })

}


getPhotos=async (e) => {
  e.preventDefault();
  console.log('inside the getPhotyos function')
}


  render() {
    return (
      <div>
        <h1>City explorer</h1>
        
        <Form onSubmit={this.getPhotos}>
          <Form.Group controlId="searchQuery">
            <Form.Label>Find Photos about ....</Form.Label>
         <Form.Control type="text"  placeholder="Enter a search term" name='searchQuery'  />
          </Form.Group>
          <Button variant="primary"  type="submit">Submit</Button>
        </Form>

        <button onClick={this.getCity}>Get city info</button>

        <p>{this.state.cityData.city_name}</p>
        <p>{this.state.cityData.timezone}</p>

      </div>
    )
  }
}

export default App
