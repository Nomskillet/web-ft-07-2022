import logo from './logo.svg';  //an image in our dierectory
import './App.css';


import Name from './components/Name.js'


//create a component named "City" 
//import the component into App.js 
//create a prop called "city" 
//pass different cities to each City component 
// and render 4 cities inside of App.js


function App() {

  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  let dias = ["lunes", 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  let tag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
  let dag = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"]
  const daysInKorean = ['wollyoil', 'hwayoil', 'suyoil', 'mongnyoil', 'geumyoil', 'toyoil', 'illyoil'];
  const Tydzień = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]

  return (
    <>
      <Name name="Veronica" days={days} language="English" /> <br />
      <Name name="Shannon" days={dias} language="Spanish" />  <br />
      <Name name="Kipp" days={tag} language="German" />  <br />
      <Name name="Christian" days={daysInKorean} language="Korean" />  <br />
      <Name name="Christian" days={Tydzień} language="Polish" />  <br />
    </>
  )
}

export default App;
