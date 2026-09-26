interface Props { status: 'healthy' | 'warning'; children: string }

export function StatusBadge({ status, children }: Props) {
  return <span className={`status status-${status}`}>{children}</span>
}
