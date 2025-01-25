import {Request, Response} from 'express'
import { serviceSendEmail } from '@/services';


const sendEmailController = async (req: Request, res: Response) => {
    const { fisrtname, surname, email, service, message } = req.body;
    try {
      if (!fisrtname || !surname || !email || !service || !message) {
        throw new Error("Campo obrigatorio");
      }
  
      await serviceSendEmail(req.body);
  
      res.status(201).json({
        message: "E-mail enviado com sucesso para Estácio Vieira",
      });
    } catch (error) {
      console.log(`Erro ao enviar Email: ${error}`);
      res.status(500).json({
        error: "Não foi possível enviar e-mail. Tente mais tarde.",
      });
    }
  }

  export default sendEmailController;