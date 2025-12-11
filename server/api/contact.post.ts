import { defineEventHandler, readBody, setResponseStatus } from "h3"
import { z } from "zod"

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().min(1).max(150),
  message: z.string().min(1).max(5000),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = ContactSchema.safeParse(body)

  if (!parsed.success) {
    setResponseStatus(event, 400)
    return { ok: false, error: "Invalid input" }
  }

  // TODO: Send to your email provider, CRM, or queue
  // For now, we just log it.
  // console.log('[Contact]', parsed.data)

  return { ok: true }
})
