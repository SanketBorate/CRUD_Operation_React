
const Button = ({ onClick, children }) => {
  return (
    <button className="bg-red-700 text-white py-2 px-6 my-10 rounded hover:bg-red-400"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button