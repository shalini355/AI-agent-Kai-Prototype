// components/about/TermsOfUse.tsx
export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>

      <p className="mb-4">
        By using this platform, you agree to the following terms. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Not a Medical Service</h2>
      <p className="mb-4">
        This app is not a substitute for professional medical or mental health advice, diagnosis,
        or treatment. Always consult a qualified provider if you need help.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Usage Responsibility</h2>
      <p className="mb-4">
        You are responsible for any content you add, including journal entries or comments.
        Abusive or harmful content is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Account Security</h2>
      <p className="mb-4">
        If accounts are implemented, you are responsible for keeping your login credentials
        secure. We are not liable for data loss due to misuse.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
      <p className="mb-4">
        We may revise these terms from time to time. Continued use of the app after changes
        means you accept the revised terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p className="mb-4">
        For questions about these terms, email us at <a href="mailto:terms@mindspace.app" className="text-blue-600 underline">terms@mindspace.app</a>.
      </p>
    </div>
  );
}
