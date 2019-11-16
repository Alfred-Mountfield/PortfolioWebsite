function initQuoteCarousel() {

    var $quotesWrapper = $(".quotes");
    var $quotes = $quotesWrapper.find("blockquote");

    if (!$quotes.length) {
        return;
    }

    var selectNextQuote = function () {
        var $quote = $quotesWrapper.find("blockquote:first").detach().appendTo($quotesWrapper);
        setTimeout(selectNextQuote, $quote.data("timeout"));
    };

    setTimeout(selectNextQuote, $quotes.filter(":first").data("timeout"));

}

$(function () {
    initQuoteCarousel();
});
