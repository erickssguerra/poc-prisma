import { Request, Response } from "express";
import { Enrollment, EnrollmentDetails } from "@/protocols";
import { enrollmentsRepository } from "@/repositories";

export async function enrollCustomer(req: Request, res: Response) {
  const enrollment: Enrollment = req.body;
  try {
    const enrollmentDetails: EnrollmentDetails =
      await enrollmentsRepository.enroll(enrollment);
    res.status(200).send({
      message: `Success: ${enrollmentDetails.customer} was enrolled into ${enrollmentDetails.course}!`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.detail });
  }
}

export async function unenrollCustomer(req: Request, res: Response) {
  const unenrollment: Enrollment = req.body;
  try {
    const unenrollmentDetails: EnrollmentDetails =
      await enrollmentsRepository.unenroll(unenrollment);
    res.status(200).send({
      message: `Success: ${unenrollmentDetails.customer} was unerolled from ${unenrollmentDetails.course}!`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.detail });
  }
}
