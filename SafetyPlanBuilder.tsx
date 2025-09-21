import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

type FieldName =
  | "warningSigns"
  | "copingStrategies"
  | "trustedPeople"
  | "safePlaces"
  | "emergencyContacts";

const fieldLabels: Record<FieldName, string> = {
  warningSigns: "Warning signs (e.g., 'I isolate or stop sleeping')",
  copingStrategies: "Coping strategies (e.g., deep breathing, journaling)",
  trustedPeople: "People I can talk to (trusted friends, family)",
  safePlaces: "Places that make me feel safe",
  emergencyContacts: "Emergency contacts",
};

const SafetyPlanBuilder: React.FC = () => {
  const [form, setForm] = useState<Record<FieldName, string>>({
    warningSigns: "",
    copingStrategies: "",
    trustedPeople: "",
    safePlaces: "",
    emergencyContacts: "",
  });

  const componentRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name as FieldName]: value,
    }));
  };

  const handleSaveLocal = () => {
    localStorage.setItem("safetyPlan", JSON.stringify(form));
    alert("Saved anonymously to local storage.");
  };

  const handlePrint = useReactToPrint({
    ontent: () => componentRef.current,
} as Parameters<typeof useReactToPrint>[0]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">🛡️ Safety Plan Builder</h2>

      {Object.keys(fieldLabels).map((key) => (
        <div key={key} className="mb-5">
          <label className="block font-medium mb-2">{fieldLabels[key as FieldName]}</label>
          <textarea
            name={key}
            value={form[key as FieldName]}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      ))}

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Save as PDF
        </button>

        <button
          onClick={handleSaveLocal}
          className="bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
        >
          Save Anonymously
        </button>
      </div>

      {/* Hidden printable view */}
      <div className="hidden print:block mt-10" ref={componentRef}>
        <h2 className="text-2xl font-bold mb-4">🛡️ My Safety Plan</h2>
        {Object.entries(fieldLabels).map(([key, label]) => (
          <div key={key} className="mb-4">
            <h3 className="font-semibold">{label}</h3>
            <p>{form[key as FieldName] || "Not provided"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyPlanBuilder;

