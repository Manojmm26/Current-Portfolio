export const social = [
  { url: "mailto:manojsmehta6996@gmail.com", name: "mail" },
  { url: "https://github.com/manojsmehta", name: "github" },
  { url: "https://www.linkedin.com/in/manoj-singh-mehta/", name: "linkedin" },
  //{ url: "https://x.com/DavidHckh", name: "x" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
