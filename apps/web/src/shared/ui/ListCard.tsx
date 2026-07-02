import type { ReactElement, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { cn } from '@/shared/lib';

interface ListCardProps {
  title: string;
  titleIcon: LucideIcon;
  itemIcon: LucideIcon;
  itemIconClassName?: string;
  items: string[];
  emptyState: ReactNode;
}

function ListCard({
  title,
  titleIcon: TitleIcon,
  itemIcon: ItemIcon,
  itemIconClassName = 'text-muted-foreground',
  items,
  emptyState,
}: ListCardProps): ReactElement {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <TitleIcon className="size-4 text-muted-foreground" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          emptyState
        ) : (
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <ItemIcon
                  className={cn('mt-0.5 size-4 shrink-0', itemIconClassName)}
                />
                {item}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export { ListCard };
