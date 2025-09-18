// components/about/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy matters to us. This policy outlines how we collect, use, and protect your
        information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
      <p className="mb-4">
        We only collect information that is essential for the app’s functionality. Journals,
        mood logs, and usage data are stored securely and never shared.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Local Storage</h2>
      <p className="mb-4">
        Your journal entries are saved locally on your device unless you opt into cloud backup
        (if provided in the future).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Analytics</h2>
      <p className="mb-4">
        We may use anonymous, aggregated analytics to improve app experience (e.g., which tools
        are most used).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">
        You can request to delete any data associated with your account or device at any time.
        Contact us at <a href="mailto:privacy@mindspace.app" className="text-blue-600 underline">privacy@mindspace.app</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates</h2>
      <p className="mb-4">
        This policy may be updated to reflect app changes. We’ll notify users when changes are
        significant.
      </p>
    </div>
  );
}
