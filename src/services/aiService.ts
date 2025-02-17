import { RequestInterface, ResponseInterface } from "@/interfaces/apiInterface";

export async function aiService(request: RequestInterface): Promise<ResponseInterface> {
  try {
    const path = '/api/ai'
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })
    if (response.status !== 200) throw new Error('Error en la petición')
    
    const data = (await response.json()) as ResponseInterface
    console.log({ data })
    if (data.status !== 200) throw new Error('Error en la petición back')

    return data
  } catch (error) {
    console.error({ error })
    return {
      message: 'Error',
      responseAi: 'Lo siento, ha ocurrido un error',
      status: 500
    }
  }
}