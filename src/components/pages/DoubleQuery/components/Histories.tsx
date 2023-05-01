type Histories = {
  histories?:
    | (
        | {
            title?: string | null;
            details?: string | null;
          }
        | null
        | undefined
      )[]
    | null;
};

export const Histories: React.FC<Histories> = ({ histories }) => {
  console.log("render history");
  return (
    <>
      <h2>History</h2>
      {histories?.map((history) => (
        <div key={history?.title}>
          <b>{history?.title}</b>
          <p>{history?.details}</p>
        </div>
      ))}
    </>
  );
};
