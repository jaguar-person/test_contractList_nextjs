import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ContractHeader from "../../components/ContractHeader";
import { ContractCasesTable } from "../../components/ContractCasesTable";
import { Case, Contract } from "../../libs/types";
import api from "../../libs/api";

const fetchData = async (
  id: string,
  setContract: (contract: Contract) => void,
  setCases: (cases: Case[]) => void
) => {
  const [contracts, cases] = await Promise.all([
    api.get(`/contracts/${id}`),
    api.get(`/contracts/${id}/cases`),
  ]);
  setContract(contracts);
  setCases(cases);
};

const ContractPage: NextPage = () => {
  const [contract, setContract] = useState<Contract | null>(null);
  const [cases, setCases] = useState<Case[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchData(id as string, setContract, setCases);
    }
  }, [id, setContract]);

  if (!contract) {
    return <>Loading</>;
  }

  return (
    <>
      <ContractHeader contract={contract} updatedContract={setContract} />

      <ContractCasesTable cases={cases} />
    </>
  );
};

export default ContractPage;
