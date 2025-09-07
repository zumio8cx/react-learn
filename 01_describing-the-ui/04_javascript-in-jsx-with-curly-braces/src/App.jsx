import './App.css'

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function App() {
  const name = 'Gregorio Y. Zara';
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <>
      <h1>{name}'s To Do List</h1>
      <h2>To Do List for {formatDate(today)}</h2>
      <img
        className="avatar"
        src={avatar}
        alt={description} />
      <ul style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}

export default App
