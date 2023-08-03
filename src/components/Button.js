function Button({ children, ...props }) {
  return (
    <button className="btn rounded" {...props}>
      {children}
    </button>
  )
}

export default Button;
