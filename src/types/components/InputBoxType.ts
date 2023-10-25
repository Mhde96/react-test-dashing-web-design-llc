export type InputBoxType = {
  handleChange: (text: string) => void;
  type: string;
  placeholder: string;
  value?: string
  error?: string
};
