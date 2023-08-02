function BackgroundWrapper({ background, children }) {
  return (
    <div className={`wrapper background-${background}`}>
      {children}
    </div>
  );
}

export default BackgroundWrapper;
