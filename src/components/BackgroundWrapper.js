function BackgroundWrapper(Component) {
  return () => (
    <div className="wrapper">
      <Component />
    </div>
  );
}

export default BackgroundWrapper;
