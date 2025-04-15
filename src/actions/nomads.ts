'use server'

import { withLoggingAndDB } from "@/decorators/decorators"

export const GetNomads = withLoggingAndDB(async () => {
    return { name: 'exampleName' }
})
