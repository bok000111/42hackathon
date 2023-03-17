export interface IMentorInfo {
  intra: string;
  level: number;
  good: number;
  subjects: string[];
  image?: string | undefined;
  coalition: string;
}

export interface IMentor {
  type: string;
  subject: string;
  time: Date;
  target: string[];
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

export interface ISlotInfo {
  mentor: string;
  mentee: string;
  cur: number;
  max: number;
  subject: string;
  description: string;
  start: number;
  end: number;
  image?: string;
  level: number;
  good: number;
  coalition: string;
}

export interface ISubjectInfo {
  cur: number;
  max: number;
  description: string;
  start: number;
  end: number;
}
