// src/App.js
import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  const [contactsArr, setContactsArr] = useState(fiveContacts);
  const randomContact = () => {
    let randomElement = contacts[Math.floor(Math.random() * contacts.length)];
    while (contactsArr.includes(randomElement)) {
      randomElement = contacts[Math.floor(Math.random() * contacts.length)];
    }
    setContactsArr([...contactsArr, randomElement]);
  };

  const sortContacts = () => {
    const sortedContacts = [...contactsArr].sort((obj1, obj2) => obj1.name.localeCompare(obj2.name))
    setContactsArr(sortedContacts)
  }
  const popularityContacts = () => {
    const pupularContacts = [...contactsArr].sort((obj1, obj2) => obj2.popularity - obj1.popularity)
    setContactsArr(pupularContacts)
  }

  return (
    <div className="App">
      <button onClick={() => randomContact()} className="btn-delete">
        Add random contact
      </button>
      <button onClick={() => sortContacts()} className="btn-sort">
        Sort contacts
      </button>
      <button onClick={() => popularityContacts()} className="btn-popularity">
        Popularity contacts
      </button>
      <table className="table">
        <tr>
          <th>Picture</th>
          <th>name</th>
          <th>Popularity</th>
          <th>Has Oscar</th>
          <th>Has Emmy</th>
        </tr>
        {contactsArr.map((contact) => (
          <tr>
            <td>
              <img src={contact.pictureUrl} class="foto" alt="IMG"></img>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "🏆" : ""}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
