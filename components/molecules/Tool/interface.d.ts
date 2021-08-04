/*export type ICardProps = React.MouseEvent<HTMLDivElement> & {
  logo?:string;
  githubLink?:string;
  description?:string;
  title?:string;
}*/

export type IToolProps = typeof import("../../templates/Tools/content-data.json").tools[0] & {
  loaded?: boolean;
};
