const AddTask = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto my-16 bg-gray-100 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">
          Add New Task
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter task description"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
