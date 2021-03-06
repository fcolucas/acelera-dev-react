import React, {useState, useEffect} from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     contacts: [],
  //     filteredContacts: [],
  //     sortBy: '',
  //     loading: false
  //   }
  // }
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [loading, setLoading] = useState(true)

  // componentDidMount() {
  //   this.setState({ loading: true })

  //   fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
  //     .then(response => response.json())
  //     .then(data => this.setState({ 
  //       contacts: data,
  //       filteredContacts: data,
  //       loading: false
  //     }));
  // }
  useEffect(() => {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(data => {
        setContacts(data);
        setFilteredContacts(data);
        setLoading(false)
      });
  }, [loading])

  const filterContacts = textFilter => {
    let filteredContacts = contacts
    filteredContacts = filteredContacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(
        textFilter.toLowerCase()) !== -1
    })
    setFilteredContacts(filteredContacts)
  }

  const sortFilterContacts = value => {
    const compareValues = (key, order = 'asc') => {
      return (a, b) => {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

        const A = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
        const B = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];

        let aux = A > B ? 1 : -1;
        
        return(
          (order === 'desc') ? aux * -1 : aux
        );
      };
    };

    let sortValue, filtered;

    if(value === sortBy) {
      sortValue = '';
      filtered = [...filteredContacts];
    }
    else {
      sortValue = value;
      filtered = filteredContacts.sort(compareValues(value));
    }

    // this.setState({
    //   sortBy: sortValue,
    //   filteredContacts: filtered
    // })
    setSortBy(sortValue);
    setFilteredContacts(filtered);
  }

  return (
    <React.Fragment>
      <div class="app" data-testid="app">
        <Topbar />

        <Filters 
          onChange={filterContacts}
          doSort={sortFilterContacts}
          selectFilter={sortBy}
          />

        <Contacts>
          {loading ? <h2>Carregando dados...</h2> : null}
          {filteredContacts.map(contact => 
            <Contact key={contact.id} data={contact}/>
          )}
        </Contacts>
      </div>
    </React.Fragment>
  )
}

export default App;
