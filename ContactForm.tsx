// components/ContactForm.tsx
export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Message" className="w-full p-2 border rounded h-32" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Send
      </button>
    </form>
  );
}
