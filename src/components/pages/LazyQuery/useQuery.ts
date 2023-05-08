import { useCallback, useEffect } from "react";
import {
  LazyQueryHookOptions,
  OperationVariables,
  QueryTuple,
  WatchQueryFetchPolicy,
} from "@apollo/client";

type Query<TQuery = {}, TVariables extends OperationVariables = {}> = (
  options?: LazyQueryHookOptions<TQuery, TVariables>
) => QueryTuple<TQuery, TVariables>;

type UseQuery<TQuery = {}, TVariables extends OperationVariables = {}> = (
  query: Query<TQuery, TVariables>,
  variables?: TVariables,
  ignoreFetch?: boolean,
  fetchPolicy?: WatchQueryFetchPolicy
) => {
  fetch: () => void;
  result: any;
};

/**
 * apollo clientで再レンダリングを防止するための制御関数
 */
export const useQuery: UseQuery = (
  query,
  variables,
  ignoreFetch = true,
  fetchPolicy
) => {
  const [get, result] = query({ variables, fetchPolicy });

  const fetch = useCallback(async () => {
    await get();
  }, [get]);

  useEffect(() => {
    !ignoreFetch && fetch();
  }, [fetch, ignoreFetch]);

  return { fetch, result };
};
