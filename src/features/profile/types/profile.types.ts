export interface Profile {
  id: string;
  user_id: string;
  role: string | null;
  full_name: string | null;
  email: string | null;
  avatar_url: string | null;
  qualification: string | null;
  state: string | null;
  district: string | null;
  daily_study_hours: number | null;
  target_year: number | null;
  is_profile_completed: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateProfileInput {
  full_name: string;
  qualification: string;
  state: string;
  district: string;
  daily_study_hours: number;
  target_year: number;
}

export interface UpdateProfileInput {
  full_name?: string;
  qualification?: string;
  state?: string;
  district?: string;
  daily_study_hours?: number;
  target_year?: number;
  is_profile_completed?: boolean;
}