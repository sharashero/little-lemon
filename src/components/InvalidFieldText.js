function InvalidFieldMessage({show, children}) {
  const render = show ? children : null;
  return (
    <div className="invalid-field">
      {render}
    </div>
  );
}

export default InvalidFieldMessage;
