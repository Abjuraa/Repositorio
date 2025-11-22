import { Resend } from 'resend';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
const resend = new Resend(process.env.RESEND_API_KEY)


app.use(express.json())
app.use(cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))


app.post('/api/send-email', async (req, res) => {
    try {
        const { correo, asunto, mensaje } = req.body;

        if (!correo || !asunto || !mensaje) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.CONTACT_EMAIL,
            subject: `Nuevo mensaje de ${correo}`,
            html: `
                <div style="
                    background-color: #0f0f0f;
                    color: #e5e5e5;
                    padding: 24px;
                    font-family: Arial, Helvetica, sans-serif;
                    border-radius: 12px;
                    max-width: 600px;
                    margin: 0 auto;
                ">
                    <h2 style="color: #fff; font-size: 24px; margin-bottom: 16px;">
                    Nuevo mensaje desde tu portafolio
                    </h2>

                    <div style="
                    background-color: #1a1a1a;
                    padding: 16px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #333;
                    ">
                    <p style="margin: 0 0 10px;">
                        <b style="color:#a78bfa;">Correo:</b> ${correo}
                    </p>

                    <p style="margin: 0 0 10px;">
                        <b style="color:#a78bfa;">Asunto:</b> ${asunto}
                    </p>

                    <p style="margin: 0;">
                        <b style="color:#a78bfa;">Mensaje:</b><br/>
                        <span style="white-space: pre-line;">${mensaje}</span>
                    </p>
                    </div>

                    <p style="font-size: 13px; color: #777; text-align: center; margin-top: 20px;">
                    Este correo fue enviado automáticamente desde tu portafolio.
                    </p>
                </div>
                `

        })

        return res.status(200).json({ success: true, response })

    } catch (error) {
        console.log("Error enviando el correo: " + error)
        return res.status(500).json({ error: "Error al enviar el correo" + error })
    }
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})