import { Link } from "react-router";
import useReminderStore from "../store/reminderStore";

const ReminderCard = ({
  id,
  isUpcoming = false,
  title,
  date,
  time,
  description,
  status = "PENDING",
  onDeleteReminder,
  
}) => {
  let cardColor = "bg-orange-50";

  if (status == "COMPLETED") cardColor = "bg-green-50";
  if (status == "CANCELLED") cardColor = "bg-red-50";


  const {markCompleted} = useReminderStore();



//   function removeReminder(){

//     if(confirm("Are you sure?")){
//         deleteReminder(id)
//     }
//   };
  return (
    <div
      className={`shadow rounded-2xl p-6  hover:-translate-y-1 transition-all duration-300  ${cardColor}`}
    >
      <div className="flex justify-between items-start gap-x-4">
        <h2 className="text-xl sm:text-3xl font-medium">{title}</h2>
        <div className="flex gap-2">
          <Link
            to={`/edit/${id}`}
            className="bg-blue-200 hover:bg-blue-100 py-1.5 px-2 rounded-md text-sm"
          >
            ✏️
          </Link>
          <button
            onClick={onDeleteReminder}
            className="bg-red-200 hover:bg-red-100 py-1.5 px-2 rounded-md text-sm"
          >
            🗑️
          </button>
        </div>
      </div>
      <div className="flex gap-2 text-orange-500  text-xs">
        <span>📆 {date}</span>
        <span>🕖 {time}</span>
      </div>
      <p className="mb-4 mt-4">{description}</p>
      {!isUpcoming && status=="PENDING" &&(
        <button onClick={()=>markCompleted(id)} className="bg-orange-500 rounded-lg px-4  py-1.5 text-white">
          Mark as Completed
        </button>
      )}
    </div>
  );
};

export default ReminderCard;
