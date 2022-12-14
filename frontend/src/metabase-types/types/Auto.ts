/**
 * ⚠️
 * @deprecated use existing types from, or add to metabase-types/api/*
 */

import { TableId, SchemaName } from "metabase-types/types/Table";

export type DatabaseCandidates = SchemaCandidates[];

export type SchemaCandidates = {
  schema: SchemaName;
  score: number;
  tables: Candidate[];
};

export type Candidate = {
  title: string;
  description: string;
  score: number;
  rule: string;
  url: string;
  table?: {
    id: TableId;
    schema: SchemaName;
  };
};
