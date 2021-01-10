import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Container, Button, Col, Row} from 'react-bootstrap'
import axios from 'axios';
import JournalEntry from './JournalEntry.jsx'
import JournalEntryContainer from './JournalEntryContainer.jsx'
import EditProfile from './EditProfile.jsx'
import Login from './Login.jsx'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      userId: props.user.user_id,
      username: props.user.username,
      moodFilter: '',
      quoteObj: {},
      quote: '',
      author: '',
      journalEntries: null,
      entriesShown: 5,
      page: 1,
      filterValue: null,
      pageCount: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    this.handleMoodClick = this.handleMoodClick.bind(this);
    this.handleMoreEntries = this.handleMoreEntries.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
    this.handleClearFilterClick = this.handleClearFilterClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.getEntries();
  }

  componentDidMount() {
    let quoteId = Math.floor(Math.random() * 1664);
    axios.get(`/quotes/${quoteId}`)
    .then((result) => this.setState({quoteObj: result.data[0]}))
    .catch((err) => console.log(err));
  }

  getQuote() {
    let quoteId = Math.floor(Math.random() * 1664);
    axios.get(`/quotes/${quoteId}`)
    .then((result) => this.setState({quoteObj: result.data[0]}))
    .catch((err) => console.log(err));
  }

  getEntries() {
    axios.get(`/users/${this.state.userId}/journal`)
    .then((result) => {this.setState({journalEntries: result.data}); return result})
    .then((result) => {this.setState({pageCount: result.data.length / 5}); return result})
    .then((result) => ReactDOM.render(<JournalEntryContainer entries={result.data.slice(0,5)} handleModalClick={this.handleModalClick = this.handleModalClick.bind(this)}/>, document.getElementById('journal')))
    .catch((err) => console.log(err));
  }

  handleModalClick() {
    ReactDOM.unmountComponentAtNode(document.getElementById('journal'))
    this.getEntries();
  }

  handlePageClick(page) {
    let entryStart = page * 5 - 5;
    let moreEntries = entryStart+ 5;
    this.setState({entriesShown: moreEntries});
    ReactDOM.unmountComponentAtNode(document.getElementById('journal'));
    ReactDOM.render(<JournalEntryContainer handleModalClick={this.handleModalClick = this.handleModalClick.bind(this)} entries={this.state.journalEntries.slice(entryStart, moreEntries)} />, document.getElementById('journal'));
  }

  handleMoreEntries(event) {
    let newPage = event.selected + 1;
    this.setState({currentPage: newPage});
    this.handlePageClick(newPage);
  }

  handleEntrySubmit() {
    ReactDOM.unmountComponentAtNode(document.getElementById('journal'));
    this.getEntries();
  }

  handleClick(event) {
    event.preventDefault();
    let userId = this.state.userId;
    ReactDOM.render(<Container><Col><JournalEntry user={this.state.user} show={true} handleEntrySubmit={this.handleEntrySubmit = this.handleEntrySubmit.bind(this)}/></Col></Container>, document.getElementById('modal'));
  }

  handleMoodClick(event) {
    const target = event.target;
    const value = target.alt;
    this.setState({moodFilter: value});
    this.handleFilter(value);
  }

  handleFilter(value) {
    let filteredResults = [];
    let journalEntries = this.state.journalEntries;
    value = value.toString();
    this.setState({filterValue: value});
    journalEntries.map((entry) => {if(entry.mood == value){filteredResults.push(entry)}});
    this.setState({pageCount: filteredResults.length / 5});
    ReactDOM.unmountComponentAtNode(document.getElementById('journal'));
    ReactDOM.render(<JournalEntryContainer handleModalClick={this.handleModalClick = this.handleModalClick.bind(this)} entries={filteredResults.slice(0, (this.state.entriesShown))} />, document.getElementById('journal'));
  }

  handleClearFilterClick() {
    this.setState({filterValue: null});
    this.setState({moodFilter: null});
    this.setState({pageCount: this.state.journalEntries.length / 5});
    ReactDOM.unmountComponentAtNode(document.getElementById('journal'));
    ReactDOM.render(<JournalEntryContainer entries={this.state.journalEntries.slice(0, 5)} />, document.getElementById('journal'));
  }


  handleUpdateProfile(event) {
    event.preventDefault();
    ReactDOM.render(<EditProfile user={this.state.user} handleModalClick={this.handleModalClick = this.handleModalClick.bind(this)}/>, document.getElementById('modal'));
  }

  handleLogout() {
    ReactDOM.unmountComponentAtNode(document.getElementById('homepage'));
    ReactDOM.render(<Login/>, document.getElementById('login'));
  }

  render() {
    let clearFilter;
    if(this.state.filterValue !== null) {
      clearFilter = <p id='clearFilter' onClick={this.handleClearFilterClick}>&nbsp;&nbsp;Clear Filter</p>
    }
    return(
      <Container>
        <Col>
          <Row id='header'>
            <Col>
              <h2>Hello, {this.state.user.name}</h2>
            </Col>
            <Col>
              <Row id='logoutButton'>
                <Button type='submit' onClick={this.handleLogout}>Logout</Button>
              </Row>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col id='reminders'>
              <h4>Actions</h4>
              <Row>
                <Col>
                  <Button id='journalEntryButton' type='submit' onClick={this.handleClick}>Add Journal Entry</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button  id='updateProfileButton' onClick={this.handleUpdateProfile}>Update Profile</Button>             
                </Col>
              </Row>
            </Col>
            <Col id='quoteTitle'>
              <h4>Today's Motivation</h4>
              <h3 id='quote'>"{this.state.quoteObj['quote']}" -{this.state.quoteObj['author']}</h3>
              <a id='quoteRefresh'onClick={this.getQuote}>Refresh</a>
            </Col>
          </Row>
          <Row id='journalColumn'>
            <Col id='journalColumn'>
              <br />
              <br />
              <Row id='journalTitle'>
                <Col>
                  <h4>Journal Entries</h4>
                </Col>
                <Col>
                  <Row id='filter'>
                    <p id='filterTitle'>Filter:</p>
                    <img id='moodFilter' width='25px' height='25px' length='auto' name='mood' src='https://i.ibb.co/F0rqT9T/one.png' className={this.state.moodFilter === '1' ? 'moodFaceSelected': 'moodFace'}  alt='1'  onClick={this.handleMoodClick}/>
                    <img id='moodFilter' width='25px' height='25px' name='mood' src="https://i.ibb.co/hWjCmDD/two.png" alt='2' className={this.state.moodFilter === '2' ? 'moodFaceSelected': 'moodFace'} onClick={this.handleMoodClick} />
                    <img id='moodFilter' src="https://i.ibb.co/wcmnkL3/three.png" name='mood' alt='3' id='moodFace' width='25px' height='25px'  className={this.state.moodFilter === '3' ? 'moodFaceSelected': 'moodFace'} onClick={this.handleMoodClick}/>
                    <img id='moodFilter' src="https://i.ibb.co/5krKP82/four.png" name='mood' alt='4' width='25px' height='25px' className={this.state.moodFilter === '4' ? 'moodFaceSelected': 'moodFace'}  onClick={this.handleMoodClick}/>
                    <img id='moodFilter' src="https://i.ibb.co/pW74MGg/five.png" name='mood' alt='5' width='25px' height='25px' className={this.state.moodFilter === '5' ? 'moodFaceSelected': 'moodFace'}  onClick={this.handleMoodClick}/>
                    {clearFilter}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id='journalColumnNames'>
            <Col xl={2}>
              <p>Date</p>
            </Col>
            <Col xl={1}>
              <p>Mood</p>
            </Col>
            <Col xl={1}>
              <p>Sleep</p>
            </Col>
            <Col>
              <p>Notes</p>
            </Col>
            <Col xl={2}>
            
            </Col>
          </Row>
            <div id='journal'>
            </div>
          <Row>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handleMoreEntries}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
          </Row>
        </Col>
        <div id='modal'></div>
      </Container>
    )
  }
}

export default Homepage