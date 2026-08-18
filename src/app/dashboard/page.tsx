import AppShell from "@/components/layout/AppShell";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>

          <p className="mt-2 text-muted-foreground">
            Welcome to OdishaRank.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-lg font-semibold">
            Welcome!
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Your dashboard content will be implemented in
            upcoming modules.
          </p>
        </div>
      </div>
    </AppShell>
  );
}