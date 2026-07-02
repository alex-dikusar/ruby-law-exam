import type { ReactElement } from 'react';
import { CircleAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui';

interface AnalysisNotContractCardProps {
  filename: string;
}

export function AnalysisNotContractCard({
  filename,
}: AnalysisNotContractCardProps): ReactElement {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <CircleAlert className="size-4 text-warning" />
          Not a contract
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          "{filename}" doesn't appear to be a legal contract, so it wasn't
          analysed.
        </p>
      </CardContent>
    </Card>
  );
}
