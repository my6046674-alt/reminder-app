import { useForm } from "react-hook-form";
import useReminderStore from "../store/reminderStore";

const HtmlForm = ({ isEditing = false, reminder }) => {
  const addReminder = useReminderStore((state) => state.addReminder);
  const updateReminder = useReminderStore((state) => state.updateReminder);

  const { register, handleSubmit, reset } = useForm({
    values: reminder,
  });

  const submitForm = (data) => {
    if (isEditing) {
      updateReminder(reminder.id, data);
      alert("Reminder updated successfully.");
    } else {
      addReminder(data);
      reset();
      alert("Reminder added successfully.");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Add reminder title"
            required
            {...register("title")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            date & time
          </label>
          <input
            type="datetime-local"
            id="datetime"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            placeholder="Reminder data & time"
            required
            {...register("datetime")}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Status
          </label>
          <select
            {...register("status")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 disabled:text-gray-500 "
            placeholder="Status"
            defaultValue={"PENDING"}
            disabled={!isEditing}
            required
          >
            <option value="PENDING">pending</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            id="description"
            rows="8"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
            placeholder="Your description here required"
            required
            {...register("description")}
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800 cursor-pointer hover:opacity-90"
      >
       {isEditing? "update Reminder":"Add Reminder"}
      </button>
    </form>
  );
};

export default HtmlForm;
