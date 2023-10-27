/* eslint-disable react/prop-types */

const Button = ({ onClick, text, color }) => {
  return (
    
    <div className="pt-2">
      <button
        className={`bg-${color}-500 text-white pt-2 pb-2 pr-5 ps-5 rounded`}
        onClick={onClick} >{text}
      </button>
    </div>
  );
};

export default Button;
