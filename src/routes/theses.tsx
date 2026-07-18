import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/theses")({
  beforeLoad: () => {
    throw redirect({ to: "/theses_and_experiments" });
  },
});
