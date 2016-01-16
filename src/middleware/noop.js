// basic noop middleware
export default function noop({
  // getState,
  // dispatch,
}) {
  return (next) => (action) => {
    return next(action);
  };
}
