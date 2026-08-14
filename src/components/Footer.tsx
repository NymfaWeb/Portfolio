import { RESUME_DATA } from "@/data/resume";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center border-t border-card-border mt-12 relative overflow-hidden">
      <p className="text-foreground/50 text-sm">
        © {currentYear} {RESUME_DATA.personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
