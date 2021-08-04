export type IProjectDescProps =
  typeof import("../../templates/Works/content-data.json").projects[0] & {
    position: "left" | "right";
  };
