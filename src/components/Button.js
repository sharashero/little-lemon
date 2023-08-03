function Button({ children, ...props }) {
  return (
    <button className="btn rounded" aria-label="on click" {...props}>
      {children}
    </button>
  )
}

export default Button;
