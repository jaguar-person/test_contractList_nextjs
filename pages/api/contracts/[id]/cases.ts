// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import database from "../../../../libs/database";
import type { Case } from "../../../../libs/types";

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Case[]>
) => {
  if (request.method === "GET") {
    const cases = await database("cases")
      .where({ contract_id: request.query.id as string })
      .select("*");

    response.status(200).json(cases);
  } else {
    response.status(405).end();
  }
};

export default handler;
