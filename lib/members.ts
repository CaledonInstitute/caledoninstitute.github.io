import snapshot from "@/data/members.json";

export type Member = {
  username: string;
  name: string;
  avatar: string;
  github: string;
};

// Public GitHub membership snapshot, retrieved 2026-10-24.
// Update this file's source JSON and local avatars to curate the list.
export const members: readonly Member[] = snapshot;
