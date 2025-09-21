// pages/BookAppointmentPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BookAppointmentModal from "../../components/Therapist/BookAppointmentModal";
import { getAllTherapists } from "../../lib/therapists";
import type { Therapist } from "../../types/therapist";

const BookAppointmentPage = () => {
  const { therapistId } = useParams();
  const navigate = useNavigate();
  const [therapist, setTherapist] = useState<Therapist | null>(null);

 useEffect(() => {
  const fetchTherapist = async () => {
    const all = await getAllTherapists();
    console.log("Fetched therapists:", all);
    console.log("Route therapistId:", therapistId);
    const found = all.find((t) => String(t.id) === therapistId);
    if (found) {
      setTherapist(found);
    } else {
      console.warn("Therapist not found for ID:", therapistId);
    }
  };
  fetchTherapist();
}, [therapistId]);


  const handleClose = () => navigate("/therapists");

  const handleSubmit = (formData: {
    name: string;
    email: string;
    date: string;
    therapist: Therapist;
  }) => {
    console.log("Appointment submitted:", formData);
    alert(`Appointment booked with ${formData.therapist.name} on ${formData.date}`);
    navigate("/therapists");
  };

  if (!therapist) return <div className="p-4">Loading...</div>;

  return (
    <BookAppointmentModal
      isOpen={true}
      onClose={handleClose}
      therapist={therapist}
      onSubmit={handleSubmit}
    />
  );
};

export default BookAppointmentPage;
