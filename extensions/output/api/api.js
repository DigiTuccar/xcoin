var { getInitData, getRefreshData } = require('./status')
    , { getBacktestList, delBacktest, getSimList, delSim, backtestSim } = require('./backtest')
    , { addSymbol, removeAllSymbol, removeSymbol, sellAll, buy, sell, updateConfig, updateSymbolFuture, getBalance, getDemoBot } = require('./operation')
    , { checkVersion } = require('./panacea')
    , { getProducts, getKlines, getTickers, getPickerNormal } = require('./market')
module.exports = function api() {
    return {
        getInitData,
        getRefreshData,
        getBacktestList,
        delBacktest,
        getSimList,
        delSim,
        backtestSim,
        addSymbol,
        removeAllSymbol,
        removeSymbol,
        buy,
        sell,
        sellAll,
        updateConfig,
        updateSymbolFuture,
        checkVersion,
        getProducts,
        getKlines,
        getTickers,
        getPickerNormal,
        getBalance,
        getDemoBot
    }
}
