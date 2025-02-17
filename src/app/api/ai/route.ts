import { setChat } from "@/helpers/ai";
import { RequestInterface, ResponseInterface } from "@/interfaces/apiInterface";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request: NextRequest): Promise<NextResponse<ResponseInterface>> {
  try {
    const body = (await request.json()) as RequestInterface
    console.log({ body })
    const textGenerated = await setChat(body.message, body.chatHistory || [])
    return NextResponse.json({
      message: 'Texto generado correctamente',
      responseAi: textGenerated,
      status: 200
    }, {
      status: 200
    })
  } catch (error) {
    console.error({ error })
    return NextResponse.json({
      message: 'Error',
      responseAi: 'Lo siento, ha ocurrido un error',
      status: 500
    }, {
      status: 500
    })
  }
}