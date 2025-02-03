import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskDetails = () => {
  const task = {
    id: 1,
    title: "Complete Project Report",
    description: "Prepare the final project report for submission.",
    dueDate: "2025-02-10",
    isCompleted: false,
  };

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-2xl">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800">
          {task.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">Due Date: {task.dueDate}</p>

        <p className="text-base md:text-lg text-gray-700 mt-4">
          {task.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              task.isCompleted ? "text-green-600" : "text-red-600"
            }`}
          >
            {task.isCompleted ? "Completed" : "Pending"}
          </span>

          <div className="space-x-3">
            <button className="bg-yellow-400 text-white px-4 py-2 text-sm rounded-lg hover:bg-yellow-500 transition">
              <FiEdit3 className="font-bold text-xl"></FiEdit3>
            </button>
            <button className="bg-red-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-red-600 transition">
              <RiDeleteBin6Line className="font-bold text-xl"></RiDeleteBin6Line>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
