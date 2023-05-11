import Link from "./Link";
import Button from "./Button";
import Status from "./Status";
import type { Contract } from "../libs/types";
import api from "../libs/api";
import * as styles from "./ContractHeader.css";
import { Card } from "./Card";
import { PropertyItem } from "./PropertyItem";

interface Props {
  contract: Contract;
  updatedContract: (contract: Contract) => void;
}

const ContractStatus = ({ contract, updatedContract }: Props) => {
  const issue = (id: string) =>
    api.put(`/contracts/${id}`, { status: "ISSUED" }).then(updatedContract);

  return (
    <>
      <div className={styles.topbar}>
        <Link to="/">🠔 Back to the contracts list</Link>
        {contract.status === "DRAFT" && (
          <Button label="Issue" onClick={() => issue(contract.id)} />
        )}
      </div>
      <h1>Contract {contract.id}</h1>
      <Card className={styles.container}>
        <PropertyItem
          label="Status"
          value={<Status status={contract.status} />}
        />
        <PropertyItem
          label="Asset details"
          value={`$${contract.asset.value}`}
        />
        <PropertyItem
          label="Renter"
          value={`${contract.renter.first_name} ${contract.renter.last_name}`}
        />
        <PropertyItem
          label="Owner"
          value={`${contract.owner.first_name} ${contract.owner.last_name}`}
        />
      </Card>
    </>
  );
};

export default ContractStatus;
