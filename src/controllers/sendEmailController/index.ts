/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from "express";
import { serviceSendEmail } from "../../services";

const sendEmailController = async (req: Request, res: Response) => {
  const { firstname, surname, email, service, messageContact } = req.body;

  try {
    const requiredFields: Record<string, string> = {
      firstname,
      surname,
      email,
      service,
      messageContact,
    };

    const emptyField = Object.entries(requiredFields).find(
      ([key, value]) => !value
    );
    if (emptyField) {
      throw new Error(`O campo '${emptyField[0]}' é obrigatório.`);
    }

    await serviceSendEmail(req.body);

    res.status(201).json({
      message: "E-mail enviado com sucesso para Estácio Vieira",
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(`Erro ao enviar Email: ${error.message}`);

    res.status(500).json({
      error:
        error.message || "Não foi possível enviar e-mail. Tente mais tarde.",
    });
  }
};

export default sendEmailController;
