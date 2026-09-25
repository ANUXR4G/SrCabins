"use client";

type TagName = "div" | "header" | "footer" | "main" | "section";

export function LiveHtml({
  html,
  className,
  as: Tag = "div",
}: {
  html: string;
  className?: string;
  as?: TagName;
}) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
