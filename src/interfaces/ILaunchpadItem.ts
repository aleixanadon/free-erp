export interface ILaunchpadItem {
  text: string;
  path: string;
  index?: number;
  icon?: { __html: string | TrustedHTML; } | undefined;
}