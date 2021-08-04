export interface IPageIndicatorData {
  id?: string;
  title?: string;
  target: string;
  delay?: string;
}

export interface IPageIndicatorProps {
  indicator?: IPageIndicatorData[];
}
