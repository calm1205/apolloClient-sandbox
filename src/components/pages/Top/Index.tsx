import { urls } from "~/constants";

type Links = { to: string; text: string }[];
const links: Links = [
  { to: urls.apolloBest, text: "apollo clientのbest practice" },
  { to: urls.lazyQuery, text: "lazyQueryを無理やりuseEffectで制御" },
  { to: urls.apolloSuspense, text: "experimentalなuseSuspenseQuery" },
];

/**
 * トップページ
 */
export const Top = () => (
  <>
    <h1>Apollo Client</h1>
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 20,
      }}
    >
      {links.map(({ to, text }) => (
        <li key={to}>
          <a href={to}>{text}</a>
        </li>
      ))}
    </ul>
  </>
);
