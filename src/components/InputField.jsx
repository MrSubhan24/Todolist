/* eslint-disable react/prop-types */

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="w-full border border-gray-300 p-2 mb-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
