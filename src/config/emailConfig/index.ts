import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {config} from 'dotenv';
config();

const HOST = process.env.HOST_EMAIL;
const PORT = process.env.HOST_PORT;
const PASS = process.env.USER_PASS;
const EMAIL = process.env.USER_EMAIL;

const transporter = nodemailer.createTransport({
    host:HOST,
    port:PORT,
    secure:false,
    auth:{
        user:EMAIL,
        pass:PASS
    }
} as SMTPTransport.Options)

transporter.verify((error) => {
    if (error) {
      throw new Error(`Erro ao conectar com o SMTP: ${error}`);
    } else {
      console.log(`Conexão SMTP estabelecida com sucesso.`);
    }
  });

export default transporter;