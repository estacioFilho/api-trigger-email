import { transporter } from "@/config";
import Messagem from "@/types";
import { config } from "dotenv";
config();

const EMAIL_DIST = process.env.USER_EMAIL;

const serviceSendEmail = async (messagem: Messagem) => {
  transporter.sendMail({
    from: `Contato via Potfólio <${messagem.email}>`,
    to: EMAIL_DIST,
    subject: `Portfólio: ${messagem.service}`,
    html: `
            <h3>Você recebeu uma nova mensagem do formulário de contato:</h3>
            <p><strong>Nome:</strong> ${messagem.firstname} ${messagem.surname}</p>
            <p><strong>Celular:</strong> ${messagem.phone || "--"}</p>
            <p><strong>E-mail:</strong> ${messagem.email}</p>
            <p><strong>Mensagem:</strong> ${messagem.messageContact}</p>
        `,
  });
};

export default serviceSendEmail;


