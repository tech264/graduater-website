<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.

<!-- LOVABLE:END -->

## Application architecture

- Define interface colours, derived hover colours and shadows only as semantic global CSS tokens; reusable button variants consume those tokens so every page shares the same theme.
- Use TanStack Router file routes with shared discovery/detail templates and a central browser-safe static catalogue; this keeps the initial website frontend-only and makes later verified data replacement straightforward.
- Keep contact configuration in the central catalogue and offer a local enquiry download until delivery is configured; a downloaded draft is not a submitted enquiry.
- Generate sitemap and canonical metadata from the configured site origin only; do not invent a published domain.
- Scope homepage presentation refinements under `.homepage` and use the shared reduced-motion-aware `Reveal` wrapper; this preserves other pages and keeps section animation accessible.

- Keep the early testimonial preview independently stateful and explicitly labelled until approved reviews exist; this allows the discovery strip and later story carousel to remain independent.
