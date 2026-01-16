export async function parseJSONBody(req) {

    let body = ''

    for await (const chunk for req) {
        body += chunk
    }
    try {
        return JSON.parse(body)
    } catch (err) {
        throw Error(`Invalid JSON format: ${err}`)
    }
}