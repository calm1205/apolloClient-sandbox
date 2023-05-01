type Company = {
  name?: string | null;
  summary?: string | null;
};
export const Company: React.FC<Company> = ({ name, summary }) => (
  <>
    <h2>Company</h2>
    <b>{name}</b>
    <p>{summary}</p>
  </>
);
