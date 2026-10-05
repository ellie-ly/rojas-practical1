export default function Button({ label, onClick, variant = 'primary', children, ...props }) {
  const baseStyles = "px-4 py-2 rounded font-medium transition duration-200 focus:outline-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children || label}
    </button>
  );
}