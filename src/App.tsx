import { useState, type CSSProperties } from "react";



interface Task {
  description: string
  isDone: boolean
}


function Task({ description, isDone }: Task) {
  function checkingTask(done: boolean) {
    done=!done;
  }
  return (
    <section>
      <p>{description}</p>
      {isDone ? <input type="checkbox" checked onClick={() => checkingTask(isDone)} /> : <input type="checkbox" onClick={() => checkingTask(isDone)} />}
    </section>
  );
}



function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [SingleTask, setTask] = useState<String>("");

  function addTask() {
    var trimDes = SingleTask.trim();
    if (trimDes) {
      const newTask: Task = {
        description: trimDes.trim(),
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      console.log(tasks);
    }
  }




  return (
    <main>
      <section>
        <input type="text" onChange={(e) => {
          setTask(e.target.value);
        }} />
        <button onClick={() => addTask()}>+</button>
      </section>
      <section>
        <ul>
          {tasks.map(t=> <Task {...t}/>)}
        </ul>
      </section>

    </main>
  );
}

export default App;
