import { pql_1 } from "@happynrwl/pql";

export function pqlSdk(): string {
  const v = pql_1();
  return `${v} pql-sdk`;
}
