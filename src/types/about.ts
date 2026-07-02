export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  linkedIn: string;
};

export type Certificate = {
  name: string;
  provider: string;
  issuer: string;
  link: string;
};
