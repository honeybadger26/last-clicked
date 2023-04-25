const LoadingSVG = () => (
  <svg
    className="animate-spin my-1 ml-1 mr-3 h-8 w-8 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

type ButtonProps = {
  loading: boolean,
  onClick: () => void,
};

const Button = ({ loading = false, onClick }: ButtonProps) => {
  const classes = [
    "mb-auto",
    "p-4",
    "inline-flex",
    "rounded-lg",
    "text-3xl",
    "font-sans",
    // "text-slate-50",
    "text-gray-200",
    "bg-blue-600",
    "active:bg-blue-400",
    loading ? "cursor-not-allowed bg-blue-400" : "hover:bg-blue-500",
  ].join(" ");
  
  const buttonText = (
    loading ? 
    "Wow. You actually did it :o" :
    "You won't click me. You're too scared"
  );

  return (
    <button className={classes} onClick={onClick} disabled={loading}>
      {loading && <LoadingSVG />}
      {buttonText}
    </button>
  );
};

export default Button;
