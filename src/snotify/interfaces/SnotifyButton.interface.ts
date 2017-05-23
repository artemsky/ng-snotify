export interface SnotifyButton {
  text: string;
  action?: (text?: string) => void;
  bold?: boolean;
}
