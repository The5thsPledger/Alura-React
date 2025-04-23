export default class ResponseModel {
    status
    mensagem
    detalhe
    timeStamp
    path
    method
    body
    
    constructor(
        status: number = 500, timeStamp: Date = new Date(), 
        path?: string, method?: string, mensagem?: string, detalhe?: string, body?: unknown
    ) {
        this.status = status;
        this.mensagem = mensagem;
        this.detalhe = detalhe;
        this.timeStamp = timeStamp;
        this.path = path;
        this.method = method;
        this.body = body;
    }
}