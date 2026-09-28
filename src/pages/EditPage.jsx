import { useParams } from "react-router";
import Form from "../components/Form";
import useReminderStore from "../store/reminderStore";

const EditPage = () => {
   const params = useParams();

    const reminder = useReminderStore((state)=>state.getReminderById(params.id));

    console.log(reminder)

  return (
      <section className="max-w-2xl mx-auto">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
       Update Reminder
      </h2>
     <Form isEditing={true} reminder={reminder} />    
    </section>
  )
}

export default EditPage
