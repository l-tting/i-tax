let transactions = [
  {
    id: 1,
    customer: { name: "John", tier: "Gold" },
    items: [
      { name: "Phone", price: 500, quantity: 1 },
      { name: "Case", price: 50, quantity: 2 },
    ],
  },
  {
    id: 2,
    customer: { name: "Alice", tier: "Silver" },
    items: [
      { name: "Laptop", price: 1200, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 },
    ],
  },
  {
    id: 3,
    customer: { name: "Bob", tier: "Bronze" },
    items: [
      { name: "Keyboard", price: 100, quantity: 1 },
      { name: "USB Cable", price: 10, quantity: 3 },
    ],
  },
  {
    id: 4,
    customer: { name: "Eve", tier: "Gold" },
    items: [{ name: "Monitor", price: 300, quantity: 2 }],
  },
  {
    id: 5,
    customer: { name: "Charlie", tier: "Silver" },
    items: [
      { name: "Tablet", price: 400, quantity: 1 },
      { name: "Stylus", price: 80, quantity: 1 },
    ],
  },
  {
    id: 6,
    customer: { name: "David", tier: "None" },
    items: [{ name: "Headphones", price: 150, quantity: 2 }],
  },
];

console.log(transactions[5].items[0].price * transactions[5].items[0].quantity);

for (let i = 0; i < transactions.length; i++) {
    
  let items = transactions[i].items;

  for (let j = 0; j < items.length; j++) {
    let price = items[j].price;
    let quantity = items[j].quantity;
    let revenue = price * quantity;

    let tier = transactions[i].customer.tier;
    let discount;
    if (tier == "Gold") {
      discount = 0.1 * revenue;
    } else if (tier == "Silver") {
      discount = 0.05 * revenue;
    } else {
      discount = 0 * revenue;
    }

    let final_price = revenue - discount;

    console.log({
      totalRevenue: revenue,
      totalDiscountGiven: discount,
      transactions: [
        {
          id: transactions[i].id,
          finalAmount: final_price,
        },
      ],
    });
  }
}

// {totalRevenue: 600, totalDiscountGiven: 60, transactions: Array(1)}
