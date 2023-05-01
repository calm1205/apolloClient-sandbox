type Company = {
  name?: string | null;
  summary?: string | null;
};
export const Company: React.FC<Company> = ({ name, summary }) => {
  console.log("render company");
  return (
    <>
      <h2>Company</h2>
      <b>{name}</b>
      <p>{summary}</p>
    </>
  );
};
