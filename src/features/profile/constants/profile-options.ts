export const QUALIFICATION_OPTIONS = [
  {
    value: "10th",
    label: "10th",
  },
  {
    value: "12th",
    label: "12th",
  },
  {
    value: "graduate",
    label: "Graduate",
  },
  {
    value: "post_graduate",
    label: "Post Graduate",
  },
  {
    value: "other",
    label: "Other",
  },
] as const;

export const STATE_OPTIONS = [
  {
    value: "odisha",
    label: "Odisha",
  },
] as const;

export const DISTRICTS_BY_STATE = {
  odisha: [
    { value: "angul", label: "Angul" },
    { value: "balangir", label: "Balangir" },
    { value: "balasore", label: "Balasore" },
    { value: "bargarh", label: "Bargarh" },
    { value: "bhadrak", label: "Bhadrak" },
    { value: "boudh", label: "Boudh" },
    { value: "cuttack", label: "Cuttack" },
    { value: "deogarh", label: "Deogarh" },
    { value: "dhenkanal", label: "Dhenkanal" },
    { value: "gajapati", label: "Gajapati" },
    { value: "ganjam", label: "Ganjam" },
    { value: "jagatsinghpur", label: "Jagatsinghpur" },
    { value: "jajpur", label: "Jajpur" },
    { value: "jharsuguda", label: "Jharsuguda" },
    { value: "kalahandi", label: "Kalahandi" },
    { value: "kandhamal", label: "Kandhamal" },
    { value: "kendrapara", label: "Kendrapara" },
    { value: "kendujhar", label: "Keonjhar" },
    { value: "khordha", label: "Khordha" },
    { value: "koraput", label: "Koraput" },
    { value: "malkangiri", label: "Malkangiri" },
    { value: "mayurbhanj", label: "Mayurbhanj" },
    { value: "nabarangpur", label: "Nabarangpur" },
    { value: "nayagarh", label: "Nayagarh" },
    { value: "nuapada", label: "Nuapada" },
    { value: "puri", label: "Puri" },
    { value: "rayagada", label: "Rayagada" },
    { value: "sambalpur", label: "Sambalpur" },
    { value: "subarnapur", label: "Subarnapur" },
    { value: "sundargarh", label: "Sundargarh" },
  ],
} as const;
  

export const DAILY_STUDY_HOURS_OPTIONS = [
  {
    value: 1,
    label: "1 hour",
  },
  {
    value: 2,
    label: "2 hours",
  },
  {
    value: 3,
    label: "3 hours",
  },
  {
    value: 4,
    label: "4 hours",
  },
  {
    value: 5,
    label: "5 hours",
  },
  {
    value: 6,
    label: "6+ hours",
  },
] as const;

export const TARGET_YEAR_OPTIONS = [
  {
    value: 2026,
    label: "2026",
  },
  {
    value: 2027,
    label: "2027",
  },
  {
    value: 2028,
    label: "2028",
  },
] as const;