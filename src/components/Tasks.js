import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default Tasks;
