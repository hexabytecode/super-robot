export const SubmitButton = () => {
  return (
    <div className="flex items-center justify-center mt-4 shadow-top-md">
      <button type="reset" className="btn reset">
        Reset ↻
      </button>
      <button type="submit" className="btn submit">
        Run ▸
      </button>
    </div>
  );
};
