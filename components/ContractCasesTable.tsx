import { Card } from "./Card";
import Status from "./Status";
import { PropertyItem } from "./PropertyItem";
import * as styles from "./ContractCasesTable.css";
import { Case } from "../libs/types";

export type ContractCasesProps = {
  cases: Case[];
};

export function ContractCasesTable({ cases }: ContractCasesProps) {
  return (
    <Card>
      <h2>Cases</h2>

      {cases.map((caseItem) => (
        <div className={styles.row} key={caseItem.id}>
          <PropertyItem value={<Status status={caseItem.status} />} />
          <PropertyItem label="Incident date" value={caseItem.incident_date} />
          <PropertyItem label="Outstanding" value={`$${caseItem.refund}`} />
          <PropertyItem label="Outstanding" value={`$${caseItem.refunded}`} />
        </div>
      ))}
    </Card>
  );
}
