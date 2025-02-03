const TaskDetails = () => {
  const task = {
    id: 1,
    title: "Complete Project Report",
    description: "Prepare the final project report for submission.",
    dueDate: "2025-02-10",
    isCompleted: false,
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg border">
        <h2 className="text-3xl font-bold text-gray-800">{task.title}</h2>
        <p className="text-sm text-gray-500 mt-1">Due Date: {task.dueDate}</p>

        <p className="text-lg text-gray-700 mt-4">{task.description}</p>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              task.isCompleted ? "text-green-600" : "text-red-600"
            }`}
          >
            {task.isCompleted ? "Completed" : "Pending"}
          </span>

          <div className="space-x-3">
            <button className="bg-yellow-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-yellow-600 transition">
              Edit Task
            </button>
            <button className="bg-red-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-red-700 transition">
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
