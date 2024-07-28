export type IssuesAdd = "issues/add";

export interface IssuesState {
  list: Issue[];
}

export interface Issue {
  title: string;
  collectionType: string;
  tag: string[];
  reportedBy: string;
  assignedTo: string;
  priority: string;
  date: string;
}
