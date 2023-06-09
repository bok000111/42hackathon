export interface IMentorInfo {
  intra: string;
  level: number;
  good: number;
  subjects: string[];
  image?: string | undefined;
  coalition: string;
  description: string;
}

export interface IMentor {
  type: string;
  subject: string;
  time: Date;
  target: string[];
  id: number;
}

export interface ITimeData {
  date: string;
  subject: string;
  max: number;
  time: string;
}

export interface ISubjectData {
  name: string;
  final_mark: number;
  marked_at: string;
}

export interface IRank {
  coalition: string;
  intra: string;
  time: number;
  good: number;
}

interface IMentorType {
  coa: string;
  image: string;
  level: number;
  login: string;
  total_feedback: number;
  description: string;
}

export interface ISlotInfo {
  id: number;
  mentor: IMentorType;
  curr: number;
  max: number;
  subject: string;
  description: string;
  start: number;
  end: number;
  image?: string;
  level: number;
  good: number;
  coalition: string;
  mentees: string;
}

export interface ISubjectInfo {
  cur: number;
  max: number;
  description: string;
  start: number;
  end: number;
}

export interface IMyInfo {
  token: string;
  image: string;
  login: string;
  level: number;
  coa: string;
  projects: string;
}
