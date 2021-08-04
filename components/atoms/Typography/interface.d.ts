export interface ITypography {
  letterSpacing?:
    | "tracking-tighter"
    | "tracking-tight"
    | "tracking-normal"
    | "tracking-wide"
    | "tracking-wider"
    | "tracking-widest";
  fontFamily?: "font-sans" | "font-serif" | "font-mono";
  fontSize?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl";
  responsiveFontSize?:
    | "mobile:text-xs"
    | "mobile:text-sm"
    | "mobile:text-base"
    | "mobile:text-lg"
    | "mobile:text-xl"
    | "mobile:text-2xl"
    | "mobile:text-3xl"
    | "mobile:text-4xl"
    | "mobile:text-5xl"
    | "mobile:text-6xl";
  fontStyle?: "italic";
  fontWeight?:
    | "font-hairline"
    | "font-thin"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black";
  fontVariant?:
    | "normal-nums"
    | "ordinal"
    | "slashed-zero"
    | "lining-nums"
    | "oldstyle-nums"
    | "proportional-nums"
    | "tabular-nums"
    | "diagonal-fractions"
    | "stacked-fractions";
  lineHeight?:
    | "leading-none"
    | "leading-tight"
    | "leading-snug"
    | "leading-normal"
    | "leading-relaxed"
    | "leading-loose";
  listType?: "list-none" | "list-decimal" | "list-disc";
  listPosition?: "list-inside" | "list-outside";
  placeholderColor?: string;
  placeholderOpacity?: string;
  textAlign?: "text-left" | "text-center" | "text-right" | "text-justify";
  textColor?: string;
  textOpacity?: string;
  textDecoration?: "underline" | "line-through" | "no-underline";
  textTransform?: "normal-case" | "uppercase" | "lowercase" | "capitalize";
  verticalAlign?: string;
  whitespace?:
    | "whitespace-normal"
    | "whitespace-no-wrap"
    | "whitespace-pre"
    | "whitespace-pre-line"
    | "whitespace-pre-wrap";
  wordBreak?: string;
  text?: string | number;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}
