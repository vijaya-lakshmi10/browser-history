import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component{
  state={searchInput:'',historyData:initialHistoryList,isHistoryDataEmpty:false}

  onChangeSearchInput=(event)=>{
    this.setState({searchInput:event.target.value})
  }

  deleteHistory=(id)=>{
    const {historyData}=this.state
    const filteredHistoryData=historyData.filter((history)=>(history.id!==id))
    if(filteredHistoryData.length===0){
      this.setState({historyData:filteredHistoryData,isHistoryDataEmpty:true})

    }
    else{
      this.setState({historyData:filteredHistoryData})
    }
    
  }

  render(){
    const {searchInput,historyData}=this.state
    let {isHistoryDataEmpty}=this.state
    const searchResults=historyData.filter((eachHistoryData)=>(eachHistoryData.title.toLowerCase().includes(searchInput.toLowerCase())))
    if(searchResults.length===0){
      isHistoryDataEmpty=true
    }

    return(
      <div className="bg-container">
      <div className="navbar">
      <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" className="logo" alt="app logo"/>
      <div className="searchbar">
      <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" className="search-img" alt="search" />
      <input type="search" placeholder="Search history" className="search-bar" onChange={this.onChangeSearchInput} value={searchInput}/>
      </div>
      </div>
      <div className="history-data-container">
      {!isHistoryDataEmpty && (<ul className="history-data-alignment">
      {searchResults.map((data)=>(<li className="history-items" key={data.id}>
      <p className="time">{data.timeAccessed}</p>
      <img src={data.logoUrl} className="website-logo" alt="domain logo"/>
      <div className="website-details">
      <p className="website-name">{data.title}</p>
      <p className="website-url">{data.domainUrl}</p>
      </div>
      <button className="delete-btn" type="button" data-testid="delete" onClick={()=>this.deleteHistory(data.id)}><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" className="delete-img" alt="delete"/></button>
      </li>))}
      </ul>)}
      {isHistoryDataEmpty && (
        <div className="empty-history-container">
        <p className="empty-history">There is no history to show</p>
        </div>
      )}
      </div>
      </div>
    )
  }
}

export default App
