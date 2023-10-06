export type FieldType = "text" | "longtext" | "dropdown" | "number";

export interface FormField {
  default_value?: string | number | boolean;
  value?: string | number | boolean;
  validation?: string;
  min_value?: number;
  max_value?: number;
  options?: (string | number)[];
  type: FieldType;
  label: string;
}

export interface FormData {
  fields: FormField[];
}