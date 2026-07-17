import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/phone_a_friend")({
  beforeLoad: () => {
    throw redirect({ to: "/phone_of_friend" });
  },
});
