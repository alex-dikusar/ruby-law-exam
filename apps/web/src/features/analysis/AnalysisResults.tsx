import type { ReactElement } from 'react';
import type { ContractAnalysis } from '@app/core';
import { CheckCircle2, CircleAlert, Lightbulb } from 'lucide-react';
import { AnalysisNotContractCard } from './AnalysisNotContractCard';
import { AnalysisRiskSummaryCard } from './AnalysisRiskSummaryCard';
import { ListCard } from '@/shared/ui';

interface AnalysisResultsProps {
  result: ContractAnalysis;
}

export function AnalysisResults({
  result,
}: AnalysisResultsProps): ReactElement {
  const {
    id,
    isContract,
    type,
    riskScore,
    missingClauses,
    recommendations,
    filename,
  } = result;

  if (!isContract) {
    return <AnalysisNotContractCard filename={filename} />;
  }

  return (
    <div className="space-y-4">
      <AnalysisRiskSummaryCard
        id={id}
        filename={filename}
        type={type}
        riskScore={riskScore}
      />

      <ListCard
        title="Missing clauses"
        titleIcon={CircleAlert}
        itemIcon={CircleAlert}
        itemIconClassName="text-warning"
        items={missingClauses}
        emptyState={
          <p className="flex items-center gap-2 text-sm text-success">
            <CheckCircle2 className="size-4" />
            No missing clauses detected
          </p>
        }
      />

      <ListCard
        title="Recommendations"
        titleIcon={Lightbulb}
        itemIcon={Lightbulb}
        items={recommendations}
        emptyState={
          <p className="text-sm text-muted-foreground">No recommendations.</p>
        }
      />
    </div>
  );
}
