import { useState, type CSSProperties } from "react";



interface Task {
  description: string
  isDone: boolean
}


function Task({ task, onToggle }: { task: Task; onToggle: () => void; }) {
  return (
    <section>
      <p>{task.description}</p>
      <input type="checkbox" checked={task.isDone} onChange={onToggle} />
    </section>
  );
}



function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [SingleTask, setTask] = useState<String>("");
  const undoneCount = tasks.filter(t => !t.isDone).length;

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


  function toggleTask(index: number) {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, isDone: !t.isDone } : t))
    );
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
          {tasks.map((t, i) => (
            <Task task={t} onToggle={() => toggleTask(i)} />
          ))}
        </ul>
        <p>Number of undone tasks: </p>
        <p>{undoneCount}</p>
      </section>

    </main>
  );
}

export default App;
