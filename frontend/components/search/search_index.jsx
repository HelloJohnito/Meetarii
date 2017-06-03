import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { timeStampParser } from '../../utils/timestamp_parser';

class SearchIndex extends Component{
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.displaySearch = this.displaySearch.bind(this);

    // this.display = true;
    this.state = {
      input: "",
      city: "",
      startDate: null,
      endDate: null,
      zipcode: "",
      radius: "",
      display: false
    };
  }



  handleInput(e){
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({input: e.target.value});
    // console.log(this.state.input);
  }

  handleCity(e){
    e.preventDefault();
    this.setState({city: e.target.value});
  }

  handleZipcode(e){
    e.preventDefault();
    // console.log(e.target.value)
    let zipcode = e.target.value;
    // console.log(`before: ${this.state.zipcode}`);
    if(zipcode.length <= 5 ){
      this.setState({zipcode});
    }
    // console.log(`after: ${this.state.zip}`);
  }

  handleSelect(event){
    event.preventDefault();
    let radius = parseInt(event.target.value);
    this.setState({radius});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchEbEvents(this.state);
    this.props.fetchMeetups(this.state);
    this.setState({display: false}); 
  }

  handleStartDate(event){
    let stringDate = this.stringifyDate(event.target.value);
    let date = new Date(stringDate);
    this.setState({
      startDate: date,
    });
  }

  handleEndDate(event){
    let stringDate = this.stringifyDate(event.target.value);
    let date = new Date(stringDate);
    this.setState({
      endDate: date,
    });
  }

  displaySearch(){
    if(this.state.display){
      this.setState({display: false});
    } else {
      this.setState({display: true});
    }
  }

  stringifyDate(date){
    let splitDate = date.split("-");
    splitDate[1] = parseInt(splitDate[1]).toString();
    return splitDate.join("-");
  }

  render(){

    let form;
    if(this.state.display){
      form = <form className="search-form" onSubmit={this.handleSubmit}>
        <input className="search-input-text" onChange={this.handleInput} value={this.state.input} type="text" placeholder="Search here"/>
        <input className="search-input" onChange={this.handleCity} value={this.state.city} type="text" placeholder="City" />
        <input className="search-input" onChange={this.handleZipcode} value={this.state.zipcode} type="number" placeholder="Zip Code"/>
        <select className="search-input-radius" value={this.state.radius} onChange={this.handleSelect}>
          <option value="" disabled>Select Radius</option>
          <option value='5'>5 miles</option>
          <option value='10'>10 miles</option>
          <option value='25'>25 miles</option>
          <option value='50'>50 miles</option>
        </select>

        <label className="search-index-date-title">Start Date: </label>
          <input className="search-index-date" onChange={this.handleStartDate} type="date" />
        <label className="search-index-date-title">End Date: </label>
        <input className="search-index-date" onChange={this.handleEndDate} type="date" />
        <input className="search-index-submit" onSubmit={this.handleSubmit} type="submit"/>

      </form>;
    } else {
      form = <span></span>;
    }

    return(
      <div className="search-index">
        <div className="search-index-outer">
          <div className="search-index-logo-container">
            <div className="logo-m-meetarii">
              <h1 className="logo-m">M</h1>
              <h4 className="logo-meetarii">MEETARII</h4>
            </div>
            <div className="search-index-title-container">
              <h1 className="search-index-title">Search for your event today click <span className="search-index-display" onClick={this.displaySearch}>here</span>!</h1>
            </div>
          </div>
          {form}
        </div>
      </div>
    );
  }
}

export default SearchIndex;
