const initialState = {
    quotes: ['“Many of life’s failures are people who did not realize how close they were to success when they gave up.”– Thomas A. Edison', '“Never let the fear of striking out keep you from playing the game.”– Babe Ruth', '“Everything negative – pressure, challenges – is all an opportunity for me to rise.” — Kobe Bryant', '“Keep calm and carry on.”', '“The two most important days in your life are the day you are born and the day you find out why.” – Mark Twain', '“Every moment is a fresh beginning.” —T.S. Eliot', '“There are no mistakes, only opportunities.” —Tina Fey'],
    quoteIndex: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'VISIT':
            console.log('VISITED', action)
            return {
                ...state,
                quoteIndex: Math.floor(Math.random() * state.quotes.length)
            }
        default:
            return state
    }

}
export default reducer