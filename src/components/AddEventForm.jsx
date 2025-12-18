import {useState} from "react";

function EventCreator({onAddEvent}) {
  const [formData,setFormData] = useState({
    name:"",
    eventDate:"",
    eventTime:"",
    length:30
  });
  const updateField = (key,value) => {
    setFormData(prev => ({
      ...prev,
      [key]:value
    }));
  };
  const submitEvent = e => {
    e.preventDefault();
    const {name,eventDate,eventTime,length} = formData;

    if(name.trim()==="" || eventDate==="" || eventTime==="") {
      alert("Please fill all fields");
      return;
    }
    onAddEvent({
      id:new Date().getTime(),
      title:name,
      date:eventDate,
      time:eventTime,
      duration:Number(length)
    });
    setFormData({
      name:"",
      eventDate:"",
      eventTime:"",
      length:30
    });
  };
  return (
    <form className="event-form" onSubmit={submitEvent}>
      <h3>Add Event</h3>
      <input
        type="text"
        placeholder="Event title"
        value={formData.name}
        onChange={e=>updateField("name",e.target.value)}
      />

      <input
        type="date"
        value={formData.eventDate}
        onChange={e=>updateField("eventDate",e.target.value)}
      />
      <input
        type="time"
        value={formData.eventTime}
        onChange={e=>updateField("eventTime",e.target.value)}
      />
      <input
        type="number"
        min="15"
        step="15"
        value={formData.length}
        onChange={e=>updateField("length",e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventCreator;
