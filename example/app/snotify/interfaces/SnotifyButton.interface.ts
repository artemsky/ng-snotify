export interface SnotifyButton {
  /**
   * Button text
   */
  text: string;
  /**
   * Action which will be called after button click
   * @param text? {String}
   */
  action?: (text?: string) => void;
  /**
   * Make button text bold or not
   */
  bold?: boolean;
}
