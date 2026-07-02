import type { ReactElement } from 'react';
import type { ContractType } from '@app/core';
import { Download } from 'lucide-react';
import { CONTRACT_REPORT_ROUTE } from './constants';
import { getRiskLevel } from './riskLevel';
import { generatePath } from '@/shared/lib';
import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  Progress,
} from '@/shared/ui';

interface AnalysisRiskSummaryCardProps {
  id: string;
  filename: string;
  type: ContractType;
  riskScore: number;
}

export function AnalysisRiskSummaryCard({
  id,
  filename,
  type,
  riskScore,
}: AnalysisRiskSummaryCardProps): ReactElement {
  const risk = getRiskLevel(riskScore);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          {filename}
          <Badge variant="secondary" size="md">
            {type}
          </Badge>
        </CardTitle>
        <CardAction>
          <Button
            variant="outline"
            render={
              <a href={generatePath(CONTRACT_REPORT_ROUTE, { id })} download />
            }
          >
            <Download />
            Download report
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Risk score</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-medium tabular-nums">
              {riskScore}
            </span>
            <Badge variant={risk.badge} size="md">
              {risk.label}
            </Badge>
          </div>
        </div>
        <Progress value={riskScore} indicatorClassName={risk.bar} />
      </CardContent>
    </Card>
  );
}
