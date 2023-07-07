const Stocks = require('stocks.js')

var stocks = new Stocks('VYGMWEZGQKVQLTVQ'); 


const init = async () => {
    var result = await stocks.timeSeries({
        symbol: 'TSLA',
        interval: '1min',
        amount: 10
    });
    
    
    console.log('technicalIndicator:',result)

}


init()
