import Task from "./Task";

const Tasks = ({ tasks, onFUCKme, onReminder }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onFUCKme={onFUCKme}
            onReminder={onReminder}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
