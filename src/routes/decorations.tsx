import { createFileRoute, redirect } from "@tanstack/react-router";

// Decorations now live in the Gallery; keep old links working.
export const Route = createFileRoute("/decorations")({
  beforeLoad: () => {
    throw redirect({ to: "/gallery", replace: true });
  },
});
