const DheerajLogo = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55 40
           Q140 40 140 100
           Q140 160 55 160
           L55 40 Z"
        stroke="url(#grad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75 65
           Q120 65 120 100
           Q120 135 75 135"
        stroke="url(#grad)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DheerajLogo;
