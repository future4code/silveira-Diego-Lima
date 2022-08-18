

export default class StatusMock2 {

    public generate(amount: number): string {
        if (amount > 5000) {
            return "pagamento recusado"
        } else {
            return "pagamento concluido"
        }
    }
}