## SilverBars

The aim of this application is to create a simple display showing demand for silver bars. It consists of an Order board split in to BUY orders and SELL orders, a manual form for entering in the details about an order and an option to remove any order by entering its order number.

This application was initialized using the create-react-app found [here](https://github.com/facebook/create-react-app)

### How to run

1. Clone this repo onto you computer
2. Navigate into the folder on your command line
3. `npm start`
4. If you now head to `localhost:3000` on your favourite browser the app should be up and running

For tests, these can be run by entering the command `npm test`

If there are any issues testing 

### Example

There should be a wonderful but quite pixelly gif below of how the application in use.

In short, enter in order details and click submit to have their values added to the buy & sell boards. To remove an order enter the order number in the box at the bottom and hit submit.

![gif](https://github.com/NadiaAiraf/silver-bars/blob/master/example.gif)

## Approach to the Problem

My main aim was to set up a marketplace component that held most of the state. My initial plan was to then have several components (order form, sell board, buy board) that would connect to the marketplace component. The sell/buy boards did a lot of what I envisioned, now at the end of the project I'd like to have them do a little more of the displaying orders taskwork. With more time I'd probably refactored them into 1 component, move the buyOrdersDisplay and sellOrdersDisplay functions into it and only pass it the orderHistory object. This would keep most of my code for displaying orders in one nice place.

Initially the OrderForm was intended to be setup so that it would simply pass back relevant details in a parameter for the formSubmit function to the marketplace component, then be moved into the orderHistory. My attempts at this from a couple of different angles came up against problems with forms and classes in reactjs, a better understanding of javascript/React is going to be needed to figure out how it's done.

## Extra things to work on

- refactoring some of the beefier functions in the MarketPlace component. I did ok with some of these but still feel more could be done. Moving some of the display functions to a orderboard component would help.
- edge cases: currently I'm pretty sure you can enter -ve orders and the like. You can also enter orders without clicking Buy or Sell, doesn't appear or break anything but means it's possible to go from order 1 to order 3 which isn't perfect.
- manually entering the orders isn't ideal, I wouldn't want to do it. The formSubmit should be refactored to make it friendlier to the idea of importing data, if OrderForm had worked as intended and simple called the function and supplied parameters it would've been much easier to write the function in this way.