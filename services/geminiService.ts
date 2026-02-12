import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Role } from '../types';

class GeminiService {
  private ai: GoogleGenAI;
  private chatSession: Chat | null = null;
  private readonly MODEL_NAME = 'gemini-3-flash-preview';

  constructor() {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
    }
    this.ai = new GoogleGenAI({ apiKey });
  }

  public async getQuickTip(): Promise<string> {
    try {
      const topics = ["atajos de teclado", "limpieza física", "seguridad", "rendimiento", "curiosidades de hardware", "trucos de Windows", "gestión de archivos"];
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      const response = await this.ai.models.generateContent({
        model: this.MODEL_NAME,
        contents: `Genera un consejo técnico único sobre ${randomTopic}. Máximo 15 palabras. Que sea algo sorprendente o muy útil. Empieza con un emoji relacionado.`,
        config: {
          systemInstruction: "Eres un técnico de BYTE COMPUTADORAS. Das consejos breves, variados y profesionales.",
          temperature: 1.0,
        }
      });
      return response.text?.trim() || "💡 Mantén tu PC libre de polvo para evitar sobrecalentamiento.";
    } catch (e) {
      return "💡 Reiniciar tu PC una vez al día ayuda a limpiar la memoria RAM.";
    }
  }

  public async startChat(): Promise<void> {
    try {
      this.chatSession = this.ai.chats.create({
        model: this.MODEL_NAME,
        config: {
          systemInstruction: `Eres el Asistente Experto de **BYTE COMPUTADORAS**. Tu objetivo es ayudar al cliente de forma RÁPIDA, DIRECTA y SIN TEXTO INNECESARIO.

          REGLAS DE RESPUESTA (ESTRICTAS):
          1. **Menos es Más**: No escribas párrafos largos. Usa frases cortas y directas.
          2. **Diagnóstico Flash**: Identifica el problema y menciona la causa probable en una sola línea.
          3. **Regla de 3**: Ofrece máximo 3 pasos claros para solucionar el problema. Si es algo complejo, sugiere traerlo a la tienda.
          4. **Formato Visual**:
             - Usa Emojis para que sea amigable.
             - Usa **Negritas** solo para acciones clave.
             - Usa Listas con puntos para los pasos.
          5. **Advertencia de Seguridad**: Si el cliente debe abrir la PC, pon una advertencia corta en rojo/negrita.
          6. **Cierre**: Si el problema persiste o es grave, termina siempre invitándolos a contactar al soporte humano de BYTE con el botón de WhatsApp.

          Responde siempre en Español de forma profesional pero muy concisa.`,
        },
      });
    } catch (error) {
      console.error("Failed to start chat session:", error);
      throw error;
    }
  }

  public async sendMessageStream(message: string, onChunk: (text: string) => void): Promise<string> {
    if (!this.chatSession) {
      await this.startChat();
    }

    if (!this.chatSession) {
      throw new Error("Chat session could not be initialized.");
    }

    let fullResponse = "";
    
    try {
      const resultStream = await this.chatSession.sendMessageStream({ message });

      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        const text = c.text;
        if (text) {
          fullResponse += text;
          onChunk(text);
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }

    return fullResponse;
  }
}

export const geminiService = new GeminiService();