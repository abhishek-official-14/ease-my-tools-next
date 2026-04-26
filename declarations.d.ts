declare module "*.css";
declare module "*.svg";

declare module "next" {
  export type NextConfig = Record<string, unknown>;

  export interface Metadata {
    [key: string]: unknown;
  }
}

declare module "next/link" {
  import { ComponentType, AnchorHTMLAttributes, ReactNode } from "react";
  type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children?: ReactNode;
  };
  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module "next/navigation" {
  export function useRouter(): {
    push: (href: string) => void;
    replace: (href: string) => void;
    back: () => void;
  };

  export function usePathname(): string;

  export function notFound(): never;
}
