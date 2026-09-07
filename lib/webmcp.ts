import { projectFilters, type ProjectFilter } from '@/data/projects';
interface ModelContext {
  registerTool(
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: object;
      annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
      execute: (input: unknown) => unknown;
    },
    options: { signal: AbortSignal },
  ): void | Promise<void>;
}
export function registerPortfolioTools(
  filterProjects: (category: ProjectFilter) => unknown,
) {
  const context = (document as Document & { modelContext?: ModelContext })
    .modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  try {
    void Promise.resolve(
      context.registerTool(
        {
          name: 'filter_portfolio_projects',
          title: 'Filtrar proyectos del portafolio',
          description:
            'Muestra la sección de proyectos y aplica una categoría al filtro visible. Las fichas pendientes están identificadas como coming-soon.',
          inputSchema: {
            type: 'object',
            properties: {
              category: { type: 'string', enum: [...projectFilters] },
            },
            required: ['category'],
            additionalProperties: false,
          },
          annotations: { readOnlyHint: false, untrustedContentHint: false },
          execute(input) {
            if (
              !input ||
              typeof input !== 'object' ||
              !('category' in input) ||
              !projectFilters.includes(input.category as ProjectFilter) ||
              Object.keys(input).length !== 1
            )
              throw new Error(
                'Categoría inválida. Usa una categoría del filtro de proyectos.',
              );
            const category = input.category as ProjectFilter;
            return { category, projects: filterProjects(category) };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => {
      lifecycle.abort();
    });
  } catch {
    lifecycle.abort();
  }
  return () => lifecycle.abort();
}
