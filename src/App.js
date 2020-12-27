import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);
  var s=[];
  var c=[];
  var u=[];
  var g=[];
  var n=0;
  var value;
  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO
    var num=0,unitAll=0;
    for(var i=0;i<n;i++){
      num += g[i]*u[i];
      unitAll+=u[i];
    }
    alert((num/unitAll).toFixed(2));
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    s[n]=document.querySelector('#subject').value;
    c[n]=document.querySelector('#code').value;
    u[n]=document.querySelector('#unit').value;
    switch(document.querySelector('#grade').value){
      case "A": g[n] =4; break;
      case "B+":g[n] =3.5; break;
      case "B": g[n] =3; break;
      case "C+":g[n] =2.5; break;
      case "C": g[n] =2; break;
      case "D+":g[n] =1.5; break;
      case "D": g[n] =1; break;
      case "F": g[n] =0; break;
      case "W": g[n] =0; break;
    }
    var test = document.querySelector('#course');
    test.append(<CourseCard subject={s[n]} code={c[n]} unit={u[n]} grade={g[n]} />);
    n++;
    // recalculate GPA
    calculateGPA();
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        <div id ="course">

        </div>
      </div>
      {/* TODO add course input form */}
      <div>
        <form onSubmit={(e) =>addCourse(e)}>
            <label>subject</label>
            <input type="text" id="subject"></input>
            <label>code</label>
            <input type="text" id="code"></input>
            <label>credit</label>
            <input type="text" id="unit"></input>
            <label>grade</label>
            <select id="grade">
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="F">F</option>
              <option value="W">W</option>
            </select>
            <button type="submit">+</button>
        </form>
      </div>
      {/* TODO display calculated GPA */}
    </div>
  );
}

export default App;
