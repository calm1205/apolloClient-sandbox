import { Histories, Spacer } from "~/components";

type Links = { to: string; text: string }[];
const links: Links = [
  { to: "apolloBest", text: "apollo clientのbest practice" },
  { to: "lazyEffect", text: "lazyQueryを無理やりuseEffectで制御" },
];

/**
 * トップページ
 */
export const Top = () => (
  <>
    <h1>Apollo Client</h1>
    <ul style={ulStyle}>
      {links.map(({ to, text }) => (
        <li key={to}>
          <a href={to}>{text}</a>
        </li>
      ))}
    </ul>
  </>
);

const ulStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 20,
};
