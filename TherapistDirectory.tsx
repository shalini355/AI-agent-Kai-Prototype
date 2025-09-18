
// components/Therapist/TherapistDirectory.tsx
import { useEffect, useState } from "react";
import { getAllTherapists } from "../../lib/therapists";
import type { Therapist } from "../../types/therapist";
import TherapistCard from "../Therapist/TherapistCard";
import TherapistFilters from "../Therapist/TherapistFilters";
import BookAppointmentModal from "../Therapist/BookAppointmentModal";
import BookAppointmentButton from "../Therapist/BookAppointmentButton"; // adjust path if needed


const TherapistDirectory = () => {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [filtered, setFiltered] = useState<Therapist[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState<Therapist | null>(null);

  useEffect(() => {
    const fetchTherapists = async () => {
      const data = await getAllTherapists();
      setTherapists(data);
      setFiltered(data);
    };
    fetchTherapists();
  }, []);

  // Filter therapists based on all filters
  useEffect(() => {
    let temp = [...therapists];

    if (search) {
      const s = search.toLowerCase();
      temp = temp.filter(
        (t) =>
          t.name.toLowerCase().includes(s) ||
          t.location.toLowerCase().includes(s)
      );
    }
    if (type) temp = temp.filter((t) => t.type === type);
    if (gender) temp = temp.filter((t) => t.gender === gender);
    if (language)
      temp = temp.filter((t) =>
        t.speaks.map((l) => l.toLowerCase()).includes(language.toLowerCase())
      );

    setFiltered(temp);
  }, [search, type, gender, language, therapists]);

  const openModal = (therapist: Therapist) => {
    setSelectedTherapist(therapist);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTherapist(null);
    setModalOpen(false);
  };

   const handleAppointmentSubmit = (formData: {
    name: string;
    email: string;
    date: string;
    therapist: Therapist;
  }) => {
    console.log("Appointment submitted:", formData);
    // You can save it to Firestore here
    alert(`Appointment booked with ${formData.therapist.name} on ${formData.date}`);
    closeModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Therapist Directory</h1>

      <TherapistFilters
        onSearch={setSearch}
        onTypeChange={setType}
        onGenderChange={setGender}
        onLanguageChange={setLanguage}
      />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-600">No therapists found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((therapist) => (
            <div key={therapist.id} className="cursor-pointer" onClick={() => openModal(therapist)}>
              <TherapistCard therapist={therapist} />
              {/* <button
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(therapist);
                }}
              >
                Book Appointment
              </button> */}
              <BookAppointmentButton therapist={therapist} />

            </div>
          ))}
        </div>
      )}

      {modalOpen && selectedTherapist && (
  <BookAppointmentModal
    isOpen={modalOpen}
    onClose={closeModal}
    therapist={selectedTherapist} // ✅ Pass it!
    onSubmit={handleAppointmentSubmit}
  />
)}

    </div>
  );
};

export default TherapistDirectory;
