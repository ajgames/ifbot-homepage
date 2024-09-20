import './Yarn.css';
//https://yqnn.github.io/svg-path-editor/
const Yarn = () => {
  return (
    <div className="container">
      <svg className="squiggle" >
        <path
          d={`
           M80 20 C75 15, 70 25, 65 20 C60 15, 55 25, 50 20 
           C45 15, 40 25, 35 20 C30 15, 25 25, 20 20 
           C15 25, 25 30, 20 35 C15 40, 25 45, 20 50 
           C15 55, 25 60, 20 65 C15 70, 25 75, 20 80 
           C25 85, 30 75, 35 80 C40 85, 45 75, 50 80 
           C55 85, 60 75, 65 80 C70 85, 75 75, 80 80 
           C85 75, 75 70, 80 65 C85 60, 75 55, 80 50 
           C85 45, 75 40, 80 35 C85 30, 75 25, 80 20
            `}
          stroke="#f97316"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Yarn;