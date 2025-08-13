export function handleError(err: any): never {
    console.log("API failed", {message: err.message, stack: err.stack})
    throw new Error("Algo deu errado. Tente novamente mais tarde.")
}