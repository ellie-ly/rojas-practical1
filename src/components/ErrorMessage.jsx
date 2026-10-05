export default function ErrorMessage({ message }) {
  return (
    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
      <span className="font-medium">Notice:</span> {message || "No users found."}
    </div>
  );
}