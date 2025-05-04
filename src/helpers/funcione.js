
export function generarToken() {
    return "token_"+Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10)
}
