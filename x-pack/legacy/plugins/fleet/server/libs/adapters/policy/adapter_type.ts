/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export interface Policy {
  id: string;
}

export interface IngestPlugin {
  getFull(id: string): Promise<Policy>;
}

export interface PolicyAdapter {
  getFullPolicy(id: string): Promise<Policy>;
}