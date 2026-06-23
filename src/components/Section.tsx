import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div className={`max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-4xl md:text-5xl font-bold text-primary">{title}</h2>}
            {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
