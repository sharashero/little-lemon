function Button({ children, onClick }) {
  return (
    <button className="btn rounded" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
