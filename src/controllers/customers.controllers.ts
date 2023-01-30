import { Request, Response } from "express";
import { customersRepository } from "@/repositories";
import { Customer, EmailUpdateForm, CustomersRank } from "@/protocols";


export async function registerCustomer(req: Request, res: Response) {
  const customer: Customer = req.body;
  try {
    const customerName: string = await customersRepository.insertCustomer(
      customer
    );
    res.send({ message: `Success: ${customerName} was registered!` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.detail });
  }
}

export async function getCustomersRank(req: Request, res: Response) {
  const rank: CustomersRank = res.locals.rank;
  return res.status(200).send(rank);
}

export async function updateCustomer(req: Request, res: Response) {
  const requisition: EmailUpdateForm = res.locals.validatedEmail;
  try {
    const name: string = await customersRepository.updateEmail(requisition);
    res.status(200).send({ message: `${name}'s email updated!` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.detail });
  }
}
