
const content = document.querySelector(`#root`);
// useState
// useEffect


const App = () => {
  const [pupList, setPups] = React.useState([]);

  React.useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players`);
      const data = await response.json();
      const puppies = data.data.players;
      setPups(puppies);
    }
    getPuppies();
  }, [])

  console.log(pupList);

  return (
    <>
      <h1>Puppy List</h1>
      {pupList.map((pup) => {
        return <li>{pup.name}</li>
      })}
    </>
  )
}

const root = ReactDOM.createRoot(content);
root.render(<App />);