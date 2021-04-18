import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "bouldering",
      date: "5th May 2021 5pm",
      reminder: true,
    },
    {
      id: 2,
      text: "lead climbing",
      date: "6th May 2021 6pm",
      reminder: false,
    },
    {
      id: 3,
      text: "baddie",
      date: "7th May 2021 3pm",
      reminder: true,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(true);
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    // console.log("delete FUCK", id);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    // setTasks({ ...tasks.id, reminder: !task.reminder });
    // console.log(id);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div>
      <Container className="border border-danger p-2">
        {showAddTask && <AddTask onAdd={addTask} />}
        <Header
          onToggle={() => setShowAddTask(!showAddTask)}
          showCUNT={showAddTask}
        />
        {tasks.length ? (
          <Tasks
            tasks={tasks}
            onFUCKme={deleteTask}
            onReminder={toggleReminder}
          />
        ) : (
          <h3>No more tasks to show</h3>
        )}
      </Container>
    </div>
  );
};

export default App;
