import Link from "next/link";

const AllTasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete Project Report",
      description: "Prepare the final project report for submission.",
      dueDate: "2025-02-10",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Team Meeting",
      description: "Discuss project milestones and deadlines with the team.",
      dueDate: "2025-02-12",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Code Review",
      description: "Review the latest code changes before merging.",
      dueDate: "2025-02-14",
      isCompleted: false,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        All Tasks
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-5 rounded-2xl shadow-lg border hover:shadow-2xl transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              Due Date: {task.dueDate}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span
                className={`text-sm font-medium ${
                  task.isCompleted ? "text-green-600" : "text-red-600"
                }`}
              >
                {task.isCompleted ? "Completed" : "Pending"}
              </span>
              <Link
                href={`/allTasks/${task.id}`}
                className="bg-blue-600 text-white px-3 py-1 text-sm rounded-lg hover:bg-blue-700"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
