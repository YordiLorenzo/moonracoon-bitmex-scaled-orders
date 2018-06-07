export const LinearScaled =  {
    make(size, orders, type = 'bid') {
        let orderList = []

        for (let i = 0; i < orders; i++) {
            orderList.push({
                size: size / orders,
                type: type,
                scalingType: 'Linear'
            })
        }

        return orderList
    }
}